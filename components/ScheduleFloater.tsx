'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Slim floating consultation pill — appears after the hero scrolls out of view.
 * Positioned bottom-right, stays out of the way on mobile.
 */
export function ScheduleFloater() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-30 no-print
        transition-all duration-400
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-hidden={!visible}
    >
      <Link
        href="/contact"
        tabIndex={visible ? 0 : -1}
        className="
          flex items-center gap-3
          bg-ink text-paper
          px-5 py-3
          eyebrow tracking-[0.12em] text-xs
          hover:bg-accent transition-colors duration-200
          focus-visible:outline-accent
          shadow-none
        "
        aria-label="Schedule a consultation with S.K. Gambhir & Co."
      >
        Schedule Consultation
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
