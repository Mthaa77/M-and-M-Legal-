import type { Metadata } from 'next';
import './globals.css';
import { Allura, Cormorant_Garamond, Manrope } from 'next/font/google';

const signatureFont = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-signature',
  display: 'swap',
});

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const workhorseFont = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'M&M Legal | Mtimkulu & Madungandaba Attorneys | Pretoria',
  description: 'M&M Legal provides strategic, high-calibre legal counsel across Commercial Litigation, Labour Law, Public Procurement, Property & Conveyancing, Trusts & Estates, and Family Law.',
  keywords: [
    'M&M Legal',
    'Mtimkulu & Madungandaba Attorneys',
    'Attorneys in Pretoria',
    'Law firm in Pretoria',
    'Commercial litigation attorneys Gauteng',
    'Labour law attorneys Pretoria',
    'Public procurement lawyers South Africa',
    'Conveyancers Pretoria',
    'Family law attorneys Pretoria',
    'Zamuxolo Madungandaba'
  ],
  authors: [{ name: 'Zamuxolo Madungandaba' }, { name: 'M&M Legal' }],
  openGraph: {
    title: 'M&M Legal | Strategic Attorneys in Pretoria & South Africa',
    description: 'Definitive counsel for moments that shape your future. Practical, strategic legal counsel for individuals, businesses, and institutions.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'M&M Legal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M&M Legal | Strategic Attorneys in Pretoria & South Africa',
    description: 'High-calibre legal counsel defending enterprise value and individual rights across South Africa.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://mandmlegal.co.za/#organization',
      'name': 'M&M Legal (Mtimkulu & Madungandaba Attorneys)',
      'alternateName': 'M&M Legal',
      'url': 'https://mandmlegal.co.za/',
      'telephone': '+27123851007',
      'email': 'info@mandmlegal.co.za',
      'foundingDate': '2020',
      'priceRange': '$$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '57 Mosalo Street, Atteridgeville',
        'addressLocality': 'Pretoria',
        'addressRegion': 'Gauteng',
        'postalCode': '0008',
        'addressCountry': 'ZA'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -25.7719,
        'longitude': 28.0717
      },
      'founder': {
        '@type': 'Person',
        'name': 'Zamuxolo Madungandaba',
        'jobTitle': 'Managing Partner & Founder'
      },
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Pretoria' },
        { '@type': 'AdministrativeArea', 'name': 'Gauteng' },
        { '@type': 'Country', 'name': 'South Africa' }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${signatureFont.variable} ${displayFont.variable} ${workhorseFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${workhorseFont.className} bg-[#FAF8F5] text-[#15181E] antialiased min-h-screen selection:bg-[#A8864D] selection:text-white relative`} suppressHydrationWarning>
        {/* Tactile Parchment Paper Grain Overlay */}
        <div className="parchment-grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
