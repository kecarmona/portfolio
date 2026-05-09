import Script from "next/script";

/**
 * Crossing route groups (portfolio <-> showcase) is a hard navigation because each owns
 * its own <html>. On back-nav the browser may serve cached HTML without re-running JS, so
 * the hamburger menu (and any stateful component) appears dead — React never re-hydrates.
 *
 * The fix lives in `/public/bfcache-reload.js` (loaded via `beforeInteractive` so it runs
 * before hydration). Static-export builds inline only the file reference, not the script
 * source — keeping the logic in `/public/` is the only path that survives `output: "export"`.
 */
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function BfCacheReload() {
  return (
    <Script
      id="bfcache-reload"
      src={`${BASE_PATH}/bfcache-reload.js`}
      strategy="beforeInteractive"
    />
  );
}
