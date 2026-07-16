'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import EmailVerifyStep from '@/components/EmailVerifyStep'

export default function LoginPage() {
  const router = useRouter()

  const handleVerified = (status: 'login' | 'new') => {
    if (status === 'login') {
      router.push('/dashboard')
    } else {
      // No account exists for this email yet — it's now verified, so send
      // them straight into the registration form's profile step.
      router.push('/register')
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: 'var(--background)' }}>
      <div style={{ position: 'fixed', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 350, background: 'radial-gradient(ellipse, rgba(164,28,48,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--foreground)' }}>
              ICCH-AI <span style={{ color: 'var(--teal)' }}>2026</span>
            </span>
          </Link>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', marginTop: 24, marginBottom: 8 }}>
            Sign in
          </h1>
          <p className="body" style={{ fontSize: 15 }}>Access your attendee account — no password needed</p>
        </div>

        <EmailVerifyStep onVerified={handleVerified} title="Sign in with email" subtitle="Enter your email and we'll send you a one-time code." />

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
          <p style={{ fontSize: 14, color: 'var(--muted)' }}>
            No account?{' '}
            <Link href="/register" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 600 }}>Register free</Link>
          </p>
          <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>Return to home</Link>
        </div>
      </div>
    </div>
  )
}
