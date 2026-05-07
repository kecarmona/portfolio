import type { CompaniesDict } from "@/dictionaries/types";
import { COMPANIES } from "@/dictionaries/constants";

export default function Companies({ dict }: { dict: CompaniesDict }) {
  return (
    <section className="relative py-16 z-10">
      <div className="max-w-5xl mx-auto px-6 text-center scroll-reveal">
        <div className="pill mb-4">{dict.pill}</div>
        <p className="text-white/70 text-base mb-10">
          {dict.subtitle}
        </p>

        <div className="overflow-hidden">
          <div className="marquee">
            {[...COMPANIES, ...COMPANIES].map((company, i) => (
              <div
                key={i}
                className="glass px-7 py-3 rounded-full text-white/70 font-medium whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
