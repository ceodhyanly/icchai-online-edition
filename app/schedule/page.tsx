import Link from 'next/link'

const day1 = [
  { time: '18:30–18:45 IST', session: 'Opening Practice', detail: 'Guided slow-paced breathing with live HRV biofeedback', type: 'practice' },
  { time: '18:45–19:45 IST', session: 'Spotlight Talks', detail: '3 × 20 min — Confirmed speakers TBA', type: 'main' },
  { time: '19:45–20:15 IST', session: 'Plenary Panel', detail: 'Opening day panel discussion — TBA', type: 'main' },
  { time: '20:15–20:25 IST', session: 'Break', detail: '', type: 'break' },
  { time: '20:25–21:40 IST', session: 'Parallel Breakout Tracks', detail: 'Research / Clinical / Traditional — 75 min each (simultaneous)', type: 'breakout' },
  { time: '21:40–22:00 IST', session: 'Book Launches', detail: 'Meta-Meditation for Mental Health Routage (Steve Haberlin) · Sūtra to Sensor: HealthTech in IKS (Satyam Tiwari)', type: 'special' },
  { time: '22:00–22:20 IST', session: 'Demo Session', detail: 'AI models for health technology, yoga and contemplative neuroscience — Google for Developers India (TBC)', type: 'demo' },
  { time: '22:20–22:30 IST', session: 'Closing & Mindfulness Practice', detail: 'Day 1 wrap-up', type: 'close' },
]

const day2 = [
  { time: '18:30–18:45 IST', session: 'Opening Practice', detail: 'AI-Assisted Mindfulness Practice', type: 'practice' },
  { time: '18:45–19:45 IST', session: 'Spotlight Talks', detail: '3 × 20 min — Confirmed speakers TBA', type: 'main' },
  { time: '19:45–20:15 IST', session: 'Plenary Panel', detail: 'Can AI Deliver Contemplative Care Responsibly?', type: 'main' },
  { time: '20:15–20:25 IST', session: 'Break', detail: '', type: 'break' },
  { time: '20:25–21:40 IST', session: 'Parallel Breakout Tracks', detail: 'Research / Clinical / Technology — 75 min each (simultaneous)', type: 'breakout' },
  { time: '21:40–22:10 IST', session: 'Demo Session', detail: 'Dhyanly / YogaXBiofeedback — AI-powered software and hardware for mind-body sciences', type: 'demo' },
  { time: '22:10–22:30 IST', session: 'Closing Synthesis', detail: 'Partnership announcements + closing meditation', type: 'close' },
]

const day1Tracks = [
  {
    name: 'Research Track',
    title: 'HealthTech in Mind-Body Practices: EEG to Wearables',
    debate: 'Is meditation-related brain change durable, or does it reflect a temporary state?',
  },
  {
    name: 'Clinical Track',
    title: 'Digital Therapeutics and Mental Health through Contemplative Practices',
    debate: 'Should yoga/mindfulness interventions be standardized like a drug protocol, or remain individualized like traditional teaching?',
  },
  {
    name: 'Traditional Track',
    title: 'Mindfulness and Meditation in the Age of AI and LLMs',
    debate: 'Are consumer HRV wearables clinically meaningful, or expensive feedback toys?',
  },
]

const day2Tracks = [
  {
    name: 'Research Track',
    title: 'IKS-Based Mind-Body Practices in the Era of AI and Health Tech',
    debate: 'Can AI actually detect a meditative state, or only physiological proxies for one?',
  },
  {
    name: 'Clinical Track',
    title: 'Clinical Therapeutics to Digital Therapeutics',
    debate: 'Can a digital therapeutic ever replace a human yoga therapist, or only extend their reach?',
  },
  {
    name: 'Technology Track',
    title: 'Responsible AI, LLM Safety and Data Ethics in Mental Health Apps',
    debate: 'Should mental health AI be regulated like medical devices, or does that slow beneficial innovation?',
  },
]

const typeColor: Record<string, string> = {
  practice: 'var(--teal)',
  main: 'var(--foreground)',
  break: 'var(--muted)',
  breakout: 'var(--teal)',
  special: '#A78BFA',
  demo: '#A78BFA',
  close: 'var(--muted-light)',
}

