'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log to error monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      console.error('[ICCHAI Error]', error.message)
    }
  }, [error])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--background)', flexDirection: 'column', gap: 24, padding: '0 24px', textAlign: 'center',
    }}>
      <div style={{ fontSize: 72, fontWeight: 800, color: '#A41C30', lineHeight: 1, letterSpacing: '-0.04em' }}>500</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>Something went wrong</h1>
      <p style={{ fontSize: 15, color: 'var(--muted-light)', maxWidth: 420, lineHeight: 1.7 }}>
        We encountered an unexpected error. Our team has been notified. Please try again or return to the home page.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
        <button onClick={reset} className="btn btn-teal" style={{ padding: '12px 28px' }}>Try again</button>
        <Link href="/" className="btn btn-outline" style={{ padding: '12px 28px' }}>Return home</Link>
      </div>
    </div>
  )
}
