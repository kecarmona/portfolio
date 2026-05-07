import Image from "next/image";

const METHOD_POINTS = [
  "Higiene de Grado Médico",
  "Durabilidad Garantizada",
  "Ambiente Boutique & Dark Elegance",
] as const;

/**
 * Sección "El Método" con imagen a pantalla completa a la izquierda
 * y texto editorial a la derecha.
 */
export default function BautyMethod() {
  return (
    <section
      id="metodo"
      className="bauty-method"
      aria-labelledby="method-heading"
    >
      {/* Imagen */}
      <div className="bauty-method__image-wrapper bauty-reveal-zoom">
        <Image
          src="https://plus.unsplash.com/premium_photo-1670348051093-a3f94b408bcb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Técnica del Bauty Studio: precisión y cuidado de uñas"
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Texto */}
      <div className="bauty-method__text bauty-reveal-left">
        <span
          style={{
            color: "var(--bauty-accent)",
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          02. El Método
        </span>

        <h2
          id="method-heading"
          className="bauty-editorial"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            marginTop: "1.5rem",
            marginBottom: "2rem",
            lineHeight: 1.1,
          }}
        >
          No es solo belleza.
        </h2>

        <p
          style={{
            maxWidth: "22rem",
            color: "#9ca3af",
            lineHeight: 1.75,
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          Es salud y confianza. Priorizamos la integridad de tu uña natural con
          técnicas no invasivas y los más altos estándares de higiene.
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {METHOD_POINTS.map((point) => (
            <li
              key={point}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#e5e7eb",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  backgroundColor: "var(--bauty-accent)",
                  display: "inline-block",
                  flexShrink: 0,
                  marginRight: "0.75rem",
                }}
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
