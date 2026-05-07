"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait one frame so the DOM is fully settled after cross-layout navigations.
    // Without this, elements may still carry stale layout state from the
    // previous route group.
    const raf = requestAnimationFrame(() => {
      const elements = document.querySelectorAll(".scroll-reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
      );

      elements.forEach((el) => {
        // Strip stale `.visible` class so re-entering elements can
        // transition again instead of staying stuck at opacity:0 with
        // a ghost `.visible` from a previous render.
        el.classList.remove("visible");

        // Immediately mark elements already in the viewport — the
        // IntersectionObserver initial callback is NOT guaranteed to
        // fire synchronously for elements that are already intersecting
        // at the time they are observed.
        const rect = el.getBoundingClientRect();
        const inViewport =
          rect.top < window.innerHeight - 80 && rect.bottom > 0;
        if (inViewport) {
          el.classList.add("visible");
        }

        observer.observe(el);
      });

      // Store ref for cleanup
      (cleanup as { observer?: IntersectionObserver }).observer = observer;
    });

    const cleanup: { observer?: IntersectionObserver } = {};

    return () => {
      cancelAnimationFrame(raf);
      cleanup.observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
