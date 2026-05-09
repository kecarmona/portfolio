"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-reveal-armed", "");

    let observer: IntersectionObserver | null = null;

    const sweep = () => {
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80 && rect.bottom > 0) {
          el.classList.add("visible");
        }
      });
    };

    const attach = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
      );
      document
        .querySelectorAll(".scroll-reveal")
        .forEach((el) => observer!.observe(el));
      sweep();
    };

    const raf = requestAnimationFrame(attach);

    // Re-sweep across the window where browser/Lenis may restore scroll
    // after back-nav (/en/ -> /sweet_bakery/ -> back).
    const timeouts = [100, 300, 700, 1200, 2000].map((ms) =>
      window.setTimeout(sweep, ms)
    );

    // Failsafe: if after 2.5s we still have hidden elements that should
    // have been revealed (e.g. back-nav didn't trigger remount or scroll
    // restore was silent), disarm so everything fades in.
    const failsafe = window.setTimeout(() => {
      const stuck = [...document.querySelectorAll(".scroll-reveal")].some(
        (el) => {
          const rect = el.getBoundingClientRect();
          const inViewport =
            rect.top < window.innerHeight - 80 && rect.bottom > 0;
          return inViewport && !el.classList.contains("visible");
        }
      );
      if (stuck) html.removeAttribute("data-reveal-armed");
    }, 2500);

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) attach();
    };
    window.addEventListener("pageshow", handlePageShow);

    return () => {
      cancelAnimationFrame(raf);
      timeouts.forEach((t) => window.clearTimeout(t));
      window.clearTimeout(failsafe);
      window.removeEventListener("pageshow", handlePageShow);
      observer?.disconnect();
      html.removeAttribute("data-reveal-armed");
    };
  }, [pathname]);

  return null;
}
