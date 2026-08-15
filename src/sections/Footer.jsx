import { socialLinks } from "../config/socialLinks.js";
import ExternalLink from "../components/ExternalLink.jsx";

const FOOTER_KEYS = ["github", "instagram", "youtube", "linkedin"];

export default function Footer() {
  const year = new Date().getFullYear();
  const links = FOOTER_KEYS
    .map((key) => socialLinks.find((s) => s.key === key))
    .filter(Boolean);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} Paresh</p>
        <p className="footer__tagline">Built with curiosity, caffeine and a little bit of code. ☕</p>
        <div className="footer__links">
          {links.map((s) => (
            <ExternalLink key={s.key} href={s.url} eventName="footer_link_click" eventParams={{ link: s.key }}>
              {s.name}
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
