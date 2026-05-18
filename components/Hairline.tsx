'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface HairlineProps {
  className?: string;
  gold?: boolean;
  /** If true, the line draws itself in when it enters the viewport */
  animated?: boolean;
}

/**
 * A 1px horizontal rule. When `animated` is set, the line draws from left to
 * right as the element enters the viewport, respecting prefers-reduced-motion.
 */
export function Hairline({ className, gold = false, animated = false }: HairlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!animated) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  if (!animated) {
    return (
      <hr
        className={cn(
          'hairline',
          gold && 'hairline--gold',
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={ref}
      className={cn('overflow-hidden', className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          'h-px transition-[width] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]',
          gold ? 'bg-gold' : 'bg-rule',
          visible ? 'w-full' : 'w-0',
        )}
      />
    </div>
  );
}
