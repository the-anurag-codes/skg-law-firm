'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { Hairline } from './Hairline';
import { insights } from '@/lib/insights';
import { formatDate } from '@/lib/utils';

export function InsightsTeaser() {
  const featured = insights.filter((a) => a.published).slice(0, 3);

  return (
    <section
      className="bg-paper py-24"
      aria-labelledby="insights-heading"
    >
      <div className="container-site">
        <SectionLabel number="06" label="Insights" className="mb-6" />
        <Hairline animated className="mb-12" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <h2
            id="insights-heading"
            className="font-serif text-display-sm text-ink max-w-sm"
          >
            On the law.
          </h2>
          <Link
            href="/insights"
            className="
              inline-flex items-center gap-2
              eyebrow tracking-[0.12em] text-accent
              border-b border-accent pb-0.5
              hover:opacity-70 transition-opacity
              shrink-0
            "
          >
            View all insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              aria-labelledby={`insight-${article.slug}`}
            >
              <Link
                href={`/insights/${article.slug}`}
                className="group block border border-rule/10 hover:border-accent/30 transition-colors duration-200 p-6 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <time
                    dateTime={article.date}
                    className="eyebrow text-mute tabular-nums"
                  >
                    {formatDate(article.date)}
                  </time>
                  <span className="text-mute/30" aria-hidden="true">·</span>
                  <span className="eyebrow text-accent">{article.category}</span>
                </div>

                <h3
                  id={`insight-${article.slug}`}
                  className="font-serif text-xl text-ink leading-snug mb-3 group-hover:text-accent transition-colors duration-200"
                >
                  {article.title}
                </h3>

                <p className="text-sm text-mute leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 eyebrow text-accent">
                  <span>Read</span>
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
