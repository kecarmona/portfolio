/**
 * Bloque de testimonial: fondo blanco, texto oscuro, estilo editorial.
 * Completamente presentacional y estático.
 */
export default function BautyTestimonial() {
  return (
    <section
      className="bauty-testimonial"
      aria-label="Testimonio de clienta"
    >
      <div className="bauty-reveal" style={{ maxWidth: "56rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#6b7280",
            marginBottom: "2rem",
          }}
        >
          Lo que dicen nuestras clientas
        </p>

        <blockquote>
          <p
            className="bauty-editorial"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              fontStyle: "italic",
              lineHeight: 1.3,
            }}
          >
            &ldquo;Es el único lugar donde el Gel X me dura perfecto 3 semanas.
            La atención es impecable y salís sintiéndote renovada.&rdquo;
          </p>
          <footer
            style={{
              marginTop: "2rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.7rem",
            }}
          >
            <cite>— Valeria R.</cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
