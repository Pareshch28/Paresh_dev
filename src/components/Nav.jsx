import { useEffect, useState } from "react";
import PersonalMark from "./PersonalMark.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import { trackEvent } from "../utils/analytics.js";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stories", href: "#stories" },
  { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="top">
      <div className="nav__inner">
        <PersonalMark />

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => trackEvent("nav_click", { section: link.label })}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "nav__mobile--open" : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              setOpen(false);
              trackEvent("nav_click", { section: link.label, mobile: true });
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
