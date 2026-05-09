import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./haircut.css";

const bebas = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600"], 
  style: ["normal", "italic"], 
  variable: "--font-cormorant" 
});

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500"], 
  variable: "--font-dm" 
});

const SEO_TITLE = "El Corte Noble — Premium Barbershop";
const SEO_DESCRIPTION =
  "Donde el arte se encuentra con la tradición. Cortes de precisión, afeitado clásico y rituales de barbería para el caballero moderno.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    type: "website",
    siteName: "El Corte Noble",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
};

export default function HairCutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="haircut-wrapper" className={`${bebas.variable} ${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      {children}
    </div>
  );
}
