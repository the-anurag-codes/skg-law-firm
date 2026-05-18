'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { Hairline } from './Hairline';

const anonymisedClients = [
  'Listed manufacturing company',
  'Real estate developer',
  'Tech startup (Series B)',
  'UHNI family office',
  'NRI investor',
  'Pharma exporter',
];

export function PullQuote() {
  return (
    <section
      className="bg-bone py-24"
      aria-labelledby="testimonial-heading"
    >
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <Hairline gold className="mb-16" />

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p
              className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] text-ink leading-[1.25] italic"
              id="testimonial-heading"
            >
              "The firm's advice on our ITAT matter was precise, timely, and based on
              a thorough command of the facts and the applicable provisions. There
              was no ambiguity about where we stood and what the risks were."
            </p>

            <footer className="mt-8">
              <cite className="not-italic">
                <span className="eyebrow text-mute">
                  — CFO, Listed Mid-Cap Manufacturing Company
                </span>
              </cite>
            </footer>
          </motion.blockquote>

          <Hairline gold className="mb-10" />

          {/* Anonymised client descriptors */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {anonymisedClients.map((client, i) => (
              <span key={client} className="flex items-center gap-4">
                <span className="eyebrow text-mute">{client}</span>
                {i < anonymisedClients.length - 1 && (
                  <span className="text-rule/30 text-xs" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
          <p className="eyebrow text-mute/50 mt-3 text-[10px]">
            Clients listed by sector only — no names disclosed.
          </p>
        </div>
      </div>
    </section>
  );
}
