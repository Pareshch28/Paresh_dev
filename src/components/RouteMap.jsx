import { useReveal } from "../hooks/useReveal.js";

// The road curve, defined once and reused both as the SVG <path> `d` and as
// the CSS offset-path for the small traveling dot, so they stay perfectly in sync.
const ROUTE_D =
  "M 40 210 C 130 210 150 130 230 120 C 310 110 320 190 400 180 C 480 170 500 90 580 80 C 650 72 690 110 760 70";

// Approximate waypoints along that curve, for the small "stop" markers —
// these don't need to be exact, just roughly on the line.
const STOPS = [
  { x: 230, y: 120 },
  { x: 400, y: 180 },
  { x: 580, y: 80 },
];

/**
 * A stylized, hand-drawn-style route line from Bhainsa to Ayodhya. The line
 * draws itself in on scroll (stroke-dashoffset via pathLength="1", so no JS
 * path-length measurement needed), waypoint dots fade in after, and a small
 * glowing marker travels the route on a loop using CSS offset-path.
 * Not a literal geographic map — an illustrative journey line matching the
 * site's dusk-road visual language.
 */
export default function RouteMap() {
  const [ref, visible] = useReveal(0.3);

  return (
    <div ref={ref} className={`route-map ${visible ? "is-visible" : ""}`}>
      <svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* faint always-visible guide line, so the route has context before it draws in */}
        <path d={ROUTE_D} className="route-map__line-bg" />

        {/* the animated line itself */}
        <path d={ROUTE_D} className="route-map__line" pathLength="1" />

        {/* waypoint stops */}
        {STOPS.map((stop, i) => (
          <circle
            key={i}
            cx={stop.x}
            cy={stop.y}
            r="4"
            className="route-map__stop"
            style={{ transitionDelay: `${1.6 + i * 0.25}s` }}
          />
        ))}

        {/* start marker */}
        <g className="route-map__marker">
          <circle cx="40" cy="210" r="7" />
          <text x="40" y="236" textAnchor="middle">
            BHAINSA
          </text>
        </g>

        {/* end marker */}
        <g className="route-map__marker route-map__marker--end">
          <circle cx="760" cy="70" r="7" />
          <text x="760" y="48" textAnchor="middle">
            AYODHYA
          </text>
        </g>

        {/* small glowing marker that travels the route on a loop */}
        <circle r="5" className="route-map__traveler" style={{ offsetPath: `path('${ROUTE_D}')` }} />
      </svg>
    </div>
  );
}