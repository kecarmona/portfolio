import Link from "next/link";

interface BautyNavbarProps {
  whatsappUrl: string;
}

/**
 * Barra de navegación fija con mix-blend-mode:difference para el efecto editorial.
 * Completamente presentacional — no tiene estado.
 */
export default function BautyNavbar({ whatsappUrl }: BautyNavbarProps) {
  return (
    <nav className="bauty-nav" aria-label="Navegación principal">
      <div className="text-2xl font-bold tracking-tighter uppercase">
        Bauty<span style={{ color: "var(--bauty-accent)" }}>.</span>
      </div>

      <div
        className="hidden md:flex items-center gap-12"
        style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
      >
        <Link href="#servicios" className="hover:opacity-60 transition-opacity">
          Servicios
        </Link>
        <Link href="#metodo" className="hover:opacity-60 transition-opacity">
          El Método
        </Link>
        <Link href="#faq" className="hover:opacity-60 transition-opacity">
          FAQ
        </Link>
      </div>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bauty-btn"
        style={{ padding: "0.5rem 1rem" }}
        aria-label="Agendar cita por WhatsApp"
      >
        Agendar
      </Link>
    </nav>
  );
}
