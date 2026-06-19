'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  return (
    <button onClick={handleLogout} className="btn btn-outline" style={{ fontSize: 13, padding: '10px 20px' }}>
      Sign out
    </button>
  )
}
