import Link from "next/link";
import Image from "next/image";

interface BautyHeroProps {
  whatsappUrl: string;
}

/**
 * Sección Hero a pantalla completa con imagen de fondo editorial.
 * Las clases bauty-reveal activan la animación via useReveal (IntersectionObserver).
 */
export default function BautyHero({ whatsappUrl }: BautyHeroProps) {
  return (
    <section className="bauty-hero" aria-label="Bienvenida a Bauty Studio">
      {/* Imagen de fondo */}
      <div className="bauty-hero__overlay" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1610992015762-36359df3747d?q=80&w=2000&auto=format&fit=crop"
          alt="Dark Nail Art Editorial"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.3, filter: "grayscale(1)" }}
        />
      </div>

      {/* Contenido central */}
      <div className="bauty-hero__content">
        <h1
          className="bauty-editorial bauty-hero__title bauty-reveal"
          style={{ fontStyle: "italic" }}
          data-delay="0"
        >
          Tus manos y mirada
          <br />
          hablan por ti.
        </h1>

        <p
          className="bauty-reveal"
          data-delay="300"
          style={{
            marginTop: "2rem",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.35em",
            fontWeight: 300,
            maxWidth: "36rem",
            margin: "2rem auto 0",
            color: "#d1d5db",
          }}
        >
          El futuro de tu estética. Define tu identidad. Ambiente de desconexión.
        </p>

        <div className="bauty-reveal" data-delay="600" style={{ marginTop: "3rem" }}>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bauty-btn"
            style={{ padding: "1rem 2.5rem" }}
            aria-label="Agendar cita ahora por WhatsApp"
          >
            Agendar mi cita ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
