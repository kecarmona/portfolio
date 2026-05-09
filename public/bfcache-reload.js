// Crossing route groups (portfolio <-> showcase) is a hard navigation. On back-nav
// the browser may serve cached HTML without re-running the JS bundles, leaving the
// page un-hydrated — the hamburger menu and any stateful component appear dead.
// Two safety nets: bfcache restores reload via `pageshow.persisted`; cached-HTML
// back-nav reloads via a hydration probe on the navbar button.
(function () {
  addEventListener("pageshow", function (e) {
    if (e.persisted) location.reload();
  });
  var nav = performance.getEntriesByType("navigation")[0];
  if (nav && nav.type === "back_forward") {
    addEventListener("DOMContentLoaded", function () {
      requestAnimationFrame(function () {
        var b = document.querySelector('button[aria-label="Toggle menu"]');
        if (!b) return;
        var hydrated = Object.keys(b).some(function (k) {
          return k.indexOf("__reactProps") === 0;
        });
        if (!hydrated) location.reload();
      });
    });
  }
})();
