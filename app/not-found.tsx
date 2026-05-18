import type { Metadata } from 'next';
import Link from 'next/link';
import { SKGMonogram } from '@/components/SKGMonogram';
import { Hairline } from '@/components/Hairline';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
};

const usefulLinks = [
  { label: '01 — Home', href: '/' },
  { label: '02 — Practice Areas', href: '/practice-areas' },
  { label: '03 — About the Firm', href: '/about' },
  { label: '04 — Insights', href: '/insights' },
  { label: '05 — Contact & Schedule a Consultation', href: '/contact' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex flex-col justify-center">
      <div className="container-site max-w-2xl mx-auto py-24">
        <div className="mb-10">
          <SKGMonogram size="sm" />
        </div>

        <Hairline gold className="mb-10" />

        <p className="eyebrow text-mute mb-4">404 — Page Not Found</p>
        <h1 className="font-serif text-display-sm text-ink mb-6">
          This page does not exist.
        </h1>
        <p className="text-body text-mute leading-relaxed mb-12 max-w-prose">
          The page you requested could not be found. It may have been moved or
          removed. Please use the links below to navigate the site.
        </p>

        <nav aria-label="Useful links from 404 page">
          <ol className="space-y-0 divide-y divide-rule/10">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    flex items-center justify-between
                    py-4 group
                    hover:text-accent transition-colors
                    focus-visible:outline-accent
                  "
                >
                  <span className="font-serif text-lg text-ink group-hover:text-accent transition-colors">
                    {link.label}
                  </span>
                  <span
                    className="text-mute group-hover:text-accent group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <Hairline className="mt-10" />
      </div>
    </div>
  );
}
