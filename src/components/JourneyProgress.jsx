import { useScrollProgress } from "../hooks/useScrollProgress.js";

/**
 * Signature element: a vertical "highway line" that fills with amber as you scroll,
 * echoing the site's road/journey motif. Hidden on small screens and for
 * prefers-reduced-motion users who'd rather not track a moving indicator.
 */
export default function JourneyProgress() {
  const progress = useScrollProgress();

  return (
    <div className="journey-rail" aria-hidden="true">
      <div className="journey-rail__track">
        <div className="journey-rail__fill" style={{ height: `${progress * 100}%` }} />
        <div className="journey-rail__dash" />
      </div>
      <div className="journey-rail__marker" style={{ top: `${progress * 100}%` }} />
    </div>
  );
}
