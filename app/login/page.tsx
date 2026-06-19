'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { setError(data.error ?? 'Invalid email or password'); return }
    router.push('/dashboard')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: 'var(--background)' }}>
      {/* Subtle glow */}
      <div style={{ position: 'fixed', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 350, background: 'radial-gradient(ellipse, rgba(164,28,48,0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--foreground)' }}>
              MBDHC <span style={{ color: 'var(--teal)' }}>2026</span>
            </span>
          </Link>
          <h1 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, letterSpacing: '-0.025em', marginTop: 24, marginBottom: 8 }}>
            Sign in
          </h1>
          <p className="body" style={{ fontSize: 15 }}>Access your attendee account</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {error && (
            <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 6, fontSize: 14, color: '#FCA5A5' }}>
              {error}
            </div>
          )}

          <div>
            <label className="field-label">Email</label>
            <input className="field-input" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} required autoComplete="email" />
          </div>
          <div>
            <label className="field-label">Password</label>
            <input className="field-input" type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} required autoComplete="current-password" />
          </div>

          <button type="submit" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center', marginTop: 4, opacity: loading ? 0.7 : 1 }} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

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