export default function SchedulePage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ padding: '80px 0 64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Programme</p>
          <h1 className="display" style={{ marginBottom: 20 }}>Conference Schedule</h1>
          <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
            October 22–23, 2026 &nbsp;·&nbsp; Online &nbsp;·&nbsp; Four hours per day across all time zones
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span className="chip chip-teal">18:30 IST</span>
            <span className="chip">9:00 am EST</span>
            <span className="chip">3:00 pm CET</span>
            <span className="chip">3 Parallel Tracks</span>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section style={{ padding: '32px 0', background: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              'Opening practice rotates: Day 1 = breathing/HRV (measurement-led), Day 2 = Yoga Nidra/movement (embodiment-led).',
              'Breakout tracks run simultaneously — attendees self-select one track for the 75-minute block.',
              'Each breakout: 3 × 15-min talks, then 15-min moderated debate, then 15-min open audience Q&A.',
              'All speaker names are pending confirmation — not final confirmed speakers or content.',
            ].map((note, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 7 }} />
                <p className="caption" style={{ lineHeight: 1.7 }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day 1 */}
      <DayBlock label="Day 1" date="October 22, 2026" theme="The Science of Self-Regulation" sub="Mindfulness, HRV, Biofeedback and the Nervous System" sessions={day1} tracks={day1Tracks} bg="var(--surface)" />

      {/* Day 2 */}
      <DayBlock label="Day 2" date="October 23, 2026" theme="AI & Digital Therapeutics" sub="In Yoga, Meditation and Contemplative Practice" sessions={day2} tracks={day2Tracks} bg="var(--background)" />

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="headline" style={{ marginBottom: 16 }}>Reserve your place</h2>
          <p className="body" style={{ maxWidth: 460, margin: '0 auto 40px' }}>Registration is free. Join researchers, clinicians and technologists from six institutions across four countries.</p>
          <Link href="/register" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register — Free</Link>
        </div>
      </section>
    </div>
  )
}

function DayBlock({ label, date, theme, sub, sessions, tracks, bg }: {
  label: string; date: string; theme: string; sub: string;
  sessions: typeof day1; tracks: typeof day1Tracks; bg: string;
}) {
  return (
    <section style={{ padding: '80px 0', background: bg, borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Day header */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
          <span className="chip chip-teal" style={{ fontSize: 11 }}>{label}</span>
          <span className="caption">{date}</span>
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 750, letterSpacing: '-0.025em', marginBottom: 6 }}>{theme}</h2>
        <p className="body" style={{ marginBottom: 48 }}>{sub}</p>

        {/* Timeline */}
        <div style={{ marginBottom: 64 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Full Day Programme</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {sessions.map((s, i) => (
              s.type === 'break'
                ? <div key={i} style={{ display: 'flex', gap: 20, padding: '10px 0', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'var(--muted)', minWidth: 140, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}>{s.time}</span>
                    <span style={{ height: 1, flex: 1, background: 'var(--border)' }} />
                    <span className="caption">Break</span>
                    <span style={{ height: 1, flex: 1, background: 'var(--border)' }} />
                  </div>
                : <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, padding: '18px 0', borderBottom: i < sessions.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: typeColor[s.type], fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em', paddingTop: 3 }}>{s.time}</span>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--foreground)' }}>{s.session}</span>
                      {s.detail && <p style={{ fontSize: 13, color: 'var(--muted-light)', marginTop: 5, lineHeight: 1.6 }}>{s.detail}</p>}
                    </div>
                  </div>
            ))}
          </div>
        </div>

        {/* Breakout tracks */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
            Parallel Breakout Tracks — 20:25–21:40 IST (75 min each, simultaneous)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {tracks.map(t => (
              <div key={t.name} style={{ background: bg === 'var(--surface)' ? 'var(--surface-2)' : 'var(--surface)', padding: '32px 28px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.name}</p>
                <h4 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4, color: 'var(--foreground)', marginBottom: 20 }}>{t.title}</h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {['Talk 1 (TBA)', 'Talk 2 (TBA)', 'Talk 3 (TBA)', 'Moderated Debate', 'Open Q&A'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <span style={{ fontSize: 11, color: 'var(--teal)', fontWeight: 600, minWidth: 48 }}>{['0–15','15–30','30–45','45–60','60–75'][i]} min</span>
                      <span style={{ fontSize: 13, color: 'var(--muted-light)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ padding: '14px 16px', background: 'var(--surface-3)', borderRadius: 6, borderLeft: '2px solid var(--teal)' }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Debate Prompt</p>
                  <p style={{ fontSize: 12, color: 'var(--muted-light)', fontStyle: 'italic', lineHeight: 1.65 }}>&ldquo;{t.debate}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
