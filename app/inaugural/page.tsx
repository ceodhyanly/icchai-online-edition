import Image from 'next/image'
import Link from 'next/link'

type Person = {
  role: string
  name: string
  designation: string
  photo: string
  profileUrl?: string
}

const lineup: Person[] = [
  {
    role: 'Chief Guest',
    name: 'Prof. (Dr.) Tankeshwar Kumar',
    designation: 'Hon’ble Vice-Chancellor, Central University of Haryana',
    photo: '/speakers/tankeshwar-kumar.jpg',
  },
  {
    role: 'Guest of Honour',
    name: 'Shri Akhilesh Mishra',
    designation: 'Former Ambassador of India to Ireland · High Commissioner to the Maldives',
    photo: '/speakers/akhilesh-mishra.jpeg',
  },
  {
    role: 'Inaugural Keynote Address',
    name: 'Prof. (Dr.) Prerna Gaur',
    designation: 'Former Director, NSUT West Campus; IEEE Leader',
    photo: '/speakers/prerna-gaur.jpeg',
  },
  {
    role: 'Plenary Address (Online)',
    name: 'Prof. Rajeev Ahuja',
    designation: 'Director, IIT Ropar',
    photo: '/speakers/rajeev-ahuja.jpg',
  },
  {
    role: 'Vote of Thanks',
    name: 'Shri Ramesh Tiwari',
    designation: 'Director, YogaXBiofeedback Pvt Ltd (Dhyanly)',
    photo: '/speakers/ramesh-tiwari.png',
  },
  {
    role: 'Talk',
    name: 'Dr. Swayam Bagaria',
    designation: 'Assistant Professor of Hindu Studies, Harvard Divinity School',
    photo: '/speakers/swayam-bagaria.jpg',
  },
  {
    role: 'Talk',
    name: 'Dr. James Gomes',
    designation: 'Kusuma School of Biological Sciences, IIT Delhi',
    photo: '/speakers/james-gomes.png',
  },
  {
    role: 'Talk',
    name: 'Prof. Jyoti Kumar',
    designation: 'Department of Design, IIT Delhi',
    photo: '/speakers/jyoti-kumar.jpg',
  },
  {
    role: 'Talk',
    name: 'Prof. Rahul Garg',
    designation: 'Department of Computer Science and Engineering, IIT Delhi',
    photo: '/speakers/rahul-garg.jpg',
  },
  {
    role: 'Talk',
    name: 'Dr. Sangita Garg',
    designation: 'VP & Head of R&D, IHFC, IIT Delhi',
    photo: '/organizers/sangita-garg.jpg',
  },
  {
    role: 'Talk',
    name: 'Dr. Usha Udaar',
    designation: 'Assistant Professor, Department of Humanities and Social Sciences, IIT Kanpur',
    photo: '/speakers/usha-udaar.jpg',
  },
  {
    role: 'Talk',
    name: 'Dr. Arpit Kumar Dubey',
    designation: 'Morarji Desai National Institute of Yoga (MDNIY)',
    photo: '/speakers/arpit-dubey.jpg',
  },
  {
    role: 'Convenor',
    name: 'Satyam Tiwari',
    designation: 'ICCHAI 2026',
    photo: '/organizers/satyamtiwaripic.png',
  },
]

export default function InauguralPage() {
  return (
    <div style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ padding: '80px 0 64px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="label" style={{ marginBottom: 20 }}>In-Person · IIT Delhi</p>
          <h1 className="display" style={{ marginBottom: 20 }}>Inaugural Session</h1>
          <p className="body-lg" style={{ maxWidth: 640, marginBottom: 32 }}>
            Thursday, October 22, 2026 &nbsp;·&nbsp; 2:00 PM IST onward &nbsp;·&nbsp; In-person at IIT Delhi, New Delhi
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span className="chip chip-teal">In-Person</span>
            <span className="chip">RNA Park Auditorium, IIT Delhi</span>
          </div>
        </div>
      </section>

      {/* Lineup */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {lineup.map(p => (
              <div key={`${p.role}-${p.name}`} className="speaker-card">
                <div className="speaker-photo-frame">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 280px"
                    className="speaker-photo"
                    unoptimized
                  />
                </div>
                <span className="chip chip-teal" style={{ fontSize: 10, marginBottom: 10 }}>{p.role}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--foreground)', marginBottom: 6, letterSpacing: '-0.01em' }}>{p.name}</h3>
                <p style={{ fontSize: 12.5, color: 'var(--muted-light)', lineHeight: 1.5 }}>{p.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="headline" style={{ marginBottom: 16 }}>Join the Inaugural in person</h2>
          <p className="body" style={{ maxWidth: 520, margin: '0 auto 40px' }}>
            In-person attendance is capped at 100 seats, with priority for Delhi-NCR and nearby areas. Registration is first-come, first-served and subject to review.
          </p>
          <a href="https://forms.gle/xY2goeQCzn3YrNJx6" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ padding: '14px 36px', fontSize: 15 }}>Register for In-Person Attendance</a>
          <p style={{ marginTop: 24 }}>
            <Link href="/schedule" className="btn btn-ghost" style={{ fontSize: 14, color: 'var(--teal)' }}>Full schedule &rarr;</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
