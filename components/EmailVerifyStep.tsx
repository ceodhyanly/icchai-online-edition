'use client'

import { useEffect, useRef, useState } from 'react'

type Status = 'login' | 'new'

export default function EmailVerifyStep({
  onVerified,
  title = 'Verify your email',
  subtitle = "We'll send a 6-digit code to confirm it's really you.",
}: {
  onVerified: (status: Status, email: string) => void
  title?: string
  subtitle?: string
}) {
  const [stage, setStage] = useState<'email' | 'code'>('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cooldown, setCooldown] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current) }, [])

  const startCooldown = () => {
    setCooldown(30)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCooldown(c => {
        if (c <= 1 && timerRef.current) { clearInterval(timerRef.current); return 0 }
        return c - 1
      })
    }, 1000)
  }

  const sendCode = async () => {
    if (!email) { setError('Please enter your email address'); return }
    setLoading(true); setError('')
    const res = await fetch('/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { setError(data.error ?? 'Failed to send code'); return }
    setStage('code')
    startCooldown()
  }

  const verifyCode = async () => {
    if (!/^\d{6}$/.test(code)) { setError('Enter the 6-digit code'); return }
    setLoading(true); setError('')
    const res = await fetch('/api/auth/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) { setError(data.error ?? 'Verification failed'); return }
    onVerified(data.status, email)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <p style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{title}</p>
        <p className="body" style={{ fontSize: 14 }}>
          {stage === 'email' ? subtitle : <>Enter the code we sent to <strong>{email}</strong>.</>}
        </p>
      </div>

      {error && (
        <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 6, fontSize: 14, color: '#FCA5A5' }}>
          {error}
        </div>
      )}

      {stage === 'email' ? (
        <>
          <div>
            <label className="field-label">Email Address</label>
            <input
              className="field-input" type="email" placeholder="jane@example.com"
              value={email} onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendCode()}
              autoFocus
            />
          </div>
          <button className="btn btn-teal" style={{ width: '100%', justifyContent: 'center' }} onClick={sendCode} disabled={loading}>
            {loading ? 'Sending...' : 'Send Verification Code'}
          </button>
        </>
      ) : (
        <>
          <div>
            <label className="field-label">6-Digit Code</label>
            <input
              className="field-input" inputMode="numeric" placeholder="123456" maxLength={6}
              value={code} onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              onKeyDown={e => e.key === 'Enter' && verifyCode()}
              style={{ letterSpacing: '0.3em', fontSize: 20, textAlign: 'center', fontWeight: 700 }}
              autoFocus
            />
          </div>
          <button className="btn btn-teal" style={{ width: '100%', justifyContent: 'center' }} onClick={verifyCode} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
            <button
              onClick={() => { setStage('email'); setCode(''); setError('') }}
              style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 0, fontSize: 13 }}
            >
              Use a different email
            </button>
            <button
              onClick={sendCode}
              disabled={cooldown > 0 || loading}
              style={{ background: 'none', border: 'none', color: cooldown > 0 ? 'var(--muted)' : 'var(--teal)', cursor: cooldown > 0 ? 'not-allowed' : 'pointer', padding: 0, fontSize: 13, fontWeight: 600 }}
            >
              {cooldown > 0 ? `Resend code (${cooldown}s)` : 'Resend code'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
