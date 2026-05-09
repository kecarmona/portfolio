import type { Metadata } from "next";
import { Pacifico, Playfair_Display, Nunito } from "next/font/google";
import "./bakery.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

const SEO_TITLE = "Sweet Bakery — Cakes, Cupcakes & Breads";
const SEO_DESCRIPTION =
  "Handmade cakes, cupcakes and freshly baked breads delivered daily. Explore our menu, signature products and order from a bakery built on quality ingredients and craft.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    "bakery",
    "cakes",
    "cupcakes",
    "breads",
    "handmade pastries",
    "sweet bakery",
  ],
  openGraph: {
    type: "website",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    siteName: "Sweet Bakery",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
};

export default function BakeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="bakery-wrapper" className={`${pacifico.variable} ${playfair.variable} ${nunito.variable} scroll-smooth`}>
      {children}
    </div>
  );
}
