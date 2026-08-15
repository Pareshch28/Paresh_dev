/**
 * PLACEHOLDER cinematic background — a generated dusk-road scene (gradient sky,
 * receding road lines, distant city lights) so the hero isn't empty at delivery.
 * Swap for a real photo whenever you like: drop it at src/assets/hero-bg.jpg,
 * import it here, and render an <img> (or CSS background) instead of this SVG.
 */
export default function HeroBackground() {
  return (
    <div className="hero__bg">
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0b0f" />
            <stop offset="45%" stopColor="#171a24" />
            <stop offset="75%" stopColor="#3a2f2a" />
            <stop offset="100%" stopColor="#0a0b0f" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#e3a455" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#c9803d" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#c9803d" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b1e26" stopOpacity="0" />
            <stop offset="100%" stopColor="#0a0b0f" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <rect width="1600" height="1000" fill="url(#sky)" />
        <ellipse cx="800" cy="760" rx="900" ry="420" fill="url(#sun)" />

        {/* distant hills */}
        <path d="M0 640 Q 300 560 600 620 T 1200 610 T 1600 650 V 1000 H 0 Z" fill="#12141a" opacity="0.9" />
        <path d="M0 700 Q 400 630 800 680 T 1600 690 V 1000 H 0 Z" fill="#0d0e13" />

        {/* distant city lights */}
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i * 187) % 1600;
          const y = 660 + ((i * 53) % 60);
          const r = 1 + (i % 3);
          return <circle key={i} cx={x} cy={y} r={r} fill="#e3a455" opacity={0.25 + (i % 5) * 0.1} />;
        })}

        {/* road converging to a vanishing point */}
        <polygon points="620,1000 980,1000 810,700 790,700" fill="#14161c" />
        <line x1="800" y1="700" x2="700" y2="1000" stroke="#e3a455" strokeWidth="3" opacity="0.55" strokeDasharray="24 22" />
        <line x1="800" y1="700" x2="900" y2="1000" stroke="#e3a455" strokeWidth="3" opacity="0.55" strokeDasharray="24 22" />
        <rect x="0" y="820" width="1600" height="180" fill="url(#road)" />
      </svg>
    </div>
  );
}
