'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hairline } from './Hairline';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const inkSettle = {
  hidden: { opacity: 0, filter: 'blur(2px)' },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

export function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center bg-paper overflow-hidden"
      aria-label="Firm introduction"
    >
      {/* Faint watermark — oversized script firm name */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-[5vw] pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-script text-[clamp(6rem,18vw,20rem)] text-ink/[0.03] leading-none whitespace-nowrap"
        >
          S.K. Gambhir &amp; Co.
        </span>
      </div>

      <div className="container-site relative z-10 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p variants={fadeUp} className="eyebrow text-mute mb-8 flex items-center gap-3">
            <span className="tabular-nums">Est. 1987</span>
            <span className="inline-block w-6 border-t border-mute/40" aria-hidden="true" />
            <span>New Delhi</span>
          </motion.p>

          {/* Script firm name — the headline brand statement */}
          <motion.h1 variants={inkSettle} className="font-script text-ink mb-4 leading-[1.1]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            S.K. Gambhir &amp; Co.
          </motion.h1>

          {/* Sub-heading in Cormorant serif */}
          <motion.p
            variants={fadeUp}
            className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] text-ink/70 font-light italic mb-8 leading-relaxed"
          >
            Tax &amp; Corporate Counsel since 1987
          </motion.p>

          {/* One-liner description */}
          <motion.p variants={fadeUp} className="text-body text-mute max-w-[56ch] leading-relaxed mb-10">
            Advising Indian businesses, founders, and NRIs on direct tax, GST,
            corporate compliance, and litigation before the ITAT, High Courts,
            and the Supreme Court.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                bg-ink text-paper
                px-7 py-3 text-sm tracking-widest uppercase font-sans
                hover:bg-accent transition-colors duration-200
                focus-visible:outline-accent
              "
            >
              Schedule a Consultation →
            </Link>
            <Link
              href="/practice-areas"
              className="
                text-sm tracking-widest uppercase text-ink
                border-b border-ink/25 pb-0.5
                hover:border-accent hover:text-accent
                transition-colors duration-200
              "
            >
              Practice Areas
            </Link>
          </motion.div>
        </motion.div>

        {/* Section label at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-20"
        >
          <Hairline animated className="mb-3" />
          <p className="eyebrow text-mute">01 — Introduction</p>
        </motion.div>
      </div>
    </section>
  );
}
