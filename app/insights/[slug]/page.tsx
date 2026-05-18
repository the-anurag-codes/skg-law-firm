import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { insights } from '@/lib/insights';
import { SectionLabel } from '@/components/SectionLabel';
import { Hairline } from '@/components/Hairline';
import { formatDate } from '@/lib/utils';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = insights.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Not Found' };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

async function getArticleContent(slug: string) {
  const contentDir = path.join(process.cwd(), 'content', 'insights');
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { frontmatter: data, content };
}

export default async function InsightArticlePage({ params }: Props) {
  const meta = insights.find((a) => a.slug === params.slug);
  if (!meta) notFound();

  const article = await getArticleContent(params.slug);

  /* Article index for related navigation */
  const published = insights.filter((a) => a.published);
  const currentIndex = published.findIndex((a) => a.slug === params.slug);
  const prev = published[currentIndex - 1] ?? null;
  const next = published[currentIndex + 1] ?? null;

  return (
    <>
      {/* Article hero */}
      <div className="bg-ink text-paper pt-16 pb-16">
        <div className="container-site max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/insights"
              className="eyebrow text-paper/40 hover:text-paper transition-colors"
            >
              ← Insights
            </Link>
            <span className="text-paper/20" aria-hidden="true">·</span>
            <span className="eyebrow text-accent">{meta.category}</span>
          </div>

          <h1 className="font-serif text-display-sm text-paper mb-6 leading-tight">
            {meta.title}
          </h1>

          <div className="flex items-center gap-5">
            <time
              dateTime={meta.date}
              className="eyebrow text-paper/50 tabular-nums"
            >
              {formatDate(meta.date)}
            </time>
            {meta.readingTime && (
              <>
                <span className="text-paper/20" aria-hidden="true">·</span>
                <span className="eyebrow text-paper/50">{meta.readingTime}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="bg-paper py-16">
        <div className="container-site max-w-3xl">
          {article ? (
            <article className="prose-skg">
              <MDXRemote source={article.content} />
            </article>
          ) : (
            /* Stub — article not yet written */
            <div className="border-l-2 border-gold/40 pl-6 py-4">
              <p className="font-serif text-xl text-ink mb-3">
                Full article coming soon.
              </p>
              <p className="text-body text-mute leading-relaxed mb-2">
                {meta.excerpt}
              </p>
              <p className="text-sm text-mute/60 italic">
                This article is currently in preparation. Check back, or{' '}
                <Link
                  href="/contact"
                  className="text-accent hover:underline"
                >
                  contact the firm
                </Link>{' '}
                to discuss the topic directly.
              </p>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-16 pt-8 border-t border-rule/10">
            <p className="text-xs text-mute/60 leading-relaxed max-w-prose">
              <strong className="font-semibold">Disclaimer:</strong>{' '}
              This article is published for informational purposes only and does not
              constitute legal advice. The contents of this article should not be
              relied upon as the basis for any legal decision without independent
              professional advice specific to your circumstances. S.K. Gambhir & Co.
              accepts no liability for any loss or damage arising from reliance on
              information contained in this article.
            </p>
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <div className="bg-bone border-t border-rule/10 py-12">
          <div className="container-site max-w-3xl flex justify-between gap-8">
            {prev ? (
              <Link
                href={`/insights/${prev.slug}`}
                className="group flex-1"
              >
                <p className="eyebrow text-mute mb-2">← Previous</p>
                <p className="font-serif text-lg text-ink group-hover:text-accent transition-colors leading-snug">
                  {prev.title}
                </p>
              </Link>
            ) : <div />}

            {next && (
              <Link
                href={`/insights/${next.slug}`}
                className="group flex-1 text-right"
              >
                <p className="eyebrow text-mute mb-2">Next →</p>
                <p className="font-serif text-lg text-ink group-hover:text-accent transition-colors leading-snug">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-paper border-t border-rule/10 py-12">
        <div className="container-site max-w-3xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-body text-mute">
              Questions about this topic?
            </p>
            <Link
              href="/contact"
              className="
                inline-flex items-center gap-2
                bg-ink text-paper
                px-6 py-3
                eyebrow tracking-[0.12em] text-xs
                hover:bg-accent transition-colors
                focus-visible:outline-accent
              "
            >
              Schedule a consultation →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
