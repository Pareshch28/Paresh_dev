import { trackEvent } from "../utils/analytics.js";
import markPlaceholder from "../assets/paresh-mark.svg";

/**
 * Personal identity mark, top-left, always links home.
 * PLACEHOLDER: replace src/assets/paresh-mark.svg with your real uploaded mark
 * (e.g. src/assets/paresh-mark.png), then update the import above to match.
 */
export default function PersonalMark() {
  return (
    <a
      href="#top"
      className="personal-mark"
      aria-label="Paresh — back to top"
      onClick={() => trackEvent("logo_click")}
    >
      <img src={markPlaceholder} alt="Paresh's personal mark" width={36} height={36} />
    </a>
  );
}
