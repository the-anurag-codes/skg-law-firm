export interface InsightMeta {
  slug: string;
  title: string;
  date: string;
  category: InsightCategory;
  excerpt: string;
  readingTime?: string;
  published: boolean;
}

export type InsightCategory =
  | 'Direct Tax'
  | 'GST'
  | 'Corporate'
  | 'Litigation'
  | 'International';

export const insightCategories: InsightCategory[] = [
  'Direct Tax',
  'GST',
  'Corporate',
  'Litigation',
  'International',
];

/** Metadata only — full content lives in /content/insights/*.mdx */
export const insights: InsightMeta[] = [
  {
    slug: 'itat-section-56-startup-valuations',
    title: 'Recent ITAT Rulings on Section 56(2)(viib) and Startup Valuations',
    date: '2025-11-18',
    category: 'Direct Tax',
    excerpt:
      'The Income Tax Appellate Tribunal has issued a cluster of rulings on the angel tax provision — clarifying the valuation methods available to companies and the standards the assessing officer must apply when rejecting a DCF-based valuation.',
    readingTime: '6 min read',
    published: true,
  },
  {
    slug: 'gst-input-credit-supreme-court-2025',
    title: 'GST Input Credit Reversals — What the Supreme Court\'s 2025 Ruling Means',
    date: '2025-09-04',
    category: 'GST',
    excerpt:
      'The Supreme Court\'s ruling on the ITC availment timeline under section 16(4) of the CGST Act has significant implications for businesses that were unable to file timely returns during the early GST years.',
    readingTime: '5 min read',
    published: true,
  },
  {
    slug: 'nri-taxation-residency-tests-2023',
    title: 'NRI Taxation: A Primer on the Residency Tests Post-Finance Act 2023',
    date: '2025-07-22',
    category: 'International',
    excerpt:
      'Following the 2020 amendments to section 6 of the Income Tax Act, and their subsequent clarification in Finance Act 2023, determining tax residency for Indian nationals working or living abroad has become considerably more fact-intensive.',
    readingTime: '7 min read',
    published: true,
  },
  {
    slug: 'section-148-notices-post-budget-2024',
    title: 'Section 148 Notices After the 2024 Budget: What Has Changed',
    date: '2025-05-10',
    category: 'Litigation',
    excerpt:
      'The Finance Act 2024 amended the reassessment provisions of the Income Tax Act in material respects. This note sets out the key changes and their implications for taxpayers who have received — or may receive — a section 148 notice.',
    readingTime: '5 min read',
    published: true,
  },
  {
    slug: 'esop-taxation-founders-employees',
    title: 'ESOP Taxation for Founders and Employees: A Structured Overview',
    date: '2025-03-15',
    category: 'Corporate',
    excerpt:
      'Employee stock option plans are central to how Indian startups attract and retain talent. The tax treatment at grant, vesting, exercise, and sale is more nuanced than is commonly understood — and the consequences of getting it wrong can be material.',
    readingTime: '8 min read',
    published: true,
  },
  {
    slug: 'gaar-applicability-business-restructuring',
    title: 'GAAR and Business Restructuring: When Does Chapter X-A Apply?',
    date: '2025-01-28',
    category: 'Direct Tax',
    excerpt:
      'The General Anti-Avoidance Rule under Chapter X-A of the Income Tax Act remains one of the more unsettled areas of Indian tax law. Recent ITAT and High Court decisions offer some guidance on the threshold for invoking GAAR.',
    readingTime: '6 min read',
    published: true,
  },
  {
    slug: 'dtaa-mauritius-singapore-holding-structures',
    title: 'The Mauritius and Singapore Treaties After the 2016 Protocol: A Practical Assessment',
    date: '2024-11-12',
    category: 'International',
    excerpt:
      'The 2016 amendments to India\'s tax treaties with Mauritius and Singapore fundamentally altered the capital gains exemption that had made these jurisdictions central to inbound investment structures. This note examines what remains of those benefits.',
    readingTime: '7 min read',
    published: true,
  },
  {
    slug: 'section-80iac-startup-tax-holiday',
    title: 'Section 80-IAC: Qualifying for the Startup Tax Holiday',
    date: '2024-09-30',
    category: 'Corporate',
    excerpt:
      'The three-year income tax holiday for DPIIT-recognised startups under section 80-IAC offers material savings — but the conditions for eligibility are specific, and the claims are now subject to closer scrutiny in assessments.',
    readingTime: '5 min read',
    published: true,
  },
];
