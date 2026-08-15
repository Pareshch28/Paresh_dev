import { profile } from "../config/profile.js";
import HeroBackground from "../components/HeroBackground.jsx";
import { trackEvent } from "../utils/analytics.js";

// Turns each part into an array of {char, delay} so the letter-by-letter
// reveal keeps one continuous stagger across both halves of the heading,
// even though they're now rendered as two separate flex groups.
function buildLetterTimeline(parts, startDelay = 1.1, speed = 0.035) {
  let index = 0;
  return parts.map((part) =>
    part.split("").map((char) => {
      const delay = startDelay + index * speed;
      index += 1;
      // Use a non-breaking space so a bare " " never collapses to zero width.
      return { char: char === " " ? "\u00A0" : char, delay };
    })
  );
}

export default function Hero() {
  const [part1, part2] = buildLetterTimeline(profile.heroTitleParts);
  const fullTitle = profile.heroTitleParts.join(" ");

  return (
    <section className="hero" id="hero">
      <HeroBackground />
      <div className="hero__scrim" />

      <div className="hero__content">
        <p className="hero__subtitle">{profile.subtitle}</p>

        <h1 className="hero__title" aria-label={fullTitle}>
          <span className="hero__title-part">
            {part1.map(({ char, delay }, i) => (
              <span key={`p1-${i}`} style={{ animationDelay: `${delay}s` }}>
                {char}
              </span>
            ))}
          </span>
          <span className="hero__title-part">
            {part2.map(({ char, delay }, i) => (
              <span key={`p2-${i}`} style={{ animationDelay: `${delay}s` }}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a
            className="btn btn-primary"
            href={profile.ctaPrimary.href}
            onClick={() => trackEvent("hero_cta_click", { cta: profile.ctaPrimary.label })}
          >
            {profile.ctaPrimary.label}
          </a>
          <a
            className="btn"
            href={profile.ctaSecondary.href}
            onClick={() => trackEvent("hero_cta_click", { cta: profile.ctaSecondary.label })}
          >
            {profile.ctaSecondary.label}
          </a>
        </div>

        <div className="hero__currently">
          <span className="hero__pulse" />
          CURRENTLY <b>{profile.currently.emoji} {profile.currently.text}</b>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="scroll-cue__line" />
        SCROLL
      </div>
    </section>
  );
}
