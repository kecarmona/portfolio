import Image from "next/image";
import type { TechDict } from "@/dictionaries/types";
import { TECH_CHIPS } from "@/dictionaries/constants";

export default function TechOrbit({ dict }: { dict: TechDict }) {
  return (
    <section id="stack" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 scroll-reveal">
          <div className="pill mb-5">{dict.pill}</div>
          <h2 className="font-serif text-4xl md:text-5xl gradient-text">
            {dict.title}
          </h2>
          <p className="mt-5 text-white/60 max-w-2xl mx-auto">{dict.description}</p>
        </div>

        <div className="orbit-container scroll-reveal">
          {/* RINGS - visual circles */}
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="orbit-ring orbit-ring-3"></div>

          {/* CENTER */}
          <div className="center-node">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
          </div>

          {/* ORBIT 1 - container that rotates, contains nodes at edges */}
          <div className="orbit orbit-1">
            <div className="orbit-node at-top">
              <div className="tech-node" title="Angular">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                  alt="Angular"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
            <div className="orbit-node at-bottom">
              <div className="tech-node" title="NestJS">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
                  alt="NestJS"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
            <div className="orbit-node at-left">
              <div className="tech-node" title="TypeScript">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ORBIT 2 */}
          <div className="orbit orbit-2">
            <div className="orbit-node at-top">
              <div className="tech-node" title="PostgreSQL">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
            <div className="orbit-node at-right">
              <div className="tech-node" title="RxJS">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg"
                  alt="RxJS"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
            <div className="orbit-node at-bottom">
              <div className="tech-node" title="Tailwind CSS">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* ORBIT 3 */}
          <div className="orbit orbit-3">
            <div className="orbit-node at-top">
              <div className="tech-node" title="Docker">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  alt="Docker"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                  unoptimized
                />
              </div>
            </div>
            <div className="orbit-node at-bottom">
              <div className="tech-node" title="Supabase">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
                  alt="Supabase"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
            <div className="orbit-node at-left">
              <div className="tech-node" title="Playwright">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
                  alt="Playwright"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-12 scroll-reveal">
          {TECH_CHIPS.map((c) => (
            <span key={c} className="glass px-4 py-2 rounded-full text-xs text-white/70">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
