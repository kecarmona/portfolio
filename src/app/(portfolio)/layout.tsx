import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./portfolio.css";
import ScrollRevealObserver from "@/components/ui/ScrollRevealObserver";
import SmoothScroll from "@/components/providers/SmoothScroll";

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

export const metadata: Metadata = {
  title: "Kendal Carmona — Fullstack Software Engineer",
  description: "Senior Full Stack & UI/UX Architect",
};

export default function PortfolioRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} relative`}
      >
        <div className="stars"></div>
        <SmoothScroll>{children}</SmoothScroll>
        <ScrollRevealObserver />
      </body>
    </html>
  );
}
