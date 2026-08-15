import { musicParagraphs, favoriteGhazals } from "../content/music.js";
import { renderRich } from "../utils/text.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Music() {
  return (
    <section className="section music" id="music">
      <div className="container music__grid">
        <Reveal className="prose">
          <span className="eyebrow">Sukoon</span>
          <h2 className="section-title">Why I Love Music 🎧</h2>
          {musicParagraphs.map((p, i) => (
            <p key={i}>{renderRich(p)}</p>
          ))}
        </Reveal>

        <Reveal className="music__ghazals" style={{ transitionDelay: "0.15s" }}>
          <span className="eyebrow">Favourite Ghazals</span>
          <ol>
            {favoriteGhazals.map((g) => (
              <li key={g.title}>
                <span className="music__ghazal-title">{g.title}</span>
                <span className="music__ghazal-artist">{g.artist}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
