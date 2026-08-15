import { socialLinks } from "../config/socialLinks.js";
import ExternalLink from "../components/ExternalLink.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Social() {
  return (
    <section className="section social" id="social">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Around the web</span>
          <h2 className="section-title">Find Me Around the Internet 🌐</h2>
          <p className="lede">
            I spend a little time on different corners of the internet — sharing things, discovering things,
            reading, learning and sometimes just scrolling. 😄 If you want to find me, these are the places.
          </p>
        </Reveal>

        <Reveal className="social__row">
          {socialLinks.map((s) => (
            <ExternalLink
              key={s.key}
              href={s.url}
              eventName={`${s.key}_click`}
              className={`social__link ${s.featured ? "social__link--featured" : ""}`}
            >
              {s.name}
            </ExternalLink>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
