import { trackEvent } from "../utils/analytics.js";
import markPlaceholder from "../assets/paresh-mark.svg";

export default function PersonalMark() {
  function handleClick(e) {
    e.preventDefault();
    trackEvent("logo_click");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  }

  return (
    <a
      href="#top"
      className="personal-mark"
      aria-label="Paresh — back to top"
      onClick={handleClick}
    >
      <img src={markPlaceholder} alt="Paresh's personal mark" width={36} height={36} />
    </a>
  );
}