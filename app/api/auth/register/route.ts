import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'
import { signToken } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, firstName, lastName, institution, country, role, interests, attendance } = body

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }

    const hashed = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        firstName,
        lastName,
        institution: institution ?? null,
        country: country ?? null,
        role: role ?? null,
        interests: Array.isArray(interests) ? interests.join(',') : (interests ?? null),
        attendance: attendance ?? 'both',
      },
    })

    const token = await signToken({ userId: user.id, email: user.email })
    const response = NextResponse.json({
      message: 'Registration successful',
      user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName },
    })
    response.cookies.set('mbdhc_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
