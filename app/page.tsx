import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { PracticeAreasList } from '@/components/PracticeAreasList';
import { PartnerCards } from '@/components/PartnerCard';
import { ApproachSteps } from '@/components/ApproachSteps';
import { InsightsTeaser } from '@/components/InsightsTeaser';
import { PullQuote } from '@/components/PullQuote';
import { ConsultationForm } from '@/components/ConsultationForm';
import { SectionLabel } from '@/components/SectionLabel';
import { Hairline } from '@/components/Hairline';
import { siteConfig } from '@/lib/site-config';
import { telLink } from '@/lib/utils';
import { faqs } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'S.K. Gambhir & Co. — Tax & Corporate Law, New Delhi | Since 1987',
  description:
    'S.K. Gambhir & Co. is a New Delhi law firm advising on direct tax, GST, corporate law, and litigation since 1987. Offices at Jagriti Enclave and Rouse Avenue.',
};

/* JSON-LD FAQ schema for GEO */
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 01 — Hero */}
      <Hero />

      {/* Trust strip */}
      <TrustStrip />

      {/* 02 — The Firm */}
      <FirmSection />

      {/* 03 — Practice Areas */}
      <PracticeAreasList />

      {/* 04 — The People */}
      <PartnerCards />

      {/* 05 — Our Approach */}
      <ApproachSteps />

      {/* 06 — Insights */}
      <InsightsTeaser />

      {/* Testimonial */}
      <PullQuote />

      {/* 07 — Consultation Form */}
      <ConsultationSection />

      {/* FAQ (for GEO — plain text, visually minimal) */}
      <FaqSection />
    </>
  );
}

/* ─── Inline sections ─────────────────────────────────────────────────────── */

function FirmSection() {
  return (
    <section
      className="bg-paper py-24 border-b border-rule/10"
      aria-labelledby="firm-heading"
    >
      <div className="container-site">
        <SectionLabel number="02" label="The Firm" className="mb-6" />
        <Hairline animated className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <h2
              id="firm-heading"
              className="font-serif text-display-sm text-ink leading-tight"
            >
              A practice built on precision and trust.
            </h2>
          </div>

          {/* Right — copy */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-body text-ink/80 leading-relaxed">
              S.K. Gambhir & Co. was established in New Delhi in 1987 by S.K.
              Gambhir, with a focus on direct tax representation before the Income
              Tax Appellate Tribunal and the Delhi High Court. In the nearly four
              decades since, the firm has expanded its practice to encompass GST
              advisory, corporate law and compliance, and cross-border tax matters.
            </p>
            <p className="text-body text-ink/80 leading-relaxed">
              The firm operates on a single governing principle: that sound legal
              advice is grounded in a precise understanding of the applicable
              statute, the relevant facts, and the weight of judicial authority.
              It does not recommend positions that are not supportable; it does
              not overstate the strength of a case; and it does not mistake
              activity for progress.
            </p>
            <p className="text-body text-ink/80 leading-relaxed">
              Sumit Gambhir joined the firm in 2015, bringing formal postgraduate
              legal education and a focus on GST, international tax, and
              startup-stage advisory. Together, the two partners represent a
              continuity of counsel that spans two generations of practice.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="
                  inline-flex items-center gap-2
                  eyebrow tracking-[0.12em] text-accent
                  border-b border-accent pb-0.5
                  hover:opacity-70 transition-opacity
                "
              >
                Read more about the firm →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section
      className="bg-bone py-24"
      id="consultation"
      aria-labelledby="consultation-heading"
    >
      <div className="container-site">
        <SectionLabel number="07" label="Schedule a Consultation" className="mb-6" />
        <Hairline animated className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — context */}
          <div className="lg:col-span-4">
            <h2
              id="consultation-heading"
              className="font-serif text-display-sm text-ink mb-6"
            >
              Get in touch.
            </h2>
            <p className="text-body text-mute leading-relaxed mb-8">
              The firm offers an initial 15-minute screening call at no charge to
              assess whether the matter falls within the firm&apos;s areas of practice.
              All submissions are treated as privileged and confidential.
            </p>

            <div className="space-y-5 mb-8">
              {siteConfig.partners.map((p) => (
                <div key={p.id}>
                  <p className="eyebrow text-mute mb-1">{p.name}</p>
                  <a
                    href={telLink(p.phone)}
                    className="font-serif text-xl text-ink hover:text-accent transition-colors"
                  >
                    {p.phoneDisplay}
                  </a>
                </div>
              ))}
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="eyebrow text-accent border-b border-accent pb-0.5 hover:opacity-70 transition-opacity"
            >
              {siteConfig.emailDisplay}
            </a>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-8">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      className="bg-paper py-16 border-t border-rule/10"
      aria-labelledby="faq-heading"
    >
      <div className="container-site max-w-3xl mx-auto">
        <h2
          id="faq-heading"
          className="font-serif text-2xl text-ink mb-10"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-rule/10 pb-8">
              <h3 className="font-serif text-lg text-ink mb-3">
                {faq.question}
              </h3>
              <p className="text-body text-mute leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
