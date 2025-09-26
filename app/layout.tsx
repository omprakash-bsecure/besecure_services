import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best CCTV Installation in Ranchi, Khunti, Hazaribagh | BSECURE Information Technology Jharkhand",
  description: "Professional CCTV camera installation in Ranchi, Khunti, Hazaribagh, Dhanbad, Bokaro & Ramgarh. Expert security solutions, computer repair, biometric systems. Free site visit. Call +91 9162118159",
  keywords: "CCTV installation, best CCTV installation, CCTV installation near me, security camera installation, CCTV camera installation, professional CCTV installation, CCTV installation services, CCTV installation company, best CCTV installation in Ranchi, CCTV installation in Ranchi, best CCTV installation in Khunti, CCTV installation in Khunti, best CCTV installation in Hazaribagh, CCTV installation in Hazaribagh, best CCTV installation in Dhanbad, CCTV installation in Dhanbad, best CCTV installation in Bokaro, CCTV installation in Bokaro, best CCTV installation in Ramgarh, CCTV installation in Ramgarh, best CCTV installation in Jharkhand, CCTV installation in Jharkhand, best security camera installation Ranchi, security camera installation Ranchi, best CCTV company Ranchi, CCTV company in Ranchi, best CCTV installer Ranchi, CCTV installer in Ranchi, best CCTV services Ranchi, CCTV services in Ranchi, professional CCTV installation Ranchi, cheap CCTV installation in Ranchi, affordable CCTV installation in Ranchi, top CCTV installation in Ranchi, reliable CCTV installation in Ranchi, trusted CCTV installation in Ranchi, home CCTV installation, office CCTV installation, shop CCTV installation, wireless CCTV installation, IP camera installation, HD CCTV installation, night vision CCTV, outdoor CCTV installation, indoor CCTV cameras, dome camera installation, bullet camera installation, DVR installation, NVR installation, CCTV system setup, surveillance system installation, security system installation, CCTV camera price, CCTV installation cost, computer repair, laptop repair, desktop repair, biometric installation, fingerprint system, access control system, intercom installation, networking services, Wi-Fi installation, IT services, CCTV maintenance, CCTV repair, security solutions",
  authors: [{ name: "BSECURE Information Technology" }],
  creator: "BSECURE Information Technology",
  publisher: "BSECURE Information Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Best CCTV Installation Service in Ranchi, Jharkhand | BSECURE Information Technology',
    description: 'Professional CCTV installation in Ranchi, Khunti, Hazaribagh. Expert security camera setup, biometric systems, computer repair. 500+ customers. Free site visit.',
    siteName: 'BSECURE Information Technology',
    url: 'https://bsecuretech.in',
    images: [
      {
        url: 'https://bsecuretech.in/og.png',
        width: 1200,
        height: 630,
        alt: 'BSECURE CCTV Installation Services in Ranchi Jharkhand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTV Installation Ranchi | Professional Security Camera Setup Jharkhand',
    description: 'Expert CCTV installation in Ranchi, Khunti, Hazaribagh. Professional service, warranty, 24/7 support. Free survey. Call +91 9162118159',
    images: ['https://bsecuretech.in/og.png']
  },

  category: 'Security Services',
  classification: 'Business',
  alternates: {
    canonical: 'https://www.bsecuretech.in',
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://bsecuretech.in',
  name: 'BSECURE Information Technology',
  description: 'Professional CCTV installation, security camera setup, biometric systems, computer repair and IT services in Ranchi, Khunti, Hazaribagh, Dhanbad, Bokaro and Ramgarh, Jharkhand.',
  url: 'https://bsecuretech.in',
  telephone: '+91-9162118159',
  foundingDate: '2018',
  image: [
    'https://bsecuretech.in/og.png'
  ],
  logo: 'https://bsecuretech.in/bsecure_logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahubazar',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834001',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.3441,
    longitude: 85.3096
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Ranchi'
    },
    {
      '@type': 'City',
      name: 'Khunti'
    },
    {
      '@type': 'City',
      name: 'Hazaribagh'
    },
    {
      '@type': 'City',
      name: 'Dhanbad'
    },
    {
      '@type': 'City',
      name: 'Bokaro'
    },
    {
      '@type': 'City',
      name: 'Ramgarh'
    }
  ],
  serviceType: [
    'CCTV Installation',
    'Security Camera Installation',
    'IP Camera Setup',
    'Wireless CCTV Installation',
    'Biometric Attendance System',
    'Computer Repair Services',
    'Laptop Repair',
    'Networking Services',
    'Wi-Fi Installation',
    'Intercom Installation',
    'Access Control Systems'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CCTV and IT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CCTV Installation',
          description: 'Professional CCTV camera installation for homes and businesses'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Computer Repair',
          description: 'Desktop and laptop repair services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Biometric Systems',
          description: 'Biometric attendance and access control systems'
        }
      }
    ]
  },
  priceRange: '₹₹',
  paymentAccepted: ['Cash', 'Card', 'UPI', 'Bank Transfer'],
  currenciesAccepted: 'INR',
  openingHours: [
    'Mo-Sa 09:00-19:00',
    'Su 10:00-17:00'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Rajesh Kumar'
      },
      datePublished: '2024-08-15',
      description: 'Excellent CCTV installation service in Ranchi. Professional team and quality cameras.',
      name: 'Great CCTV Service',
      reviewRating: {
        '@type': 'Rating',
        bestRating: '5',
        ratingValue: '5',
        worstRating: '1'
      }
    }
  ],
  sameAs: [
    'https://facebook.com/bsecureinfotech',
    'https://www.instagram.com/bsecureinfotech',
    'https://www.linkedin.com/company/bsecure-digital-technology'
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BSECURE CCTV" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}