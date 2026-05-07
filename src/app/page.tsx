"use client";

import { useEffect } from "react";

export default function RootRedirect() {
  useEffect(() => {
// Redirect with basePath for GitHub Pages subdirectory
    const basePath = "/portfolio";
    window.location.replace(basePath + "/en/");
  }, []);

  // This HTML shows briefly before redirect (should be nearly instant)
  return (
    <div className="min-h-screen bg-[#070417] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#7c5cff] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
