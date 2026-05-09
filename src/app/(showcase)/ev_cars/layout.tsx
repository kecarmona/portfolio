import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./ev_cars.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--space-mono",
});

export const metadata: Metadata = {
  title: "Voltios — EV Marketplace LATAM",
  description:
    "Guía, comunidad y marketplace para vehículos eléctricos en LATAM. Reviews honestas, asesoría personalizada y la calculadora de ahorro más completa de la región.",
  openGraph: {
    title: "Voltios — EV Marketplace LATAM",
    description:
      "Guía, comunidad y marketplace para vehículos eléctricos en LATAM.",
    type: "website",
  },
};

export default function EvCarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="ev-cars-wrapper"
      className={`${bebas.variable} ${dmSans.variable} ${spaceMono.variable} scroll-smooth`}
    >
      {children}
    </div>
  );
}
