import type { ContactDict } from "@/dictionaries/types";
import { BRAND } from "@/dictionaries/constants";

export default function Contact({ dict }: { dict: ContactDict }) {
  return (
    <section id="contact" className="relative py-32 z-10 overflow-hidden">
      {/* Glow effect behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-strong rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden scroll-reveal">
          <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-violet-400/60"></div>
          <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-violet-400/60"></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-violet-400/60"></div>
          <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-violet-400/60"></div>

          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-violet-600/10"></div>

          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-gradient-to-br from-violet-400 to-violet-700 flex items-center justify-center shadow-2xl shadow-violet-500/40">
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
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>

            <div className="pill mx-auto mb-6 text-xs tracking-wider font-semibold text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              {dict.availability}
            </div>

            <h2 className="font-serif text-4xl md:text-5xl gradient-text mb-4">
              {dict.title1} <span className="italic">{dict.title2}</span>
            </h2>
            <p className="text-white/80 text-base max-w-md mx-auto mb-8">
              {dict.desc}
            </p>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a href={`mailto:${BRAND.email}`} className="btn-primary">
                {BRAND.email}
              </a>
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                {dict.ctaLinkedIn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
