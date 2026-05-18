import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { partners } from '@/lib/partners';
import { SectionLabel } from '@/components/SectionLabel';
import { Hairline } from '@/components/Hairline';
import { telLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About the Firm — S.K. Gambhir & Co.',
  description:
    'S.K. Gambhir & Co. was established in 1987 by S.K. Gambhir. A tax and corporate law practice in New Delhi spanning two generations of counsel.',
};

const milestones = [
  {
    year: '1987',
    event: 'Practice founded by S.K. Gambhir in New Delhi, with a focus on direct tax and ITAT representation.',
  },
  {
    year: '1995',
    event: 'First reported ITAT representation on a significant disallowance matter; firm reputation in appellate practice established.',
  },
  {
    year: '2000s',
    event: 'Corporate advisory practice formalised; Companies Act compliance and transactional advisory added alongside tax practice.',
  },
  {
    year: '2013',
    event: 'GST advisory practice initiated in anticipation of the constitutional amendment and subsequent CGST Act, 2017.',
  },
  {
    year: '2015',
    event: 'Sumit Gambhir joins the firm as Partner, anchoring GST, international tax, and startup advisory.',
  },
  {
    year: '2020',
    event: 'Chamber added at Rouse Avenue, proximate to the Delhi courts and ITAT, for litigation conferences.',
  },
  {
    year: 'Today',
    event: 'Active across direct tax, GST, corporate law, international tax, and litigation from two Delhi locations.',
  },
];

const values = [
  {
    title: 'Discretion',
    description:
      'Tax and corporate matters are by nature confidential. The firm does not discuss client matters with third parties, does not use client names in business development, and does not seek publicity for its work. This is not a policy — it is how the firm understands the nature of its obligations.',
  },
  {
    title: 'Diligence',
    description:
      'Every matter receives the same preparation: the relevant statutory provisions read carefully, the applicable judicial authority identified and weighed, and the specific facts mapped to the legal position. There is no shortcut to thorough preparation, and the firm does not take one.',
  },
  {
    title: 'Continuity',
    description:
      'Tax and corporate relationships benefit from continuity of counsel. The firm has advised several of its clients for more than a decade, and in some cases across two generations of their own businesses. Understanding a client\'s history, structure, and objectives makes the advice better.',
  },
];

