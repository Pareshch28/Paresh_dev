import { useEffect } from "react";
import "./styles.css";

import Nav from "./components/Nav.jsx";
import JourneyProgress from "./components/JourneyProgress.jsx";

import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Work from "./sections/Work.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Certifications from "./sections/Certifications.jsx";
import Stories from "./sections/Stories.jsx";
import Music from "./sections/Music.jsx";
import Travel from "./sections/Travel.jsx";
import Moments from "./sections/Moments.jsx";
import ThingsILike from "./sections/ThingsILike.jsx";
import Social from "./sections/Social.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

import { initAnalytics, trackEvent } from "./utils/analytics.js";

export default function App() {
  useEffect(() => {
    initAnalytics();

    // Basic scroll-engagement milestones for GA4.
    const milestones = [25, 50, 75, 100];
    const fired = new Set();
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      milestones.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackEvent("scroll_depth", { percent: m });
        }
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <JourneyProgress />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Projects />
        <Certifications />
        <Stories />
        <Music />
        <Travel />
        <Moments />
        <ThingsILike />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
