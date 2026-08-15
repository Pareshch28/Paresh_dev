import { thingsILike } from "../content/thingsILike.js";
import Reveal from "../components/Reveal.jsx";

export default function ThingsILike() {
  return (
    <section className="section things-i-like" id="things-i-like">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Little joys</span>
          <h2 className="section-title">Things I Like ❤️</h2>
          <p className="lede">
            There are quite a few things I enjoy, some of them make sense and some... not so much. 😄
            Here are a few things that usually have my attention.
          </p>
        </Reveal>

        <div className="likes__grid">
          {thingsILike.map((item, i) => (
            <Reveal className="likes__item" key={item.title} style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="likes__emoji">{item.emoji}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
