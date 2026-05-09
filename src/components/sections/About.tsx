"use client";
import { useState } from "react";
import type { AboutDict } from "@/dictionaries/types";

const processIcons = {
  discovery: "🔍",
  spec: "📝",
  development: "⚡",
  testing: "🧪",
  production: "🚀",
};

type TabKey = keyof typeof processIcons;

export default function About({ dict }: { dict: AboutDict }) {
  const [activeTab, setActiveTab] = useState<TabKey>("development");

  const processData = {
    discovery: { icon: processIcons.discovery, ...dict.process.tabs.discovery },
    spec: { icon: processIcons.spec, ...dict.process.tabs.spec },
    development: { icon: processIcons.development, ...dict.process.tabs.development },
    testing: { icon: processIcons.testing, ...dict.process.tabs.testing },
    production: { icon: processIcons.production, ...dict.process.tabs.production },
  };

  return (
    <section id="about" className="relative py-32 z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <div className="pill mb-5 text-xs tracking-wider font-semibold text-white/90">{dict.pill}</div>
          <h2 className="font-serif text-5xl md:text-6xl gradient-text">
            {dict.title1}{" "}<br />
            <span className="italic">{dict.title2}</span>
          </h2>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-6 scroll-reveal">
          <div className="glass p-6 relative">
            <div className="absolute left-0 top-6 w-1 h-12 bg-gradient-to-b from-[#a78bfa] to-transparent rounded-r"></div>
            <h3 className="text-lg font-medium mb-2 pl-3">{dict.cards.interfaces.title}</h3>
            <p className="text-sm text-white/80 pl-3">
              {dict.cards.interfaces.desc}
            </p>
          </div>
          <div className="glass p-6 relative">
            <div className="absolute left-0 top-6 w-1 h-12 bg-gradient-to-b from-[#a78bfa] to-transparent rounded-r"></div>
            <h3 className="text-lg font-medium mb-2 pl-3">{dict.cards.backends.title}</h3>
            <p className="text-sm text-white/80 pl-3">
              {dict.cards.backends.desc}
            </p>
          </div>
        </div>

        <div className="glass-strong p-8 scroll-reveal">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h3 className="text-xl font-medium">{dict.process.title}</h3>
              <p className="text-sm text-white/75 mt-1">
                {dict.process.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 mb-8">
            {(Object.keys(processIcons) as TabKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                  activeTab === tab ? "tab-active" : "tab-inactive"
                }`}
              >
                {processData[tab].label}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-12 bg-gradient-to-b from-transparent to-[#8b5cf6]/50"></div>

            <div className="glass max-w-md mx-auto p-6 mt-12 relative transition-all duration-300">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 connector-dot"></div>

              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-[#8b5cf6]/30 border border-[#a78bfa]/40 flex items-center justify-center text-[#c4b5fd]">
                  {processData[activeTab].icon}
                </div>
                <h4 className="font-medium">{processData[activeTab].title}</h4>
              </div>
              <p className="text-sm text-white/80 mb-4">
                {processData[activeTab].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
