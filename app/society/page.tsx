import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISCHT — International Society for Contemplative HealthTech',
  description: 'ISCHT is opening its doors to founding members at ICCH-AI 2026, building Contemplative HealthTech as a distinct field — integrating contemplative science with AI, biosignal engineering and digital health to address human suffering.',
}

const pillars = [
  {
    n: '01',
    name: 'Research & Evidence',
    desc: 'Correlating biosignal markers — HRV, respiratory variability, EEG band power, electrodermal activity — against traditional practice taxonomies (pranayama ratios, dhyana stages, asana sequencing), building a shared empirical vocabulary instead of treating "meditation" as one undifferentiated variable.',
  },
  {
    n: '02',
    name: 'Standards & Ethics',
    desc: 'Naming concrete failure modes before they scale at consumer volume: LLMs simulating guru or teacher authority without lineage or accountability, biofeedback devices marketing unvalidated therapeutic claims, "personalised practice" that strips out the relational core of transmission. Governance sized to those specific risks, not generic AI-ethics boilerplate.',
  },
  {
    n: '03',
    name: 'Education & Training',
    desc: 'A curriculum spine that assumes fluency in both worlds at once — signal processing and applied statistics alongside classical textual study (Yoga Sutra, Hatha Pradipika, Ayurvedic constitution theory) — producing practitioners who can read an HRV trace and a Sanskrit commentary with equal rigor.',
  },
  {
    n: '04',
    name: 'Clinical & Policy Translation',
    desc: "Moving validated contemplative-AI tools out of pilot studies and into reimbursable clinical pathways, engaging bodies like AYUSH, WHO's traditional-medicine strategy, and digital-therapeutics regulators — so what works in a lab doesn't stall at the clinic door.",
  },
  {
    n: '05',
    name: 'Community & Convening',
    desc: 'An annual gathering starting with ICCH-AI, regional chapters, and standing working groups — the connective tissue between a biosignal engineer, a yoga therapist, and an AI safety researcher who otherwise have no shared venue to be in the same room.',
  },
  {
    n: '06',
    name: 'Tools & Resources',
    desc: 'A living library of biofeedback and wearable device evaluations, open datasets linking traditional practice labels to physiological measurement, and reference implementations — the infrastructure a field needs before it can be taught as one.',
  },
]

export default function SocietyPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ padding: '80px 0 64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>A Society, Not Just a Conference</p>
          <h1 className="display" style={{ marginBottom: 20, maxWidth: 780 }}>
            International Society for<br />Contemplative HealthTech
          </h1>
          <p className="body-lg" style={{ maxWidth: 620, marginBottom: 32 }}>
            ISCHT exists to establish <strong>Contemplative HealthTech</strong> as a distinct field of inquiry — the deliberate integration of contemplative science (yoga, prāṇāyāma, meditation, Indian Knowledge Systems) with AI, biosignal engineering and digital health, aimed at a very old problem: human suffering, chronic stress, embodied trauma, burnout. Not a conference add-on — a discipline being built in the open, carrying ICCH-AI&apos;s conversation forward between conferences.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span className="chip chip-teal">Founding Members Welcome</span>
            <span className="chip">Opening at ICCH-AI 2026</span>
            <span className="chip">Free to Join Early</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0', borderBottom: '1px solid var(--border)', background: 'var(--background)' }}>
        <div className="container">
          <div className="grid-stat-4">
            {[
              { n: '6', label: 'Focus Areas' },
              { n: '$0', label: 'Founding Membership' },
              { n: '$100', label: 'Value in Launch Benefits' },
              { n: 'Global', label: 'Reach, Year-Round' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: '40px 24px', borderRight: i < 3 ? '1px solid var(--border)' : 'none', textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--teal)', marginBottom: 8 }}>{s.n}</div>
                <p className="caption" style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Why Now</p>
          <h2 className="headline" style={{ marginBottom: 24, maxWidth: 620 }}>Two things converged recently</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, marginBottom: 32 }}>
            <p className="body" style={{ maxWidth: 480 }}>
              Consumer and research-grade biosignal hardware — HRV, EEG, respiration — has become cheap and continuous enough to observe contemplative states as they unfold, not just self-reported afterward. And language models have gotten capable enough to scaffold practice, translate traditional texts, and personalise training at a scale no single teacher ever could.
            </p>
            <p className="body" style={{ maxWidth: 480 }}>
              Meanwhile, contemplative traditions carry centuries of applied technique for regulating exactly the states modern medicine is still building coarse instruments to measure. ISCHT exists at that specific intersection — building the shared vocabulary, methods and ethics a field needs before it can be cited, taught and funded as one.
            </p>
          </div>
          <p className="caption" style={{ maxWidth: 620, fontStyle: 'italic' }}>
            The founding board and leadership roles are taking shape alongside ICCH-AI 2026. Join as a founding member now and you&apos;ll be among the first to know as this comes together.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Pillars &amp; Activities</p>
          <h2 className="headline" style={{ marginBottom: 40, maxWidth: 560 }}>What the society exists to do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {pillars.map(p => (
              <div key={p.n} className="card" style={{ padding: '28px 26px' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: 10 }}>{p.n}</p>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{p.name}</h3>
                <p className="caption" style={{ lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 16 }}>Membership</p>
          <h2 className="headline" style={{ marginBottom: 40, maxWidth: 560 }}>Join early, join free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            <div style={{ padding: '32px 30px', borderRadius: 8, border: '2px solid var(--teal-border)', background: 'var(--surface)', position: 'relative' }}>
              <span className="chip chip-teal" style={{ position: 'absolute', top: -13, left: 26, fontSize: 10.5 }}>Early Bird</span>
              <p style={{ fontSize: 30, fontWeight: 800, marginTop: 6, marginBottom: 4 }}>
                Free <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>during ICCH-AI 2026 registration</span>
              </p>
              <ul style={{ fontSize: 13.5, color: 'var(--muted-light)', paddingLeft: 18, marginTop: 16, lineHeight: 2 }}>
                <li>Founding member status</li>
                <li>Early access to society resources and research briefings</li>
                <li>Coupons toward future contemplative healthtech tools</li>
                <li>Priority invitation once full membership opens</li>
              </ul>
            </div>
            <div style={{ padding: '32px 30px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--surface)' }}>
              <p style={{ fontSize: 30, fontWeight: 800, marginTop: 6, marginBottom: 4 }}>
                $100 <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>USD / year, post-launch</span>
              </p>
              <ul style={{ fontSize: 13.5, color: 'var(--muted-light)', paddingLeft: 18, marginTop: 16, lineHeight: 2 }}>
                <li>Full member benefits</li>
                <li>Access to the member research library</li>
                <li>Society events and working groups</li>
                <li>Voting rights in society matters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'var(--hero-bg)', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 12 }}>
            Say yes to founding membership during ICCH-AI 2026 registration
          </h3>
          <p style={{ fontSize: 14, color: 'rgba(228,232,241,0.7)', marginBottom: 28, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Early membership is offered only to those who opt in while registering for the conference. Full enrolment opens to everyone after ICCH-AI 2026.
          </p>
          <Link href="/register" className="btn btn-teal" style={{ display: 'inline-flex' }}>
            Register for ICCH-AI 2026
          </Link>
        </div>
      </section>

      <p style={{ textAlign: 'center', padding: '24px 24px', fontSize: 12, color: 'var(--muted)' }}>
        International Society for Contemplative HealthTech &middot; Opening to founding members at ICCH-AI 2026 &middot; icchai.com
      </p>
    </div>
  )
}
