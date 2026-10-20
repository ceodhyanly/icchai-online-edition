import Link from 'next/link'

type Session = {
  time: string
  session: string
  detail?: string
  type: string
  parallel?: boolean
  subItems?: { time: string; session: string; detail?: string }[]
  table?: { role: string; name: string; designation?: string }[]
  sequence?: { time: string; name: string; role?: string; designation?: string }[]
}

const mananaSequence: Session['sequence'] = [
  { time: '6:00 – 6:10 PM', name: 'Prof. Amy Wheeler-Mantoan', role: 'Guided Meditation', designation: 'Notre Dame of Maryland University' },
  { time: '6:10 – 6:25 PM', name: 'Prof. Amy Wheeler-Mantoan', role: 'NDMU Presentation', designation: 'Notre Dame of Maryland University' },
  { time: '6:25 – 6:40 PM', name: 'Dr. Steve Haberlin', role: 'UCF Presentation', designation: 'University of Central Florida' },
  { time: '6:40 – 6:55 PM', name: 'Dr. Aditya Rajput', role: 'IIT Ropar Presentation', designation: 'CoE-IKS, IIT Ropar' },
  { time: '6:55 – 7:10 PM', name: 'Prof. James Gomes', role: 'IIT Delhi Presentation', designation: 'Kusuma School of Biological Sciences, IIT Delhi' },
  { time: '7:10 – 7:25 PM', name: 'Satyam Tiwari', role: 'Dhyanly Presentation', designation: 'YogaXBiofeedback Pvt Ltd (Dhyanly) · IIT Mandi' },
  { time: '7:25 – 7:40 PM', name: 'Shri Raghav Krishnan', role: 'Brhat Presentation', designation: 'Brhat' },
  { time: '7:40 – 8:40 PM', name: 'Prof. Amy Wheeler-Mantoan · Dr. Steve Haberlin · Satyam Tiwari', role: 'Panel Discussion', designation: 'ICCHAI 2026' },
  { time: '8:40 – 8:55 PM', name: 'Dr. Khushbu Jain', role: 'Spotlight Talk', designation: 'Morarji Desai National Institute of Yoga (MDNIY)' },
  { time: '8:55 – 9:05 PM', name: 'Dr. Somya Nagar', role: 'Lightning Talk — "Devalaya to Dharma Sanchalan: A Blueprint for Mandir Governance"', designation: 'Banasthali Vidyapith' },
  { time: '9:05 – 9:15 PM', name: 'Dr. Sunita Chaudhari', role: 'Lightning Talk — "Translating Yogic Traits Through mHealth: Real-Time PPG–HRV Tracking for Quality of Life, Mental Health"', designation: 'MITWPU, Pune' },
  { time: '9:15 – 9:25 PM', name: 'Dr. Racheal Nikita Sharma', role: 'Lightning Talk — "The Mind in the Age of AI: Ancient Upanishadic Insights for Digital Mental Wellness"', designation: 'Dept. of Wellness & Yogic Science, MIT World Peace University, Pune' },
  { time: '9:25 – 9:30 PM', name: 'Rudrakshi Tomar', role: 'Lightning Talk — "Sagarbha and Agarbha Pranayama: Theory and Practice"', designation: 'ICCH-AI 2026' },
  { time: '9:30 – 9:35 PM', name: 'Prof. Amy Wheeler-Mantoan', role: 'Vote of Thanks', designation: 'Notre Dame of Maryland University' },
]

