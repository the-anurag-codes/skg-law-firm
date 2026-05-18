import { cn } from '@/lib/utils';

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

/** "01 — PRACTICE AREAS" eyebrow label above section headings */
export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        'eyebrow flex items-center gap-3',
        className,
      )}
      aria-hidden="true"
    >
      {number && (
        <>
          <span className="tabular-nums">{number}</span>
          <span className="inline-block w-4 border-t border-[var(--mute)]" aria-hidden="true" />
        </>
      )}
      {label}
    </p>
  );
}
