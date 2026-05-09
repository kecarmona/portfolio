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
          <span className="text-sm text-white/80">{dict.availability}</span>
        </div>

        <p className="mt-8 text-sm md:text-base font-mono uppercase tracking-[0.2em] text-white/75 reveal" style={{ animationDelay: "0.25s" }}>
          {dict.greeting}
        </p>

        <h1 className="hero-title font-serif text-7xl leading-[1.05] mt-4 reveal gradient-text" style={{ animationDelay: "0.3s" }}>
          {/* Trailing space ensures screen readers separate the two title fragments. */}
          {dict.title1}{" "}<br />
          <span className="italic">{dict.title2}</span>
        </h1>

        <p className="mt-7 text-base md:text-lg text-white/80 max-w-2xl mx-auto reveal" style={{ animationDelay: "0.4s" }}>
          {dict.description}
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap reveal" style={{ animationDelay: "0.5s" }}>
          <a href="#projects" className="btn-primary">{dict.ctaWork}</a>
          <a href="https://www.linkedin.com/in/kendal-carmona-herrera/" target="_blank" rel="noreferrer" className="btn-ghost">{dict.ctaLinkedIn}</a>
          {/* basePath ("/portfolio") is not auto-prepended to <a href>, only to <Link> / <Image>. Inline it from NODE_ENV. */}
          <a
            href={`${process.env.NODE_ENV === "production" ? "/portfolio" : ""}/CV_SoftwareEngineer_Kendal_Carmona_Herrera.pdf`}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white/85 hover:bg-white/10 text-sm font-medium transition-colors min-h-11"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {dict.ctaCv}
          </a>
        </div>

        {/* Key metrics */}
        <div className="mt-12 flex items-center justify-center gap-6 flex-wrap reveal" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">5+</div>
            <div className="text-sm font-medium text-white/75 mt-1">{dict.stats.years}</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">722</div>
            <div className="text-sm font-medium text-white/75 mt-1">{dict.stats.tests}</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">-82%</div>
            <div className="text-sm font-medium text-white/75 mt-1">{dict.stats.reduction}</div>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <div className="font-serif text-3xl gradient-text">42</div>
            <div className="text-sm font-medium text-white/75 mt-1">{dict.stats.bugs}</div>
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
