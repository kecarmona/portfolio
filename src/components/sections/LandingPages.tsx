import Link from "next/link";
import type { Dictionary } from "@/dictionaries/types";

type LandingsDict = Dictionary["landings"];
type LandingSlug = keyof LandingsDict["items"];

const LANDING_HREFS: Record<LandingSlug, string> = {
  beaty_studio: "/beaty_studio",
  ev_cars: "/ev_cars",
  hair_cut: "/hair_cut",
  sweet_bakery: "/sweet_bakery",
  tres_vias: "/tres_vias",
};

const LANDING_ACCENT: Record<LandingSlug, string> = {
  beaty_studio: "from-pink-500/30 to-violet-700/30 text-pink-300",
  ev_cars: "from-emerald-500/30 to-cyan-700/30 text-emerald-300",
  hair_cut: "from-amber-500/30 to-orange-700/30 text-amber-300",
  sweet_bakery: "from-rose-500/30 to-pink-700/30 text-rose-300",
  tres_vias: "from-yellow-500/30 to-amber-700/30 text-yellow-300",
};

const LANDING_GLYPH: Record<LandingSlug, string> = {
  beaty_studio: "💅",
  ev_cars: "⚡",
  hair_cut: "✂️",
  sweet_bakery: "🧁",
  tres_vias: "☕",
};

const ORDER: LandingSlug[] = [
  "beaty_studio",
  "ev_cars",
  "hair_cut",
  "sweet_bakery",
  "tres_vias",
];

export default function LandingPages({ dict }: { dict: LandingsDict }) {
  return (
    <section id="landings" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="pill mb-5 text-xs tracking-wider font-semibold text-white/90">{dict.pill}</div>
          <h2 className="font-serif text-4xl md:text-5xl gradient-text">
            {dict.title1}{" "}
            <br />
            <span className="italic">{dict.title2}</span>
          </h2>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 scroll-reveal">
          {ORDER.map((slug) => {
            const item = dict.items[slug];
            return (
              <Link
                key={slug}
                href={LANDING_HREFS[slug]}
                className="glass-strong p-6 hover:border-violet-400/40 transition group block"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${LANDING_ACCENT[slug]} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {LANDING_GLYPH[slug]}
                  </div>
                  <span className="text-xs font-bold text-[#a78bfa] tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-white/80 mb-6">{item.desc}</p>

                <span className="inline-flex items-center gap-1.5 text-sm text-white/70 group-hover:text-white transition">
                  {dict.cta}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
