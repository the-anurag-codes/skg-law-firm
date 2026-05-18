'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { SKGMonogram } from './SKGMonogram';
import { siteConfig } from '@/lib/site-config';
import { telLink } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Trap body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          'top-8', // offset below UtilityBar (32px)
          scrolled
            ? 'bg-paper/95 backdrop-blur-sm border-b border-rule/20 shadow-none'
            : 'bg-paper',
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-site flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="S.K. Gambhir & Co. — Home"
            className="flex items-center gap-3 focus-visible:outline-accent"
          >
            <SKGMonogram size="sm" />
            <span className="hidden lg:block font-script text-accent text-2xl leading-none">
              S.K. Gambhir &amp; Co.
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Site sections">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative eyebrow tracking-[0.12em] pb-0.5 transition-colors',
                  'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent',
                  'after:transition-[width] after:duration-300 after:ease-editorial',
                  isActive(link.href)
                    ? 'text-accent after:w-full'
                    : 'text-ink/70 hover:text-ink after:w-0 hover:after:w-full',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                'hidden md:inline-flex items-center gap-2',
                'bg-ink text-paper eyebrow tracking-[0.14em]',
                'px-5 py-2.5 transition-all duration-200',
                'hover:bg-accent focus-visible:outline-accent',
              )}
            >
              Schedule Consultation
            </Link>

            <button
              className="md:hidden p-2 text-ink"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Full-Screen Menu ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          'fixed inset-0 z-50 bg-paper flex flex-col',
          'transition-opacity duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        {/* Top bar of mobile menu */}
        <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-rule/20">
          <SKGMonogram size="sm" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 text-ink"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links — large serif */}
        <nav className="flex flex-col px-8 pt-10 gap-2 flex-1" aria-label="Mobile navigation">
          {siteConfig.nav.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-serif text-4xl font-medium py-4 border-b border-rule/10',
                'transition-colors duration-200',
                isActive(link.href) ? 'text-accent' : 'text-ink hover:text-accent',
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-serif text-4xl font-medium py-4 text-accent"
          >
            Schedule Consultation
          </Link>
        </nav>

        {/* Partner contacts at the bottom */}
        <div className="px-8 pb-10 pt-6 border-t border-rule/10">
          <p className="eyebrow text-mute mb-4">Direct Lines</p>
          {siteConfig.partners.map((p) => (
            <div key={p.id} className="mb-3">
              <p className="text-sm font-medium text-ink">{p.name}</p>
              <a
                href={telLink(p.phone)}
                className="text-sm text-mute hover:text-accent transition-colors"
              >
                {p.phoneDisplay}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer so content doesn't hide behind the fixed navbar (32px util + 64px navbar) */}
      <div className="h-24" aria-hidden="true" />
    </>
  );
}
