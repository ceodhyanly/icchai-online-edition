import Link from 'next/link'

type Session = {
  time: string
  session: string
  detail?: string
  type: string
  parallel?: boolean
  subItems?: { time: string; session: string; detail?: string }[]
}

const day1: Session[] = [
  { time: '2:00 – 5:00 PM', session: 'Pre-Conference Workshops', detail: 'Hands-on sessions ahead of the main programme', type: 'pre' },
  { time: '5:00 – 5:30 PM', session: 'High Tea & Networking Break', type: 'break' },
  {
    time: '5:30 – 8:00 PM', session: 'Inauguration & Spotlight Talks', type: 'main',
    subItems: [
      { time: '5:30 PM', session: 'Opening Meditation', detail: '10-minute guided practice, led by Dr. Amy Wheeler' },
      { time: 'Following', session: 'Inaugural Addresses', detail: '3–4 speakers, 5 minutes each' },
      { time: 'Following', session: 'Spotlight Talks', detail: '20 minutes each, curated headline speakers' },
    ],
  },
  { time: '8:00 – 9:00 PM', session: 'Panel Discussion', type: 'main' },
  { time: '9:00 – 9:30 PM', session: 'Book Launch & Tech Demo', type: 'demo' },
  { time: '9:30 PM onward', session: 'Closing Practice', type: 'close' },
]

const day2: Session[] = [
  { time: '5:30 – 6:30 PM', session: 'Opening & Spotlight Talks', type: 'main' },
  { time: '6:30 – 8:00 PM', session: 'Parallel Track 1', detail: 'Yoga, Mindfulness, Meditation and Dharma in the Era of AI and HealthTech', type: 'breakout', parallel: true },
  { time: '6:30 – 8:00 PM', session: 'Parallel Track 2', detail: 'Indian Knowledge Systems: Research, Ethics and Convergence with AI', type: 'breakout', parallel: true },
  { time: '6:30 – 8:00 PM', session: 'Parallel Track 3', detail: 'Ayurveda and AI: Diagnostics, Dosha Profiling and Personalised Digital Health', type: 'breakout', parallel: true },
  { time: '8:00 – 9:00 PM', session: 'Parallel Track 4', detail: 'Contemplative Neuroscience in the Era of HealthTech and AI (fMRI, EEG, Mental Health)', type: 'breakout', parallel: true },
  { time: '8:00 – 9:00 PM', session: 'Parallel Track 5', detail: 'Contemplative Tech Innovation (HaaS, SaaS based on Contemplative Sciences)', type: 'breakout', parallel: true },
  { time: '9:00 – 9:10 PM', session: 'Hackathon Winners: Tech Demo', type: 'demo' },
  { time: '9:10 – 9:30 PM', session: 'Conclusion', detail: 'Vote of Thanks & Announcement of Society', type: 'close' },
]

