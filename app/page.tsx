import Link from 'next/link'
import Image from 'next/image'

/* ── SVG Icons – hand-drawn style, no emojis ── */
function IconBrain() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4c-3.3 0-6 2-6 5 0 1.2.5 2.3 1.3 3.1C7.5 13 7 14.4 7 16c0 3.3 2.7 5 6 5" />
      <path d="M14 4c3.3 0 6 2 6 5 0 1.2-.5 2.3-1.3 3.1.8.9 1.3 2.3 1.3 3.9 0 3.3-2.7 5-6 5" />
      <path d="M9.2 9.5C8 10.3 7 11.6 7 13M18.8 9.5C20 10.3 21 11.6 21 13" />
      <line x1="14" y1="9" x2="14" y2="16" />
    </svg>
  )
}
function IconLotus() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 22c0 0-6-3-6-9 0-2 1-3.5 3-4" />
      <path d="M14 22c0 0 6-3 6-9 0-2-1-3.5-3-4" />
      <path d="M14 9c0-3 1.5-5 4-5 0 3-1.5 7-4 8" />
      <path d="M14 9c0-3-1.5-5-4-5 0 3 1.5 7 4 8" />
      <path d="M10 13c-1.5 0-4-1-4-4 2.5.3 5 2 5 5" />
      <path d="M18 13c1.5 0 4-1 4-4-2.5.3-5 2-5 5" />
      <line x1="14" y1="22" x2="14" y2="24" />
    </svg>
  )
}
function IconCircuit() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="8" height="8" rx="1" />
      <line x1="14" y1="4" x2="14" y2="10" /><circle cx="14" cy="4" r="1.2" fill="currentColor" stroke="none" />
      <line x1="14" y1="18" x2="14" y2="24" /><circle cx="14" cy="24" r="1.2" fill="currentColor" stroke="none" />
      <line x1="4" y1="14" x2="10" y2="14" /><circle cx="4" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <line x1="18" y1="14" x2="24" y2="14" /><circle cx="24" cy="14" r="1.2" fill="currentColor" stroke="none" />
      <line x1="6" y1="6" x2="10" y2="10" /><circle cx="6" cy="6" r="1.2" fill="currentColor" stroke="none" />
      <line x1="22" y1="6" x2="18" y2="10" /><circle cx="22" cy="6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconWave() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3,14 7,14 9,8 11,20 13,11 15,17 17,7 19,21 21,14 25,14" />
    </svg>
  )
}
function IconHospital() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="6" width="18" height="18" rx="1" />
      <line x1="14" y1="10" x2="14" y2="18" /><line x1="10" y1="14" x2="18" y2="14" />
      <path d="M5 10h18" />
    </svg>
  )
}
function IconBalance() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <line x1="14" y1="4" x2="14" y2="24" />
      <line x1="6" y1="8" x2="22" y2="8" />
      <path d="M6 8 C4 10 4 13 6 14 8 13 8 10 6 8Z" />
      <path d="M22 8 C20 10 20 13 22 14 24 13 24 10 22 8Z" />
      <line x1="9" y1="24" x2="19" y2="24" />
    </svg>
  )
}

const pillars = [
  {
    n: '01', title: 'Contemplative Neuroscience & Self-Regulation', Icon: IconBrain,
    areas: ['Neuroimaging & EEG of long-term meditators', 'Heart rate variability & vagal tone', 'Physiology of pranayama & paced breathing', 'Polyvagal & autonomic nervous system research', 'Clinical evidence for mindfulness-based interventions'],
  },
  {
    n: '02', title: 'Yoga, Ayurveda & Indian Knowledge Systems', Icon: IconLotus,
    areas: ['Foundations of yoga therapy', 'Ayurvedic frameworks for mind-body health', 'Svara Shastra & nasal-airflow practices', 'Classical textual traditions & scientific interpretation', 'Buddhist & Daoist contemplative frameworks'],
  },
  {
    n: '03', title: 'AI & Digital Therapeutics', Icon: IconCircuit,
    areas: ['AI-powered posture & breath recognition', 'Meditation-state classification & digital phenotyping', 'Personalised learning platforms', 'Generative AI tutors & coaching systems', 'App-based digital therapeutics & clinical trials'],
  },
  {
    n: '04', title: 'Biofeedback, Wearables & Biosignal Science', Icon: IconWave,
    areas: ['HRV & biofeedback wearable design', 'Real-time physiological monitoring', 'Compression-garment & nasal-airflow sensing', 'Signal processing for biofeedback applications', 'Biosignal integration into digital health platforms'],
  },
  {
    n: '05', title: 'Clinical Translation & Digital Health Delivery', Icon: IconHospital,
    areas: ['Telehealth delivery of yoga therapy & mindfulness', 'Clinical trial design for digital interventions', 'Integration into existing healthcare systems', 'Accessibility & scalability of evidence-based delivery', 'Regulatory & policy considerations'],
  },
  {
    n: '06', title: 'Ethics, Responsibility & the Future of the Field', Icon: IconBalance,
    areas: ['Data privacy & ethics in mental health AI', 'Cultural authenticity in technological translation', 'Transparency & safety in AI-mediated tools', 'Encoding contemplative practice into algorithms', 'Policy frameworks — AYUSH, DST, WHO'],
  },
]

