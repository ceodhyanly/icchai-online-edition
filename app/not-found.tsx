import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--background)', flexDirection: 'column', gap: 24, padding: '0 24px', textAlign: 'center',
    }}>
      <div style={{ fontSize: 72, fontWeight: 800, color: 'var(--teal)', lineHeight: 1, letterSpacing: '-0.04em' }}>404</div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--foreground)', letterSpacing: '-0.02em' }}>Page not found</h1>
      <p style={{ fontSize: 15, color: 'var(--muted-light)', maxWidth: 400, lineHeight: 1.7 }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
        <Link href="/" className="btn btn-teal" style={{ padding: '12px 28px' }}>Return home</Link>
        <Link href="/schedule" className="btn btn-outline" style={{ padding: '12px 28px' }}>View schedule</Link>
      </div>
    </div>
  )
}
