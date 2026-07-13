import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { signToken, signPendingToken } from '@/lib/auth'
import { hashCode, MAX_ATTEMPTS } from '@/lib/otp'

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
    const code = typeof body.code === 'string' ? body.code.trim() : ''

    if (!email || !isValidEmail(email) || !/^\d{6}$/.test(code)) {
      return NextResponse.json({ error: 'Please enter the 6-digit code.' }, { status: 400 })
    }

    const otp = await prisma.emailOtp.findFirst({
      where: { email },
      orderBy: { createdAt: 'desc' },
    })

    if (!otp || otp.expiresAt < new Date()) {
      if (otp) await prisma.emailOtp.delete({ where: { id: otp.id } })
      return NextResponse.json({ error: 'Code expired or not found. Please request a new one.' }, { status: 400 })
    }

    if (otp.attempts >= MAX_ATTEMPTS) {
      await prisma.emailOtp.delete({ where: { id: otp.id } })
      return NextResponse.json({ error: 'Too many incorrect attempts. Please request a new code.' }, { status: 429 })
    }

    if (hashCode(code) !== otp.codeHash) {
      await prisma.emailOtp.update({ where: { id: otp.id }, data: { attempts: { increment: 1 } } })
      const remaining = MAX_ATTEMPTS - (otp.attempts + 1)
      return NextResponse.json(
        { error: remaining > 0 ? `Incorrect code. ${remaining} attempt(s) remaining.` : 'Too many incorrect attempts. Please request a new code.' },
        { status: 400 }
      )
    }

    await prisma.emailOtp.delete({ where: { id: otp.id } })

    const user = await prisma.user.findUnique({ where: { email } })

    if (user) {
      const token = await signToken({ userId: user.id, email: user.email })
      const response = NextResponse.json({ status: 'login' as const })
      response.cookies.set('icchai_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
      return response
    }

    const pendingToken = await signPendingToken(email)
    const response = NextResponse.json({ status: 'new' as const })
    response.cookies.set('icchai_pending', pendingToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 60,
      path: '/',
    })
    return response
  } catch {
    return NextResponse.json({ error: 'An error occurred. Please try again.' }, { status: 500 })
  }
}
