import { useEffect, useMemo, useState } from "react";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Cycles through `items` one at a time in a shuffled order (shuffled once per
 * page load, then looped), swapping every `intervalMs`. Returns the current
 * item plus a `fading` flag you can use to drive a CSS opacity transition.
 * With 0 or 1 items, just returns that item statically — no timer runs.
 */
export function useRotatingText(items, intervalMs = 3800) {
  const order = useMemo(() => (items && items.length > 1 ? shuffle(items) : items || []), [items]);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (order.length < 2) return;

    let timeout;
    const interval = setInterval(() => {
      setFading(true);
      timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % order.length);
        setFading(false);
      }, 260); // matches the CSS fade-out duration below
    }, intervalMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [order, intervalMs]);

  return { current: order[index] || "", fading };
}
