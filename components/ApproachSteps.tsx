'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { Hairline } from './Hairline';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'A focused conversation to understand the matter, assess the legal position, and determine whether the firm can be of assistance.',
  },
  {
    number: '02',
    title: 'Engagement & Strategy',
    description:
      'A written engagement, a clear brief of the applicable law, and a defined approach — before any filing or representation begins.',
  },
  {
    number: '03',
    title: 'Representation & Filing',
    description:
      'Precise submissions, timely filings, and thorough preparation for each forum — from assessment proceedings to appellate hearings.',
  },
  {
    number: '04',
    title: 'Resolution & Continuity',
    description:
      'A concluded matter documented, a decision explained, and an ongoing advisory relationship if the client finds it useful.',
  },
];

export function ApproachSteps() {
  return (
    <section
      className="bg-ink text-paper py-24 relative overflow-hidden"
      aria-labelledby="approach-heading"
    >
      <div className="container-site relative z-10">
        <SectionLabel
          number="05"
          label="Our Approach"
          className="mb-6 text-paper/40"
        />
        <Hairline className="border-paper/10 mb-12" />

        <h2
          id="approach-heading"
          className="font-serif text-display-sm text-paper mb-20 max-w-lg"
        >
          Deliberate. Thorough. Precise.
        </h2>

        {/* Steps — horizontal sequence on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector hairline (between steps, desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-3.5 left-[calc(50%+24px)] right-0 h-px bg-paper/10"
                  aria-hidden="true"
                />
              )}

              <div className="pr-0 lg:pr-8 pb-10 lg:pb-0">
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-serif text-3xl text-gold tabular-nums">
                    {step.number}
                  </span>
                  <div className="flex-1 h-px bg-paper/10 lg:hidden" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-paper mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-paper/55 leading-relaxed max-w-[22ch]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
