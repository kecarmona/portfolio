import type { DiffDict } from "@/dictionaries/types";

export default function Differentiators({ dict }: { dict: DiffDict }) {
  return (
    <section className="relative py-32 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="pill mb-5 text-xs tracking-wider font-semibold text-white/90">{dict.pill}</div>
          <h2 className="font-serif text-5xl md:text-6xl gradient-text">
            {dict.title1} <span className="italic">{dict.title2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 scroll-reveal">
          <div className="glass p-6 hover:border-violet-400/40 transition">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/30">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="13 17 18 12 13 7" />
                <polyline points="6 17 11 12 6 7" />
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">{dict.cards.quality.title}</h3>
            <p className="text-sm text-white/80">
              {dict.cards.quality.desc}
            </p>
          </div>

          <div className="glass p-6 hover:border-violet-400/40 transition">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/30">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                <path d="M3 12a9 3 0 0 0 18 0" />
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">{dict.cards.ai.title}</h3>
            <p className="text-sm text-white/80">
              {dict.cards.ai.desc}
            </p>
          </div>

          <div className="glass p-6 hover:border-violet-400/40 transition">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center mb-5 shadow-lg shadow-violet-500/30">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="font-medium text-lg mb-2">{dict.cards.rootCause.title}</h3>
            <p className="text-sm text-white/80">
              {dict.cards.rootCause.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
