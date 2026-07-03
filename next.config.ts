import type { NextConfig } from 'next'
import path from 'path'

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ')

const PermissionsPolicy = [
  'camera=()', 'microphone=()', 'geolocation=()', 'payment=()',
  'usb=()', 'bluetooth=()', 'serial=()', 'midi=()', 'hid=()',
  'interest-cohort=()', 'browsing-topics=()', 'accelerometer=()',
  'gyroscope=()', 'magnetometer=()', 'ambient-light-sensor=()',
  'autoplay=()', 'encrypted-media=()', 'picture-in-picture=()',
].join(', ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: PermissionsPolicy },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
  { key: 'X-Download-Options', value: 'noopen' },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: path.join(__dirname),
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        // Cache static assets aggressively
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache public images
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Redirect www to non-www (or vice versa — handled by Vercel, but belt-and-suspenders)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.icchai.com' }],
        destination: 'https://icchai.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
