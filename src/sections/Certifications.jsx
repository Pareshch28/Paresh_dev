import { certifications } from "../config/certifications.js";
import ExternalLink from "../components/ExternalLink.jsx";
import CertBadge from "../components/CertBadge.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Certifications() {
  return (
    <section className="section certifications" id="certifications">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Verified</span>
          <h2 className="section-title">Certifications 🎓</h2>
        </Reveal>

        <div className="cert__grid">
          {certifications.map((cert, i) => {
            const Wrapper = cert.verificationUrl ? ExternalLink : "div";
            const wrapperProps = cert.verificationUrl
              ? { href: cert.verificationUrl, eventName: "certification_click", eventParams: { certification: cert.name } }
              : {};
            return (
              <Reveal className="cert-card" key={cert.name} style={{ transitionDelay: `${i * 0.08}s` }}>
                <Wrapper className="cert-card__badge" {...wrapperProps} aria-label={`Verify ${cert.name}`}>
                  <CertBadge name={cert.name} comingSoon={cert.comingSoon} />
                </Wrapper>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                {cert.comingSoon && <span className="cert-card__soon">Badge coming soon</span>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
