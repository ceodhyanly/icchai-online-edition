import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://icchai.com'),
  icons: {
    icon: '/images/emoticonimg.png',
    shortcut: '/images/emoticonimg.png',
    apple: '/images/emoticonimg.png',
  },
  title: {
    default: 'ICCHAI 2026 | International Conference on Contemplative HealthTech and AI',
    template: '%s | ICCHAI 2026',
  },
  description: 'ICCHAI 2026 is the International Conference on Contemplative HealthTech and AI. October 22–23, 2026. Free hybrid event, in-person at IIT Delhi and online worldwide. Bringing together yoga researchers, AI engineers, clinicians and contemplative scientists.',
  keywords: [
    'contemplative healthtech', 'AI yoga conference', 'meditation neuroscience', 'digital health conference',
    'ICCHAI 2026', 'yoga therapy AI', 'biofeedback research', 'HRV contemplative science',
    'IIT Delhi conference', 'mindfulness technology', 'Indian Knowledge Systems', 'digital therapeutics',
    'contemplative neuroscience conference', 'AI mental health', 'contemplative AI',
  ],
  authors: [{ name: 'Satyam Tiwari', url: 'https://www.dhyanly.com' }],
  creator: 'YogaXBiofeedback Pvt Ltd (Dhyanly)',
  publisher: 'ICCHAI 2026',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'ICCHAI 2026 | International Conference on Contemplative HealthTech and AI',
    description: 'Free hybrid conference on AI, yoga, meditation and contemplative science. October 22–23, 2026. In-person at IIT Delhi and online worldwide.',
    type: 'website',
    url: 'https://icchai.com',
    siteName: 'ICCHAI 2026',
    images: [{ url: '/images/og-image.svg', width: 1200, height: 630, alt: 'ICCHAI 2026 Conference' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICCHAI 2026 | International Conference on Contemplative HealthTech and AI',
    description: 'Free hybrid conference on AI, yoga, meditation and contemplative science. October 22–23, 2026.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: 'https://icchai.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': 'https://icchai.com/#event',
      name: 'ICCHAI 2026: International Conference on Contemplative HealthTech and AI',
      description: 'The inaugural International Conference on Contemplative HealthTech and AI, bringing together researchers, clinicians, and technologists at the intersection of yoga, meditation, AI, and digital health. Free hybrid event held in-person at IIT Delhi and online worldwide.',
      url: 'https://icchai.com',
      startDate: '2026-10-22T18:30:00+05:30',
      endDate: '2026-10-23T22:30:00+05:30',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
      image: 'https://icchai.com/images/og-image.svg',
      location: [
        {
          '@type': 'Place',
          name: 'IIT Delhi, National Resource Centre for Value Education in Engineering (NRCVEE)',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hauz Khas',
            addressLocality: 'New Delhi',
            addressRegion: 'Delhi',
            postalCode: '110016',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'VirtualLocation',
          url: 'https://icchai.com',
        },
      ],
      organizer: [
        {
          '@type': 'Organization',
          name: 'YogaXBiofeedback Pvt Ltd (Dhyanly)',
          url: 'https://www.dhyanly.com',
        },
        {
          '@type': 'Organization',
          name: 'The India Center, University of Central Florida',
          url: 'https://www.ucf.edu',
        },
      ],
      performer: [
        { '@type': 'Person', name: 'Shri Akhilesh Mishra', jobTitle: 'Former Ambassador of India' },
        { '@type': 'Person', name: 'Prof. Christopher Key Chapple', jobTitle: 'Doshi Professor, Loyola Marymount University' },
        { '@type': 'Person', name: 'Dr. Steve Haberlin', jobTitle: 'Assistant Professor, University of Central Florida' },
        { '@type': 'Person', name: 'Prof. Amy Wheeler-Mantoan', jobTitle: 'Professor, Notre Dame of Maryland University' },
        { '@type': 'Person', name: 'Satyam Tiwari', jobTitle: 'Founder, YogaXBiofeedback Pvt Ltd (Dhyanly)' },
        { '@type': 'Person', name: 'Prof. James Gomes', jobTitle: 'Professor, IIT Delhi' },
        { '@type': 'Person', name: 'Dr. Amit Sethi', jobTitle: 'Associate Professor, University of Utah' },
        { '@type': 'Person', name: 'Dr. Rohit Saluja', jobTitle: 'Assistant Professor, IIT Mandi' },
        { '@type': 'Person', name: 'Dr. Kunal Mooley', jobTitle: 'Assistant Professor, IIT Kanpur' },
      ],
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://icchai.com/register',
        validFrom: '2026-01-01',
      },
      about: [
        { '@type': 'Thing', name: 'Contemplative Neuroscience' },
        { '@type': 'Thing', name: 'Yoga Therapy' },
        { '@type': 'Thing', name: 'Artificial Intelligence in Healthcare' },
        { '@type': 'Thing', name: 'Digital Therapeutics' },
        { '@type': 'Thing', name: 'Mindfulness-Based Interventions' },
        { '@type': 'Thing', name: 'Biofeedback Technology' },
        { '@type': 'Thing', name: 'Indian Knowledge Systems' },
        { '@type': 'Thing', name: 'Heart Rate Variability' },
      ],
      inLanguage: 'en',
      keywords: 'contemplative healthtech, AI, yoga, meditation, mindfulness, digital health, neuroscience, biofeedback, IIT Delhi, Indian Knowledge Systems',
    },
    {
      '@type': 'Organization',
      '@id': 'https://icchai.com/#organizer',
      name: 'ICCHAI 2026',
      url: 'https://icchai.com',
      logo: 'https://icchai.com/images/emoticonimg.png',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@icchai.com',
        contactType: 'Conference Enquiries',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://icchai.com/#website',
      url: 'https://icchai.com',
      name: 'ICCHAI 2026',
      description: 'Official website of the International Conference on Contemplative HealthTech and AI',
      publisher: { '@id': 'https://icchai.com/#organizer' },
      potentialAction: {
        '@type': 'RegisterAction',
        target: 'https://icchai.com/register',
        name: 'Register for ICCHAI 2026',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