const day1: Session[] = [
  {
    time: '2:00 – 5:30 PM', session: 'Inaugural Session (In-Person, IIT Delhi)', type: 'main',
    sequence: [
      { time: '2:00 – 2:20 PM', name: 'Organising Team', role: 'Lamp Lighting & Welcome' },
      { time: '2:20 – 2:35 PM', name: 'Prof. (Dr.) Tankeshwar Kumar', role: 'Chief Guest Address', designation: 'Hon’ble Vice-Chancellor, Central University of Haryana' },
      { time: '2:35 – 2:50 PM', name: 'His Excellency Shri Akhilesh Mishra', role: 'Guest of Honour Address', designation: 'Former Ambassador of India to Ireland' },
      { time: '2:50 – 3:05 PM', name: 'Prof. (Dr.) Prerna Gaur', role: 'Inaugural Keynote Address', designation: 'Former Director, NSUT West Campus; IEEE Leader' },
      { time: '3:05 – 3:20 PM', name: 'Prof. Rajeev Ahuja', role: 'Plenary Talk (Online)', designation: 'Director, IIT Ropar' },
      { time: '3:20 – 3:35 PM', name: 'Dr. Swayam Bagaria', role: 'Talk', designation: 'Assistant Professor of Hindu Studies, Harvard Divinity School' },
      { time: '3:35 – 3:50 PM', name: 'Dr. James Gomes', role: 'Talk', designation: 'Kusuma School of Biological Sciences, IIT Delhi' },
      { time: '3:50 – 4:05 PM', name: 'Prof. Jyoti Kumar', role: 'Talk', designation: 'Department of Design, IIT Delhi' },
      { time: '4:05 – 4:20 PM', name: 'Prof. Rahul Garg', role: 'Talk', designation: 'Department of Computer Science and Engineering, IIT Delhi' },
      { time: '4:20 – 4:30 PM', name: 'Dr. Sangita Garg', role: 'Talk', designation: 'VP & Head of R&D, IHFC, IIT Delhi' },
      { time: '4:30 – 4:40 PM', name: 'Dr. Usha Udaar', role: 'Talk', designation: 'Assistant Professor, Department of Humanities and Social Sciences, IIT Kanpur' },
      { time: '4:40 – 4:50 PM', name: 'Dr. Arpit Kumar Dubey', role: 'Talk', designation: 'Morarji Desai National Institute of Yoga (MDNIY)' },
      { time: '4:50 – 5:00 PM', name: 'Satyam Tiwari', role: 'Talk', designation: 'Convenor, ICCHAI 2026' },
      { time: '5:00 – 5:05 PM', name: 'Shri Ramesh Tiwari', role: 'Vote of Thanks', designation: 'Director, YogaXBiofeedback Pvt Ltd (Dhyanly)' },
      { time: '5:05 – 5:30 PM', name: 'Refreshment & Networking', role: 'Break' },
    ],
  },
  {
    time: '5:30 – 8:50 PM', session: 'Hybrid Spotlight Talks & Panel', type: 'main',
    sequence: [
      { time: '5:30 – 5:40 PM', name: 'Prof. Amy Wheeler-Mantoan', role: 'Chair / Opening Meditation', designation: 'Professor & Chair, Yoga Therapy Department, Notre Dame of Maryland University' },
      { time: '5:45 – 6:05 PM', name: 'Dr. Bala Subramaniam', role: 'Spotlight Talk 1', designation: 'Professor of Anesthesiology, Harvard Medical School · Beth Israel Deaconess Medical Center' },
      { time: '6:05 – 6:25 PM', name: 'Dr. Sara Lazar', role: 'Spotlight Talk 2', designation: 'Associate Researcher, Psychiatry, Massachusetts General Hospital · Harvard Medical School' },
      { time: '6:25 – 6:45 PM', name: 'Dr. Sanjay Mishra, IAS', role: 'Spotlight Talk 3', designation: 'Ministry of AYUSH, Government of India' },
      { time: '6:50 – 7:05 PM', name: 'Prof. Amy Wheeler-Mantoan', role: 'Spotlight Talk 4', designation: 'Professor & Chair, Yoga Therapy Department, Notre Dame of Maryland University' },
      { time: '7:05 – 7:20 PM', name: 'Satyam Tiwari', role: 'Spotlight Talk 5', designation: 'Founder & CEO, YogaXBiofeedback Pvt Ltd (Dhyanly) · SRF, IIT Mandi' },
      { time: '7:20 – 7:30 PM', name: 'Dhyanly Team', role: 'Contemplative Tech Demo', designation: 'YogaXBiofeedback Pvt Ltd (Dhyanly)' },
      { time: '7:45 – 8:00 PM', name: 'Prof. Christopher Key Chapple', role: 'Spotlight Talk 7', designation: 'Doshi Professor of Indic and Comparative Theology, Loyola Marymount University' },
      { time: '8:00 – 8:50 PM', name: 'Prof. Christopher Key Chapple · Prof. Amy Wheeler-Mantoan · Dr. Steve Haberlin · Satyam Tiwari', role: 'Panel Discussion', designation: 'Loyola Marymount University · Notre Dame of Maryland University · University of Central Florida · YogaXBiofeedback (Dhyanly)' },
      { time: '8:45 – 9:10 PM', name: 'Dr. Steve Haberlin', role: 'Spotlight Talk 6', designation: 'Assistant Professor, Curriculum & Instruction, University of Central Florida' },
    ],
  },
]

