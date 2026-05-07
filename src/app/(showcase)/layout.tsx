import "./showcase.css";

/**
 * Showcase root layout — completely isolated from the portfolio runtime.
 *
 * Intentionally NO:
 * - Lenis (SmoothScroll provider) — it conflicts with GSAP ScrollTrigger
 *   and other per-route scroll libraries the showcases use.
 * - ScrollRevealObserver — observes `.scroll-reveal` (a portfolio class).
 * - Portfolio fonts (Geist / Instrument Serif / JetBrains Mono).
 * - Custom portfolio classes (`.glass`, `.pill`, `.gradient-text`, etc.).
 *
 * Each showcase route brings its own fonts and CSS via its own layout.tsx.
 * This root only provides `<html>`, `<body>`, and Tailwind.
 */
export default function ShowcaseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
