import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { signToken } from '@/lib/auth'
import { rateLimit } from '@/lib/rateLimit'

// Track failed login attempts per email — lockout after 5 failures in 15 min
const failedAttempts = new Map<string, { count: number; lockedUntil: number }>()

function isLocked(email: string): boolean {
  const rec = failedAttempts.get(email)
  if (!rec) return false
  if (Date.now() < rec.lockedUntil) return true
  failedAttempts.delete(email)
  return false
}

function recordFailure(email: string) {
  const now = Date.now()
  const rec = failedAttempts.get(email)
  if (!rec || now > rec.lockedUntil) {
    failedAttempts.set(email, { count: 1, lockedUntil: 0 })
    return
  }
  rec.count++
  if (rec.count >= 5) {
    rec.lockedUntil = now + 15 * 60 * 1000 // lock for 15 minutes
  }
}

function clearFailures(email: string) {
  failedAttempts.delete(email)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254
}

export async function POST(req: NextRequest) {
  try {
    // Per-IP rate limit: 10 attempts per 15 min (supplement to middleware)
    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim()
    const { allowed } = rateLimit(`login:${ip}`, 10, 15 * 60 * 1000)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many login attempts. Try again in 15 minutes.' },
        { status: 429 }
      )
    }

    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const password = typeof body.password === 'string' ? body.password : ''

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }
    if (password.length > 128) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // Check account lockout
    if (isLocked(email)) {
      return NextResponse.json(
        { error: 'Account temporarily locked due to too many failed attempts. Try again in 15 minutes.' },
        { status: 429 }
      )
    }

    const user = await prisma.user.findUnique({ where: { email } })

    // Always run bcrypt to prevent timing attacks (even if user not found)
    const hashToCompare = user?.password ?? '$2b$12$invalidhashpadding000000000000000000000000000000000000000'
    const valid = await bcrypt.compare(password, hashToCompare)

    if (!user || !valid) {
      recordFailure(email)
      // Generic error — do not reveal whether email exists
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    clearFailures(email)

    const token = await signToken({ userId: user.id, email: user.email })
    const response = NextResponse.json({
      message: 'Login successful',
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