const day2: Session[] = [
  {
    time: '5:30 – 6:50 PM', session: 'Opening & Spotlight Talks', type: 'main',
    sequence: [
      { time: '5:30 – 5:50 PM', name: 'Dr. Michael R. Sheehy', role: 'Spotlight Talk 1', designation: 'Research Associate Professor, Department of Religious Studies, University of Virginia' },
      { time: '5:50 – 6:10 PM', name: 'Dr. Marieke van Vugt', role: 'Spotlight Talk 2', designation: 'Associate Professor, Department of Artificial Intelligence (ALICE), University of Groningen' },
      { time: '6:30 – 6:50 PM', name: 'Dr. Sat Bir Singh Khalsa', role: 'Spotlight Talk 4', designation: 'Harvard Medical School' },
    ],
  },
  {
    time: '6:50 – 8:00 PM', session: 'Track 1', detail: 'Yoga, Mindfulness, Meditation and Dharma in the Era of AI and HealthTech', type: 'breakout', parallel: true,
    sequence: [
      { time: '—', name: 'Dr. Steve Haberlin', role: 'Chair', designation: 'Assistant Professor, Curriculum & Instruction, University of Central Florida' },
      { time: '—', name: 'Aditya Pandey', role: 'Support', designation: 'Head of International Operations, ICCH-AI 2026' },
      { time: '—', name: 'Sai Priya Chodavarapu · Tanya Fransz', role: 'Support', designation: 'Head of Programme Documentation · Head of Media & Promotion, ICCH-AI 2026' },
      { time: '6:50 – 7:05 PM', name: 'Prof. Ithamar Theodor', role: 'Speaker', designation: 'Professor of Hindu and Indian Studies, Bar-Ilan University' },
      { time: '7:05 – 7:20 PM', name: 'Dr. Ishwar V. Basavaraddi', role: 'Speaker', designation: 'Director & Professor, Centre for Yoga, Wellness and Integrative Medicine, MGUMST Jaipur' },
      { time: '7:20 – 7:30 PM', name: 'Dr. Yikai Xu', role: 'Speaker', designation: 'New York University' },
      { time: '7:30 – 7:45 PM', name: 'Dr. Arnav Bhavsar', role: 'Speaker', designation: 'Chair, IKSMHA Centre, IIT Mandi' },
      { time: '7:45 – 8:00 PM', name: 'Prof. Christopher Key Chapple', role: 'Speaker', designation: 'Doshi Professor of Indic and Comparative Theology, Loyola Marymount University' },
    ],
  },
  {
    time: '6:50 – 7:50 PM', session: 'Track 2', detail: 'Indian Knowledge Systems & AI, including Ayurveda: Diagnostics, Dosha Profiling and Personalised Digital Health', type: 'breakout', parallel: true,
    sequence: [
      { time: '—', name: 'Dr. Amy Wheeler-Mantoan', role: 'Chair', designation: 'Professor & Chair, Yoga Therapy Department, Notre Dame of Maryland University' },
      { time: '—', name: 'Satyam Tiwari', role: 'Co-Chair', designation: 'Founder & CEO, YogaXBiofeedback Pvt Ltd (Dhyanly) · SRF, IIT Mandi' },
      { time: '—', name: 'Rudrakshi Tomar · Shivangi Sharma', role: 'Support', designation: 'Head of Communications · Social Media Lead, ICCH-AI 2026' },
      { time: '6:50 – 7:05 PM', name: 'Dr. Varun Dutt', role: 'Speaker', designation: 'Professor, School of Computing and Electrical Engineering, IIT Mandi' },
      { time: '7:05 – 7:20 PM', name: 'Dr. Hemant Bhargav', role: 'Speaker', designation: 'Associate Professor, Department of Integrative Medicine, NIMHANS' },
      { time: '7:20 – 7:35 PM', name: 'Dr. Prathosh A P', role: 'Speaker', designation: 'Assistant Professor, Department of Electrical Communication Engineering, IISc Bengaluru' },
      { time: '7:35 – 7:50 PM', name: 'Dr. Mrittunjoy Guha Majumdar', role: 'Speaker', designation: 'Amrita Vishwa Vidyapeetham' },
    ],
  },
  {
    time: '8:00 – 9:30 PM', session: 'Track 3', detail: 'Contemplative Neuroscience in the Era of HealthTech and AI (fMRI, EEG, Mental Health)', type: 'breakout', parallel: true,
    sequence: [
      { time: '—', name: 'Dr. Steve Haberlin', role: 'Chair', designation: 'Assistant Professor, Curriculum & Instruction, University of Central Florida' },
      { time: '—', name: 'Aditya Pandey', role: 'Support', designation: 'Head of International Operations, ICCH-AI 2026' },
      { time: '—', name: 'Sai Priya Chodavarapu · Tanya Fransz', role: 'Support', designation: 'Head of Programme Documentation · Head of Media & Promotion, ICCH-AI 2026' },
      { time: '8:00 – 8:15 PM', name: 'Dr. Evan Lewis-Healey', role: 'Speaker', designation: 'Postdoctoral Researcher, Department of Psychiatry, University of Oxford' },
      { time: '8:15 – 8:30 PM', name: 'Dr. Winson Yang', role: 'Speaker', designation: 'Junior Faculty and Instructor, Harvard Medical School · Massachusetts General Hospital' },
      { time: '8:30 – 8:45 PM', name: 'Dr. Kilian Abellaneda-Pérez', role: 'Speaker', designation: 'University of Lleida · Institut Guttmann, Spain' },
      { time: '8:45 – 9:00 PM', name: 'Dr. Manish Saggar', role: 'Speaker', designation: 'Associate Professor of Psychiatry & Behavioral Sciences, Stanford University' },
      { time: '9:00 – 9:15 PM', name: 'Prof. Ramakrishnan Mani', role: 'Speaker', designation: 'Associate Professor & Associate Dean (Research), University of Otago' },
      { time: '9:15 – 9:30 PM', name: 'Satyam Tiwari · Prof. Amy Wheeler-Mantoan', role: 'Vote of Thanks' },
    ],
  },
  {
    time: '8:00 – 9:30 PM', session: 'Track 4', detail: 'Contemplative Tech Innovation (HaaS, SaaS based on Contemplative Sciences)', type: 'breakout', parallel: true,
    sequence: [
      { time: '—', name: 'Dr. Amy Wheeler-Mantoan', role: 'Chair', designation: 'Professor & Chair, Yoga Therapy Department, Notre Dame of Maryland University' },
      { time: '—', name: 'Satyam Tiwari', role: 'Co-Chair', designation: 'Founder & CEO, YogaXBiofeedback Pvt Ltd (Dhyanly) · SRF, IIT Mandi' },
      { time: '—', name: 'Rudrakshi Tomar · Shivangi Sharma', role: 'Support', designation: 'Head of Communications · Social Media Lead, ICCH-AI 2026' },
      { time: '8:00 – 8:15 PM', name: 'Mihir Nath', role: 'Speaker', designation: 'Research Assistant, Flourishing Intelligence Program, University of Oxford' },
      { time: '8:15 – 8:30 PM', name: 'Dr. Venkatesh Hanumant Rao Chembrolu', role: 'Speaker', designation: 'Associate Professor, Indian Institute of Technology, Mandi' },
      { time: '8:30 – 8:45 PM', name: 'Satyam Tiwari', role: 'Speaker', designation: 'Founder & CEO, YogaXBiofeedback Pvt Ltd (Dhyanly) · SRF, IIT Mandi' },
      { time: '8:45 – 9:00 PM', name: 'Dr. Shubhajit Roy Chowdhury', role: 'Speaker', designation: 'Professor, School of Computing and Electrical Engineering, IIT Mandi' },
      { time: '9:00 – 9:20 PM', name: 'Dr. Eric Garland', role: 'Speaker', designation: 'Endowed Professor in Health Sciences, University of California San Diego' },
      { time: '9:20 – 9:30 PM', name: 'Satyam Tiwari · Prof. Amy Wheeler-Mantoan', role: 'Vote of Thanks' },
    ],
  },
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
            October 21–23, 2026 &nbsp;·&nbsp; A pre-conference roundtable and two conference days &nbsp;·&nbsp; Times shown in IST
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
              'Day 1 is hybrid — on-site at IIT Delhi, New Delhi and streamed live worldwide. The Manana pre-conference roundtable and Day 2 are online only.',
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

      {/* Pre-Conference: Manana */}
      <section style={{ padding: '80px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
            <span className="chip chip-teal" style={{ fontSize: 11 }}>Pre-Conference</span>
            <span className="caption">October 21, 2026</span>
            <span className="caption">·</span>
            <span className="caption">Online only</span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 750, letterSpacing: '-0.025em', marginBottom: 6 }}>
            Manana: The Contemplative Futures Roundtable
          </h2>
          <p className="body" style={{ marginBottom: 40, maxWidth: 720 }}>
            A virtual, researcher-level roundtable for IKS, Yoga, Mindfulness and Meditation departments. It covers
            ongoing research, cross-institutional collaboration, accelerating research, mutual grant writing and
            guidance in the field.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: 16 }}>
            {[
              { k: 'Date', v: 'Wednesday, October 21, 2026' },
              { k: 'Time', v: '6:00 PM IST · 8:30 AM ET · 2:30 PM CEST' },
              { k: 'Duration', v: '3.5 hours' },
              { k: 'Format', v: 'Virtual (link sent on registration)' },
              { k: 'Chair', v: 'Prof. Amy Wheeler-Mantoan, Notre Dame of Maryland University' },
              { k: 'Co-Chair', v: 'Satyam Tiwari, YogaXBiofeedback (Dhyanly)' },
              { k: 'Coordinator', v: 'Dr. Aditya Rajput, CoE-IKS, IIT Ropar' },
              { k: 'Cost', v: 'Free' },
            ].map(x => (
              <div key={x.k} style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 26px' }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>{x.k}</p>
                <p style={{ fontSize: 15, fontWeight: 650, lineHeight: 1.45, color: 'var(--foreground)' }}>{x.v}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 6, padding: '28px 26px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>Audience</p>
            <p style={{ fontSize: 15, fontWeight: 650, lineHeight: 1.45, color: 'var(--foreground)' }}>HoDs, faculty, PhD, Master&apos;s and Bachelor&apos;s students from IKS, Yoga, Mindfulness and Meditation departments</p>
          </div>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 40, marginBottom: 4 }}>
            Full Manana Programme <span style={{ color: 'var(--muted-light)', fontWeight: 600 }}>· times in IST</span>
          </p>
          <SequenceTable rows={mananaSequence} />

          <div style={{ marginTop: 32, background: 'var(--surface-2)', border: '1px solid var(--teal-border)', borderTop: '3px solid var(--teal)', borderRadius: 6, padding: '32px 32px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>Manana registration</p>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Separate from conference registration</h3>
            <p className="body" style={{ maxWidth: 680, marginBottom: 20 }}>
              Speakers, heads of department, faculty, and PhD, Master&apos;s and Bachelor&apos;s students from IKS, Yoga, Mindfulness and Meditation departments registered for Manana through its own form. You do not need to register for the conference to join Manana.
            </p>
            <span className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15, opacity: 0.55, cursor: 'not-allowed' }}>Manana registration is now closed</span>
          </div>
          <div style={{ marginTop: 20, padding: '24px 32px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6 }}>
            <p style={{ fontSize: 15, fontWeight: 650, marginBottom: 10 }}>Attending the conference on 22–23 October?</p>
            <p className="caption" style={{ marginBottom: 16 }}>Conference attendee registration is a separate form, with its own details and attendance options.</p>
            <Link href="/register" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: 14 }}>Register Free for the Conference</Link>
          </div>
        </div>
      </section>

      {/* In-Person Inaugural Registration */}
      <section style={{ padding: '56px 0', background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--teal-border)', borderTop: '3px solid var(--teal)', borderRadius: 6, padding: '32px 32px' }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 10 }}>In-Person Registration</p>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Attending the Inaugural in person at IIT Delhi?</h3>
            <p className="body" style={{ maxWidth: 680, marginBottom: 20 }}>
              The in-person Inaugural Gathering on 22 October 2026 (check-in 1:30 PM, programme 2:00–7:30 PM, RNA Park Auditorium, IIT Delhi) is capped at 100 participants, with priority given to attendees based in Delhi-NCR and nearby areas. Registration is first-come, first-served and subject to review — submitting the form does not confirm a place; confirmation and entry passes are sent separately by email or WhatsApp. The registration deadline is 17 October 2026, 3:00 PM IST.
            </p>
            <a href="https://forms.gle/xY2goeQCzn3YrNJx6" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register for In-Person Attendance</a>
          </div>
        </div>
      </section>

      {/* Day 1 */}
      <DayBlock label="Day 1" date="October 22, 2026" format="Hybrid — IIT Delhi, New Delhi + online worldwide"
        theme="Opening the Dialogue" sub="Inauguration, headline spotlight talks and the opening panel — the contemplative traditions and the sciences in one room"
        sessions={day1} bg="var(--background)" />

      {/* Day 2 */}
      <DayBlock label="Day 2" date="October 23, 2026" format="Online only — worldwide"
        theme="Four Tracks, One Field" sub="Practice and dharma, Indian Knowledge Systems, contemplative neuroscience, and contemplative-tech innovation — running in parallel"
        sessions={day2} bg="var(--surface)" />

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

function SequenceTable({ rows }: { rows: Session['sequence'] }) {
  if (!rows) return null
  return (
    <div style={{ marginTop: 16, overflowX: 'auto', border: '1px solid var(--border)', borderRadius: 6 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
        <thead>
          <tr style={{ background: 'var(--surface-2)' }}>
            <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Time</th>
            <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Speaker</th>
            <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, k) => (
            <tr key={k} style={{ borderBottom: k < rows.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <td style={{ padding: '10px 16px', color: 'var(--teal)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.time}</td>
              <td style={{ padding: '10px 16px' }}>
                <span style={{ fontWeight: 650, color: 'var(--foreground)', display: 'block' }}>{row.name}</span>
                {row.designation && <span style={{ fontSize: 12, color: 'var(--muted-light)', display: 'block', marginTop: 2 }}>{row.designation}</span>}
              </td>
              <td style={{ padding: '10px 16px', color: 'var(--muted-light)', whiteSpace: 'nowrap' }}>{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
                    {s.sequence && <SequenceTable rows={s.sequence} />}
                    {s.table && (
                      <div style={{ marginTop: 16, overflowX: 'auto', border: '1px solid var(--border)', borderRadius: 6 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
                          <thead>
                            <tr style={{ background: 'var(--surface-2)' }}>
                              <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Role</th>
                              <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Name</th>
                              <th style={{ textAlign: 'left', padding: '10px 16px', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>Designation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {s.table.map((row, k) => (
                              <tr key={k} style={{ borderBottom: k < s.table!.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                <td style={{ padding: '10px 16px', color: 'var(--teal)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.role}</td>
                                <td style={{ padding: '10px 16px', fontWeight: 650, color: 'var(--foreground)', whiteSpace: 'nowrap' }}>{row.name}</td>
                                <td style={{ padding: '10px 16px', color: 'var(--muted-light)' }}>{row.designation}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
