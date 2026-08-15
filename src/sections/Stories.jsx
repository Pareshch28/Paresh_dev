import ExternalLink from "../components/ExternalLink.jsx";
import Reveal from "../components/Reveal.jsx";

const BLOG_URL = "https://pareshch28.blogspot.com/2024/07/my-first-ever-solo-travel-adventure.html";

export default function Stories() {
  return (
    <section className="section stories" id="stories">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Words</span>
          <h2 className="section-title">Thoughts & Stories ✍️</h2>
          <p className="lede">
            I like writing about things I experience, things I learn and sometimes just things that stay in my mind.
          </p>
        </Reveal>

        <Reveal className="story-card">
          <div className="story-card__meta">
            <span className="eyebrow" style={{ marginBottom: 10 }}>External · Blogspot</span>
            <h3>My First Ever Solo Travel Adventure</h3>
            <p>A journal entry from the road — the trip that started it all.</p>
          </div>
          <ExternalLink
            href={BLOG_URL}
            eventName="blog_click"
            className="btn btn-primary story-card__link"
          >
            Read my travel story →
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  );
}
