export default function About() {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto">
        <div className="about-grid">
          {/* Visual side */}
          <div className="about-visual reveal-left">
            <div className="about-big-letter">V</div>

            <div className="about-card glass">
              {/* Profile placeholder */}
              <div className="about-profile-img">
                <svg viewBox="0 0 40 40" width="40" fill="none">
                  <polygon
                    points="6,6 20,34 26,14"
                    fill="white"
                    opacity="0.9"
                  />
                  <polygon points="20,34 34,6 26,14" fill="#0A0A0A" />
                </svg>
              </div>
              <div className="about-profile-name">MIGUEL VOLTIOS</div>
              <div className="about-profile-title">
                Creador EV · Asesor · Speaker
              </div>

              <div className="about-progress-group">
                <div className="about-progress-item">
                  <div className="about-progress-header">
                    <span className="about-progress-label">
                      Conocimiento Técnico
                    </span>
                    <span className="about-progress-value">96%</span>
                  </div>
                  <div className="prog-bar">
                    <div className="prog-fill" data-width="96"></div>
                  </div>
                </div>
                <div className="about-progress-item">
                  <div className="about-progress-header">
                    <span className="about-progress-label">
                      Reviews de Vehículos
                    </span>
                    <span className="about-progress-value">85+</span>
                  </div>
                  <div className="prog-bar">
                    <div className="prog-fill" data-width="85"></div>
                  </div>
                </div>
                <div className="about-progress-item">
                  <div className="about-progress-header">
                    <span className="about-progress-label">
                      Satisfacción de Clientes
                    </span>
                    <span className="about-progress-value">99%</span>
                  </div>
                  <div className="prog-bar">
                    <div className="prog-fill" data-width="99"></div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="about-badges">
                <span className="about-badge-neon">⚡ Top EV Creator</span>
                <span className="about-badge-muted">🎙 Speaker</span>
                <span className="about-badge-muted">🔋 EV Advisor</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal-right">
            <div className="section-tag mb-4">Sobre Mí</div>
            <h2 className="display mb-6">
              UNA VOZ
              <br />
              <span className="neon-text">HONESTA</span>
              <br />
              PARA EL EV
            </h2>
            <p>
              Llevo más de 5 años probando, comparando y viviendo con vehículos
              eléctricos. No soy vocero de ninguna marca — soy el filtro que
              necesitas antes de tomar la decisión de tu vida.
            </p>
            <p>
              Desde reseñas técnicas profundas hasta guías de compra para LATAM,
              mi misión es acelerar la adopción eléctrica con información real,
              sin humo.
            </p>

            <div className="about-stats">
              <div className="about-stat-item">
                <div className="about-stat-value">5+</div>
                <div className="about-stat-label">Años con EVs</div>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <div className="about-stat-value">18</div>
                <div className="about-stat-label">Países Recorridos</div>
              </div>
              <div className="about-stat-divider"></div>
              <div className="about-stat-item">
                <div className="about-stat-value">50+</div>
                <div className="about-stat-label">Modelos Probados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
