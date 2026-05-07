import Image from "next/image";

const IMAGES = [
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612887390768-fb02affea7a6?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function BautyCommunity() {
  return (
    <section className="bauty-community" aria-labelledby="community-heading">
      <div style={{ paddingInline: "2rem", marginBottom: "4rem" }}>
        <span
          className="bauty-reveal"
          style={{
            color: "var(--bauty-accent)",
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          03. The Community
        </span>
        <h2
          id="community-heading"
          className="bauty-editorial bauty-reveal"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginTop: "1rem" }}
          data-delay="100"
        >
          Define tu Identidad.
        </h2>
      </div>

      <div className="bauty-community__grid">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className="bauty-community__item bauty-reveal"
            data-delay={String(i * 150)}
          >
            <Image
              src={src}
              alt={`Community look ${i + 1}`}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <p
          className="bauty-reveal"
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#6b7280",
          }}
        >
          Mencionanos con #DarkEleganceBauty
        </p>
      </div>
    </section>
  );
}
