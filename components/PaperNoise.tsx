/** SVG paper-noise texture overlay — 3–4% opacity on dark sections */
export function PaperNoise({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ''}`}
      style={{ zIndex: 0 }}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#paper-noise)"
          opacity="0.04"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
