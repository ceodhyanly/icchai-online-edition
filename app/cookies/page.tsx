import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy for ICCH-AI 2026, the International Conference on Contemplative HealthTech and AI.',
}

export default function CookiesPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 68 }}>
      <section style={{ padding: '80px 0 64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Legal</p>
          <h1 className="display" style={{ marginBottom: 16 }}>Cookie Policy</h1>
          <p className="body" style={{ color: 'var(--muted)' }}>Last updated: July 2026</p>
        </div>
      </section>

      <section style={{ padding: '64px 0 96px' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            <Block title="What are cookies?">
              Cookies are small text files that a website stores on your device when you visit. They allow the site to remember information about your session, such as whether you are logged in.
            </Block>

            <Block title="Cookies we use">
              <span>This website uses one cookie only:</span>
              <div style={{ marginTop: 20, padding: '20px 24px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['Name', 'Purpose', 'Type', 'Duration'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 12px', fontSize: 13, fontFamily: 'monospace', color: 'var(--teal)' }}>icchai_token</td>
                      <td style={{ padding: '14px 12px', fontSize: 13, color: 'var(--muted-light)' }}>Keeps you signed into your attendee account</td>
                      <td style={{ padding: '14px 12px', fontSize: 13, color: 'var(--muted-light)' }}>Strictly necessary (HttpOnly, Secure)</td>
                      <td style={{ padding: '14px 12px', fontSize: 13, color: 'var(--muted-light)' }}>7 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Block>

            <Block title="What we do NOT use">
              We do not use advertising cookies, tracking cookies, analytics cookies, or any third-party cookies. We do not use Google Analytics, Facebook Pixel, or similar tracking tools on this website.
            </Block>

            <Block title="How the session cookie works">
              When you register or sign in, a secure session token is stored in the icchai_token cookie. It is marked HttpOnly (not accessible to JavaScript), Secure (only sent over HTTPS), and SameSite=Strict (not sent with cross-site requests). The token expires automatically after 7 days.
            </Block>

            <Block title="Managing cookies">
              Because we only use a strictly necessary session cookie, you can disable it only by signing out of your account or clearing your browser cookies manually. Disabling it will sign you out and you will need to sign in again.
            </Block>

            <Block title="Changes to this policy">
              If we ever add cookies in the future, we will update this page and notify registered users by email.
            </Block>

            <Block title="Contact">
              Cookie questions can be sent to <a href="mailto:ceodhyanly@gmail.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>ceodhyanly@gmail.com</a>.
            </Block>

          </div>

          <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border)', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: 'var(--teal)', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--teal)', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Terms of Use</Link>
            <Link href="/" style={{ color: 'var(--teal)', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Back to conference home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--foreground)', marginBottom: 16, letterSpacing: '-0.01em' }}>{title}</h2>
      <p style={{ fontSize: 15, color: 'var(--muted-light)', lineHeight: 1.8 }}>{children}</p>
    </div>
  )
}
