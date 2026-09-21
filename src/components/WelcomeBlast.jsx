import { useEffect, useState } from "react";
import { trackEvent } from "../utils/analytics.js";

const PARTICLE_COUNT = 26;
const DEFAULT_DURATION_MS = 4500;

/** Builds the right greeting for however far we are from the actual date. */
function buildMessage(festival) {
  if (festival.phase === "before") {
    const daysLeft = -festival.diffDays;
    return `${daysLeft} day${daysLeft === 1 ? "" : "s"} to go until ${festival.name}! 🎉`;
  }
  if (festival.phase === "after") {
    return `Hope your ${festival.name} celebrations were wonderful! Belated wishes from Paresh.`;
  }
  return `Paresh wishes you a very Happy ${festival.name}!`;
}

/**
 * Full-screen festival greeting shown when today falls in the before/after
 * window around a date in src/config/festivals.js — a countdown beforehand,
 * the main greeting on the day, and a belated wish for a few days after.
 * Auto-dismisses after a few seconds; the visitor can also click/tap
 * anywhere or press Escape to skip it early. The page underneath is already
 * mounted and unaffected — this only overlays it.
 */
export default function WelcomeBlast({ festival, onDismiss }) {
  const [closing, setClosing] = useState(false);
  const message = buildMessage(festival);

  useEffect(() => {
    trackEvent("festival_blast_shown", { festival: festival.id, phase: festival.phase });

    const dismissTimer = setTimeout(handleClose, festival.durationMs ?? DEFAULT_DURATION_MS);
    function onKey(e) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(dismissTimer);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setClosing(true);
    // Let the fade-out transition finish before unmounting.
    setTimeout(onDismiss, 400);
  }

  const emojiChars = festival.emoji.match(/\p{Emoji}/gu) || ["🎉"];
  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    char: emojiChars[i % emojiChars.length],
    left: Math.random() * 100,
    delay: Math.random() * 1.2,
    duration: 3.2 + Math.random() * 2.2,
    size: 18 + Math.random() * 20,
  }));

  return (
    <div
      className={`blast ${closing ? "blast--closing" : ""}`}
      role="dialog"
      aria-label={message}
      onClick={handleClose}
    >
      <div className="blast__particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="blast__particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              fontSize: `${p.size}px`,
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      <div className="blast__card">
        <span className="blast__emoji">{festival.emoji}</span>
        <p className="blast__message">{message}</p>
        <span className="blast__hint">Tap anywhere to continue</span>
      </div>
    </div>
  );
}
