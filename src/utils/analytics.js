import { analytics } from "../config/analytics.js";

let initialized = false;

/** Injects the GA4 gtag.js script and configures the measurement ID. Call once, on app mount. */
export function initAnalytics() {
  if (initialized || !analytics.enabled) return;
  if (!analytics.measurementId || analytics.measurementId.includes("XXXX")) {
    console.info("[analytics] Skipping GA4 init — set a real measurementId in src/config/analytics.js");
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line no-inner-declarations
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", analytics.measurementId, { send_page_view: true });

  initialized = true;
}

/** Fires a GA4 custom event. Safe to call even if analytics hasn't initialized (no-ops quietly). */
export function trackEvent(eventName, params = {}) {
  if (!analytics.enabled) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/** Convenience tracker for outbound links — fires the event, then lets the click continue normally. */
export function trackOutbound(eventName, params = {}) {
  trackEvent(eventName, { ...params, outbound: true });
}
