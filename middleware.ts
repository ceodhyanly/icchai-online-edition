import { NextRequest, NextResponse } from 'next/server'

// In-memory rate limit store — resets on cold start, good enough for conference scale
// For high-traffic production use Upstash Redis instead
const store = new Map<string, { count: number; resetAt: number }>()

function check(key: string, max: number, windowMs: number): boolean {
  const now = Date.now()
  const rec = store.get(key)
  if (!rec || now > rec.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (rec.count >= max) return false
  rec.count++
  return true
}

// Paths that scanners and bots commonly probe — return 404 immediately
const BLOCKED = [
  '/wp-admin', '/wp-login', '/wp-content', '/.env', '/.git',
  '/phpmyadmin', '/admin.php', '/xmlrpc.php', '/config.php',
  '/setup.php', '/install.php', '/.DS_Store', '/backup',
  '/db.sql', '/dump.sql', '/shell', '/webshell', '/c99',
  '/eval-stdin.php', '/vendor/phpunit',
]

const ALLOWED_API_ORIGINS = [
  'https://icchai.com',
  'https://www.icchai.com',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const lower = pathname.toLowerCase()
  const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].trim()

  // ── Block scanner bait paths ─────────────────────────────────────────
  if (BLOCKED.some(p => lower.startsWith(p))) {
    return new NextResponse('Not Found', { status: 404 })
  }

  // ── Aggressive rate limit on auth endpoints ──────────────────────────
  if (pathname.startsWith('/api/auth/login') || pathname.startsWith('/api/auth/register')) {
    if (!check(`auth:${ip}`, 10, 15 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in 15 minutes.' },
        { status: 429, headers: { 'Retry-After': '900' } }
      )
    }
  }

  // ── General API rate limit ───────────────────────────────────────────
  if (pathname.startsWith('/api/')) {
    if (!check(`api:${ip}`, 120, 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please slow down.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      )
    }
  }

  const response = NextResponse.next()

  // ── CORS for API routes ──────────────────────────────────────────────
  if (pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin') ?? ''
    const isDev = process.env.NODE_ENV === 'development'
    if (isDev || ALLOWED_API_ORIGINS.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', isDev ? '*' : origin)
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
      response.headers.set('Access-Control-Max-Age', '86400')
      response.headers.set('Vary', 'Origin')
    }

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 204, headers: response.headers })
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico).*)',
  ],
}
