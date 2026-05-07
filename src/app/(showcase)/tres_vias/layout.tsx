import type { Metadata } from "next";
import LenisProvider from "./_components/LenisProvider";
import "./tres_vias.css";

export const metadata: Metadata = {
  title: "Pastelería Tres Vías | Experiencia Artesanal Premium",
  description:
    "El refugio donde el café perfecto se encuentra con el postre de tus sueños. Artesanía pura, horneada hoy mismo.",
  openGraph: {
    title: "Pastelería Tres Vías | Experiencia Artesanal Premium",
    description: "El refugio donde el café perfecto se encuentra con el postre de tus sueños. Artesanía pura, horneada hoy mismo.",
    url: "https://tresvias.com",
    siteName: "Pastelería Tres Vías",
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastelería Tres Vías",
    description: "Artesanía pura, horneada hoy mismo.",
  },
};

export default function TresViasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="tv-root min-h-screen selection:bg-[#2A1D1A] selection:text-[#F9F6F0]">
      <LenisProvider>
        {children}
      </LenisProvider>
    </div>
  );
}
