import { aboutParagraphs } from "../content/about.js";
import { renderRich } from "../utils/text.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <Reveal className="about__intro">
          <span className="eyebrow">Who I am</span>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <Reveal className="prose about__body" as="div">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{renderRich(p)}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
