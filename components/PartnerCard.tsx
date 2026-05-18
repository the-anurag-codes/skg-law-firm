'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { partners } from '@/lib/partners';
import { SectionLabel } from './SectionLabel';
import { Hairline } from './Hairline';
import { telLink } from '@/lib/utils';

export function PartnerCards() {
  return (
    <section
      className="bg-bone py-24"
      aria-labelledby="people-heading"
    >
      <div className="container-site">
        <SectionLabel number="04" label="The People" className="mb-6" />
        <Hairline animated className="mb-12" />

        <h2
          id="people-heading"
          className="font-serif text-display-sm text-ink mb-16 max-w-md"
        >
          Counsel with continuity.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {partners.map((partner, i) => (
            <motion.article
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group border border-rule/15 overflow-hidden bg-paper"
              aria-labelledby={`partner-${partner.id}`}
            >
              {/* Portrait */}
              <div className="relative overflow-hidden aspect-[4/3] bg-bone">
                <Image
                  src={partner.image}
                  alt={`Portrait of ${partner.name}, ${partner.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority={i === 0}
                  onError={() => {}} // placeholder handled by next.config fallback
                />
                {/* Fallback portrait SVG when image not available */}
                <div className="absolute inset-0 flex items-center justify-center bg-bone">
                  <PortraitPlaceholder name={partner.name} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      id={`partner-${partner.id}`}
                      className="font-serif text-2xl text-ink"
                    >
                      {partner.name}
                    </h3>
                    <p className="eyebrow text-accent mt-1">
                      {partner.title}
                    </p>
                  </div>
                  <span className="eyebrow text-mute shrink-0 tabular-nums">
                    Since {partner.since}
                  </span>
                </div>

                <p className="eyebrow text-mute mb-5">{partner.credentials}</p>

                <p className="text-body text-ink/80 leading-relaxed mb-6">
                  {partner.shortBio}
                </p>

                <Hairline className="mb-5" />

                <div className="flex flex-wrap gap-5">
                  <a
                    href={telLink(partner.phone)}
                    className="eyebrow text-accent hover:text-ink transition-colors"
                    aria-label={`Call ${partner.name}: ${partner.phoneDisplay}`}
                  >
                    {partner.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${partner.email}`}
                    className="eyebrow text-mute hover:text-ink transition-colors"
                  >
                    {partner.email}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
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
    </section>
  );
}

/** Minimal monochrome portrait placeholder SVG */
function PortraitPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label={`Portrait placeholder for ${name}`}
      role="img"
    >
      <rect width="300" height="300" fill="#E8E6DF" />
      {/* Silhouette */}
      <circle cx="150" cy="110" r="52" fill="#C4C0B5" />
      <ellipse cx="150" cy="280" rx="100" ry="70" fill="#C4C0B5" />
      {/* Initials */}
      <text
        x="150"
        y="125"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="42"
        fontWeight="400"
        fill="#8A8880"
        letterSpacing="-1"
      >
        {initials}
      </text>
    </svg>
  );
}
