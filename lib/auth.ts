import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'icchai-2026-fallback-secret'
)

export async function signToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}

export async function getSession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('icchai_token')?.value
  if (!token) return null
  return verifyToken(token)
}

export async function signPendingToken(email: string) {
  return new SignJWT({ email, pending: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30m')
    .sign(secret)
}

export async function getPendingEmail(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('icchai_pending')?.value
  if (!token) return null
  const payload = await verifyToken(token)
  if (!payload || payload.pending !== true || typeof payload.email !== 'string') return null
  return payload.email
}
