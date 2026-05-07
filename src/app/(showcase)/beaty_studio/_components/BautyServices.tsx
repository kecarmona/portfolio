import Image from "next/image";

interface Service {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const SERVICES: Service[] = [
  {
    tag: "+15 días de perfección",
    title: "Esmaltado Semipermanente",
    description: "Color vibrante y brillo espejo. Sin daños, solo perfección.",
    imageUrl:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Esmaltado de uñas semipermanente",
  },
  {
    tag: "La revolución",
    title: "Gel X",
    description: "Ligereza, resistencia y un acabado natural que amarás.",
    imageUrl:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Uñas con técnica Gel X",
  },
  {
    tag: "Mirada de impacto",
    title: "Cejas y Pestañas",
    description: "Un diseño que enmarca tu mirada y simplifica tus mañanas.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1663050996462-4671145bf66f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Diseño de cejas y pestañas",
  },
];

/**
 * Lista de servicios con diseño editorial estilo revista.
 * Diseño alternado (imagen a la derecha, luego izquierda, etc).
 */
export default function BautyServices() {
  return (
    <section
      id="servicios"
      className="bauty-services"
      aria-labelledby="services-heading"
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        {/* Encabezado */}
        <div
          className="bauty-reveal"
          style={{
            marginBottom: "5rem",
          }}
        >
          <span
            style={{
              color: "var(--bauty-accent)",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            01. Menú
          </span>
          <h2
            id="services-heading"
            className="bauty-editorial"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              marginTop: "1rem",
              lineHeight: 1,
            }}
          >
            Elige tu <br />
            <span style={{ fontStyle: "italic" }}>momento</span>
          </h2>
        </div>

        <div className="bauty-services__list">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="bauty-service-card bauty-reveal"
              data-delay={String(i * 100)}
              aria-label={service.title}
            >
              <div className="bauty-service-card__content">
                <p
                  style={{
                    color: "var(--bauty-accent)",
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  0{i + 1} — {service.tag}
                </p>

                <h3
                  className="bauty-editorial"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    marginTop: "0.5rem",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: "#9ca3af",
                    marginTop: "1rem",
                    fontWeight: 300,
                    fontSize: "1.1rem",
                  }}
                >
                  {service.description}
                </p>
              </div>

              <div className="bauty-service-card__img">
                <div
                  className="bauty-service-img-wrapper"
                  style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    width: "100%",
                  }}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
