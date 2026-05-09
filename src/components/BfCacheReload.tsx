/**
 * Crossing route groups (portfolio <-> showcase) is a hard navigation because each owns
 * its own <html>. On back-nav the browser may serve cached HTML without re-running JS, so
 * the hamburger menu (and any stateful component) appears dead — React never re-hydrates.
 *
 * The fix lives in `/public/bfcache-reload.js`. We render a plain `<script src>` instead
 * of `next/script` because the latter also injects a `<link rel="preload">` for a script
 * whose only job is to register a listener — Chrome flags the preload as unused.
 * `async={false}` keeps it order-preserving so it runs before the hydration bundle.
 */
const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function BfCacheReload() {
  return <script src={`${BASE_PATH}/bfcache-reload.js`} async={false} />;
}
