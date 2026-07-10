'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  institution: string | null
  country: string | null
  role: string | null
  gender: string | null
  attendance: string
  registrationNumber: string | null
  createdAt: Date
}

const ADMIN_KEY = '19977991'

const attLabel: Record<string, string> = {
  both: 'Both Days',
  day1: 'Day 1 Only',
  day2: 'Day 2 Only',
}

async function downloadPDF(userId: number, name: string) {
  const res = await fetch(`/api/slip/by-user/${userId}?adminKey=${ADMIN_KEY}`)
  if (!res.ok) { alert('Failed to generate PDF. Try again.'); return }
  const blob = await res.blob()
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `ICCHAI-2026-Pass-${name.replace(/\s+/g, '-')}.pdf`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(a.href)
}

async function deleteUsers(userIds: number[]): Promise<number | null> {
  const res = await fetch('/api/admin/users', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ adminKey: ADMIN_KEY, userIds }),
  })
  if (!res.ok) return null
  const data = await res.json()
  return data.deleted ?? 0
}

async function downloadBulkZip(userIds: number[] | 'all', filename: string) {
  const body = userIds === 'all'
    ? { adminKey: ADMIN_KEY, all: true }
    : { adminKey: ADMIN_KEY, userIds }

  const res = await fetch('/api/slip/bulk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) { alert('Bulk download failed. Try again.'); return }
  const blob = await res.blob()
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(a.href)
}

export default function AdminTable({ users }: { users: User[] }) {
  const router = useRouter()
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [loading, setLoading] = useState<number | null>(null)
  const [bulkLoading, setBulkLoading] = useState(false)
  const [deleting, setDeleting] = useState<number | null>(null)
  const [bulkDeleting, setBulkDeleting] = useState(false)

  const allChecked = users.length > 0 && selected.size === users.length
  const toggleAll = () => setSelected(allChecked ? new Set() : new Set(users.map(u => u.id)))
  const toggle = (id: number) => setSelected(s => {
    const next = new Set(s)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })

  const handleSingleDownload = async (u: User) => {
    setLoading(u.id)
    await downloadPDF(u.id, `${u.firstName}-${u.lastName}`)
    setLoading(null)
  }

  const handleBulk = async (mode: 'selected' | 'all') => {
    setBulkLoading(true)
    if (mode === 'all') {
      await downloadBulkZip('all', 'ICCHAI-2026-All-Registration-Passes.zip')
    } else {
      if (selected.size === 0) { setBulkLoading(false); return }
      await downloadBulkZip(Array.from(selected), `ICCHAI-2026-Selected-${selected.size}-Passes.zip`)
    }
    setBulkLoading(false)
  }

  const handleDeleteOne = async (u: User) => {
    if (!confirm(`Delete registration for ${u.firstName} ${u.lastName} (${u.email})? This cannot be undone.`)) return
    setDeleting(u.id)
    const deleted = await deleteUsers([u.id])
    setDeleting(null)
    if (deleted === null) { alert('Failed to delete. Try again.'); return }
    setSelected(s => { const next = new Set(s); next.delete(u.id); return next })
    router.refresh()
  }

  const handleDeleteSelected = async () => {
    if (selected.size === 0) return
    if (!confirm(`Delete ${selected.size} selected registration(s)? This cannot be undone.`)) return
    setBulkDeleting(true)
    const deleted = await deleteUsers(Array.from(selected))
    setBulkDeleting(false)
    if (deleted === null) { alert('Failed to delete. Try again.'); return }
    setSelected(new Set())
    router.refresh()
  }

  return (
    <div>
      {/* Bulk action bar */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', marginBottom: 20, padding: '14px 18px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600, marginRight: 4 }}>
          {selected.size > 0 ? `${selected.size} selected` : 'Select rows to bulk download'}
        </span>

        <button
          onClick={() => handleBulk('selected')}
          disabled={bulkLoading || selected.size === 0}
          style={{
            padding: '8px 16px',
            background: selected.size > 0 ? 'var(--teal)' : 'var(--surface-3)',
            color: selected.size > 0 ? '#fff' : 'var(--muted)',
            border: 'none', borderRadius: 5, fontSize: 12, fontWeight: 700,
            cursor: selected.size > 0 && !bulkLoading ? 'pointer' : 'not-allowed',
          }}
        >
          Download Selected ({selected.size}) as ZIP
        </button>

        <button
          onClick={() => handleBulk('all')}
          disabled={bulkLoading || users.length === 0}
          style={{
            padding: '8px 16px',
            background: '#1a1a2e', color: '#fff',
            border: 'none', borderRadius: 5, fontSize: 12, fontWeight: 700,
            cursor: !bulkLoading && users.length > 0 ? 'pointer' : 'not-allowed',
            opacity: bulkLoading ? 0.6 : 1,
          }}
        >
          {bulkLoading ? 'Preparing ZIP...' : `Download All (${users.length}) as ZIP`}
        </button>

        {selected.size > 0 && (
          <button
            onClick={() => setSelected(new Set())}
            style={{ padding: '8px 12px', background: 'transparent', color: 'var(--muted)', border: '1px solid var(--border)', borderRadius: 5, fontSize: 12, cursor: 'pointer' }}
          >
            Clear Selection
          </button>
        )}

        <button
          onClick={handleDeleteSelected}
          disabled={bulkDeleting || selected.size === 0}
          style={{
            padding: '8px 16px',
            marginLeft: 'auto',
            background: selected.size > 0 ? '#B91C1C' : 'var(--surface-3)',
            color: selected.size > 0 ? '#fff' : 'var(--muted)',
            border: 'none', borderRadius: 5, fontSize: 12, fontWeight: 700,
            cursor: selected.size > 0 && !bulkDeleting ? 'pointer' : 'not-allowed',
          }}
        >
          {bulkDeleting ? 'Deleting...' : `Delete Selected (${selected.size})`}
        </button>
      </div>

      {/* Table */}
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--border)' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            All Registrants — {users.length} total
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--surface-2)' }}>
                <th style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', width: 44 }}>
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={toggleAll}
                    style={{ cursor: 'pointer', accentColor: 'var(--teal)', width: 15, height: 15 }}
                  />
                </th>
                {['#', 'Name', 'Email', 'Institution', 'Country', 'Role', 'Gender', 'Attendance', 'Reg No.', 'Registered', 'Pass PDF'].map(h => (
                  <th key={h} style={{ padding: '12px 14px', textAlign: 'left', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap', borderBottom: '1px solid var(--border)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr
                  key={u.id}
                  style={{ borderBottom: '1px solid var(--border)', background: selected.has(u.id) ? 'rgba(164,28,48,0.04)' : 'transparent', transition: 'background 0.1s' }}
                >
                  <td style={{ padding: '12px 16px' }}>
                    <input
                      type="checkbox"
                      checked={selected.has(u.id)}
                      onChange={() => toggle(u.id)}
                      style={{ cursor: 'pointer', accentColor: 'var(--teal)', width: 15, height: 15 }}
                    />
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>{i + 1}</td>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--foreground)', whiteSpace: 'nowrap' }}>
                    {u.firstName} {u.lastName}
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted-light)' }}>{u.email}</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted-light)' }}>{u.institution ?? '—'}</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted-light)', whiteSpace: 'nowrap' }}>{u.country ?? '—'}</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted-light)' }}>{u.role ?? '—'}</td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted-light)' }}>{u.gender ?? '—'}</td>
                  <td style={{ padding: '12px 14px', whiteSpace: 'nowrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '3px 10px', background: 'var(--teal-dim)', border: '1px solid var(--teal-border)', borderRadius: 3, fontSize: 11, fontWeight: 600, color: 'var(--teal)' }}>
                      {attLabel[u.attendance] ?? u.attendance}
                    </span>
                  </td>
                  <td style={{ padding: '12px 14px', fontFamily: 'monospace', fontSize: 11, color: 'var(--teal)', whiteSpace: 'nowrap' }}>
                    {u.registrationNumber ?? `ICCHAI-2026-${1000 + u.id}`}
                  </td>
                  <td style={{ padding: '12px 14px', color: 'var(--muted)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                    {new Date(u.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '12px 14px' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button
                        onClick={() => handleSingleDownload(u)}
                        disabled={loading === u.id}
                        style={{
                          padding: '6px 14px',
                          background: loading === u.id ? 'var(--surface-3)' : 'var(--teal)',
                          color: loading === u.id ? 'var(--muted)' : '#fff',
                          border: 'none', borderRadius: 4, fontSize: 11, fontWeight: 700,
                          cursor: loading === u.id ? 'not-allowed' : 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {loading === u.id ? '...' : 'Download PDF'}
                      </button>
                      <button
                        onClick={() => handleDeleteOne(u)}
                        disabled={deleting === u.id}
                        style={{
                          padding: '6px 14px',
                          background: 'transparent',
                          color: deleting === u.id ? 'var(--muted)' : '#B91C1C',
                          border: '1px solid #B91C1C',
                          borderRadius: 4, fontSize: 11, fontWeight: 700,
                          cursor: deleting === u.id ? 'not-allowed' : 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {deleting === u.id ? '...' : 'Delete'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={12} style={{ padding: '48px 16px', textAlign: 'center', color: 'var(--muted)' }}>
                    No registrations yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
