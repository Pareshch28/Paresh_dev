import { useReveal } from "../hooks/useReveal.js";

/** Wraps children and adds a "is-visible" class once scrolled into view. Respects reduced motion via CSS. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
