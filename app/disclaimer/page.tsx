import type { Metadata } from 'next';
import Link from 'next/link';
import { SKGMonogram } from '@/components/SKGMonogram';
import { Hairline } from '@/components/Hairline';

export const metadata: Metadata = {
  title: 'Disclaimer — Bar Council of India Rule 36',
  description:
    'Legal disclaimer for S.K. Gambhir & Co. website, as required under the Bar Council of India Rules.',
  robots: { index: false }, // disclaimer page doesn't need to rank
};

export default function DisclaimerPage({
  searchParams,
}: {
  searchParams: { declined?: string };
}) {
  const declined = searchParams.declined === '1';

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      <div className="container-site py-20 flex-1 max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-5 mb-12 pb-8 border-b border-rule/10">
          <SKGMonogram size="sm" />
          <div>
            <p className="font-serif text-xl text-ink">S.K. Gambhir & Co.</p>
            <p className="eyebrow text-mute mt-0.5">
              Bar Council of India — Rule 36 Notice
            </p>
          </div>
        </div>

        {declined && (
          <div className="bg-bone border border-rule/10 p-6 mb-10">
            <p className="font-serif text-lg text-ink mb-2">
              You have chosen not to proceed.
            </p>
            <p className="text-sm text-mute leading-relaxed">
              The firm respects your decision. This page contains the full
              disclaimer text for your reference. If you change your mind, you
              may{' '}
              <Link href="/" className="text-accent hover:underline">
                return to the website
              </Link>{' '}
              and accept the disclaimer.
            </p>
          </div>
        )}

        <h1 className="font-serif text-display-sm text-ink mb-8">
          Disclaimer
        </h1>

        <div className="space-y-6 text-body text-ink/80 leading-relaxed">
          <p className="font-semibold text-ink">
            Important Notice — Please Read Before Proceeding
          </p>

          <p>
            As per the rules of the Bar Council of India, advocates are not
            permitted to solicit work or advertise. This website has been
            created and maintained by S.K. Gambhir & Co. solely for informational
            purposes and is not intended to be an advertisement or to solicit
            clients.
          </p>

          <p>
            By accessing this website, you confirm and acknowledge that:
          </p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              There has been no advertisement, personal communication,
              solicitation, invitation, or inducement of any sort whatsoever
              from <strong>S.K. Gambhir & Co.</strong> or any of its members
              to solicit any work through this website or otherwise.
            </li>
            <li>
              You wish to gain more information about the firm, its practice
              areas, and its attorneys for your own information and use.
            </li>
            <li>
              The information about the firm on this website is provided solely
              at your own request and for informational purposes only. It should
              not be interpreted as soliciting or advertisement.
            </li>
            <li>
              No material or information provided on this website should be
              construed as legal advice. S.K. Gambhir & Co. will not be liable
              for any consequence of any action taken by the user relying on
              material, information, or opinion provided on this website.
            </li>
            <li>
              Although every effort is made to ensure the accuracy of the
              information contained on this website, S.K. Gambhir & Co. does
              not guarantee its accuracy and cannot be held liable for any
              errors or omissions.
            </li>
            <li>
              The firm is not responsible for the content of external websites
              linked to or from this website.
            </li>
            <li>
              The contents of this website are the intellectual property of
              S.K. Gambhir & Co. and may not be reproduced or distributed
              without prior written permission.
            </li>
          </ol>

          <Hairline className="my-8" />

          <h2 className="font-serif text-xl text-ink">
            Bar Council of India Rules — Rule 36
          </h2>

          <p>
            The Bar Council of India Rules, under Chapter II, Part VI (Rules
            Governing Advocates), Rule 36, prohibit advocates from soliciting
            work or advertising either directly or indirectly, whether by
            circulars, advertisements, touts, personal communications, interviews
            not warranted by personal relations, furnishing or inspiring newspaper
            comments or procuring his photograph to be published in connection
            with cases in which he has been engaged or concerned.
          </p>

          <p>
            In compliance with the aforesaid rule, this website does not
            constitute an advertisement or solicitation of any kind. The contents
            of this website are for informational purposes only and the information
            provided herein should not be treated as legal advice.
          </p>

          <Hairline className="my-8" />

          <p className="text-sm text-mute">
            Last updated: January 2026. For questions about this notice, contact
            the firm at{' '}
            <a
              href="mailto:skgambhir@hotmail.com"
              className="text-accent hover:underline"
            >
              skgambhir@hotmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/"
            className="
              bg-ink text-paper
              px-8 py-3.5
              eyebrow tracking-[0.14em]
              hover:bg-accent transition-colors
              focus-visible:outline-accent
            "
          >
            Return to Website →
          </Link>
          <Link
            href="/contact"
            className="
              eyebrow tracking-[0.12em] text-accent
              border-b border-accent pb-0.5
              hover:opacity-70 transition-opacity
              self-center
            "
          >
            Contact the firm
          </Link>
        </div>
      </div>
    </div>
  );
}
