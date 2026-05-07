export default function Cta() {
  return (
    <section id="cta" className="cta-bg py-32 px-8 md:px-16 relative overflow-hidden">
      <div className="cta-content reveal">
        <div className="section-tag mb-6">
          ¿Listo para hacer el cambio?
        </div>
        <h2 className="display mb-6">
          ÚNETE A LA<br />
          <span className="neon-text" style={{ textShadow: "0 0 60px var(--neon-glow)" }}>
            REVOLUCIÓN
          </span>
          <br />
          ELÉCTRICA
        </h2>
        <p>
          Más de 120,000 personas ya tomaron la decisión más inteligente con
          nuestra ayuda. ¿Cuándo es tu turno?
        </p>

        <div className="cta-buttons">
          <button
            className="neon-btn"
            style={{ fontSize: "0.85rem", padding: "1.1rem 2.5rem" }}
          >
            🚗 Ver Marketplace de EVs
          </button>
          <button
            className="ghost-btn"
            style={{ fontSize: "0.85rem", padding: "1.1rem 2.5rem" }}
          >
            📺 Ver Últimas Reviews
          </button>
        </div>

        {/* Newsletter */}
        <div className="newsletter-card glass">
          <div className="newsletter-label">NEWSLETTER SEMANAL</div>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="tu@email.com"
              className="newsletter-input"
            />
            <button className="neon-btn newsletter-btn">
              Suscribir ⚡
            </button>
          </div>
          <div className="newsletter-note">
            Sin spam. Solo noticias eléctricas que importan.
          </div>
        </div>
      </div>
    </section>
  );
}
