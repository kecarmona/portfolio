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

export const metadata = {
  title: "El Corte Noble | Premium Barbershop",
  description: "Encuentra tu corte perfecto",
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
