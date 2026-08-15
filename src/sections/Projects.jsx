import { projects } from "../config/projects.js";
import Reveal from "../components/Reveal.jsx";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Building things</span>
          <h2 className="section-title">Projects 🚀</h2>
          <p className="lede">
            I like building things and experimenting with technology. Some projects come from work,
            and some start simply because I wanted to learn something new.
          </p>
        </Reveal>

        <div className="projects__list">
          {projects.map((p, i) => (
            <Reveal
              className={`project-card ${p.isPlaceholder ? "project-card--placeholder" : ""}`}
              key={p.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="project-card__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              {p.tags.length > 0 && (
                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}
              {p.note && <p className="project-card__note">{p.note}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
