import { profile } from "../config/profile.js";
import ExternalLink from "../components/ExternalLink.jsx";
import { socialLinks } from "../config/socialLinks.js";
import Reveal from "../components/Reveal.jsx";
import { trackEvent } from "../utils/analytics.js";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__box">
        <Reveal>
          <span className="eyebrow">Say hi</span>
          <h2 className="section-title">Let's Talk 👋</h2>
          <p className="lede">
            Have something to share? Found something interesting? Want to talk technology, music,
            travel or just random things? Say hi.
          </p>

          {profile.email ? (
            <a
              className="btn btn-primary"
              href={`mailto:${profile.email}`}
              onClick={() => trackEvent("email_click")}
            >
              {profile.email}
            </a>
          ) : (
            <span className="btn contact__email-placeholder" aria-disabled="true">
              [Add email]
            </span>
          )}

          <div className="contact__social">
            {socialLinks.map((s) => (
              <ExternalLink key={s.key} href={s.url} eventName={`${s.key}_click`}>
                {s.name}
              </ExternalLink>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
