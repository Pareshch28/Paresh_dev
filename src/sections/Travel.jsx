import { travelIntroParagraphs, featuredJourney } from "../content/travel.js";
import { renderRich } from "../utils/text.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import Reveal from "../components/Reveal.jsx";
import RouteMap from "../components/RouteMap.jsx";

export default function Travel() {
  return (
    <section className="section travel" id="travel">
      <div className="container">
        <Reveal className="prose">
          <span className="eyebrow">On the road</span>
          <h2 className="section-title">Travel & Memories 🌍</h2>
          {travelIntroParagraphs.map((p, i) => (
            <p key={i}>{renderRich(p)}</p>
          ))}
        </Reveal>

        <Reveal className="journey-feature">
          <span className="eyebrow">Featured journey</span>
          <h3>{featuredJourney.route}</h3>
          <RouteMap />
          <div className="prose">
            {featuredJourney.paragraphs.map((p, i) => (
              <p key={i}>{renderRich(p)}</p>
            ))}
          </div>
          <ExternalLink href={featuredJourney.storyUrl} eventName="travel_story_click" className="btn">
            Read the full story →
          </ExternalLink>
        </Reveal>

        {/*<Reveal className="travel__gallery-teaser">
          <div className="gallery-placeholder">
            <span>More travel photos coming soon</span>
          </div>
        </Reveal>*/}
      </div>
    </section>
  );
}
