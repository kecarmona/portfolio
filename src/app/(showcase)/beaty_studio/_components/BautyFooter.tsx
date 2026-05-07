import Link from "next/link";

interface BautyFooterProps {
  whatsappUrl: string;
}

/**
 * Footer con headline grande, CTA y links de redes sociales.
 * Presentacional — recibe la URL de WhatsApp como prop.
 */
export default function BautyFooter({ whatsappUrl }: BautyFooterProps) {
  return (
    <footer className="bauty-footer" aria-label="Pie de página Bauty Studio">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Headline grande */}
        <h2 className="bauty-editorial bauty-footer__headline bauty-reveal">
          ¿Lista para{" "}
          <em style={{ color: "var(--bauty-accent)" }}>brillar?</em>
        </h2>

        <p
          className="bauty-reveal"
          style={{
            color: "#9ca3af",
            marginBottom: "2.5rem",
            textAlign: "center",
            maxWidth: "22rem",
          }}
          data-delay="100"
        >
          Quedan pocos espacios disponibles para esta semana. Asegurá el tuyo hoy mismo.
        </p>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bauty-btn bauty-reveal"
          data-delay="200"
          style={{ padding: "1.25rem 3rem", fontSize: "0.875rem", fontWeight: 700, marginBottom: "4rem" }}
          aria-label="Reservar lugar por WhatsApp"
        >
          Reservar mi lugar por WhatsApp
        </Link>

        {/* Línea inferior */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            fontSize: "0.625rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#4b5563",
          }}
        >
          <p>© 2026 BAUTY STUDIO. DARK ELEGANCE</p>

          <nav aria-label="Redes sociales">
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <Link href="#" className="bauty-footer__link">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="bauty-footer__link">
                  TikTok
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
