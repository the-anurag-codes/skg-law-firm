'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { telLink } from '@/lib/utils';

/**
 * Slim 32px utility bar at the very top.
 * Shows on load, hides on scroll-down, reappears on scroll-up.
 */
export function UtilityBar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 60);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        bg-accent text-white
        transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        fixed top-0 left-0 right-0 z-50
      `}
      style={{ height: '32px' }}
      role="banner"
      aria-label="Contact information"
    >
      <div className="container-site flex h-full items-center justify-between">
        <span className="eyebrow text-white/70 hidden sm:block">
          Established&nbsp;1987&nbsp;·&nbsp;New&nbsp;Delhi
        </span>
        <div className="flex items-center gap-4 ml-auto">
          <a
            href={telLink(siteConfig.partners[0].phone)}
            className="eyebrow text-white/80 hover:text-white transition-colors hidden md:block"
            aria-label={`Call S.K. Gambhir: ${siteConfig.partners[0].phoneDisplay}`}
          >
            {siteConfig.partners[0].phoneDisplay}
          </a>
          <span className="text-white/30 hidden md:block" aria-hidden="true">·</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="eyebrow text-white/80 hover:text-white transition-colors"
          >
            {siteConfig.emailDisplay}
          </a>
          <span className="text-white/30" aria-hidden="true">·</span>
          <Link
            href="/contact"
            className="eyebrow text-gold hover:text-white transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
