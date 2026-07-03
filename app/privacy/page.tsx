import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for ICCHAI 2026, the International Conference on Contemplative HealthTech and AI.',
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 68 }}>
      <section style={{ padding: '80px 0 64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Legal</p>
          <h1 className="display" style={{ marginBottom: 16 }}>Privacy Policy</h1>
          <p className="body" style={{ color: 'var(--muted)' }}>Last updated: July 2026</p>
        </div>
      </section>

      <section style={{ padding: '64px 0 96px' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            <Block title="Who we are">
              ICCHAI 2026 (International Conference on Contemplative HealthTech and AI) is organised by YogaXBiofeedback Pvt Ltd (Dhyanly) in partnership with The India Center, University of Central Florida. The conference takes place October 22–23, 2026, in-person at IIT Delhi and online worldwide. This website is operated at icchai.com.
            </Block>

            <Block title="What information we collect">
              When you register for the conference we collect your name, email address, country, institution or organisation, professional role, selected areas of interest, and attendance preference. We do not collect payment information because the conference is free to attend.
            </Block>

            <Block title="How we use your information">
              Your registration data is used to:
              <ul style={{ marginTop: 12, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li style={{ fontSize: 15, color: 'var(--muted-light)', lineHeight: 1.7 }}>Confirm your registration and provide access to conference resources.</li>
                <li style={{ fontSize: 15, color: 'var(--muted-light)', lineHeight: 1.7 }}>Send you updates about the programme, schedule changes, and post-conference materials.</li>
                <li style={{ fontSize: 15, color: 'var(--muted-light)', lineHeight: 1.7 }}>Understand the composition of our audience for programme planning.</li>
                <li style={{ fontSize: 15, color: 'var(--muted-light)', lineHeight: 1.7 }}>Comply with any applicable legal obligations.</li>
              </ul>
              We do not sell, rent, or trade your personal data with third parties.
            </Block>

            <Block title="Data storage and security">
              Registration data is stored securely in a Neon (PostgreSQL) database hosted on AWS. Access is restricted to conference organisers. Passwords are hashed using bcrypt and never stored in plain text. All data is transmitted over HTTPS.
            </Block>

            <Block title="Cookies">
              This website uses a single session cookie (icchai_token) to keep you signed into your attendee account. We do not use advertising cookies or third-party tracking cookies.
            </Block>

            <Block title="Your rights">
              You have the right to access, correct, or delete your personal data at any time. To make a request, contact us at info@icchai.com. We will respond within 30 days.
            </Block>

            <Block title="Retention">
              We retain registration data for one year after the conference concludes, after which it is permanently deleted unless you have given explicit consent for longer retention.
            </Block>

            <Block title="Contact">
              For any privacy-related questions, write to us at <a href="mailto:info@icchai.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>info@icchai.com</a>.
            </Block>

          </div>

          <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
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
