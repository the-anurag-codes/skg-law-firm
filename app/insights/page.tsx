import type { Metadata } from 'next';
import Link from 'next/link';
import { insights, insightCategories, type InsightCategory } from '@/lib/insights';
import { SectionLabel } from '@/components/SectionLabel';
import { Hairline } from '@/components/Hairline';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Insights — Tax & Corporate Law Commentary',
  description:
    'Commentary from S.K. Gambhir & Co. on direct tax, GST, corporate law, and international tax. Current ITAT rulings, legislative developments, and NRI advisory notes.',
};

export default function InsightsPage() {
  const published = insights.filter((a) => a.published);

  return (
    <>
      {/* Hero */}
      <div className="bg-ink text-paper pt-16 pb-20">
        <div className="container-site">
          <SectionLabel label="Insights" className="mb-6 text-paper/40" />
          <h1 className="font-serif text-display-md text-paper mt-4 mb-6 max-w-xl">
            On the law.
          </h1>
          <p className="text-body-lg text-paper/60 max-w-[54ch] leading-relaxed">
            Commentary on developments in Indian tax and corporate law — ITAT
            decisions, legislative changes, and advisory notes on matters we
            encounter in practice.
          </p>
        </div>
      </div>

      {/* Filter hint — static labels (JS-free progressive enhancement) */}
      <div className="bg-bone border-b border-rule/10 sticky top-24 z-20">
        <div className="container-site py-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="eyebrow text-mute">Topics:</span>
            <span className="eyebrow text-accent">All</span>
            <span className="text-rule/20 mx-1" aria-hidden="true">·</span>
            {insightCategories.map((cat) => (
              <span key={cat} className="eyebrow text-mute">{cat}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Article list */}
      <div className="bg-paper py-16">
        <div className="container-site max-w-4xl mx-auto">
          <ol className="divide-y divide-rule/10" aria-label="Insights articles">
            {published.map((article, i) => (
              <li key={article.slug}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-10 py-8 hover:bg-accent-soft px-2 -mx-2 transition-colors duration-150 focus-visible:outline-accent"
                  aria-label={`${article.title} — ${article.category} — ${formatDate(article.date)}`}
                >
                  {/* Date + category */}
                  <div className="shrink-0 sm:w-48">
                    <time
                      dateTime={article.date}
                      className="eyebrow text-mute tabular-nums block"
                    >
                      {formatDate(article.date)}
                    </time>
                    <span className="eyebrow text-accent mt-1 block">{article.category}</span>
                    {article.readingTime && (
                      <span className="eyebrow text-mute/60 mt-1 block">{article.readingTime}</span>
                    )}
                  </div>

                  {/* Title + excerpt */}
                  <div className="flex-1">
                    <h2 className="font-serif text-xl text-ink group-hover:text-accent transition-colors duration-200 mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-mute leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span
                    className="shrink-0 eyebrow text-mute group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
                    aria-hidden="true"
                  >
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
