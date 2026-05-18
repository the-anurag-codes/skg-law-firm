import { cn } from '@/lib/utils';

interface SKGMonogramProps {
  className?: string;
  /** 'default' = navy | 'light' = white | 'watermark' = very faint */
  variant?: 'default' | 'light' | 'watermark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: { width: 48,  height: 40 },
  md: { width: 80,  height: 66 },
  lg: { width: 120, height: 100 },
  xl: { width: 200, height: 166 },
};

const fills = {
  default:   { text: '#1E2A47', sub: '#6B6B6B', accent: '#B8985A', opacity: 1 },
  light:     { text: '#FAFAF7', sub: '#FAFAF7', accent: '#B8985A', opacity: 1 },
  watermark: { text: '#1E2A47', sub: '#1E2A47', accent: '#1E2A47', opacity: 0.06 },
};

export function SKGMonogram({
  className,
  variant = 'default',
  size = 'md',
}: SKGMonogramProps) {
  const { width, height } = sizes[size];
  const { text, sub, accent, opacity } = fills[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="S.K. Gambhir & Co. monogram"
      role="img"
      className={cn('flex-shrink-0 select-none', className)}
      style={{ opacity }}
    >
      {/* ── Laurel wreath (simplified, matching card) ── */}
      {/* Left branch */}
      <g stroke={accent} strokeWidth="0.6" fill="none" opacity="0.8">
        {/* Left leaves */}
        <ellipse cx="22" cy="58" rx="5" ry="2.5" transform="rotate(-50 22 58)" />
        <ellipse cx="17" cy="50" rx="5" ry="2.5" transform="rotate(-40 17 50)" />
        <ellipse cx="15" cy="41" rx="5" ry="2.5" transform="rotate(-28 15 41)" />
        <ellipse cx="16" cy="32" rx="5" ry="2.5" transform="rotate(-15 16 32)" />
        <ellipse cx="20" cy="24" rx="4.5" ry="2.2" transform="rotate(-5 20 24)" />
        {/* Left stem */}
        <path d="M 20 65 Q 16 50 18 25" strokeWidth="0.5" />
      </g>
      <g stroke={accent} strokeWidth="0.6" fill="none" opacity="0.8">
        {/* Right leaves (mirror) */}
        <ellipse cx="98" cy="58" rx="5" ry="2.5" transform="rotate(50 98 58)" />
        <ellipse cx="103" cy="50" rx="5" ry="2.5" transform="rotate(40 103 50)" />
        <ellipse cx="105" cy="41" rx="5" ry="2.5" transform="rotate(28 105 41)" />
        <ellipse cx="104" cy="32" rx="5" ry="2.5" transform="rotate(15 104 32)" />
        <ellipse cx="100" cy="24" rx="4.5" ry="2.2" transform="rotate(5 100 24)" />
        {/* Right stem */}
        <path d="M 100 65 Q 104 50 102 25" strokeWidth="0.5" />
      </g>

      {/* Thin horizontal rule below wreath tie */}
      <line x1="30" y1="68" x2="90" y2="68" stroke={accent} strokeWidth="0.5" opacity="0.6" />

      {/* ── Main brand text — script font ── */}
      {/* "SKG & Co." in script — the primary brand mark */}
      <text
        x="60"
        y="52"
        fontFamily="'Great Vibes', cursive"
        fontSize="28"
        fontWeight="400"
        fill={text}
        textAnchor="middle"
        letterSpacing="0.5"
      >
        SKG &amp; Co.
      </text>

      {/* Bottom sub-text */}
      <text
        x="60"
        y="80"
        fontFamily="'Inter', sans-serif"
        fontSize="5"
        fontWeight="400"
        fill={sub}
        textAnchor="middle"
        letterSpacing="2.5"
        style={{ textTransform: 'uppercase' }}
      >
        EST. 1987
      </text>
    </svg>
  );
}
