/**
 * PLACEHOLDER badge visual, used until you drop real Credly badge images into
 * src/assets/certifications/ and swap the `image` field in
 * src/config/certifications.js away from "placeholder".
 */
export default function CertBadge({ name, comingSoon }) {
  return (
    <svg viewBox="0 0 220 220" width="100%" height="100%" role="img" aria-label={`${name} badge`}>
      <defs>
        <linearGradient id={`badge-${name.length}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--dusk)" />
        </linearGradient>
      </defs>
      <polygon
        points="110,8 200,45 200,120 110,212 20,120 20,45"
        fill="none"
        stroke={`url(#badge-${name.length})`}
        strokeWidth="3"
        opacity={comingSoon ? 0.35 : 0.9}
      />
      <circle cx="110" cy="98" r="46" fill="none" stroke="var(--hairline-strong)" strokeWidth="2" />
      <text x="110" y="104" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill="var(--text-muted)">
        {comingSoon ? "SOON" : "BADGE"}
      </text>
    </svg>
  );
}
