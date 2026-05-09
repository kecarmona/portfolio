"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";

const NAV_OFFSET = -80;

function AnchorLinks() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();
      lenis!.scrollTo(el as HTMLElement, { offset: NAV_OFFSET });
      window.history.replaceState(null, "", hash);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

/**
 * Native anchor fallback used when prefers-reduced-motion is on.
 * We still want hash links to work — just without Lenis' eased scroll.
 */
function NativeAnchorLinks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash) as HTMLElement | null;
      if (!el) return;

      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
      window.scrollTo({ top, behavior: "auto" });
      window.history.replaceState(null, "", hash);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // null until the media query is read on the client — avoids mounting Lenis for reduced-motion users
  // during the first paint (which would attach wheel/touch listeners before being torn down).
  const [reducedMotion, setReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // One-time read after mount to flip the SSR-safe `null` to the real value.
    // The cascading-render warning is intentional here — we want to swap scroll engines once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion === null) {
    return <>{children}</>;
  }

  if (reducedMotion) {
    return (
      <>
        <NativeAnchorLinks />
        {children}
      </>
    );
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <AnchorLinks />
      {children}
    </ReactLenis>
  );
}
