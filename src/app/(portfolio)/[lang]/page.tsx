import ShootingStars from "@/components/ui/ShootingStars";
import Hero from "@/components/sections/Hero";
import Companies from "@/components/sections/Companies";
import About from "@/components/sections/About";
import TechOrbit from "@/components/sections/TechOrbit";
import Projects from "@/components/sections/Projects";
import LandingPages from "@/components/sections/LandingPages";
import Differentiators from "@/components/sections/Differentiators";
import Contact from "@/components/sections/Contact";
import { getDictionary, Locale, locales, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
    <main className="min-h-screen cursor-planet">
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
