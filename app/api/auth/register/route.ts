import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { signToken } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'
import { generateSlipPDF } from '@/lib/generateSlipPDF'
import { sendConfirmationEmail } from '@/lib/sendEmail'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254
}

function validatePassword(password: string): string | null {
  if (password.length < 8) return 'Password must be at least 8 characters.'
  if (password.length > 128) return 'Password is too long.'
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one uppercase letter.'
  if (!/[a-z]/.test(password)) return 'Password must contain at least one lowercase letter.'
  if (!/[0-9]/.test(password)) return 'Password must contain at least one number.'
  return null
}

function sanitizeString(val: unknown, maxLen: number): string {
  if (typeof val !== 'string') return ''
  return val.trim().slice(0, maxLen)
}

const ALLOWED_ROLES = [
  'Researcher / Academic', 'Clinician / Therapist', 'Technology / Industry',
  'Yoga / Meditation Practitioner', 'Student', 'Journalist / Media', 'Other',
]
const ALLOWED_ATTENDANCE = ['both', 'day1', 'day2']
const ALLOWED_GENDERS = ['Male', 'Female', 'Other']

export async function POST(req: NextRequest) {
  try {
    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim()
    const { allowed } = rateLimit(`register:${ip}`, 5, 60 * 60 * 1000)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again in an hour.' },
        { status: 429 }
      )
    }

    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const email      = sanitizeString(body.email, 254).toLowerCase()
    const password   = typeof body.password === 'string' ? body.password : ''
    const firstName  = sanitizeString(body.firstName, 100)
    const lastName   = sanitizeString(body.lastName, 100)
    const institution = sanitizeString(body.institution, 200)
    const country    = sanitizeString(body.country, 100)
    const role       = sanitizeString(body.role, 100)
    const gender     = sanitizeString(body.gender, 20)
    const attendance = sanitizeString(body.attendance, 10) || 'both'

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ error: 'First name, last name, email and password are required.' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    const passwordError = validatePassword(password)
    if (passwordError) return NextResponse.json({ error: passwordError }, { status: 400 })

    if (role && !ALLOWED_ROLES.includes(role)) {
      return NextResponse.json({ error: 'Invalid role selection.' }, { status: 400 })
    }
    if (gender && !ALLOWED_GENDERS.includes(gender)) {
      return NextResponse.json({ error: 'Invalid gender selection.' }, { status: 400 })
    }
    if (!ALLOWED_ATTENDANCE.includes(attendance)) {
      return NextResponse.json({ error: 'Invalid attendance selection.' }, { status: 400 })
    }

    const rawInterests = body.interests
    let interestsStr: string | null = null
    if (Array.isArray(rawInterests)) {
      const clean = rawInterests
        .filter((i): i is string => typeof i === 'string')
        .map(i => i.trim().slice(0, 100))
        .slice(0, 10)
      interestsStr = clean.length > 0 ? clean.join(',') : null
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json(
        { error: 'Registration failed. Please check your details and try again.' },
        { status: 409 }
      )
    }

    const hashed = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: { email, password: hashed, firstName, lastName,
        institution: institution || null, country: country || null,
        role: role || null, gender: gender || null, interests: interestsStr, attendance },
    })

    // Generate unique registration number from user ID (no race condition)
    const registrationNumber = `ICCHAI-2026-${1000 + user.id}`
    await prisma.user.update({ where: { id: user.id }, data: { registrationNumber } })

    // Generate PDF and send email (non-blocking — failure does not break registration)
    try {
      const pdfBytes = await generateSlipPDF({
        firstName: user.firstName, lastName: user.lastName, email: user.email,
        institution: user.institution, country: user.country, role: user.role,
        attendance: user.attendance, registrationNumber, createdAt: user.createdAt,
      })
      await sendConfirmationEmail(
        { firstName: user.firstName, email: user.email, registrationNumber, attendance: user.attendance },
        pdfBytes
      )
    } catch {
      // PDF/email failure is non-fatal
    }

    const token = await signToken({ userId: user.id, email: user.email })
    const response = NextResponse.json({
      message: 'Registration successful',
      registrationNumber,
      user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    })
    response.cookies.set('icchai_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    return response
  } catch {
    return NextResponse.json({ error: 'An error occurred. Please try again.' }, { status: 500 })
  }
}
