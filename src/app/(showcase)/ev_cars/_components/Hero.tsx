export default function Hero() {
  return (
    <section id="hero" className="hero-bg">
      <canvas id="heroCanvas"></canvas>

      {/* Floating glow orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="hero-content">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <div>
            <div className="section-tag mb-6 reveal" id="hero-tag">
              ⚡ Creador de Contenido EV #1 en LATAM
            </div>

            <h1 className="reveal" id="hero-h1">
              EL FUTURO<br />
              <span className="neon-text">ELÉCTRICO</span>
              <br />
              ES AHORA.
            </h1>

            <p
              className="hero-desc reveal"
              id="hero-p"
            >
              Guía, comunidad y marketplace para todo lo relacionado con
              vehículos eléctricos. Desde reviews hasta tu próxima compra — aquí
              encuentras todo.
            </p>

            <div className="hero-ctas reveal" id="hero-btns">
              <a href="#content" className="neon-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Ver Contenido</a>
              <a href="#vehicles" className="ghost-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Explorar EVs →</a>
            </div>

            {/* Stats row */}
            <div className="hero-stats reveal" id="hero-stats">
              <div>
                <div className="stat-num" data-target="120">0</div>
                <div className="stat-label">K+ Seguidores</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div>
                <div className="stat-num" data-target="85">0</div>
                <div className="stat-label">Reviews Publicadas</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div>
                <div className="stat-num" data-target="40">0</div>
                <div className="stat-label">Marcas Asociadas</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Floating phone/visual */}
          <div className="relative hidden md:flex justify-center items-center" style={{ height: "600px" }}>
            {/* Main phone mockup */}
            <div className="phone-mock float">
              <div className="phone-mock-header">
                <span className="phone-time">9:41 AM</span>
                <div className="phone-battery"></div>
              </div>
              <div className="phone-car-name">TESLA MODEL 3</div>
              <div className="phone-car-sub">Performance · 2024</div>
              <div className="phone-price-row">
                <span className="phone-price">$45,990</span>
                <span className="phone-price-currency">USD</span>
              </div>
              <div className="phone-tags">
                <span className="phone-tag-neon">⚡ 358mi</span>
                <span className="phone-tag-muted">0–60: 3.1s</span>
              </div>
              <div className="phone-battery-section">
                <div className="phone-battery-label">BATERÍA</div>
                <div className="prog-bar">
                  <div className="prog-fill" style={{ width: "87%" }}></div>
                </div>
                <div className="phone-battery-info">
                  <span className="phone-battery-percent">87% Cargada</span>
                  <span className="phone-battery-remaining">311 mi restantes</span>
                </div>
              </div>
              <div className="phone-car-visual">
                <svg viewBox="0 0 200 100" width="200" opacity="0.7">
                  <path
                    d="M20,65 L30,45 Q40,30 60,28 L90,24 Q110,22 130,28 L160,35 Q175,40 180,55 L185,65 Q185,75 175,75 L25,75 Q15,75 15,65 Z"
                    fill="none"
                    stroke="#AAFF00"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <circle cx="55" cy="75" r="12" fill="none" stroke="#AAFF00" strokeWidth="1.5" />
                  <circle cx="55" cy="75" r="5" fill="#AAFF00" opacity="0.6" />
                  <circle cx="145" cy="75" r="12" fill="none" stroke="#AAFF00" strokeWidth="1.5" />
                  <circle cx="145" cy="75" r="5" fill="#AAFF00" opacity="0.6" />
                  <path d="M65,28 L70,42 L130,42 L135,28" fill="rgba(170,255,0,0.05)" stroke="#AAFF00" strokeWidth="1" />
                  <line x1="60" y1="52" x2="60" y2="65" stroke="#AAFF00" strokeWidth="0.5" opacity="0.4" />
                  <line x1="100" y1="22" x2="100" y2="65" stroke="#AAFF00" strokeWidth="0.5" opacity="0.4" />
                  <line x1="140" y1="52" x2="140" y2="65" stroke="#AAFF00" strokeWidth="0.5" opacity="0.4" />
                </svg>
              </div>
              <button className="phone-review-btn">VER REVIEW COMPLETA →</button>
            </div>

            {/* Floating glass card - specs comparison */}
            <div className="float-card-glass" style={{ left: 0, top: "20%" }}>
              <div className="float-card-label">COMPARATIVA</div>
              <div className="float-card-row">
                <div className="float-card-item">
                  <span className="float-card-item-name">Tesla M3</span>
                  <div className="float-card-item-bar float-card-item-bar-high"></div>
                  <span className="float-card-item-value">9.4</span>
                </div>
                <div className="float-card-item">
                  <span className="float-card-item-name">BYD Atto</span>
                  <div className="float-card-item-bar float-card-item-bar-mid"></div>
                  <span className="float-card-item-value">8.1</span>
                </div>
                <div className="float-card-item">
                  <span className="float-card-item-name">Ioniq 6</span>
                  <div className="float-card-item-bar float-card-item-bar-low"></div>
                  <span className="float-card-item-value">7.8</span>
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="float-card-glass-neon" style={{ left: "2%", bottom: "18%" }}>
              <div className="float-notification-content">
                <div className="pulse-ring-container">
                  <div className="pulse-ring-inner"></div>
                  <div className="pulse-ring"></div>
                </div>
                <div>
                  <div className="float-notification-title">Nuevo video publicado</div>
                  <div className="float-notification-sub">Tesla Cybertruck: ¿Vale la pena?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-indicator-text">SCROLL</span>
        <div className="scroll-indicator-line"></div>
      </div>
    </section>
  );
}
