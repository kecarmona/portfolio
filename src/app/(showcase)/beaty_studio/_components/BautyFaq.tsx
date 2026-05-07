interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuánto tiempo dura el servicio de Gel X?",
    answer:
      "Aproximadamente entre 60 y 90 minutos, dependiendo del diseño. El resultado dura hasta 4 semanas impecable.",
  },
  {
    question: "¿El semipermanente debilita mis uñas?",
    answer:
      "En absoluto. Nuestra técnica de retiro es manual y cuidadosa, asegurando que tu uña natural permanezca fuerte.",
  },
  {
    question: "¿Necesito reservar con anticipación?",
    answer:
      "Sí, recomendamos agendar con al menos 24 horas de anticipación para garantizar tu lugar. Podés hacerlo directamente por WhatsApp.",
  },
  {
    question: "¿Trabajan con diseños personalizados?",
    answer:
      "¡Claro que sí! Podés traer referencias o dejarte guiar por nuestra artista. Cada diseño es único y hecho a medida.",
  },
];

/**
 * Sección FAQ usando el elemento nativo <details> / <summary> de HTML.
 * Accesible out-of-the-box sin necesidad de estado en React.
 */
export default function BautyFaq() {
  return (
    <section id="faq" className="bauty-faq" aria-labelledby="faq-heading">
      <div style={{ maxWidth: "56rem", margin: "0 auto", paddingInline: "2rem" }}>
        {/* Encabezado */}
        <div className="bauty-reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              color: "var(--bauty-accent)",
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            03. Info
          </span>
          <h2
            id="faq-heading"
            className="bauty-editorial"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4rem)", marginTop: "1rem" }}
          >
            Preguntas Frecuentes
          </h2>
        </div>

        {/* Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.question}
              className="bauty-faq__item bauty-reveal"
              data-delay={String(i * 100)}
            >
              <summary className="bauty-faq__summary">
                {item.question}
                <span className="bauty-faq__icon" aria-hidden="true">+</span>
              </summary>
              <p className="bauty-faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
