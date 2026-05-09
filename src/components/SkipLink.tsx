import type { Locale } from "@/dictionaries";

// Pure markup, server-rendered. Keeps it out of the client bundle.
const LABELS: Record<Locale, string> = {
  en: "Skip to main content",
  es: "Saltar al contenido principal",
};

export default function SkipLink({ lang }: { lang: Locale }) {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg"
    >
      {LABELS[lang]}
    </a>
  );
}
