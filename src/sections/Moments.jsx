import { useMemo, useState } from "react";
import { photos as configuredPhotos } from "../config/photos.js";
import PhotoLightbox from "../components/PhotoLightbox.jsx";
import Reveal from "../components/Reveal.jsx";
import { trackEvent } from "../utils/analytics.js";

const CATEGORIES = ["All", "Travel", "Roads", "Nature", "Random"];

// Styled placeholders shown until real photos are registered in src/config/photos.js
const PLACEHOLDER_PHOTOS = [
  { id: "p1", category: "travel", caption: "Travel — add your photo" },
  { id: "p2", category: "roads", caption: "Roads — add your photo" },
  { id: "p3", category: "nature", caption: "Nature — add your photo" },
  { id: "p4", category: "random", caption: "Random — add your photo" },
  { id: "p5", category: "travel", caption: "Travel — add your photo" },
  { id: "p6", category: "roads", caption: "Roads — add your photo" },
];

export default function Moments() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const usingPlaceholders = configuredPhotos.length === 0;
  const source = usingPlaceholders ? PLACEHOLDER_PHOTOS : configuredPhotos;

  const filtered = useMemo(() => {
    if (active === "All") return source;
    return source.filter((p) => p.category === active.toLowerCase());
  }, [active, source]);

  function openLightbox(i) {
    if (usingPlaceholders) return; // nothing real to show yet
    setLightboxIndex(i);
    trackEvent("photo_open", { index: i });
  }

  function navigate(delta) {
    setLightboxIndex((i) => {
      if (i == null) return i;
      const next = (i + delta + filtered.length) % filtered.length;
      return next;
    });
  }

  return (
    <section className="section moments" id="moments">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Captured</span>
          <h2 className="section-title">Moments 📸</h2>
          <p className="lede">
            I like capturing random moments — places, roads, people, sunsets, little things that catch my eye.
            Not every picture has a story, but somehow every picture reminds me of one.
          </p>
        </Reveal>

        <Reveal className="moments__filters" role="tablist" aria-label="Filter photos by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`chip ${active === cat ? "chip--active" : ""}`}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="masonry">
          {filtered.map((photo, i) => (
            <button
              key={photo.id || photo.src}
              className={`masonry__item masonry__item--${(i % 3) + 1} ${usingPlaceholders ? "masonry__item--placeholder" : ""}`}
              onClick={() => openLightbox(i)}
              aria-label={photo.caption || "Photo"}
            >
              {usingPlaceholders ? (
                <span className="masonry__placeholder-label">{photo.caption}</span>
              ) : (
                <img src={photo.src} alt={photo.caption || "Photo"} loading="lazy" />
              )}
            </button>
          ))}
        </div>
      </div>

      {!usingPlaceholders && (
        <PhotoLightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={navigate}
        />
      )}
    </section>
  );
}