const institutionalPartners = [
  {
    name: 'University of Central Florida',
    dept: 'The India Center',
    country: 'Orlando, FL, USA',
    role: 'Convening Institution',
    logo: '/images/ucf.jpg',
    logoAlt: 'University of Central Florida',
  },
  {
    name: 'Notre Dame of Maryland University',
    dept: 'School of Integrative Health (SOIH)',
    country: 'Baltimore, MD, USA',
    role: 'Institutional Partner',
    logo: '/images/ndmulogo.jpg',
    logoAlt: 'Notre Dame of Maryland University',
  },
]

const speakerInstitutions = [
  { logo: '/images/utah.png', alt: 'University of Utah', name: 'University of Utah' },
  { logo: '/images/iitkanpurlogo.jpg', alt: 'IIT Kanpur', name: 'IIT Kanpur' },
  { logo: '/images/iitmandi.jpg', alt: 'IIT Mandi', name: 'IIT Mandi' },
  { logo: '/images/ucf.jpg', alt: 'University of Central Florida', name: 'UCF' },
  { logo: '/images/ndmulogo.jpg', alt: 'Notre Dame of Maryland University', name: 'NDMU' },
]

export default function Home() {
  return (
    <>
      {/* ─── HERO — stays dark for dramatic effect ────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 24px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: '#16040A',
      }}>
        {/* Hero background video */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }}
          >
            <source src="/images/herovideo.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(22,4,10,0.55) 0%, rgba(22,4,10,0.05) 45%, rgba(22,4,10,0.82) 100%)',
          }} />
          <div style={{
            position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 800, height: 600, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(198,146,50,0.08) 0%, transparent 70%)',
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 160 }}>
          {/* Meta chips — explicit dark-hero style */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48, alignItems: 'center' }}>
            <span className="hero-chip hero-chip-teal">Inaugural Edition</span>
            <span className="hero-chip">Oct 22–23, 2026</span>
            <span className="hero-chip">Online</span>
            <span className="hero-chip">Free to Attend</span>
          </div>

          {/* Title — explicit white */}
          <h1 className="display" style={{ color: '#FFFFFF', maxWidth: 880, marginBottom: 32 }}>
            Mind-Body &amp;<br />Digital Health<br />
            <span style={{ color: '#C69232' }}>Conference</span>
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(228,232,241,0.75)', maxWidth: 600, marginBottom: 16 }}>
            International Conference on AI, Yoga, Meditation and Mindfulness in the Digital Age — the first sustained dialogue between ancient contemplative science and modern technology.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(228,232,241,0.45)', marginBottom: 48, letterSpacing: '0.04em' }}>
            18:30–22:30 IST &nbsp;·&nbsp; 9:00 am–1:00 pm EST &nbsp;·&nbsp; 3:00–7:00 pm CET
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-teal">Register — Free</Link>
            <Link href="/schedule" className="hero-btn-outline">View Programme</Link>
          </div>

          {/* Organisers strip */}
          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(228,232,241,0.4)' }}>Organised by</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(228,232,241,0.65)' }}>YogaXBiofeedback Pvt Ltd (Dhyanly)</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>×</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(228,232,241,0.65)' }}>The India Center, University of Central Florida</span>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80, alignItems: 'start' }}>
            <div>
              <p className="label" style={{ marginBottom: 20 }}>About MBDHC 2026</p>
              <h2 className="headline" style={{ marginBottom: 28 }}>
                Three worlds.<br />One conversation.
              </h2>
              <p className="body" style={{ marginBottom: 20 }}>
                MBDHC 2026 is the inaugural edition of what is intended to become an annual gathering — a space where Indian Knowledge Systems and Western empirical science meet as equal partners in inquiry.
              </p>
              <p className="body" style={{ marginBottom: 20 }}>
                Not as tradition waiting to be validated by science, or science imposing itself on tradition. Yoga, meditation and mindfulness carry centuries of lived, experiential knowledge about regulating the breath, the nervous system, and the mind.
              </p>
              <p className="body" style={{ marginBottom: 36 }}>
                Contemplative neuroscience and biosignal science have spent the last three decades building rigorous evidence for what these practices do to the brain and body. AI and digital health now offer the tools to measure, personalise and deliver these practices at a scale no individual teacher, clinic or lab ever could.
              </p>
              <Link href="/register" className="btn btn-teal">Join the Conference</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { heading: 'Ancient Practice', body: 'Centuries of lived knowledge on regulating the breath, nervous system, and mind — refined through direct experiential inquiry across traditions.' },
                { heading: 'Modern Science', body: 'Three decades of rigorous evidence — neuroimaging, HRV, EEG — that formally documents what contemplative traditions have described experientially.' },
                { heading: 'Emerging Technology', body: 'AI and digital health tools that can measure, personalise and deliver contemplative practices at a scale no individual teacher or clinic could reach alone.' },
              ].map(item => (
                <div key={item.heading} style={{ padding: '28px 32px', background: 'var(--surface-3)', borderRadius: 8, borderLeft: '2px solid var(--teal)' }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--foreground)', marginBottom: 8, letterSpacing: '-0.01em' }}>{item.heading}</p>
                  <p className="body" style={{ fontSize: 14 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────── */}
      <section style={{ padding: '56px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {[
              { n: '2', label: 'Conference Days' },
              { n: '6', label: 'Research Pillars' },
              { n: '3', label: 'Parallel Tracks per Day' },
              { n: '6', label: 'Partner Institutions' },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: '40px 32px',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--teal)', marginBottom: 8 }}>{s.n}</div>
                <p className="caption" style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PILLARS ────────────────────────────────────────── */}
      <section id="pillars" className="section-lg" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p className="label" style={{ marginBottom: 16 }}>Conference Pillars</p>
              <h2 className="headline">Six areas of inquiry</h2>
            </div>
            <p className="body" style={{ maxWidth: 400 }}>
              From foundational neuroscience to applied AI to ethical responsibility — each pillar is a distinct layer of the conversation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: 1, background: 'var(--border)' }}>
            {pillars.map(p => {
              const Icon = p.Icon
              return (
                <div key={p.n} className="hover-cell" style={{ background: 'var(--surface)', padding: '40px 36px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase' }}>Pillar {p.n}</span>
                    <span style={{ color: 'var(--teal)' }}><Icon /></span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--foreground)', marginBottom: 20 }}>{p.title}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {p.areas.map(a => (
                      <li key={a} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ marginTop: 6, width: 4, height: 4, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.55 }}>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SCHEDULE PREVIEW ───────────────────────────────── */}
      <section className="section" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, gap: 24, flexWrap: 'wrap' }}>
            <div>
              <p className="label" style={{ marginBottom: 16 }}>Programme</p>
              <h2 className="headline">Two days. Two themes.</h2>
            </div>
            <Link href="/schedule" className="btn btn-ghost" style={{ fontSize: 14, color: 'var(--teal)' }}>
              Full schedule &rarr;
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
            {[
              {
                day: 'Day 1', date: 'October 22, 2026',
                theme: 'The Science of Self-Regulation',
                sub: 'Mindfulness, HRV, Biofeedback and the Nervous System',
                plenary: 'Guided slow-paced breathing with live HRV biofeedback',
                tracks: ['Research — EEG to Wearables', 'Clinical — Digital Therapeutics', 'Traditional — Mindfulness & AI'],
                accent: 'var(--teal)',
              },
              {
                day: 'Day 2', date: 'October 23, 2026',
                theme: 'AI & Digital Therapeutics',
                sub: 'In Yoga, Meditation and Contemplative Practice',
                plenary: 'Can AI Deliver Contemplative Care Responsibly?',
                tracks: ['Research — IKS & AI', 'Clinical — Digital Therapeutics', 'Technology — Responsible AI'],
                accent: 'var(--muted-light)',
              },
            ].map(d => (
              <div key={d.day} className="card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: d.accent }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                  <span className="chip chip-teal" style={{ fontSize: 11 }}>{d.day}</span>
                  <span className="caption">{d.date}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 8 }}>{d.theme}</h3>
                <p className="caption" style={{ marginBottom: 24 }}>{d.sub}</p>
                <div style={{ padding: '14px 16px', background: 'var(--surface-3)', borderRadius: 6, marginBottom: 28, borderLeft: '2px solid var(--teal)' }}>
                  <p style={{ fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.6, fontStyle: 'italic' }}>&ldquo;{d.plenary}&rdquo;</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {d.tracks.map((t, j) => (
                    <div key={j} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ width: 3, height: 14, background: d.accent, borderRadius: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--muted-light)' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTITUTIONS ───────────────────────────────────── */}
      <section id="institutions" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Academic &amp; Institutional Partners</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <h2 className="headline" style={{ maxWidth: 500 }}>
              Institutions shaping the dialogue
            </h2>
            <p className="body" style={{ maxWidth: 380 }}>
              MBDHC 2026 is convened in partnership with leading universities across India and the United States.
            </p>
          </div>

          {/* Partner institution cards — UCF + NDMU */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 1, background: 'var(--border)', marginBottom: 64 }}>
            {institutionalPartners.map(inst => (
              <div key={inst.name} className="hover-cell" style={{ background: 'var(--surface)', padding: '40px 36px', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: 6,
                  padding: '16px 20px',
                  marginBottom: 24,
                  display: 'flex',
                  alignItems: 'center',
                  height: 68,
                  overflow: 'hidden',
                }}>
                  <Image
                    src={inst.logo}
                    alt={inst.logoAlt}
                    width={280}
                    height={50}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }}
                    unoptimized
                  />
                </div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>{inst.role}</p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--foreground)', marginBottom: 4, letterSpacing: '-0.01em' }}>{inst.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted-light)', marginBottom: 6 }}>{inst.dept}</p>
                <p className="caption">{inst.country}</p>
              </div>
            ))}
          </div>

          {/* Speaker institutions logo strip */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 48 }}>
            <p className="label" style={{ marginBottom: 32 }}>Speakers represent institutions including</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
              {speakerInstitutions.map(si => (
                <div key={si.name} style={{
                  background: '#fff',
                  borderRadius: 6,
                  padding: '12px 20px',
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  flex: '1 1 180px',
                  maxWidth: 260,
                  overflow: 'hidden',
                }}>
                  <Image
                    src={si.logo}
                    alt={si.alt}
                    width={220}
                    height={38}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOOK LAUNCHES ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Featured at MBDHC 2026</p>
          <h2 className="headline" style={{ marginBottom: 48 }}>Book Launches</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {[
              {
                title: 'Meta-Meditation for Mental Health Routage',
                author: 'Steve Haberlin',
                note: 'Day 1 Launch — October 22, 2026',
              },
              {
                title: 'Sūtra to Sensor: HealthTech in IKS Blue One Inc.',
                author: 'Satyam Tiwari',
                note: 'Day 1 Launch — October 22, 2026',
              },
            ].map(book => (
              <div key={book.title} className="card" style={{ padding: '36px 40px' }}>
                <div style={{ width: 3, height: 40, background: 'var(--teal)', borderRadius: 2, marginBottom: 24 }} />
                <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.015em', color: 'var(--foreground)', marginBottom: 12 }}>{book.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted-light)', marginBottom: 20 }}>by {book.author}</p>
                <span className="chip">{book.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ───────────────────────────────────────── */}
      <section id="partners" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Organisers &amp; Collaboration</p>
          <h2 className="headline" style={{ marginBottom: 48 }}>Organisers &amp; collaborators</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              {
                name: 'YogaXBiofeedback Pvt Ltd',
                also: 'Dhyanly',
                desc: 'AI-powered software and hardware for mind-body and biofeedback sciences. Developer of wearable biosignal platforms and digital health tools for contemplative practice.',
                role: 'Primary Organiser',
                logo: '/images/dhyanlylogo.jpg',
                logoAlt: 'Dhyanly',
              },
              {
                name: 'The India Center',
                also: 'University of Central Florida',
                desc: 'UCF\'s dedicated centre for India-focused research, education and cultural engagement — the convening academic home for MBDHC 2026.',
                role: 'Convening Institution',
                logo: '/images/ucf.jpg',
                logoAlt: 'University of Central Florida',
              },
            ].map(p => (
              <div key={p.name} className="card" style={{ padding: '32px 36px' }}>
                <div style={{ background: '#fff', borderRadius: 6, padding: '12px 16px', marginBottom: 20, height: 56, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                  <Image src={p.logo} alt={p.logoAlt} width={200} height={40} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center' }} unoptimized />
                </div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>{p.role}</p>
                <h3 style={{ fontSize: 16, fontWeight: 750, color: 'var(--foreground)', marginBottom: 4, letterSpacing: '-0.01em' }}>{p.name}</h3>
                <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>{p.also}</p>
                <p style={{ fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────────── */}
      <section className="section-lg" style={{ background: 'var(--background)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="label" style={{ marginBottom: 24 }}>October 22–23, 2026</p>
          <h2 className="headline" style={{ marginBottom: 24, maxWidth: 640, margin: '0 auto 24px' }}>
            Be part of a conversation<br />that is long overdue.
          </h2>
          <p className="body-lg" style={{ maxWidth: 520, margin: '0 auto 48px' }}>
            Registration is free. Join neuroscientists, yoga therapists, AI researchers, clinicians and technologists from across six institutions and multiple countries.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register — Free</Link>
            <Link href="/schedule" className="btn btn-outline" style={{ padding: '14px 36px', fontSize: 15 }}>View Programme</Link>
          </div>
          <p className="caption" style={{ marginTop: 24 }}>Online · 18:30–22:30 IST · Free registration · No ticket required</p>
        </div>
      </section>
    </>
  )
}
