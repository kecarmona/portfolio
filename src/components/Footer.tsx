import type { FooterDict } from "@/dictionaries/types";
import { BRAND } from "@/dictionaries/constants";

export default function Footer({ dict }: { dict: FooterDict }) {
  return (
    <footer className="relative py-12 z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-xs font-bold">
                {BRAND.initials}
              </div>
              <span className="font-medium">{BRAND.name}</span>
            </div>
            <p className="text-sm text-white/50 max-w-xs mb-5">
              {dict.desc}
            </p>
            <p className="text-xs text-white/40 mb-3">{dict.connect}</p>
            <div className="flex gap-3">
              <a
                href={BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-400/40 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-400/40 transition"
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
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">{dict.strengths.title}</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {dict.strengths.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">{dict.roles.title}</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {dict.roles.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            {dict.copyright}
          </p>
          <p className="text-xs text-white/40">{BRAND.email}</p>
        </div>
      </div>
    </footer>
  );
}
