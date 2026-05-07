import type { Metadata } from "next";
import "./bauty.css";

export const metadata: Metadata = {
  title: "Bauty Studio | Dark Elegance Nails & Lashes",
  description:
    "Esmaltado semipermanente, Gel X, cejas y pestañas con los más altos estándares de higiene. Alta precisión. Ambiente boutique dark elegance.",
  openGraph: {
    title: "Bauty Studio | Dark Elegance Nails & Lashes",
    description:
      "Regálales a tus manos y mirada el cuidado que merecen. Agenda tu cita hoy.",
    locale: "es_CR",
    type: "website",
  },
};

/**
 * Layout aislado para Bauty Studio.
 * Sobreescribe el body del layout raíz mediante la clase bauty-root.
 * NO incluye Topbar ni ThemeProvider del sistema de diseño global.
 */
export default function BautyStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bauty-root">{children}</div>;
}
