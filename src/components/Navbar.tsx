import type { NavbarDict } from "@/dictionaries/types";
import { BRAND } from "@/dictionaries/constants";

export default function Navbar({ dict }: { dict: NavbarDict }) {
  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 reveal"
      style={{ animationDelay: "0.1s" }}
    >
      <nav className="glass-strong px-6 py-2.5 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-xs font-bold">
            {BRAND.initials}
          </div>
          <span className="font-medium text-sm">{BRAND.name}</span>
        </div>
        <div className="desktop-nav flex items-center gap-5 text-sm text-white/60">
          <a href="#about" className="nav-link">{dict.about}</a>
          <a href="#stack" className="nav-link">{dict.stack}</a>
          <a href="#projects" className="nav-link">{dict.projects}</a>
          <a href="#contact" className="nav-link">{dict.contact}</a>
        </div>
        <a
          href={`mailto:${BRAND.email}`}
          className="bg-white text-[#0a0820] px-4 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition"
        >
          {dict.hire}
        </a>
      </nav>
    </header>
  );
}
