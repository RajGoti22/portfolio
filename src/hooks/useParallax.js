import { useEffect, useRef } from "react";

/**
 * Parallax scroll hook - moves element at `speed` ratio of scroll distance.
 * Only active on desktop (>720px) to avoid issues on short mobile viewports.
 */
export default function useParallax(speed = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      if (window.innerWidth <= 720) {
        el.style.transform = "";
        return;
      }
      el.style.transform = "translateY(" + (window.scrollY * speed) + "px)";
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
