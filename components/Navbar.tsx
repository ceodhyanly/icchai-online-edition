'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const links = [
  { href: '/#partners', label: 'Partners' },
  { href: '/#about', label: 'About' },
  { href: '/#pillars', label: 'Pillars' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/#organizers', label: 'Team' },
  { href: '/#speakers', label: 'Speakers' },
]

const societyLink = { href: '/society', label: 'Society' }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled ? 'rgba(255,255,255,0.97)' : 'transparent'
  const navBorder = scrolled ? '1px solid rgba(26,12,8,0.09)' : '1px solid transparent'
  const linkColor = scrolled ? '#6E5A4E' : 'rgba(228,220,212,0.82)'
  const linkHoverColor = scrolled ? '#A41C30' : '#ffffff'
  const wordmarkPrimary = scrolled ? '#1A0C08' : '#FFFFFF'
  const wordmarkAccent = '#A41C30'
  const wordmarkSub = scrolled ? '#6E5A4E' : 'rgba(228,220,212,0.52)'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
      background: navBg,
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: navBorder,
      boxShadow: scrolled ? '0 1px 24px rgba(26,12,8,0.07)' : 'none',
    }}>
      {/* Harvard-style crimson accent stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#A41C30', zIndex: 1 }} />

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, position: 'relative', zIndex: 2 }}>

        {/* Wordmark */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{
            fontSize: 15, fontWeight: 800, letterSpacing: '-0.02em',
            color: wordmarkPrimary, lineHeight: 1,
            transition: 'color 0.35s',
          }}>
            ICCHAI <span style={{ color: wordmarkAccent }}>2026</span>
          </span>
          <span style={{
            fontSize: 9.5, fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: wordmarkSub, lineHeight: 1,
            transition: 'color 0.35s',
          }}>
            Contemplative HealthTech and AI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 14, fontWeight: 500, letterSpacing: '0.01em',
              color: linkColor, textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHoverColor)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >{l.label}</Link>
          ))}
          <Link href={societyLink.href} style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.02em',
            color: '#C69232', textDecoration: 'none', transition: 'all 0.2s',
            padding: '6px 14px', borderRadius: 20,
            background: scrolled ? 'rgba(198,146,50,0.10)' : 'rgba(198,146,50,0.16)',
            border: '1px solid rgba(198,146,50,0.45)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(198,146,50,0.24)' }}
            onMouseLeave={e => { e.currentTarget.style.background = scrolled ? 'rgba(198,146,50,0.10)' : 'rgba(198,146,50,0.16)' }}
          >{societyLink.label}</Link>
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="nav-desktop">
          <Link href="/login" style={{
            fontSize: 14, fontWeight: 500, color: linkColor,
            textDecoration: 'none', transition: 'color 0.2s',
            letterSpacing: '0.01em',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = linkHoverColor)}
            onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
          >Sign in</Link>
          <Link href="/register" className="btn btn-teal" style={{ padding: '10px 20px', fontSize: 13 }}>
            Register
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: 5 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: open && i === 1 ? 'transparent' : scrolled ? '#1A0C08' : 'rgba(228,220,212,0.9)',
              transform: open && i === 0 ? 'rotate(45deg) translate(5px,5px)' : open && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              transition: 'all 0.25s',
              borderRadius: 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(26,12,8,0.09)',
          padding: '28px 24px 32px',
          display: 'flex', flexDirection: 'column', gap: 24,
          position: 'relative', zIndex: 2,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" style={{ fontSize: 17, color: '#1A0C08' }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href={societyLink.href} onClick={() => setOpen(false)} style={{
            display: 'inline-flex', alignSelf: 'flex-start', fontSize: 15, fontWeight: 700,
            color: '#B07C1E', textDecoration: 'none', padding: '8px 16px', borderRadius: 20,
            background: 'rgba(198,146,50,0.14)', border: '1px solid rgba(198,146,50,0.45)',
          }}>{societyLink.label}</Link>
          <hr style={{ border: 'none', borderTop: '1px solid rgba(26,12,8,0.09)' }} />
          <Link href="/login" className="btn btn-outline" style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setOpen(false)}>Sign in</Link>
          <Link href="/register" className="btn btn-teal" style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setOpen(false)}>Register Free</Link>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 840px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
