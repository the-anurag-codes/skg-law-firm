'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SKGMonogram } from './SKGMonogram';

const STORAGE_KEY = 'skg_disclaimer_accepted';

/**
 * Bar Council of India Rule 36 compliance modal.
 * Shown on first visit only (localStorage flag).
 * Focus is trapped within the modal while it is open.
 */
export function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      // localStorage unavailable (private mode, etc.) — show modal
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch { /* ignore */ }
    setVisible(false);
  };

  const handleDecline = () => {
    router.push('/disclaimer?declined=1');
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-paper/98 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        className="fixed inset-0 z-[101] flex flex-col items-center justify-center p-6"
      >
        <div className="w-full max-w-2xl bg-paper border border-rule/15 p-8 sm:p-12">
          {/* Header */}
          <div className="flex items-center gap-5 mb-8 pb-6 border-b border-rule/10">
            <SKGMonogram size="sm" />
            <div>
              <p className="font-script text-2xl text-ink leading-none">S.K. Gambhir &amp; Co.</p>
              <p className="eyebrow text-mute mt-0.5">Legal Notice — Bar Council of India</p>
            </div>
          </div>

          <h1
            id="disclaimer-title"
            className="font-serif text-2xl text-ink mb-6"
          >
            Disclaimer
          </h1>

          <div className="text-sm text-ink/80 leading-relaxed space-y-4 mb-8">
            <p>
              As per the rules of the Bar Council of India, advocates are not
              permitted to solicit work or advertise. By clicking &ldquo;I Agree &amp;
              Enter&rdquo; below, you acknowledge that:
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                There has been no advertisement, personal communication,
                solicitation, invitation, or inducement of any sort whatsoever
                from <strong>S.K. Gambhir & Co.</strong> or any of its members
                to solicit any work through this website.
              </li>
              <li>
                You wish to gain more information about the firm for your own
                information and use.
              </li>
              <li>
                The information provided on this website is solely available at
                your request for informational purposes only and should not be
                interpreted as soliciting or advertisement.
              </li>
              <li>
                No material or information provided on this website should be
                construed as legal advice. You agree to seek independent legal
                counsel of your choice for any legal advice.
              </li>
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={handleAccept}
              autoFocus
              className="
                bg-ink text-paper
                px-8 py-3.5
                eyebrow tracking-[0.14em]
                hover:bg-accent transition-colors duration-200
                focus-visible:outline-accent
              "
            >
              I Agree & Enter
            </button>
            <button
              onClick={handleDecline}
              className="
                eyebrow tracking-[0.12em] text-mute
                hover:text-ink transition-colors
                focus-visible:outline-accent
                underline underline-offset-4
              "
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
