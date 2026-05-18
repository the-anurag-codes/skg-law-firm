import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Great_Vibes, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site-config';
import { Navbar } from '@/components/Navbar';
import { UtilityBar } from '@/components/UtilityBar';
import { Footer } from '@/components/Footer';
import { DisclaimerModal } from '@/components/DisclaimerModal';
import { ScheduleFloater } from '@/components/ScheduleFloater';
import { Toaster } from '@/components/ui/toaster';

/* ─── Fonts ───────────────────────────────────────────────────────────────── */
/* Cormorant Garamond — refined high-contrast serif for headings (matches card) */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  preload: true,
});

/* Great Vibes — calligraphic script for the firm name / brand (matches card) */
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
  weight: '400',
  preload: true,
});

/* Inter — clean grotesque for UI, body text, labels */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

/* ─── Site-wide Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Tax & Corporate Law, New Delhi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'tax lawyer Delhi',
    'income tax advocate Delhi',
    'GST lawyer India',
    'corporate lawyer Delhi',
    'ITAT advocate',
    'NRI tax advisory India',
    'direct tax litigation',
    'S.K. Gambhir',
    'tax law firm New Delhi',
    'income tax appellate tribunal',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Tax & Corporate Law`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Tax & Corporate Law, New Delhi`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Tax & Corporate Law`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
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
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF7',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

/* ─── JSON-LD Schemas ────────────────────────────────────────────────────── */
const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: siteConfig.name,
  alternateName: 'SKG Law',
  url: siteConfig.url,
  foundingDate: '1987',
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.partners[0].phone,
  priceRange: '₹₹₹',
  areaServed: [
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'New Delhi' },
    { '@type': 'Country', name: 'India' },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.offices.primary.address,
      addressLocality: siteConfig.offices.primary.locality,
      addressRegion: 'Delhi',
      postalCode: '110092',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.offices.chamber.address,
      addressLocality: siteConfig.offices.chamber.locality,
      addressRegion: 'Delhi',
      postalCode: '110002',
      addressCountry: 'IN',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:30',
    closes: '18:30',
  },
  knowsAbout: [
    'Income Tax Law',
    'GST Advisory',
    'Corporate Law',
    'Tax Litigation',
    'NRI Taxation',
    'International Tax',
    'ITAT Representation',
  ],
  sameAs: [
    'https://www.linkedin.com/company/sk-gambhir-co',
  ],
};

const partnerSchemas = siteConfig.partners.map((p) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: p.name,
  jobTitle: p.title,
  worksFor: { '@type': 'LegalService', name: siteConfig.name },
  telephone: p.phone,
  email: siteConfig.email,
  knowsAbout: ['Tax Law', 'Corporate Law', 'Income Tax', 'GST'],
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${greatVibes.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        {partnerSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {/* Plausible analytics — uncomment and set domain once approved:
        <script
          defer
          data-domain="skgambhir.in"
          src="https://plausible.io/js/script.js"
        />
        */}
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <DisclaimerModal />
        <UtilityBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScheduleFloater />
        <Toaster />
      </body>
    </html>
  );
}
