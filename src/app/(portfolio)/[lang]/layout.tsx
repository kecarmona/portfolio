import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "../portfolio.css";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";
import SmoothScroll from "@/components/providers/SmoothScroll";
import SkipLink from "@/components/SkipLink";
import BfCacheReload from "@/components/BfCacheReload";
import { getDictionary, hasLocale, Locale, locales } from "@/dictionaries";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} relative`}
      >
        <BfCacheReload />
        {/* SkipLink must be the first focusable element in <body> for a11y. */}
        <SkipLink lang={lang as Locale} />
        <div className="stars"></div>
        <SmoothScroll>
          <Navbar dict={dict.navbar} />
          {children}
          <Footer dict={dict.footer} />
        </SmoothScroll>
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
