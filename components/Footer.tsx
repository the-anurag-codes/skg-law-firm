import Link from 'next/link';
import { SKGMonogram } from './SKGMonogram';
import { Hairline } from './Hairline';
import { siteConfig } from '@/lib/site-config';
import { telLink } from '@/lib/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-ink text-paper relative overflow-hidden"
      aria-label="Site footer"
    >
      <div className="container-site pt-16 pb-8">
        {/* ── Four-column layout ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12">
          {/* Col 1 — Brand */}
          <div>
            <SKGMonogram variant="light" size="sm" />
            <div className="mt-5">
              <p className="font-script text-3xl text-paper/90 leading-tight">
                S.K. Gambhir &amp; Co.
              </p>
              <p className="eyebrow text-paper/40 mt-2">Taxation &amp; Corporate Law Services</p>
              <p className="mt-4 text-sm text-paper/55 leading-relaxed max-w-[22ch]">
                Advising businesses, founders, and NRIs on direct tax, GST, corporate compliance, and litigation.
              </p>
              <p className="eyebrow text-gold mt-5">Established 1987</p>
            </div>
          </div>

          {/* Col 2 — Practice Areas */}
          <div>
            <p className="eyebrow text-paper/40 mb-5">Practice Areas</p>
            <ul className="space-y-3">
              {siteConfig.practiceAreaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 hover:text-paper transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Offices */}
          <div>
            <p className="eyebrow text-paper/40 mb-5">Locations</p>

            <div className="mb-6">
              <p className="text-xs font-semibold text-paper/40 uppercase tracking-widest mb-2">
                Office
              </p>
              <address className="not-italic text-sm text-paper/60 leading-relaxed">
                {siteConfig.offices.primary.address}<br />
                {siteConfig.offices.primary.locality}<br />
                {siteConfig.offices.primary.city} – {siteConfig.offices.primary.pincode.replace(' ', ' ')}
              </address>
              <a
                href={siteConfig.offices.primary.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block eyebrow text-gold hover:text-paper transition-colors"
              >
                View on map →
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-paper/40 uppercase tracking-widest mb-2">
                Chamber
                <span className="ml-2 text-gold normal-case tracking-normal font-normal text-[10px]">
                  By appointment
                </span>
              </p>
              <address className="not-italic text-sm text-paper/60 leading-relaxed">
                {siteConfig.offices.chamber.address}<br />
                {siteConfig.offices.chamber.locality}<br />
                {siteConfig.offices.chamber.city} – {siteConfig.offices.chamber.pincode.replace(' ', ' ')}
              </address>
              <a
                href={siteConfig.offices.chamber.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block eyebrow text-gold hover:text-paper transition-colors"
              >
                View on map →
              </a>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <p className="eyebrow text-paper/40 mb-5">Contact</p>

            <div className="space-y-4">
              {siteConfig.partners.map((p) => (
                <div key={p.id}>
                  <p className="text-xs text-paper/40 uppercase tracking-widest font-semibold">
                    {p.name}
                  </p>
                  <a
                    href={telLink(p.phone)}
                    className="block text-sm text-paper/60 hover:text-paper transition-colors mt-0.5"
                  >
                    {p.phoneDisplay}
                  </a>
                </div>
              ))}

              <div>
                <p className="text-xs text-paper/40 uppercase tracking-widest font-semibold">
                  Office
                </p>
                <a
                  href={`tel:${siteConfig.officePhone}`}
                  className="block text-sm text-paper/60 hover:text-paper transition-colors mt-0.5"
                >
                  {siteConfig.officePhoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs text-paper/40 uppercase tracking-widest font-semibold">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block text-sm text-paper/60 hover:text-paper transition-colors mt-0.5"
                >
                  {siteConfig.emailDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs text-paper/40 uppercase tracking-widest font-semibold">
                  Office Hours
                </p>
                <p className="text-sm text-paper/60 mt-0.5">{siteConfig.hours.display}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <Hairline className="border-paper/10" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6">
          <p className="text-xs text-paper/35">
            © {year} S.K. Gambhir & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/disclaimer"
              className="text-xs text-paper/35 hover:text-paper/60 transition-colors"
            >
              Bar Council of India — Rule 36 Disclaimer
            </Link>
            <span className="text-paper/20" aria-hidden="true">·</span>
            <Link
              href="/disclaimer"
              className="text-xs text-paper/35 hover:text-paper/60 transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
