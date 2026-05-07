"use client";

import { useEffect } from "react";

/**
 * Hook que usa IntersectionObserver para agregar la clase `bauty-visible`
 * a los elementos con `bauty-reveal`, `bauty-reveal-left` o `bauty-reveal-zoom`.
 * Reemplaza la dependencia externa AOS.js.
 *
 * El hook escanea el documento completo; se invoca una sola vez en BautyRevealInit.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".bauty-reveal, .bauty-reveal-left, .bauty-reveal-zoom"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number((entry.target as HTMLElement).dataset.delay ?? 0);
            setTimeout(() => {
              entry.target.classList.add("bauty-visible");
            }, delay);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

