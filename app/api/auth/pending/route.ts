import { NextResponse } from 'next/server'
import { getPendingEmail } from '@/lib/auth'

export async function GET() {
  const email = await getPendingEmail()
  if (!email) return NextResponse.json({ error: 'No pending verification' }, { status: 401 })
  return NextResponse.json({ email })
}
