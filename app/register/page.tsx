'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import EmailVerifyStep from '@/components/EmailVerifyStep'

const roles = [
  'Researcher / Academic', 'Clinician / Therapist', 'Technology / Industry',
  'Yoga / Meditation Practitioner', 'Student', 'Journalist / Media', 'Other',
]
const genders = ['Male', 'Female', 'Other']
const pillars = [
  'Contemplative Neuroscience & Self-Regulation',
  'Yoga, Ayurveda & Indian Knowledge Systems',
  'AI & Digital Therapeutics',
  'Biofeedback, Wearables & Biosignal Science',
  'Clinical Translation & Digital Health Delivery',
  'Ethics, Responsibility & the Future',
]
const attendance = [
  { value: 'both', label: 'Both Days', sub: 'October 22–23, 2026' },
  { value: 'day1', label: 'Day 1 Only', sub: 'October 22: The Science of Self-Regulation' },
  { value: 'day2', label: 'Day 2 Only', sub: 'October 23: AI and Digital Therapeutics' },
]

const stepLabels = ['Verify Email', 'Personal Info', 'Background', 'Preferences']

export default function RegisterPage() {
  const router = useRouter()
  const [checkingPending, setCheckingPending] = useState(true)
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<{ name: string; regNumber: string; membershipNumber: string | null } | null>(null)
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '', photo: '',
    institution: '', country: '', role: '', gender: '', phone: '', hasWhatsapp: true, secondaryEmail: '',
    interests: [] as string[], attendance: 'both',
    joinSociety: '' as '' | 'yes' | 'no',
  })
  const [photoError, setPhotoError] = useState('')

  // If arriving already-verified (e.g. redirected from /login), skip the email step.
  useEffect(() => {
    fetch('/api/auth/pending')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data?.email) { set('email', data.email); setStep(2) }
      })
      .finally(() => setCheckingPending(false))
  }, [])

  const set = (k: string, v: string | string[]) => setForm(f => ({ ...f, [k]: v }))
  const toggle = (pillar: string) => set('interests', form.interests.includes(pillar)
    ? form.interests.filter(p => p !== pillar) : [...form.interests, pillar])

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPhotoError('')
    if (!file.type.startsWith('image/')) { setPhotoError('Please choose an image file.'); return }
    const reader = new FileReader()
    reader.onload = () => {
      const img = new window.Image()
      img.onload = () => {
        const maxDim = 480
        let w = img.width, h = img.height
        if (w > h && w > maxDim) { h = Math.round(h * (maxDim / w)); w = maxDim }
        else if (h > maxDim) { w = Math.round(w * (maxDim / h)); h = maxDim }
        const canvas = document.createElement('canvas')
        canvas.width = w; canvas.height = h
        const ctx = canvas.getContext('2d')
        ctx?.drawImage(img, 0, 0, w, h)
        set('photo', canvas.toDataURL('image/jpeg', 0.85))
      }
      img.src = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleEmailVerified = (status: 'login' | 'new', email: string) => {
    if (status === 'login') {
      // Already registered with this email — send them to sign in instead.
      router.push('/dashboard')
      return
    }
    set('email', email)
    setError('')
    setStep(2)
  }

  const next = (requiredFields: (keyof typeof form)[]) => {
    for (const f of requiredFields) {
      if (!form[f]) { setError('Please fill in all required fields'); return }
    }
    setError(''); setStep(s => s + 1)
  }

  const submit = async () => {
    if (!form.joinSociety) { setError('Please let us know whether you would like to join ISCHT.'); return }
    setLoading(true); setError('')
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, joinSociety: form.joinSociety === 'yes' }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) {
      setError(data.error ?? 'Registration failed')
      if (res.status === 401) setStep(1)
      return
    }
    setSuccess({ name: form.firstName, regNumber: data.registrationNumber, membershipNumber: data.ischtMembershipNumber ?? null })
  }

  if (checkingPending) return null

  if (success) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 80px' }}>
        <div style={{ width: '100%', maxWidth: 560, textAlign: 'center' }}>
          {/* Check circle */}
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(0,184,181,0.10)', border: '2px solid var(--teal-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px', fontSize: 30 }}>
            ✓
          </div>

          <p className="label" style={{ marginBottom: 12 }}>You are registered</p>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>
            Welcome, {success.name}!
          </h1>
          <p className="body" style={{ marginBottom: 40 }}>
            Your seat at ICCH-AI 2026 is confirmed. A confirmation email with your registration pass has been sent to your inbox.
          </p>

          {/* Registration number box */}
          <div style={{ padding: '28px 32px', background: 'var(--surface)', border: '1px solid var(--border)', borderTop: '3px solid var(--teal)', borderRadius: 8, marginBottom: 28, textAlign: 'left' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
              Your Registration Number
            </p>
            <p style={{ fontSize: 28, fontWeight: 900, color: 'var(--teal)', letterSpacing: '0.02em', marginBottom: 0, fontFamily: 'monospace' }}>
              {success.regNumber}
            </p>
          </div>

          {/* Download button */}
          <a
            href={`/api/slip/${success.regNumber}`}
            download
            className="btn btn-teal"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 12, padding: '14px 28px', fontSize: 15, fontWeight: 700 }}
          >
            Download Your Registration Pass (PDF)
          </a>

          {success.membershipNumber && (
            <>
              <div style={{ padding: '20px 24px', background: 'rgba(198,146,50,0.06)', border: '1px solid rgba(198,146,50,0.3)', borderRadius: 8, marginTop: 16, marginBottom: 12, textAlign: 'left' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B07C1E', marginBottom: 8 }}>
                  ISCHT Founding Membership
                </p>
                <p style={{ fontSize: 20, fontWeight: 800, color: '#B07C1E', letterSpacing: '0.02em', fontFamily: 'monospace', marginBottom: 8 }}>
                  {success.membershipNumber}
                </p>
                <p style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 0 }}>
                  This is a provisional Founding Member ID, not a legal membership credential. Full ISCHT registration opens once the society is formally constituted, after the conference.
                </p>
              </div>
              <a
                href={`/api/membership-card/${success.membershipNumber}`}
                download
                className="btn btn-outline"
                style={{ display: 'flex', justifyContent: 'center', marginBottom: 12, padding: '14px 28px', fontSize: 14 }}
              >
                Download Your ISCHT Membership Card (PDF)
              </a>
            </>
          )}

          <Link href="/dashboard" className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', marginBottom: 40, padding: '14px 28px' }}>
            Go to My Dashboard
          </Link>

          <div style={{ padding: '20px 24px', background: 'var(--surface-3)', borderRadius: 6, fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.7 }}>
            October 22–23, 2026 &nbsp;·&nbsp; Fully Online &nbsp;·&nbsp; 17:30–21:30 IST
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 68, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 80px' }}>
      <div style={{ width: '100%', maxWidth: 600 }}>
        <div style={{ marginBottom: 48 }}>
          <p className="label" style={{ marginBottom: 16 }}>Free Registration</p>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>
            Register for ICCH-AI 2026
          </h1>
          <p className="body">October 22–23, 2026 · Fully online worldwide · Free to attend</p>
        </div>

        {/* Step indicator */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 40, borderBottom: '1px solid var(--border)' }}>
          {stepLabels.map((l, i) => (
            <div key={l} style={{ flex: 1, paddingBottom: 14, borderBottom: step === i + 1 ? '2px solid var(--teal)' : '2px solid transparent', marginBottom: -1 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: step === i + 1 ? 'var(--teal)' : step > i + 1 ? 'var(--muted-light)' : 'var(--muted)' }}>
                {i + 1}. {l}
              </span>
            </div>
          ))}
        </div>

        {error && (
          <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 6, fontSize: 14, color: '#FCA5A5', marginBottom: 24 }}>
            {error}
          </div>
        )}

        {step === 1 && (
          <EmailVerifyStep onVerified={handleEmailVerified} />
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Field label="Email Address">
              <input className="field-input" value={form.email} disabled style={{ opacity: 0.7 }} />
            </Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="stack-mobile">
              <Field label="First Name *"><input className="field-input" placeholder="Jane" value={form.firstName} onChange={e => set('firstName', e.target.value)} /></Field>
              <Field label="Last Name *"><input className="field-input" placeholder="Smith" value={form.lastName} onChange={e => set('lastName', e.target.value)} /></Field>
            </div>
            <Field label="Passport-Size Photo *">
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 84, height: 84, borderRadius: 8, overflow: 'hidden', background: 'var(--surface-3)', border: '1px solid var(--border-mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {form.photo
                    ? <img src={form.photo} alt="Your photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span style={{ fontSize: 10, color: 'var(--muted)', textAlign: 'center', padding: 4 }}>No photo yet</span>}
                </div>
                <div>
                  <label className="btn btn-outline" style={{ cursor: 'pointer', fontSize: 13, padding: '9px 18px' }}>
                    {form.photo ? 'Change Photo' : 'Upload Photo'}
                    <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ display: 'none' }} />
                  </label>
                  <p className="caption" style={{ marginTop: 8, maxWidth: 260 }}>
                    Used on your ICCH-AI registration pass (and your ISCHT membership card, if you join). Resized automatically.
                  </p>
                </div>
              </div>
              {photoError && <p style={{ color: '#EF4444', fontSize: 12.5, marginTop: 8 }}>{photoError}</p>}
            </Field>
            <button className="btn btn-teal" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }} onClick={() => next(['firstName', 'lastName', 'photo'])}>
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Field label="Institution / Organisation *">
              <input className="field-input" placeholder="University, Hospital, Company..." value={form.institution} onChange={e => set('institution', e.target.value)} />
            </Field>
            <Field label="Country *">
              <input className="field-input" placeholder="e.g. India, United States, United Kingdom" value={form.country} onChange={e => set('country', e.target.value)} />
            </Field>
            <Field label="Your Role *">
              <select className="field-input" value={form.role} onChange={e => set('role', e.target.value)}>
                <option value="">Select your role...</option>
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>
            <Field label="Gender *">
              <div style={{ display: 'flex', gap: 10 }}>
                {genders.map(g => (
                  <label key={g} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 14px', background: form.gender === g ? 'rgba(164,28,48,0.06)' : 'var(--surface-3)', borderRadius: 6, border: `1px solid ${form.gender === g ? 'var(--teal-border)' : 'var(--border-mid)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
                    <input type="radio" name="gender" value={g} checked={form.gender === g} onChange={e => set('gender', e.target.value)} style={{ accentColor: 'var(--teal)' }} />
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{g}</span>
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Mobile Number (WhatsApp preferred) *">
              <input className="field-input" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => set('phone', e.target.value)} />
              <label style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 10, cursor: 'pointer' }}>
                <input type="checkbox" checked={form.hasWhatsapp} onChange={e => setForm(f => ({ ...f, hasWhatsapp: e.target.checked }))} style={{ accentColor: 'var(--teal)' }} />
                <span style={{ fontSize: 13, color: 'var(--muted-light)' }}>This number has WhatsApp</span>
              </label>
              <p className="caption" style={{ marginTop: 6 }}>If this number isn&apos;t on WhatsApp, uncheck the box — any mobile number works, we&apos;ll call or SMS instead.</p>
            </Field>
            <Field label="Secondary Email (optional)">
              <input className="field-input" type="email" placeholder="An alternate email, in case we can't reach your primary" value={form.secondaryEmail} onChange={e => set('secondaryEmail', e.target.value)} />
            </Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 8 }} className="stack-mobile">
              <button className="btn btn-outline" style={{ justifyContent: 'center' }} onClick={() => setStep(2)}>Back</button>
              <button className="btn btn-teal" style={{ justifyContent: 'center' }} onClick={() => next(['institution', 'country', 'role', 'gender', 'phone'])}>Continue</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <label className="field-label" style={{ marginBottom: 12 }}>Attendance</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {attendance.map(a => (
                  <label key={a.value} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '16px 18px', background: form.attendance === a.value ? 'rgba(164,28,48,0.06)' : 'var(--surface-3)', borderRadius: 6, border: `1px solid ${form.attendance === a.value ? 'var(--teal-border)' : 'var(--border-mid)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
                    <input type="radio" name="attendance" value={a.value} checked={form.attendance === a.value} onChange={e => set('attendance', e.target.value)} style={{ accentColor: 'var(--teal)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{a.label}</div>
                      <div className="caption" style={{ marginTop: 2 }}>{a.sub}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="field-label" style={{ marginBottom: 12 }}>Areas of Interest</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {pillars.map((pillar, i) => (
                  <label key={pillar} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', background: form.interests.includes(pillar) ? 'rgba(164,28,48,0.04)' : 'transparent', borderRadius: 6, border: `1px solid ${form.interests.includes(pillar) ? 'var(--teal-border)' : 'var(--border)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
                    <input type="checkbox" checked={form.interests.includes(pillar)} onChange={() => toggle(pillar)} style={{ accentColor: 'var(--teal)', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'var(--muted-light)' }}>
                      <span style={{ color: 'var(--teal)', fontWeight: 700, marginRight: 8 }}>P{i + 1}</span>
                      {pillar}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ padding: '22px 24px', background: 'var(--surface-2)', borderRadius: 8, border: '1px solid var(--border)' }}>
              <p className="label" style={{ marginBottom: 10 }}>One More Thing</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Become a Founding Member of ISCHT</h3>
              <p style={{ fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.7, marginBottom: 6 }}>
                The International Society for Contemplative HealthTech (ISCHT) is opening its doors to early members here, ahead of its launch at ICCH-AI 2026. Say yes today and it&apos;s free — with early access to society resources and $100 worth of launch-year benefits. Full enrolment follows after the conference.
              </p>
              <a href="/society" target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, color: 'var(--teal)', fontWeight: 600, textDecoration: 'none' }}>
                Learn more about ISCHT →
              </a>
              <p className="caption" style={{ marginTop: 10, fontStyle: 'italic' }}>
                Note: the ID issued now is a provisional Founding Member listing, not a legal membership credential. Full ISCHT registration opens once the society is formally constituted, after the conference.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                {[
                  { value: 'yes', label: 'Yes — count me in as a Founding Member', sub: 'Free during this registration' },
                  { value: 'no', label: 'Not right now', sub: '' },
                ].map(opt => (
                  <label key={opt.value} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 14px', background: form.joinSociety === opt.value ? 'rgba(164,28,48,0.06)' : 'var(--surface)', borderRadius: 6, border: `1px solid ${form.joinSociety === opt.value ? 'var(--teal-border)' : 'var(--border-mid)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
                    <input type="radio" name="joinSociety" value={opt.value} checked={form.joinSociety === opt.value} onChange={e => set('joinSociety', e.target.value)} style={{ accentColor: 'var(--teal)' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{opt.label}</div>
                      {opt.sub && <div className="caption" style={{ marginTop: 1 }}>{opt.sub}</div>}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 12 }}>
              <button className="btn btn-outline" style={{ justifyContent: 'center' }} onClick={() => setStep(3)}>Back</button>
              <button className="btn btn-teal" style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }} onClick={submit} disabled={loading}>
                {loading ? 'Registering...' : 'Complete Registration'}
              </button>
            </div>
          </div>
        )}

        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--muted)' }}>
          Already registered? <Link href="/login" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      {children}
    </div>
  )
}
