import type { Metadata } from 'next';
import Link from 'next/link';
import { practiceAreas } from '@/lib/practice-areas';
import { SectionLabel } from '@/components/SectionLabel';
import { Hairline } from '@/components/Hairline';

export const metadata: Metadata = {
  title: 'Practice Areas — Tax, GST, Corporate & Litigation',
  description:
    'S.K. Gambhir & Co. advises on direct tax, GST and indirect taxation, corporate law, international tax, NRI advisory, tax litigation, and startup matters.',
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero strip */}
      <div className="bg-ink text-paper pt-16 pb-20">
        <div className="container-site">
          <SectionLabel label="Practice Areas" className="mb-6 text-paper/40" />
          <h1 className="font-serif text-display-md text-paper mt-4 mb-6 max-w-xl">
            The law we practice.
          </h1>
          <p className="text-body-lg text-paper/60 max-w-[58ch] leading-relaxed">
            The firm advises on a defined set of interrelated practice areas — direct
            tax, GST, corporate law, international tax, and litigation. Below is a
            full account of what each involves and what the firm typically handles.
          </p>
        </div>
      </div>

      {/* Practice areas — one full section each */}
      <div className="bg-paper">
        {practiceAreas.map((area, index) => (
          <section
            key={area.id}
            id={area.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-paper' : 'bg-bone'} border-b border-rule/10`}
            aria-labelledby={`pa-${area.id}`}
          >
            <div className="container-site">
              <SectionLabel
                number={area.number}
                label={area.title}
                className="mb-6"
              />
              <Hairline className="mb-12" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Heading column */}
                <div className="lg:col-span-4">
                  <h2
                    id={`pa-${area.id}`}
                    className="font-serif text-display-sm text-ink"
                  >
                    {area.title}
                  </h2>
                </div>

                {/* Content column */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Full description — multiple paragraphs */}
                  {area.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-body text-ink/80 leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {/* Representative work */}
                  <div>
                    <p className="eyebrow text-mute mb-4">Representative Matters</p>
                    <ul className="space-y-3" aria-label={`Representative work in ${area.title}`}>
                      {area.representativeWork.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-ink/75 leading-relaxed"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="
                        inline-flex items-center gap-2
                        bg-ink text-paper
                        px-6 py-3
                        eyebrow tracking-[0.12em] text-xs
                        hover:bg-accent transition-colors duration-200
                        focus-visible:outline-accent
                      "
                    >
                      {area.cta} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-accent text-paper py-16">
        <div className="container-site text-center">
          <h2 className="font-serif text-3xl text-paper mb-4">
            Have a matter in mind?
          </h2>
          <p className="text-paper/60 mb-8 max-w-lg mx-auto">
            The firm offers an initial screening call to determine whether your
            matter falls within our practice areas.
          </p>
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-2
              bg-paper text-ink
              px-8 py-3.5
              eyebrow tracking-[0.14em]
              hover:bg-bone transition-colors duration-200
              focus-visible:outline-white
            "
          >
            Schedule a Consultation →
          </Link>
        </div>
      </div>
    </>
  );
}
