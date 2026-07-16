import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { signToken, getPendingEmail } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'
import { generateSlipPDF } from '@/lib/generateSlipPDF'
import { generateMembershipCardPDF } from '@/lib/generateMembershipCardPDF'
import { sendConfirmationEmail } from '@/lib/sendEmail'

const MAX_PHOTO_BASE64_LENGTH = 2_800_000 // ~2MB decoded

function extractPhotoBase64(dataUrl: unknown): string | null {
  if (typeof dataUrl !== 'string') return null
  // Client always re-encodes to JPEG via canvas before sending (see app/register/page.tsx)
  const match = /^data:image\/jpeg;base64,(.+)$/.exec(dataUrl)
  if (!match) return null
  const base64 = match[1]
  if (base64.length === 0 || base64.length > MAX_PHOTO_BASE64_LENGTH) return null
  return base64
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

    const email = await getPendingEmail()
    if (!email) {
      return NextResponse.json(
        { error: 'Please verify your email address first.' },
        { status: 401 }
      )
    }

    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const firstName  = sanitizeString(body.firstName, 100)
    const lastName   = sanitizeString(body.lastName, 100)
    const institution = sanitizeString(body.institution, 200)
    const country    = sanitizeString(body.country, 100)
    const role       = sanitizeString(body.role, 100)
    const gender     = sanitizeString(body.gender, 20)
    const attendance = sanitizeString(body.attendance, 10) || 'both'

    if (!firstName || !lastName) {
      return NextResponse.json({ error: 'First name and last name are required.' }, { status: 400 })
    }
    if (!institution || !country) {
      return NextResponse.json({ error: 'Institution and country are required.' }, { status: 400 })
    }
    if (!role || !ALLOWED_ROLES.includes(role)) {
      return NextResponse.json({ error: 'Please select a valid role.' }, { status: 400 })
    }
    if (!gender || !ALLOWED_GENDERS.includes(gender)) {
      return NextResponse.json({ error: 'Please select a valid gender.' }, { status: 400 })
    }
    if (!ALLOWED_ATTENDANCE.includes(attendance)) {
      return NextResponse.json({ error: 'Invalid attendance selection.' }, { status: 400 })
    }
    if (typeof body.joinSociety !== 'boolean') {
      return NextResponse.json({ error: 'Please let us know whether you would like to join ISCHT.' }, { status: 400 })
    }
    const photo = extractPhotoBase64(body.photo)
    if (!photo) {
      return NextResponse.json({ error: 'Please upload a passport-size photo.' }, { status: 400 })
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

    const user = await prisma.user.create({
      data: { email, firstName, lastName, photo,
        institution, country, role, gender, interests: interestsStr, attendance,
        ischtInterest: body.joinSociety },
    })

    // Generate unique registration number (and, if applicable, membership number) from user ID — no race condition
    const registrationNumber = `ICCH-AI-2026-${1000 + user.id}`
    const ischtMembershipNumber = body.joinSociety ? `ISCHT-2026-${1000 + user.id}` : null
    await prisma.user.update({ where: { id: user.id }, data: { registrationNumber, ischtMembershipNumber } })

    // Generate PDF(s) and send email (non-blocking — failure does not break registration)
    try {
      const pdfBytes = await generateSlipPDF({
        firstName: user.firstName, lastName: user.lastName, email: user.email,
        institution: user.institution, country: user.country, role: user.role,
        attendance: user.attendance, registrationNumber, createdAt: user.createdAt,
        photo: user.photo,
      })
      const membershipCardBytes = ischtMembershipNumber
        ? await generateMembershipCardPDF({
            firstName: user.firstName, lastName: user.lastName,
            membershipNumber: ischtMembershipNumber, createdAt: user.createdAt, photo: user.photo,
          })
        : null
      await sendConfirmationEmail(
        { firstName: user.firstName, email: user.email, registrationNumber, attendance: user.attendance, ischtMembershipNumber },
        pdfBytes, membershipCardBytes
      )
    } catch (e) {
      // PDF/email failure is non-fatal — registration still succeeds
      console.error('Registration confirmation (PDF/email) failed for user', user.id, e)
    }

    const token = await signToken({ userId: user.id, email: user.email })
    const response = NextResponse.json({
      message: 'Registration successful',
      registrationNumber,
      ischtMembershipNumber,
      user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    })
    response.cookies.set('icchai_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    response.cookies.set('icchai_pending', '', { maxAge: 0, path: '/' })
    return response
  } catch {
    return NextResponse.json({ error: 'An error occurred. Please try again.' }, { status: 500 })
  }
}
