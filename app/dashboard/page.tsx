import { redirect } from 'next/navigation'
import Link from 'next/link'
import { getSession } from '@/lib/auth'
import { prisma } from '@/lib/db'
import LogoutButton from '@/components/LogoutButton'

export default async function DashboardPage() {
  const session = await getSession()
  if (!session || typeof session.userId !== 'number') redirect('/login')

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { id: true, email: true, firstName: true, lastName: true, institution: true, country: true, role: true, interests: true, attendance: true, createdAt: true },
  })
  if (!user) redirect('/login')

  const interests = user.interests ? user.interests.split(',').filter(Boolean) : []
  const attendanceLabel = user.attendance === 'both' ? 'Both Days (Oct 22–23)' : user.attendance === 'day1' ? 'Day 1 — October 22' : 'Day 2 — October 23'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 68 }}>
      {/* Top bar */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '28px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p className="caption" style={{ marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Attendee Portal</p>
            <h1 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.025em' }}>
              {user.firstName} {user.lastName}
            </h1>
          </div>
          <LogoutButton />
        </div>
      </div>

      <div className="container" style={{ padding: '48px 24px' }}>
        {/* Registration confirmation */}
        <div style={{ padding: '28px 36px', background: 'rgba(0,184,181,0.04)', border: '1px solid var(--teal-border)', borderRadius: 8, marginBottom: 40, display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: 3, background: 'var(--teal)', borderRadius: 2, alignSelf: 'stretch', flexShrink: 0 }} />
          <div>
            <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>Registration confirmed — MBDHC 2026</p>
            <p className="body" style={{ fontSize: 14, marginBottom: 16 }}>
              October 22–23, 2026 &nbsp;·&nbsp; Online &nbsp;·&nbsp; 18:30–22:30 IST / 9:00 am–1:00 pm EST
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="chip chip-teal" style={{ fontSize: 11 }}>Registered</span>
              <span className="chip" style={{ fontSize: 11 }}>{attendanceLabel}</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 32 }}>
          {/* Profile */}
          <div className="card" style={{ padding: '36px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Your Profile</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                ['Name', `${user.firstName} ${user.lastName}`],
                ['Email', user.email],
                ['Institution', user.institution ?? '—'],
                ['Country', user.country ?? '—'],
                ['Role', user.role ?? '—'],
              ].map(([label, value]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '14px 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
                  <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500, flexShrink: 0 }}>{label}</span>
                  <span style={{ fontSize: 14, color: 'var(--foreground)', textAlign: 'right', wordBreak: 'break-word' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Attendance */}
            <div className="card" style={{ padding: '32px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Attendance</p>
              <div style={{ padding: '16px 20px', background: 'var(--surface-3)', borderRadius: 6, borderLeft: '2px solid var(--teal)' }}>
                <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{attendanceLabel}</p>
                <p className="caption">18:30–22:30 IST per day</p>
              </div>
            </div>

            {/* Quick links */}
            <div className="card" style={{ padding: '32px' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Resources</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href="/schedule" className="btn btn-outline" style={{ justifyContent: 'center', fontSize: 13 }}>View Full Schedule</Link>
                <Link href="/#institutions" className="btn btn-outline" style={{ justifyContent: 'center', fontSize: 13 }}>Partner Institutions</Link>
                <Link href="/#pillars" className="btn btn-outline" style={{ justifyContent: 'center', fontSize: 13 }}>Conference Pillars</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        {interests.length > 0 && (
          <div className="card" style={{ padding: '36px', marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Areas of Interest</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {interests.map(interest => (
                <span key={interest} className="chip chip-teal" style={{ fontSize: 12 }}>{interest}</span>
              ))}
            </div>
          </div>
        )}

        {/* Conference logistics */}
        <div style={{ background: 'var(--surface)', borderRadius: 8, border: '1px solid var(--border)', padding: '36px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>Conference Details</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {[
              { label: 'Format', value: 'Online (link TBA)' },
              { label: 'Dates', value: 'October 22–23, 2026' },
              { label: 'Time (IST)', value: '18:30–22:30' },
              { label: 'Time (EST)', value: '9:00 am–1:00 pm' },
              { label: 'Time (CET)', value: '3:00–7:00 pm' },
              { label: 'Organiser', value: 'YogaXBiofeedback × UCF India Center' },
            ].map(item => (
              <div key={item.label}>
                <p className="caption" style={{ marginBottom: 4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.label}</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
