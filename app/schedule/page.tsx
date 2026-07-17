import Link from 'next/link'

const day1 = [
  { time: '14:00–16:00 IST', session: 'Pre-Conference Workshops', detail: 'Details to be announced', type: 'pre' },
  { time: '16:00–17:00 IST', session: 'Pre-Conference Workshops', detail: 'Details to be announced', type: 'pre' },
  { time: '17:30–17:45 IST', session: 'Opening Practice', detail: 'Guided slow-paced breathing with live HRV biofeedback', type: 'practice' },
  { time: '17:45–18:55 IST', session: 'Spotlight Talks', detail: '3 talks, confirmed speakers to be announced', type: 'main' },
  { time: '~19:00–19:30 IST', session: 'Plenary Panel', detail: 'Opening day panel discussion, topic to be announced', type: 'main' },
  { time: '~19:30–19:35 IST', session: 'Break', detail: '', type: 'break' },
  { time: '~19:35–21:00 IST', session: 'Parallel Breakout Sessions', detail: 'Research / Applied / Technology & Ethics tracks, simultaneous', type: 'breakout' },
  { time: '~21:00–21:30 IST', session: 'Book Launches, Demo & Closing', detail: 'Meta-Meditation for Mental Health (Steve Haberlin) and Sutra to Sensor: HealthTech in IKS (Satyam Tiwari), plus closing practice', type: 'close' },
]

const day2 = [
  { time: '14:00–16:00 IST', session: 'Pre-Conference Programme', detail: 'Details to be announced', type: 'pre' },
  { time: '16:00–17:00 IST', session: 'Pre-Conference Programme', detail: 'Details to be announced', type: 'pre' },
  { time: '17:30–17:45 IST', session: 'Opening Practice', detail: 'AI-Assisted Mindfulness Practice', type: 'practice' },
  { time: '17:45–18:55 IST', session: 'Spotlight Talks', detail: '3 talks, confirmed speakers to be announced', type: 'main' },
  { time: '~19:00–19:30 IST', session: 'Plenary Panel', detail: 'Can AI Deliver Contemplative Care Responsibly?', type: 'main' },
  { time: '~19:30–19:35 IST', session: 'Break', detail: '', type: 'break' },
  { time: '~19:35–21:00 IST', session: 'Parallel Breakout Sessions', detail: 'Research / Scholarship / Practitioner / Ayurveda tracks, simultaneous', type: 'breakout' },
  { time: '~21:00–21:30 IST', session: 'Demo & Closing Synthesis', detail: 'Partnership announcements and closing meditation', type: 'close' },
]

const day1Tracks = [
  { name: 'Research Track', title: 'HealthTech in Mind-Body Practices: EEG to Wearables' },
  { name: 'Applied Track', title: 'Digital Therapeutics & the Human Teacher' },
  { name: 'Technology & Ethics Track', title: 'Responsible AI, LLM Safety and Data Ethics' },
]

const day2Tracks = [
  { name: 'Research Track', title: 'IKS-Based Mind-Body Practices in the AI Era' },
  { name: 'Scholarship Track', title: 'Traditions of Contemplative Studies in the AI Era' },
  { name: 'Practitioner Track', title: 'Contemplative Practitioners: Future & Guidance' },
  { name: 'Ayurveda Track', title: 'Ayurveda: Traditional Science Meets AI' },
]

const typeColor: Record<string, string> = {
  pre: 'var(--muted)',
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
            October 22–23, 2026 &nbsp;·&nbsp; Fully online, worldwide &nbsp;·&nbsp; Four hours per day across all time zones
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span className="chip chip-teal">17:30 IST</span>
            <span className="chip">8:00 am EST</span>
            <span className="chip">2:00 pm CET</span>
            <span className="chip">Parallel Tracks</span>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section style={{ padding: '32px 0', background: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              'Programme is provisional and subject to change. Full details and complete speaker list to be announced.',
              'Opening practice rotates: Day 1 is breathing and HRV (measurement-led), Day 2 is Yoga Nidra and movement (embodiment-led).',
              'Breakout sessions run simultaneously. Attendees self-select one track per day.',
              'All speaker names are pending confirmation and not yet final.',
            ].map((note, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 7 }} />
                <p className="caption" style={{ lineHeight: 1.7 }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Hackathon */}
      <section style={{ padding: '28px 0', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap', padding: '20px 24px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8 }}>
            <span className="chip chip-teal" style={{ flexShrink: 0 }}>Also Running Alongside</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Global Hackathon</p>
              <p className="caption" style={{ lineHeight: 1.65 }}>
                A worldwide, fully virtual hackathon on Contemplative HealthTech and AI, running in the days leading up to the conference. Full details to be announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1 */}
      <DayBlock label="Day 1" date="October 22, 2026" theme="The Science of Self-Regulation" sub="Mindfulness, HRV, Biofeedback and the Nervous System" sessions={day1} tracks={day1Tracks} bg="var(--surface)" />

      {/* Day 2 */}
      <DayBlock label="Day 2" date="October 23, 2026" theme="AI and Digital Therapeutics" sub="In Yoga, Meditation and Contemplative Practice" sessions={day2} tracks={day2Tracks} bg="var(--background)" />

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="headline" style={{ marginBottom: 16 }}>Reserve your place</h2>
          <p className="body" style={{ maxWidth: 460, margin: '0 auto 40px' }}>Registration is free. Join researchers, clinicians and technologists from multiple institutions across several countries.</p>
          <Link href="/register" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register Free</Link>
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
            Parallel Breakout Sessions, ~19:35–21:00 IST (simultaneous)
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 16 }}>
            {tracks.map(t => (
              <div key={t.name} style={{ background: bg === 'var(--surface)' ? 'var(--surface-2)' : 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '32px 28px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 12 }}>{t.name}</p>
                <h4 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4, color: 'var(--foreground)' }}>{t.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
