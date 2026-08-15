import { trackOutbound } from "../utils/analytics.js";

/** Every outbound link in the site should go through this so GA4 tracking is consistent. */
export default function ExternalLink({ href, eventName, eventParams, children, className, ...rest }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => eventName && trackOutbound(eventName, eventParams)}
      {...rest}
    >
      {children}
    </a>
  );
}
