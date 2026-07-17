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
    areas: ['Data privacy and ethics in mental health AI', 'Cultural authenticity in technological translation', 'Transparency and safety in AI-mediated tools', 'Encoding contemplative practice into algorithms', 'Policy frameworks: AYUSH, DST, WHO'],
  },
]

const mainPartners = [
  {
    name: 'YogaXBiofeedback Pvt Ltd',
    dept: 'Dhyanly',
    role: 'Primary Organiser',
    desc: 'AI-powered software and hardware for mind-body and biofeedback sciences. Developer of wearable biosignal platforms and digital health tools for contemplative practice.',
    logo: '/images/dhyanlylogo-removebg-preview.png',
    logoAlt: 'YogaXBiofeedback Pvt Ltd (Dhyanly)',
    wide: false,
  },
  {
    name: 'University of Central Florida',
    dept: 'The India Center',
    role: 'Convening Institution',
    desc: "UCF's dedicated centre for India-focused research, education and cultural engagement. Convening academic home for ICCH-AI 2026.",
    logo: '/images/ucf-removebg-preview.png',
    logoAlt: 'University of Central Florida',
    wide: false,
  },
  {
    name: 'Notre Dame of Maryland University',
    dept: 'School of Integrative Health (SOIH)',
    role: 'Institutional Partner',
    desc: 'Baltimore, MD. Graduate home of accredited yoga therapy and integrative health programs within a liberal-arts tradition.',
    logo: '/images/ndmulogo-removebg-preview.png',
    logoAlt: 'Notre Dame of Maryland University',
    wide: false,
  },
  {
    name: 'Indian Institute of Technology Delhi',
    dept: 'National Resource Centre for Value Education in Engineering (NRCVEE)',
    role: 'Anchor Institution (India)',
    desc: "Established by India's Ministry of Education to integrate value education and professional ethics into engineering, NRCVEE brings two decades of work in wellness, self-awareness and value-based curricula to ICCH-AI 2026. The event is fully online, with a possible hybrid track at IIT Delhi.",
    logo: '/images/iidelhilogo-removebg-preview.png',
    logoAlt: 'Indian Institute of Technology Delhi',
    wide: true,
  },
  {
    name: 'Loyola Marymount University',
    dept: 'Bellarmine College of Liberal Arts, MA in Yoga Studies',
    role: 'Academic Partner — USA',
    desc: 'Los Angeles, CA. Home to the MA in Yoga Studies and the Doshi Professorship in Indic and Comparative Theology within a Jesuit liberal-arts tradition.',
    logo: '/images/lmulogo.webp',
    logoAlt: 'Loyola Marymount University',
    wide: false,
  },
  {
    name: 'South Asian Studies Association',
    dept: 'SASA',
    role: 'Scholarly Partner — USA',
    desc: "A scholarly and cultural association dedicated to understanding South Asia's cultures, histories, issues and opportunities — hosting annual conferences, peer-reviewed journals and recognition programs across the field.",
    logo: '/images/sasalogo.png',
    logoAlt: 'South Asian Studies Association (SASA)',
    wide: false,
  },
  {
    name: 'Bṛhat',
    dept: 'A Culture Engine for Bhārata',
    role: 'IKS Knowledge Partner',
    desc: 'An education and culture platform advancing Indian Knowledge Systems through courses, research and cultural programs. Joining ICCH-AI 2026 in person for the launch, with academic outreach, event coverage and sponsor engagement alongside it.',
    logo: '/images/brihatlogo.png',
    logoAlt: 'Bṛhat',
    wide: false,
  },
]

const speakerInstitutions = [
  { logo: '/images/utah.png', alt: 'University of Utah', name: 'University of Utah' },
  { logo: '/images/ucf.jpg', alt: 'University of Central Florida', name: 'UCF' },
  { logo: '/images/ndmulogo.jpg', alt: 'Notre Dame of Maryland University', name: 'NDMU' },
  { logo: '/images/lmulogo.webp', alt: 'Loyola Marymount University', name: 'LMU' },
  { logo: '/images/iidelhilogo.jpg', alt: 'Indian Institute of Technology Delhi', name: 'IIT Delhi' },
  { logo: '/images/sasalogo.png', alt: 'South Asian Studies Association', name: 'SASA' },
]

