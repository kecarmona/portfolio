export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" id="heroBg"></div>
      <div className="hero-vignette"></div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-line"></div>
          <span>Est. 2012 — Experiencia de Cuidado Premium</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-line">ENCUENTRA TU</span>
          <span className="hero-title-line">
            <em className="hero-italic">Perfecto</em>
          </span>
          <span className="hero-title-line">CORTE.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Elevá tu estilo con maestría artesanal en una atmósfera sofisticada. 
            No solo cortamos el cabello — esculpimos confianza.
          </p>
          <div className="hero-ctas">
            <a href="#booking" className="btn-primary">Reservar Cita</a>
            <a href="#services" className="btn-ghost">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,8 12,12 14,14" />
              </svg>
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>Deslizar</span>
      </div>
    </section>
  );
}