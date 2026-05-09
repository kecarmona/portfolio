"use client";

import { useEffect } from "react";

/**
 * Crossing route groups (portfolio <-> showcase) is a hard navigation; on back-nav Chrome
 * restores the previous page from bfcache with React handlers torn down, so the hamburger
 * menu appears dead. Reloading on `pageshow` with `persisted=true` re-hydrates the tree.
 *
 * The listener MUST outlive the React component lifecycle — useEffect cleanup that removes
 * it would defeat bfcache (the page would be cached without the listener). We register
 * once on `window`, guard via a flag so HMR / re-mounts don't stack duplicates, and never
 * unregister.
 *
 * Why no static script in /public? next/script always emits a `<link rel=preload>` in App
 * Router which Chrome flags as unused for tiny listener-only scripts. A plain <script> JSX
 * triggers React's "scripts inside components don't re-execute on client" warning. A
 * client-component useEffect is the cleanest path.
 */
declare global {
  interface Window {
    __bfcacheReloadRegistered?: boolean;
  }
}

export default function BfCacheReload() {
  useEffect(() => {
    if (window.__bfcacheReloadRegistered) return;
    window.__bfcacheReloadRegistered = true;
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) window.location.reload();
    });
  }, []);

  return null;
}
