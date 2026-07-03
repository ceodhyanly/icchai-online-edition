'use client'

import Link from 'next/link'

const nav = [
  { heading: 'Conference', links: [['/#partners','Partners'], ['/#about','About'], ['/#pillars','Pillars'], ['/schedule','Schedule'], ['/#speakers','Speakers']] },
  { heading: 'Attend', links: [['/register','Register Free'], ['/login','Sign In'], ['/schedule','Full Programme']] },
  { heading: 'Legal', links: [['/privacy','Privacy Policy'], ['/terms','Terms of Use'], ['/cookies','Cookie Policy'], ['/#faq','FAQs']] },
]

export default function Footer() {
  return (
    <footer style={{ background: '#16040A', borderTop: '3px solid #A41C30' }}>
      <div className="container" style={{ padding: '72px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(3, 1fr)', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 3 }}>
                ICCHAI <span style={{ color: '#A41C30' }}>2026</span>
              </div>
              <div style={{ fontSize: 9.5, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(228,220,212,0.38)' }}>
                Contemplative HealthTech and AI
              </div>
            </div>
            <p style={{ fontSize: 12, lineHeight: 1.7, color: 'rgba(228,220,212,0.50)', marginBottom: 20, maxWidth: 280 }}>
              International Conference on Contemplative HealthTech and AI. The first sustained dialogue between ancient contemplative science and modern technology.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 3, fontSize: 11, fontWeight: 500, color: 'rgba(228,220,212,0.55)', letterSpacing: '0.02em' }}>Oct 22–23, 2026</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 3, fontSize: 11, fontWeight: 500, color: 'rgba(228,220,212,0.55)', letterSpacing: '0.02em' }}>Hybrid</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', padding: '4px 12px', background: 'rgba(198,146,50,0.10)', border: '1px solid rgba(198,146,50,0.25)', borderRadius: 3, fontSize: 11, fontWeight: 500, color: 'rgba(198,146,50,0.80)', letterSpacing: '0.02em' }}>IIT Delhi + Online</span>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(228,220,212,0.40)', lineHeight: 1.6 }}>
              Contact: <a href="mailto:info@icchai.com" style={{ color: 'rgba(198,146,50,0.70)', textDecoration: 'none' }}>info@icchai.com</a>
            </p>
          </div>

          {nav.map(group => (
            <div key={group.heading}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(228,220,212,0.35)', marginBottom: 20 }}>{group.heading}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.links.map(([href, label]) => (
                  <Link key={label} href={href} style={{ fontSize: 13, color: 'rgba(228,220,212,0.60)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.01em' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C69232')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(228,220,212,0.60)')}
                  >{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.10)', marginBottom: 28 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, paddingBottom: 32 }}>
          <p style={{ fontSize: 12, color: 'rgba(228,220,212,0.35)' }}>&copy; 2026 ICCHAI. Organised by YogaXBiofeedback Pvt Ltd (Dhyanly).</p>
          <p style={{ fontSize: 12, color: 'rgba(228,220,212,0.35)' }}>18:30–22:30 IST &nbsp;·&nbsp; 9:00 am–1:00 pm EST &nbsp;·&nbsp; 3:00–7:00 pm CET</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