const typeColor: Record<string, string> = {
  pre: 'var(--muted)',
  practice: 'var(--teal)',
  main: 'var(--foreground)',
  break: 'var(--muted)',
  breakout: 'var(--teal)',
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
          <p className="body-lg" style={{ maxWidth: 600, marginBottom: 32 }}>
            October 22–24, 2026 &nbsp;·&nbsp; Two conference days and a post-conference roundtable &nbsp;·&nbsp; Times shown in IST
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span className="chip chip-teal">17:30 IST</span>
            <span className="chip">8:00 am EST</span>
            <span className="chip">2:00 pm CET</span>
            <span className="chip">Hybrid + Online</span>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section style={{ padding: '32px 0', background: 'var(--background)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              'Programme is provisional and subject to change. Full details and the complete speaker list will be announced.',
              'Day 1 is hybrid — on-site at IIT Delhi, New Delhi and streamed live worldwide. Days 2 and 3 are online only.',
              'Day 2 breakout tracks run simultaneously. Attendees self-select one track per slot.',
              'All speaker names are indicative and pending final confirmation.',
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
                A worldwide, fully virtual hackathon on Contemplative HealthTech and AI, running in the days leading up to the conference. Winners present a tech demo on Day 2. Full details to be announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day 1 */}
      <DayBlock label="Day 1" date="October 22, 2026" format="Hybrid — IIT Delhi, New Delhi + online worldwide"
        theme="Opening the Dialogue" sub="Inauguration, headline spotlight talks and the opening panel — the contemplative traditions and the sciences in one room"
        sessions={day1} bg="var(--surface)" />

      {/* Day 2 */}
      <DayBlock label="Day 2" date="October 23, 2026" format="Online only — worldwide"
        theme="Four Tracks, One Field" sub="Practice and dharma, Indian Knowledge Systems, contemplative neuroscience, and contemplative-tech innovation — running in parallel"
        sessions={day2} bg="var(--background)" />

      {/* Day 3 */}
      <section style={{ padding: '80px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
            <span className="chip chip-teal" style={{ fontSize: 11 }}>Day 3</span>
            <span className="caption">October 24, 2026</span>
            <span className="caption">·</span>
            <span className="caption">Online only</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 750, letterSpacing: '-0.025em', marginBottom: 6 }}>
            Manana: The Contemplative Futures Roundtable
          </h2>
          <p className="body" style={{ marginBottom: 40, maxWidth: 720 }}>
            A post-conference dialogue bringing together IKS researchers, university departments, and mindfulness,
            meditation and contemplative research centres to discuss the present and future of contemplative research
            in the age of AI and health-tech.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
            {[
              { k: 'Duration', v: '3 hours' },
              { k: 'Speakers', v: 'Faculty heads and scientists' },
              { k: 'Audience', v: "Undergraduate, master's and PhD scholars" },
            ].map(x => (
              <div key={x.k} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 26px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>{x.k}</p>
                <p style={{ fontSize: 15, fontWeight: 650, lineHeight: 1.45, color: 'var(--foreground)' }}>{x.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="headline" style={{ marginBottom: 16 }}>Reserve your place</h2>
          <p className="body" style={{ maxWidth: 460, margin: '0 auto 40px' }}>Registration is free. Join researchers, clinicians and technologists from multiple institutions across several countries.</p>
          <Link href="/register" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register Free</Link>
        </div>
      </section>
    </div>
  )
}

function DayBlock({ label, date, format, theme, sub, sessions, bg }: {
  label: string; date: string; format: string; theme: string; sub: string;
  sessions: Session[]; bg: string;
}) {
  return (
    <section style={{ padding: '80px 0', background: bg, borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Day header */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
          <span className="chip chip-teal" style={{ fontSize: 11 }}>{label}</span>
          <span className="caption">{date}</span>
          <span className="caption">·</span>
          <span className="caption">{format}</span>
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 750, letterSpacing: '-0.025em', marginBottom: 6 }}>{theme}</h2>
        <p className="body" style={{ marginBottom: 48 }}>{sub}</p>

        {/* Timeline */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>
          Full Day Programme <span style={{ color: 'var(--muted-light)', fontWeight: 600 }}>· times in IST</span>
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {sessions.map((s, i) => (
            s.type === 'break'
              ? <div key={i} style={{ display: 'flex', gap: 20, padding: '10px 0', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--muted)', minWidth: 150, fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}>{s.time}</span>
                  <span style={{ height: 1, flex: 1, background: 'var(--border)' }} />
                  <span className="caption">{s.session}</span>
                  <span style={{ height: 1, flex: 1, background: 'var(--border)' }} />
                </div>
              : <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, padding: '18px 0', borderBottom: i < sessions.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: typeColor[s.type], fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em', paddingTop: 3 }}>{s.time}</span>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--foreground)' }}>{s.session}</span>
                    {s.parallel && <span className="chip chip-teal" style={{ fontSize: 9.5, marginLeft: 10, verticalAlign: 'middle' }}>Parallel</span>}
                    {s.detail && <p style={{ fontSize: 13, color: 'var(--muted-light)', marginTop: 5, lineHeight: 1.6 }}>{s.detail}</p>}
                    {s.subItems && (
                      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '2px solid var(--border)', paddingLeft: 18 }}>
                        {s.subItems.map((si, k) => (
                          <div key={k}>
                            <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', flexWrap: 'wrap' }}>
                              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', fontVariantNumeric: 'tabular-nums' }}>{si.time}</span>
                              <span style={{ fontSize: 13.5, fontWeight: 650, color: 'var(--foreground)' }}>{si.session}</span>
                            </div>
                            {si.detail && <p style={{ fontSize: 12.5, color: 'var(--muted-light)', marginTop: 3, lineHeight: 1.55 }}>{si.detail}</p>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
          ))}
        </div>
      </div>
    </section>
  )
}
