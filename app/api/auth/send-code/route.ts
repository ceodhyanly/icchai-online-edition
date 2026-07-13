import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { rateLimit } from '@/lib/rateLimit'
import { generateCode, hashCode, OTP_TTL_MS } from '@/lib/otp'
import { sendVerificationCodeEmail } from '@/lib/sendEmail'

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 254
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim()
    const perEmail = rateLimit(`otp-send-email:${email}`, 3, 10 * 60 * 1000)
    const perIp = rateLimit(`otp-send-ip:${ip}`, 8, 60 * 60 * 1000)
    if (!perEmail.allowed || !perIp.allowed) {
      return NextResponse.json(
        { error: 'Too many code requests. Please wait a few minutes and try again.' },
        { status: 429 }
      )
    }

    const code = generateCode()
    const codeHash = hashCode(code)
    const expiresAt = new Date(Date.now() + OTP_TTL_MS)

    await prisma.emailOtp.deleteMany({ where: { email } })
    await prisma.emailOtp.create({ data: { email, codeHash, expiresAt } })

    await sendVerificationCodeEmail(email, code)

    return NextResponse.json({ message: 'Verification code sent.' })
  } catch {
    return NextResponse.json(
      { error: 'Email verification is temporarily unavailable. Please try again shortly.' },
      { status: 503 }
    )
  }
}
