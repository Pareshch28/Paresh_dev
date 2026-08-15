import { skillGroups } from "../content/skills.js";
import Reveal from "../components/Reveal.jsx";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Toolbelt</span>
          <h2 className="section-title">Skills & Things I Work With 🧠</h2>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal className="skills__group" key={group.title} style={{ transitionDelay: `${i * 0.08}s` }}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="skills__footer">
          <p>
            I enjoy debugging, troubleshooting, experimenting and figuring out how things work.
          </p>
          <p>
            <strong>Still exploring →</strong> Cloud, DevOps, automation, new technologies and whatever catches my curiosity next. 🚀
          </p>
        </Reveal>
      </div>
    </section>
  );
}
