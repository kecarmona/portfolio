import type { Metadata } from "next";
import ShootingStars from "@/components/ui/ShootingStars";
import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";
import About from "@/components/sections/About";
import TechOrbit from "@/components/sections/TechOrbit";
import Projects from "@/components/sections/Projects";
import LandingPages from "@/components/sections/LandingPages";
import Differentiators from "@/components/sections/Differentiators";
import Contact from "@/components/sections/Contact";
import { getDictionary, Locale, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const META: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: "Kendal Carmona — Fullstack Software Engineer",
    description:
      "Senior Fullstack & UI/UX engineer. 5+ years building enterprise Angular + NestJS systems — shipping features, diagnosing root causes, and proving fixes with tests.",
    ogLocale: "en_US",
  },
  es: {
    title: "Kendal Carmona — Ingeniero de Software Fullstack",
    description:
      "Ingeniero Fullstack y UI/UX senior. 5+ años construyendo sistemas Angular + NestJS de nivel empresarial — entregando features, diagnosticando causas raíz y probándolas con tests.",
    ogLocale: "es_CR",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = META[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      languages: {
        en: "/en/",
        es: "/es/",
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      locale: m.ogLocale,
      type: "website",
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <main id="main" tabIndex={-1} className="min-h-screen cursor-planet">
      <ShootingStars />
      <Hero dict={dict.hero} />
      <Companies dict={dict.companies} />
      <About dict={dict.about} />
      <TechOrbit dict={dict.tech} />
      <Projects dict={dict.projects} />
      <LandingPages dict={dict.landings} />
      <Differentiators dict={dict.diff} />
      <Contact dict={dict.contact} />
    </main>
  );
}
