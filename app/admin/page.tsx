import { prisma } from '@/lib/db'
import AdminTable from './AdminTable'

const ADMIN_KEY = process.env.ADMIN_KEY ?? '19977991'

function AccessDenied() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', flexDirection: 'column', gap: 16, padding: 24 }}>
      <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--teal)', letterSpacing: '-0.02em' }}>ICCHAI Admin</div>
      <p style={{ color: 'var(--muted)', fontSize: 14 }}>Access this page at <code style={{ background: 'var(--surface-3)', padding: '2px 8px', borderRadius: 3, fontFamily: 'monospace' }}>/admin?key=YOUR_ADMIN_KEY</code></p>
    </div>
  )
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ key?: string }> }) {
  const { key } = await searchParams
  if (key !== ADMIN_KEY) return <AccessDenied />

  const users = await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })

  const total = users.length
  const byAttendance: Record<string, number> = {}
  const byRole: Record<string, number> = {}
  const byCountry: Record<string, number> = {}
  const byGender: Record<string, number> = {}

  for (const u of users) {
    byAttendance[u.attendance] = (byAttendance[u.attendance] ?? 0) + 1
    const role = u.role ?? 'Not specified'
    byRole[role] = (byRole[role] ?? 0) + 1
    const country = u.country ?? 'Not specified'
    byCountry[country] = (byCountry[country] ?? 0) + 1
    const gender = u.gender ?? 'Not specified'
    byGender[gender] = (byGender[gender] ?? 0) + 1
  }

  const ischtInterested = users.filter(u => u.ischtInterest).length

  const statCards = [
    { label: 'Total Registrants', value: total, accent: 'var(--teal)' },
    { label: 'Both Days', value: byAttendance['both'] ?? 0, accent: '#C69232' },
    { label: 'Day 1 Only', value: byAttendance['day1'] ?? 0, accent: 'var(--muted)' },
    { label: 'Day 2 Only', value: byAttendance['day2'] ?? 0, accent: 'var(--muted)' },
    { label: 'ISCHT Founding Members', value: ischtInterested, accent: 'var(--gold)' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 80, paddingBottom: 80 }}>
      <div className="container">

        <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
          <p className="label" style={{ marginBottom: 12 }}>ICCHAI 2026</p>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--foreground)', marginBottom: 8 }}>
            Admin Dashboard
          </h1>
          <p style={{ fontSize: 14, color: 'var(--muted)' }}>Registration data · Live from Neon database</p>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 48 }}>
          {statCards.map(s => (
            <div key={s.label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 24px', borderTop: `3px solid ${s.accent}` }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: s.accent, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 8 }}>{s.value}</div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid-3-col" style={{ marginBottom: 48 }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 28px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>By Role</p>
            {Object.entries(byRole).sort((a, b) => b[1] - a[1]).map(([role, count]) => (
              <div key={role} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, color: 'var(--foreground)' }}>{role}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', minWidth: 32, textAlign: 'right' }}>{count}</span>
              </div>
            ))}
            {Object.keys(byRole).length === 0 && <p style={{ fontSize: 13, color: 'var(--muted)' }}>No registrations yet</p>}
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 28px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>By Country</p>
            {Object.entries(byCountry).sort((a, b) => b[1] - a[1]).map(([country, count]) => (
              <div key={country} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, color: 'var(--foreground)' }}>{country}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', minWidth: 32, textAlign: 'right' }}>{count}</span>
              </div>
            ))}
            {Object.keys(byCountry).length === 0 && <p style={{ fontSize: 13, color: 'var(--muted)' }}>No registrations yet</p>}
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 28px' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>By Gender</p>
            {Object.entries(byGender).sort((a, b) => b[1] - a[1]).map(([gender, count]) => (
              <div key={gender} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, color: 'var(--foreground)' }}>{gender}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', minWidth: 32, textAlign: 'right' }}>{count}</span>
              </div>
            ))}
            {Object.keys(byGender).length === 0 && <p style={{ fontSize: 13, color: 'var(--muted)' }}>No registrations yet</p>}
          </div>
        </div>

        <AdminTable users={users} />
      </div>
    </div>
  )
}
