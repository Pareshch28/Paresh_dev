import { workParagraphs } from "../content/work.js";
import { renderRich } from "../utils/text.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="container work__grid">
        <Reveal className="work__intro">
          <span className="eyebrow">The path so far</span>
          <h2 className="section-title">My Work & Technical Journey 💻</h2>
          <p className="lede">Hardware → system administration → software → cloud → DevOps.</p>
        </Reveal>

        <Reveal className="prose work__body" as="div">
          {workParagraphs.map((p, i) => (
            <p key={i}>{renderRich(p)}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
