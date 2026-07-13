import crypto from 'crypto'

export const OTP_TTL_MS = 10 * 60 * 1000
export const MAX_ATTEMPTS = 5

export function generateCode(): string {
  return String(crypto.randomInt(0, 1_000_000)).padStart(6, '0')
}

export function hashCode(code: string): string {
  return crypto.createHash('sha256').update(code).digest('hex')
}