const affiliations = [
  'Bar Council of Delhi',
  'Income Tax Appellate Tribunal Bar Association',
  'Supreme Court Bar Association',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-ink text-paper pt-16 pb-20">
        <div className="container-site">
          <SectionLabel label="About" className="mb-6 text-paper/40" />
          <h1 className="font-serif text-display-md text-paper mt-4 mb-6 max-w-xl">
            The Firm.
          </h1>
          <p className="text-body-lg text-paper/60 max-w-[54ch] leading-relaxed">
            S.K. Gambhir & Co. is a tax and corporate law practice in New Delhi.
            Established in 1987. Operating across two locations. Advised by two
            generations of counsel.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="bg-paper py-24" aria-labelledby="story-heading">
        <div className="container-site">
          <SectionLabel number="01" label="Our Story" className="mb-6" />
          <Hairline animated className="mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2
                id="story-heading"
                className="font-serif text-display-sm text-ink"
              >
                Thirty-eight years in practice.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <p className="text-body text-ink/80 leading-relaxed">
                S.K. Gambhir established the firm in 1987 in New Delhi, at a time
                when the income tax assessment and appellate practice in Delhi
                required practitioners who could move fluently between the statute,
                the case law, and the procedural demands of the Tribunal. The firm
                began with a focused practice: direct tax assessments and ITAT
                appearances, with the depth of preparation that those forums demand.
              </p>
              <p className="text-body text-ink/80 leading-relaxed">
                Over the following decade, as the firm's reputation in appellate
                tax matters developed, clients began bringing transactional and
                compliance questions alongside their litigation work. By the early
                2000s, the firm had formalised a corporate advisory practice —
                Companies Act compliance, board secretarial work, and transactional
                tax structuring — that complemented its litigation practice without
                diluting it.
              </p>
              <p className="text-body text-ink/80 leading-relaxed">
                The introduction of the Goods and Services Tax regime required a new
                area of expertise, and the firm invested in developing it well ahead
                of the 2017 implementation date. Today, the GST practice covers
                compliance, advisory, and litigation from the first assessment
                through the High Court.
              </p>
              <p className="text-body text-ink/80 leading-relaxed">
                In 2015, Sumit Gambhir joined the firm as Partner. A Commerce
                graduate who read Law at the postgraduate level, Sumit brought formal
                academic training in corporate and international tax law, and a
                practice focus on areas that had grown in importance as the firm's
                client base evolved: GST, FEMA and cross-border advisory, ESOP and
                startup-stage matters, and international tax including DTAA analysis
                and transfer pricing documentation.
              </p>
              <p className="text-body text-ink/80 leading-relaxed">
                The firm now operates from two Delhi locations — the main office at
                Jagriti Enclave and a chamber at Rouse Avenue, proximate to the
                Delhi courts and the Income Tax Appellate Tribunal. The two offices
                reflect the two dimensions of the firm's practice: the transactional
                and compliance work that happens in an office, and the litigation
                work that happens near the courts.
              </p>
              <p className="text-body text-ink/80 leading-relaxed">
                The firm remains deliberately focused. It advises on matters it
                understands, in areas where it has the depth to add value. This has
                been the firm's approach since 1987, and it has not changed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="bg-bone py-24"
        aria-labelledby="timeline-heading"
      >
        <div className="container-site">
          <SectionLabel number="02" label="Milestones" className="mb-6" />
          <Hairline animated className="mb-12" />

          <h2
            id="timeline-heading"
            className="font-serif text-display-sm text-ink mb-16 max-w-sm"
          >
            A record in practice.
          </h2>

          <div className="relative">
            {/* Vertical rule */}
            <div
              className="absolute left-[88px] top-0 bottom-0 w-px bg-rule/10 hidden sm:block"
              aria-hidden="true"
            />

            <ol className="space-y-0" aria-label="Firm milestones timeline">
              {milestones.map((m, i) => (
                <li
                  key={m.year}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-10 pb-10"
                >
                  {/* Year */}
                  <div className="sm:w-20 shrink-0 relative">
                    <span className="font-serif text-xl text-accent tabular-nums">
                      {m.year}
                    </span>
                    {/* Dot on the timeline */}
                    <span
                      className="hidden sm:block absolute right-[-22px] top-2.5 w-2 h-2 border border-accent bg-paper"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Event */}
                  <p className="text-body text-ink/75 leading-relaxed sm:pl-8">
                    {m.event}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-24" aria-labelledby="values-heading">
        <div className="container-site">
          <SectionLabel number="03" label="Values" className="mb-6" />
          <Hairline animated className="mb-12" />

          <h2
            id="values-heading"
            className="font-serif text-display-sm text-ink mb-16 max-w-sm"
          >
            How the firm operates.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-rule/10">
            {values.map((v) => (
              <div key={v.title} className="p-0 md:pr-10 md:first:pl-0 py-8 md:py-0">
                <Hairline gold className="mb-6" />
                <h3 className="font-serif text-2xl text-ink mb-4">{v.title}</h3>
                <p className="text-body text-ink/70 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Profiles */}
      <section
        className="bg-bone py-24"
        aria-labelledby="partners-heading"
      >
        <div className="container-site">
          <SectionLabel number="04" label="The Partners" className="mb-6" />
          <Hairline animated className="mb-12" />

          <h2
            id="partners-heading"
            className="font-serif text-display-sm text-ink mb-16 max-w-sm"
          >
            Counsel.
          </h2>

          <div className="space-y-16">
            {partners.map((p) => (
              <article
                key={p.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10"
                aria-labelledby={`about-${p.id}`}
              >
                {/* Portrait */}
                <div className="lg:col-span-3">
                  <div className="relative aspect-[3/4] bg-bone overflow-hidden border border-rule/10">
                    <Image
                      src={p.image}
                      alt={`Portrait of ${p.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 1024px) 25vw, 100vw"
                    />
                    {/* Fallback */}
                    <div className="absolute inset-0 bg-bone flex items-center justify-center">
                      <span className="font-serif text-5xl text-mute/40">
                        {p.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="lg:col-span-9">
                  <h3
                    id={`about-${p.id}`}
                    className="font-serif text-3xl text-ink mb-1"
                  >
                    {p.name}
                  </h3>
                  <p className="eyebrow text-accent mb-2">{p.title}</p>
                  <p className="eyebrow text-mute mb-6">{p.credentials}</p>

                  <Hairline className="mb-6" />

                  <div className="space-y-4">
                    {p.fullBio.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className={`text-body leading-relaxed ${
                          para.startsWith('[Placeholder')
                            ? 'text-mute/60 italic text-sm border-l-2 border-gold/40 pl-4'
                            : 'text-ink/80'
                        }`}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-5">
                    <a
                      href={telLink(p.phone)}
                      className="eyebrow text-accent hover:text-ink transition-colors"
                    >
                      {p.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${p.email}`}
                      className="eyebrow text-mute hover:text-ink transition-colors"
                    >
                      {p.email}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-paper py-16 border-t border-rule/10">
        <div className="container-site">
          <p className="eyebrow text-mute mb-6">
            Professional Affiliations
            <span className="ml-2 text-gold text-[10px] normal-case tracking-normal">
              — placeholder, client to confirm
            </span>
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {affiliations.map((a) => (
              <span key={a} className="text-body text-ink/70">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-accent text-paper py-14">
        <div className="container-site flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-serif text-2xl text-paper">
            Ready to discuss your matter?
          </p>
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              bg-paper text-ink
              px-7 py-3.5
              eyebrow tracking-[0.14em]
              hover:bg-bone transition-colors duration-200
            "
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </>
  );
}