const organizers = [
  {
    name: 'Satyam Tiwari',
    role: 'Convener, ICCH-AI 2026',
    subrole: 'Head of Program, Technology & Production',
    affiliation: 'Founder, YogaXBiofeedback Pvt Ltd (Dhyanly)',
    photo: '/organizers/satyamtiwaripic.png',
    profileUrl: 'https://www.dhyanly.com',
  },
  {
    name: 'Dr. Steve Haberlin',
    role: 'Co-Convener, ICCH-AI 2026',
    subrole: 'Head of Global Outreach',
    affiliation: 'University of Central Florida',
    photo: '/organizers/steve-haberlin.jpg',
    profileUrl: 'https://ccie.ucf.edu/person/steve-haberlin/',
  },
  {
    name: 'Prof. Amy Wheeler-Mantoan',
    role: 'Chair, Academic Programme Committee',
    subrole: '',
    affiliation: 'Notre Dame of Maryland University',
    photo: '/organizers/amy-wheeler-mantoan.jpg',
    profileUrl: 'https://www.ndm.edu/directory/amy-wheeler-mantoan',
  },
]

const speakers = [
  {
    name: 'Shri Akhilesh Mishra',
    title: 'Former Ambassador of India to Ireland · High Commissioner to the Maldives',
    affiliation: 'Indian Foreign Service (Retd.)',
    affiliationUrl: '',
    profileUrl: 'https://ie.linkedin.com/in/akhilesh-mishra-002456b6',
    photo: '/speakers/akhilesh-mishra.jpeg',
    bio: "Three decades of senior diplomacy followed by independent study of Sanskrit philosophical texts. His close reading of the Yoga Sutra and Upanishads situates India's contemplative heritage at the centre of a living intellectual tradition.",
  },
  {
    name: 'Prof. Christopher Key Chapple',
    title: 'Doshi Professor of Indic and Comparative Theology · Director, MA in Yoga Studies · Department of Theological Studies',
    affiliation: 'Loyola Marymount University',
    affiliationUrl: 'https://www.lmu.edu',
    profileUrl: 'https://scholars.lmu.edu/en/persons/christopher-chapple/',
    photo: '/speakers/christopher-key-chapple.jpg',
    bio: 'Holds the Doshi Chair in Indic and Comparative Theology at LMU and has authored more than twenty books tracing yoga, Jainism and Buddhism from classical textual sources through to contemporary practice and ecology.',
  },
  {
    name: 'Dr. Steve Haberlin',
    title: 'Assistant Professor, Curriculum & Instruction · College of Community Innovation and Education',
    affiliation: 'University of Central Florida',
    affiliationUrl: 'https://www.ucf.edu',
    profileUrl: 'https://ccie.ucf.edu/person/steve-haberlin/',
    photo: '/speakers/steve-haberlin.jpg',
    bio: 'Investigates how meditation and mindfulness integrate with emerging educational technology in structured academic settings. He is the author of Meditation in the College Classroom and Meta-Meditation.',
  },
  {
    name: 'Prof. Amy Wheeler-Mantoan',
    title: 'Professor & Chair, Yoga Therapy Department · School of Integrative Health',
    affiliation: 'Notre Dame of Maryland University',
    affiliationUrl: 'https://www.ndm.edu',
    profileUrl: 'https://www.ndm.edu/directory/amy-wheeler-mantoan',
    photo: '/speakers/amy-wheeler-mantoan.jpg',
    bio: 'Chairs the Yoga Therapy Department at Notre Dame of Maryland University and brings over two decades of clinical experience translating yoga into evidence-based therapeutic and sport-psychology practice, including work with national Olympic teams.',
  },
  {
    name: 'Satyam Tiwari',
    title: 'Founder & CEO, YogaXBiofeedback Pvt Ltd (Dhyanly) · Pioneer of Contemplative AI',
    affiliation: 'YogaXBiofeedback Pvt Ltd (Dhyanly)',
    affiliationUrl: 'https://www.dhyanly.com',
    profileUrl: 'https://www.dhyanly.com',
    photo: '/organizers/satyamtiwaripic.png',
    bio: 'A practitioner of the Svara Yoga tradition for over two decades, academically trained in yoga, Indian Knowledge Systems, AI and technology. As founder of Dhyanly and pioneer of Contemplative AI, he builds clinical-grade biosignal and biofeedback platforms translating IKS into rigorous mind-body digital therapeutics.',
  },
  {
    name: 'Dr. Amit Sethi',
    title: 'Associate Professor, Department of Occupational & Recreational Therapies · Director, NERD Lab',
    affiliation: 'University of Utah',
    affiliationUrl: 'https://www.utah.edu',
    profileUrl: 'https://health.utah.edu/staff/amit-sethi',
    photo: '/speakers/amit-sethi.jpg',
    bio: 'Directs the NERD Lab at the University of Utah, applying transcranial brain stimulation and movement science to develop evidence-based rehabilitation protocols for stroke recovery and neuromodulation-driven motor learning.',
  },
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
            <span className="hero-chip">Online Conference</span>
            <span className="hero-chip">Free to Attend</span>
          </div>

          {/* Title — explicit white */}
          <h1 className="display" style={{ color: '#FFFFFF', maxWidth: 880, marginBottom: 32 }}>
            International Conference on<br />Contemplative HealthTech<br />
            <span style={{ color: '#C69232' }}>and AI</span>
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.75, color: 'rgba(228,232,241,0.75)', maxWidth: 600, marginBottom: 16 }}>
            International Conference on Contemplative HealthTech and AI. The first sustained dialogue between ancient contemplative science and modern technology.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(228,232,241,0.6)', marginBottom: 8, letterSpacing: '0.01em' }}>
            <span style={{ color: '#C69232', fontWeight: 600 }}>Virtual Globally:</span> India offline venue for hybrid mode to be announced soon
          </p>
          <p style={{ fontSize: 12, color: 'rgba(228,232,241,0.38)', marginBottom: 48, letterSpacing: '0.04em' }}>
            18:30–22:30 IST &nbsp;·&nbsp; 9:00 am–1:00 pm EST &nbsp;·&nbsp; 3:00–7:00 pm CET
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-teal">Register Free</Link>
            <Link href="/schedule" className="hero-btn-outline">View Programme</Link>
          </div>

          {/* Organisers strip */}
          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(228,232,241,0.4)' }}>Organised by</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(228,232,241,0.65)' }}>YogaXBiofeedback Pvt Ltd (Dhyanly)</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>×</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(228,232,241,0.65)' }}>The India Center, University of Central Florida</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>×</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'rgba(228,232,241,0.65)' }}>Notre Dame of Maryland University</span>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ───────────────────────────────────────── */}
      <section id="partners" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Organisers &amp; Institutional Partners</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <h2 className="headline" style={{ maxWidth: 520 }}>
              Convened with leading institutions
            </h2>
            <p className="body" style={{ maxWidth: 380 }}>
              ICCH-AI 2026 is organised and academically anchored by partners spanning India and the United States.
            </p>
          </div>

          {/* Main partner cards — equal columns. Bordered per-card (rather than a
              shared-background gap trick) since a mixed-span grid like this one
              can leave an unfilled cell in the last row at various widths;
              per-card borders avoid that showing up as a stray solid block. */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 16, marginBottom: 64 }}>
            {mainPartners.map(inst => (
              <div key={inst.name} className={`hover-cell${inst.wide ? ' partner-card-wide' : ''}`} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '44px 36px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: 140, marginBottom: 28 }}>
                  <Image
                    src={inst.logo}
                    alt={inst.logoAlt}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left center' }}
                    unoptimized
                  />
                </div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>{inst.role}</p>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--foreground)', marginBottom: 4, letterSpacing: '-0.01em' }}>{inst.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted-light)', marginBottom: 10 }}>{inst.dept}</p>
                <p className="caption" style={{ lineHeight: 1.55 }}>{inst.desc}</p>
              </div>
            ))}
          </div>

          {/* Speaker institutions logo strip — auto-scrolling marquee */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 48 }}>
            <p className="label" style={{ marginBottom: 32 }}>Speakers represent institutions including</p>
            <div className="logo-marquee-wrap">
              <div className="logo-marquee-track">
                {[...speakerInstitutions, ...speakerInstitutions].map((si, i) => (
                  <div key={`${si.name}-${i}`} style={{
                    width: 300,
                    height: 160,
                    flexShrink: 0,
                    marginRight: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Image
                      src={si.logo}
                      alt={si.alt}
                      width={300}
                      height={160}
                      style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 80, alignItems: 'start' }}>
            <div>
              <p className="label" style={{ marginBottom: 20 }}>About ICCH-AI 2026</p>
              <h2 className="headline" style={{ marginBottom: 28 }}>
                Three worlds.<br />One conversation.
              </h2>
              <p className="body" style={{ marginBottom: 20 }}>
                ICCH-AI 2026 is the inaugural edition of what is intended to become an annual gathering, a space where Indian Knowledge Systems and Western empirical science meet as equal partners in inquiry.
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
                { heading: 'Ancient Practice', body: 'Centuries of lived knowledge on regulating the breath, nervous system, and mind; refined through direct experiential inquiry across traditions.' },
                { heading: 'Modern Science', body: 'Three decades of rigorous evidence, including neuroimaging, HRV and EEG studies, that formally documents what contemplative traditions have described experientially.' },
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
          <div className="grid-stat-4">
            {[
              { n: '2', label: 'Conference Days' },
              { n: '6', label: 'Research Pillars' },
              { n: '3', label: 'Parallel Tracks per Day' },
              { n: '7', label: 'Partner Institutions' },
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
              From foundational neuroscience to applied AI to ethical responsibility; each pillar is a distinct layer of the conversation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(330px, 100%), 1fr))', gap: 16 }}>
            {pillars.map(p => (
              <div key={p.n} style={{ background: 'var(--surface-3)', padding: '36px 32px', borderRadius: 8, borderLeft: '3px solid var(--teal)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Pillar {p.n}</span>
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
            ))}
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 24 }}>
            {[
              {
                day: 'Day 1', date: 'October 22, 2026',
                theme: 'The Science of Self-Regulation',
                sub: 'Mindfulness, HRV, Biofeedback and the Nervous System',
                plenary: 'Guided slow-paced breathing with live HRV biofeedback',
                tracks: ['Research: EEG to Wearables', 'Clinical: Digital Therapeutics', 'Traditional: Mindfulness and AI'],
                accent: 'var(--teal)',
              },
              {
                day: 'Day 2', date: 'October 23, 2026',
                theme: 'AI & Digital Therapeutics',
                sub: 'In Yoga, Meditation and Contemplative Practice',
                plenary: 'Can AI Deliver Contemplative Care Responsibly?',
                tracks: ['Research: IKS and AI', 'Clinical: Digital Therapeutics', 'Technology: Responsible AI'],
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

      {/* ─── ORGANIZING TEAM ────────────────────────────────── */}
      <section id="organizers" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Organizing Committee</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <h2 className="headline" style={{ maxWidth: 480 }}>
              The team behind ICCH-AI 2026
            </h2>
            <p className="body" style={{ maxWidth: 380 }}>
              Scholars, practitioners and technologists who have convened this conference and are responsible for its programme, partnerships and global reach.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {organizers.map((org, i) => (
              <div key={org.name} className={`organizer-card${i === 0 ? ' organizer-card--featured' : ''}`}>
                {/* Photo */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', background: 'var(--surface-3)', overflow: 'hidden' }}>
                  <Image
                    src={org.photo}
                    alt={org.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 300px"
                    style={{ objectFit: 'cover', objectPosition: 'center 15%', filter: 'grayscale(40%) sepia(5%) saturate(0.9) contrast(1.03)' }}
                    unoptimized
                  />
                  {i === 0 && (
                    <div style={{ position: 'absolute', top: 12, left: 12, padding: '3px 10px', background: 'var(--teal)', borderRadius: 3, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>
                      Convener
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '22px 24px 26px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--foreground)', marginBottom: 4, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{org.name}</h3>
                  <p style={{ fontSize: 12, fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.01em', marginBottom: org.subrole ? 2 : 8, lineHeight: 1.45 }}>{org.role}</p>
                  {org.subrole && <p style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 8, lineHeight: 1.4 }}>{org.subrole}</p>}
                  <p style={{ fontSize: 12, color: 'var(--muted-light)', marginBottom: 14, lineHeight: 1.5 }}>{org.affiliation}</p>
                  <a href={org.profileUrl} target="_blank" rel="noopener noreferrer" className="speaker-link" style={{ fontSize: 12, fontWeight: 600 }}>Profile →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPEAKERS ───────────────────────────────────────── */}
      <section id="speakers" className="section" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Speakers</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
            <h2 className="headline" style={{ maxWidth: 520 }}>
              Across contemplative science, clinical care and emerging technology
            </h2>
            <p className="body" style={{ maxWidth: 420 }}>
              Researchers, clinicians and scholars whose work runs through the conference&rsquo;s six pillars, from classical textual scholarship to AI-driven rehabilitation and biosignal science.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {speakers.map(sp => (
              <div key={sp.name} className="speaker-card">
                <div className="speaker-photo-frame">
                  <Image
                    src={sp.photo}
                    alt={sp.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 280px"
                    className="speaker-photo"
                    unoptimized
                  />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--foreground)', marginBottom: 6, letterSpacing: '-0.01em' }}>{sp.name}</h3>
                <p style={{ fontSize: 12.5, color: 'var(--muted-light)', lineHeight: 1.5, marginBottom: 10 }}>{sp.title}</p>
                <p style={{ fontSize: 12, fontWeight: 600, marginBottom: 14 }}>
                  {sp.affiliationUrl ? (
                    <a href={sp.affiliationUrl} target="_blank" rel="noopener noreferrer" className="speaker-link">{sp.affiliation}</a>
                  ) : (
                    <span style={{ color: 'var(--muted)' }}>{sp.affiliation}</span>
                  )}
                  <span style={{ color: 'var(--border-mid)', margin: '0 8px' }}>·</span>
                  <a href={sp.profileUrl} target="_blank" rel="noopener noreferrer" className="speaker-link">Profile</a>
                </p>
                <p style={{ fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.65 }}>{sp.bio}</p>
              </div>
            ))}

            {/* More speakers to be announced */}
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              textAlign: 'center', padding: '32px 24px', borderRadius: 8,
              border: '1px dashed var(--border-mid)', background: 'var(--surface-2)', minHeight: 240,
            }}>
              <span className="chip" style={{ fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Coming Soon</span>
              <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--foreground)', marginBottom: 8, letterSpacing: '-0.01em' }}>More speakers to be announced</p>
              <p style={{ fontSize: 13, color: 'var(--muted-light)', lineHeight: 1.6 }}>Additional researchers, clinicians and technologists will be added to the lineup as ICCH-AI 2026 approaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOOK LAUNCHES ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Featured at ICCH-AI 2026</p>
          <h2 className="headline" style={{ marginBottom: 48 }}>Book Launches</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))', gap: 24 }}>
            {[
              {
                title: 'Meta-Meditation for Mental Health Routage',
                author: 'Dr. Steve Haberlin',
                note: 'Day 1 Launch, October 22, 2026',
                cover: '/images/Meta-MeditationforMentalHealth.png',
              },
              {
                title: 'Sūtra to Sensor: HealthTech in IKS Blue One Inc.',
                author: 'Satyam Tiwari',
                note: 'Day 1 Launch, October 22, 2026',
                cover: '/images/sutratosensorbookcover.png',
              },
              {
                title: 'Applying Therapeutic Yoga in Integrative Health: A Guide for Re-Imagining Well-Being',
                author: 'Prof. Amy Wheeler-Mantoan & Marlysa Sullivan',
                note: 'Day 2 Launch, October 23, 2026',
                cover: '/images/amybookimage.jpg',
              },
            ].map(book => (
              <div key={book.title} className="card" style={{ padding: '28px 32px', display: 'flex', gap: 28, alignItems: 'flex-start' }}>
                {/* Book cover */}
                <div style={{ flexShrink: 0, width: 112, borderRadius: 4, overflow: 'hidden', boxShadow: '4px 6px 20px rgba(26,12,8,0.18)' }}>
                  <Image
                    src={book.cover}
                    alt={book.title + ' cover'}
                    width={112}
                    height={160}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    unoptimized
                  />
                </div>
                {/* Book info */}
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <span className="chip chip-teal" style={{ marginBottom: 16, fontSize: 11 }}>{book.note}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.4, letterSpacing: '-0.015em', color: 'var(--foreground)', marginBottom: 10, marginTop: 12 }}>{book.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted-light)' }}>by {book.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────── */}
      <section id="faq" className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>Common Questions</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <h2 className="headline" style={{ maxWidth: 480 }}>Frequently Asked Questions</h2>
            <p className="body" style={{ maxWidth: 380 }}>Everything you need to know before you register.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))', gap: 2, background: 'var(--border)' }}>
            {[
              {
                q: 'What is ICCH-AI 2026?',
                a: 'ICCH-AI 2026 is the International Conference on Contemplative HealthTech and AI, taking place on October 22 and 23, 2026. It is a free, fully online event organised by the University of Central Florida, Notre Dame of Maryland University, and YogaXBiofeedback (Dhyanly), open to participants worldwide.',
              },
              {
                q: 'Is attendance free?',
                a: 'Yes. Registration and attendance are completely free for all participants joining online from anywhere in the world.',
              },
              {
                q: 'Who should attend?',
                a: 'The conference welcomes researchers, clinicians, yoga therapists, AI engineers, digital health professionals, students, and anyone genuinely interested in the intersection of contemplative practice and technology.',
              },
              {
                q: 'What topics does the conference cover?',
                a: 'Six research pillars: Contemplative Neuroscience and Self-Regulation; Yoga, Ayurveda and Indian Knowledge Systems; AI and Digital Therapeutics; Biofeedback, Wearables and Biosignal Science; Clinical Translation and Digital Health Delivery; Ethics, Responsibility and the Future of the Field.',
              },
              {
                q: 'Can I present research at ICCH-AI 2026?',
                a: 'Yes. Researchers and practitioners are invited to submit work for consideration. Register on this site and watch for the formal call for abstracts announcement.',
              },
              {
                q: 'How do I join the online sessions?',
                a: 'ICCH-AI 2026 runs entirely online. After registering, you will receive a confirmation with the link to join the live sessions on the conference dates.',
              },
              {
                q: 'What time does the conference run?',
                a: 'Each day runs from 18:30 to 22:30 IST, which is 9:00 am to 1:00 pm EST and 3:00 pm to 7:00 pm CET. The schedule is designed to be accessible across major international time zones.',
              },
              {
                q: 'How do I register?',
                a: 'Click Register Free on this page. Fill in your details, select your areas of interest, and you will receive confirmation immediately. No payment is required at any stage.',
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: 'var(--surface)', padding: '32px 36px' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--foreground)', marginBottom: 12, lineHeight: 1.4, letterSpacing: '-0.01em' }}>{q}</h3>
                <p style={{ fontSize: 14, color: 'var(--muted-light)', lineHeight: 1.75 }}>{a}</p>
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
            Registration is free. Join neuroscientists, yoga therapists, AI researchers, clinicians and technologists from across multiple institutions and countries.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register Free</Link>
            <Link href="/schedule" className="btn btn-outline" style={{ padding: '14px 36px', fontSize: 15 }}>View Programme</Link>
          </div>
          <p className="caption" style={{ marginTop: 24 }}>Fully online worldwide &nbsp;·&nbsp; 18:30–22:30 IST &nbsp;·&nbsp; Free to attend</p>
        </div>
      </section>
    </>
  )
}
