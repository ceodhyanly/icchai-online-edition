import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for ICCH-AI 2026, the International Conference on Contemplative HealthTech and AI.',
}

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: 68 }}>
      <section style={{ padding: '80px 0 64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Legal</p>
          <h1 className="display" style={{ marginBottom: 16 }}>Terms of Use</h1>
          <p className="body" style={{ color: 'var(--muted)' }}>Last updated: July 2026</p>
        </div>
      </section>

      <section style={{ padding: '64px 0 96px' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            <Block title="Acceptance">
              By accessing or using the ICCH-AI 2026 website (icchai.com) you agree to these terms. If you do not agree, please do not use the site.
            </Block>

            <Block title="About the conference">
              ICCH-AI 2026 is a free, fully online academic conference on Contemplative HealthTech and AI, organised by YogaXBiofeedback Pvt Ltd (Dhyanly), The India Center at the University of Central Florida, and Notre Dame of Maryland University. All programme and speaker information on this site is provided in good faith and may change prior to the event.
            </Block>

            <Block title="Registration">
              Registration is free and open to all. You agree to provide accurate information when registering. The organisers reserve the right to cancel registrations that contain false or misleading information. You are responsible for keeping your account credentials secure.
            </Block>

            <Block title="Intellectual property">
              All content on this website, including text, images, logos, and design, is owned by YogaXBiofeedback Pvt Ltd (Dhyanly) or its partner institutions and is protected by applicable intellectual property law. You may share links to conference pages but may not reproduce or adapt content without written permission.
            </Block>

            <Block title="Conference recordings and materials">
              Sessions may be recorded for post-conference distribution. By attending you acknowledge that your participation (including questions during Q&A) may be included in recordings. Speaker presentations and session recordings remain the intellectual property of the respective speakers and organisers.
            </Block>

            <Block title="Conduct">
              All attendees, speakers, and organisers are expected to engage with respect and in good faith. The organisers reserve the right to remove any participant who engages in harassment, discrimination, or disruptive conduct.
            </Block>

            <Block title="Disclaimers">
              The conference is provided as-is. The organisers make no guarantees regarding specific speakers, sessions, or outcomes. Programme details are subject to change. The content shared at the conference is for informational and educational purposes and does not constitute medical or clinical advice.
            </Block>

            <Block title="Limitation of liability">
              To the extent permitted by law, YogaXBiofeedback Pvt Ltd and its partners will not be liable for any indirect, incidental, or consequential damages arising from your use of this website or attendance at the conference.
            </Block>

            <Block title="Governing law">
              These terms are governed by the laws of India. Any disputes will be resolved in the courts of New Delhi.
            </Block>

            <Block title="Contact">
              Questions about these terms may be sent to <a href="mailto:ceodhyanly@gmail.com" style={{ color: 'var(--teal)', textDecoration: 'none' }}>ceodhyanly@gmail.com</a>.
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
