/**
 * SINGLE SOURCE OF TRUTH — edit here, changes propagate everywhere.
 * All firm contact information, addresses, hours, and meta lives in this file.
 */

export const siteConfig = {
  name: 'S.K. Gambhir & Co.',
  shortName: 'SKG',
  tagline: 'Tax & Corporate Law',
  description:
    'S.K. Gambhir & Co. advises Indian businesses, founders, and NRIs on direct tax, GST, corporate compliance, and litigation before the ITAT, High Courts, and the Supreme Court. Established 1987, New Delhi.',
  established: 1987,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://skgambhir.in',

  /** Contact */
  email: 'skgambhir@hotmail.com',
  emailDisplay: 'skgambhir@hotmail.com',
  officePhone: '01145720426',
  officePhoneDisplay: '011-45720426',

  /** Partners */
  partners: [
    {
      id: 'sk-gambhir',
      name: 'S.K. Gambhir',
      title: 'Founding Partner',
      credentials: 'M.Com., LL.B.',
      phone: '+919810029705',
      phoneDisplay: '+91 98100 29705',
      since: 1987,
      image: '/images/sk-gambhir.jpg',
    },
    {
      id: 'sumit-gambhir',
      name: 'Sumit Gambhir',
      title: 'Partner',
      credentials: 'B.Com., LL.M. (Jindal Global Law School)',
      phone: '+919999993339',
      phoneDisplay: '+91 99999 93339',
      since: 2015,
      image: '/images/sumit-gambhir.jpg',
    },
  ],

  /** Offices */
  offices: {
    primary: {
      label: 'Office',
      name: 'Jagriti Enclave, Delhi',
      address: '429, 3rd Floor, Main Road',
      locality: 'Jagriti Enclave',
      city: 'Delhi',
      pincode: '110 092',
      fullAddress: '429, 3rd Floor, Main Road, Jagriti Enclave, Delhi – 110 092',
      mapUrl: 'https://maps.google.com/?q=429+Main+Road+Jagriti+Enclave+Delhi+110092',
      note: null,
    },
    chamber: {
      label: 'Chamber',
      name: 'Rouse Avenue, New Delhi',
      address: 'Plot No. 30, 4th Floor, Ch. N-02, D.D.U. Marg',
      locality: 'Rouse Avenue',
      city: 'New Delhi',
      pincode: '110 002',
      fullAddress: 'Plot No. 30, 4th Floor, Ch. N-02, D.D.U. Marg, Rouse Avenue, New Delhi – 110 002',
      mapUrl: 'https://maps.google.com/?q=DDU+Marg+Rouse+Avenue+New+Delhi+110002',
      note: 'By appointment only',
    },
  },

  /** Hours */
  hours: {
    display: 'Mon–Sat, 10:30 AM – 6:30 PM IST',
    days: 'Monday to Saturday',
    open: '10:30',
    close: '18:30',
  },

  /** SEO & OG */
  ogImage: '/og-image.png',
  twitterHandle: null,

  /** Nav links */
  nav: [
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],

  /** Practice areas (short names for nav/footer) */
  practiceAreaLinks: [
    { label: 'Direct Tax Advisory & Litigation', href: '/practice-areas#direct-tax' },
    { label: 'GST & Indirect Taxation', href: '/practice-areas#gst' },
    { label: 'Corporate Law & Compliance', href: '/practice-areas#corporate' },
    { label: 'International Tax & NRI Advisory', href: '/practice-areas#international-tax' },
    { label: 'Tax Litigation', href: '/practice-areas#tax-litigation' },
    { label: 'Advisory for Startups & SMEs', href: '/practice-areas#startups' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
