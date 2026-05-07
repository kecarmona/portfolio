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

export const metadata = {
  title: "Sweet Bakery – Quality Products",
  description: "Quality products made with love. Fresh cakes, cupcakes, and breads.",
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
