'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { Hairline } from './Hairline';
import { practiceAreas } from '@/lib/practice-areas';

export function PracticeAreasList() {
  return (
    <section
      className="bg-paper py-24"
      aria-labelledby="practice-areas-heading"
    >
      <div className="container-site">
        <SectionLabel number="03" label="Practice Areas" className="mb-6" />
        <Hairline animated className="mb-12" />

        <h2
          id="practice-areas-heading"
          className="font-serif text-display-sm text-ink mb-16 max-w-md"
        >
          What we do.
        </h2>

        <div
          className="divide-y divide-rule/10"
          role="list"
          aria-label="Practice areas"
        >
          {practiceAreas.map((area, index) => (
            <PracticeAreaRow key={area.id} area={area} index={index} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/practice-areas"
            className="
              inline-flex items-center gap-2
              eyebrow tracking-[0.12em] text-accent
              border-b border-accent pb-0.5
              hover:opacity-70 transition-opacity
            "
          >
            All practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PracticeAreaRow({
  area,
  index,
}: {
  area: (typeof practiceAreas)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      role="listitem"
    >
      <Link
        href={`/practice-areas#${area.id}`}
        className="
          group flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8
          py-6 px-2 -mx-2
          hover:bg-accent-soft
          transition-colors duration-200
          focus-visible:outline-accent
        "
        aria-label={`${area.title} — ${area.shortDescription}`}
      >
        {/* Number */}
        <span className="eyebrow text-mute tabular-nums shrink-0 w-8">
          {area.number}
        </span>

        {/* Title */}
        <span className="font-serif text-display-sm text-ink group-hover:text-accent transition-colors duration-200 flex-1">
          {area.title}
        </span>

        {/* Short description */}
        <span className="text-sm text-mute max-w-xs leading-relaxed flex-1 hidden md:block">
          {area.shortDescription}
        </span>

        {/* Arrow */}
        <span
          className="text-mute group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 shrink-0"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}
