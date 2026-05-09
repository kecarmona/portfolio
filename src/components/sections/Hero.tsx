import type { HeroDict } from "@/dictionaries/types";

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="hero-grid"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 reveal" style={{ animationDelay: "0.2s" }}>
          <span className="pill">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse"></span>
            {dict.openToWork}
          </span>
          <span className="text-sm text-white/60">{dict.availability}</span>
        </div>

        <p className="mt-8 text-sm md:text-base font-mono uppercase tracking-[0.2em] text-white/50 reveal" style={{ animationDelay: "0.25s" }}>
          {dict.greeting}
        </p>

        <h1 className="hero-title font-serif text-7xl leading-[1.05] mt-4 reveal gradient-text" style={{ animationDelay: "0.3s" }}>
          {dict.title1}<br />
          <span className="italic">{dict.title2}</span>
        </h1>

        <p className="mt-7 text-base md:text-lg text-white/60 max-w-2xl mx-auto reveal" style={{ animationDelay: "0.4s" }}>
          {dict.description}
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 reveal" style={{ animationDelay: "0.5s" }}>
          <a href="#projects" className="btn-primary">{dict.ctaWork}</a>
          <a href="https://www.linkedin.com/in/kendal-carmona-herrera/" target="_blank" rel="noreferrer" className="btn-ghost">{dict.ctaLinkedIn}</a>
        </div>

        {/* Key metrics */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap reveal" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">5+</div>
            <div className="text-xs text-white/40 mt-1">{dict.stats.years}</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">722</div>
            <div className="text-xs text-white/40 mt-1">{dict.stats.tests}</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">-82%</div>
            <div className="text-xs text-white/40 mt-1">{dict.stats.reduction}</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">42</div>
            <div className="text-xs text-white/40 mt-1">{dict.stats.bugs}</div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden">
        <div className="horizon-line"></div>
        <div className="horizon-glow"></div>
      </div>
    </section>
  );
}
