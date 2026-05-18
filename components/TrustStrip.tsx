'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 38, suffix: '+', label: 'Years of Practice' },
  { value: 2,  suffix: '',  label: 'Generations of Counsel' },
  { value: 2,  suffix: '',  label: 'Offices · Delhi NCR' },
];

const disciplines = [
  'Direct Tax',
  'GST',
  'Corporate Law',
  'Litigation',
  'International Tax',
];

function CountUp({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <span className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      className="bg-bone border-y border-rule/10"
      aria-label="Firm statistics"
    >
      <div className="container-site py-10">
        <div className="flex flex-wrap items-start gap-0 divide-y md:divide-y-0 md:divide-x divide-rule/10">
          {/* Stats */}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[160px] px-0 md:px-8 py-4 md:py-0 first:pl-0 last:pr-0"
            >
              <p className="font-serif text-4xl text-ink font-medium">
                <CountUp value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="eyebrow text-mute mt-1">{stat.label}</p>
            </div>
          ))}

          {/* Disciplines */}
          <div className="flex-[2] min-w-[240px] px-0 md:px-8 py-4 md:py-0">
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {disciplines.map((d, i) => (
                <span key={d} className="flex items-center gap-3">
                  <span className="eyebrow text-mute">{d}</span>
                  {i < disciplines.length - 1 && (
                    <span className="text-rule/30 text-xs" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
            <p className="eyebrow text-mute mt-1.5">Areas of practice</p>
          </div>
        </div>
      </div>
    </div>
  );
}
