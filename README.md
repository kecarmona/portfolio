# Portfolio — Kendal Carmona

Personal portfolio + landing-page showcases for **Kendal Carmona**, fullstack engineer based in Costa Rica.

Live: **[kecarmona.github.io/portfolio](https://kecarmona.github.io/portfolio/)**

---

## What's in here

A bilingual (EN / ES) portfolio site with a curated set of landing-page showcases — each isolated as its own route group with its own visual language, fonts, and effects, so the main portfolio runtime never collides with showcase-specific libraries (GSAP, Lenis variants, etc.).

| Route | Purpose |
|---|---|
| `/en/`, `/es/` | Main portfolio (Hero, About, Stack, Projects, Differentiators, Contact) |
| `/beaty_studio/` | Bauty Studio — dark-elegance nails & lashes |
| `/ev_cars/` | Voltios — EV marketplace LATAM |
| `/hair_cut/` | El Corte Noble — premium barbershop |
| `/sweet_bakery/` | Sweet Bakery — cakes & breads |
| `/tres_vias/` | Pastelería Tres Vías — artisan coffee & bakery |

---

## Stack

- **Next.js 16.2.4** App Router with `output: "export"` (static export targeting GitHub Pages, `basePath: "/portfolio"`)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (no config file — `@import "tailwindcss"` + `@theme`)
- **Framer Motion**, **GSAP**, **Lenis** for motion
- **next/font** (Geist · Instrument Serif · JetBrains Mono)

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # Static export to ./out
```

The dev server hot-reloads via WebSocket — note this disables Chrome's bfcache locally (you'll see "Pages with WebSocket cannot enter back/forward cache" in DevTools), which doesn't reflect production behavior.

---

## Project structure

```
src/
├── app/
│   ├── (portfolio)/[lang]/    # Bilingual main site — owns <html lang={lang}>
│   ├── (showcase)/            # Isolated showcase route group
│   │   ├── beaty_studio/
│   │   ├── ev_cars/
│   │   ├── hair_cut/
│   │   ├── sweet_bakery/
│   │   └── tres_vias/
│   └── (root-redirect)/       # `/` → `/en/` client redirect
├── components/                # Shared portfolio components (Navbar, Footer, sections)
└── dictionaries/              # en.json + es.json with TS-derived types
```

Each showcase under `(showcase)/` brings its own `layout.tsx` (fonts + CSS) and `_components/`. The showcase root layout intentionally omits Lenis, the portfolio scroll observer, and portfolio fonts to avoid runtime conflicts.

---

## Accessibility

- WCAG 2.2 AA target on the main portfolio
- Skip-link as first focusable element
- Locale-aware `<html lang>`
- Mobile drawer: body scroll-lock, focus trap, `Esc` to close, `inert` on `<main>` and `<footer>` while open, focus restoration to the hamburger
- Global `:focus-visible` outline (violet, 3px offset)
- `prefers-reduced-motion` respected — Lenis is gated, `.reveal` / `.scroll-reveal` / orbit / marquee animations disabled
- `aria-current` on the active section link via `IntersectionObserver`
- 44×44 touch targets on interactive elements

---

## Deployment

GitHub Pages, via `.github/workflows/` on push to `main`:

1. `npm ci`
2. `npx next build` (produces `./out`)
3. Upload `./out` as the Pages artifact
4. Pages serves under `basePath: "/portfolio"`

---

## License

All rights reserved © 2026 Kendal Carmona Herrera.

The portfolio content (text, branding, project descriptions) is personal and not licensed for reuse. The code is published for transparency and reference — feel free to learn from it; please don't copy verbatim.
