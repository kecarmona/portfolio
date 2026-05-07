export default function Vehicles() {
  return (
    <section id="vehicles">
      <div className="max-w-7xl mx-auto">
        <div className="vehicles-header">
          <div className="reveal">
            <div className="section-tag mb-4">Vehículos Destacados</div>
            <h2 className="display">
              LOS EVs<br />
              QUE <span className="neon-text">DEBES</span> VER
            </h2>
          </div>
          <button className="ghost-btn mt-6 md:mt-0 reveal">
            Ver todos los modelos →
          </button>
        </div>

        {/* Vehicle cards */}
        <div className="vehicles-grid">
          {/* Card 1: Tesla Model 3 */}
          <div className="feature-card glass vehicle-card reveal">
            <div className="vehicle-visual">
              <svg
                className="vehicle-svg"
                viewBox="0 0 300 120"
                width="280"
                fill="none"
              >
                <path
                  d="M30,80 L50,50 Q65,30 90,26 L130,22 Q160,20 190,26 L230,36 Q248,44 255,65 L260,80 Q260,92 248,92 L40,92 Q28,92 28,80 Z"
                  fill="rgba(200,200,220,0.15)"
                  stroke="#AAFF00"
                  strokeWidth="1.5"
                />
                <circle cx="75" cy="92" r="15" fill="none" stroke="#AAFF00" strokeWidth="1.5" />
                <circle cx="75" cy="92" r="6" fill="#AAFF00" opacity="0.7" />
                <circle cx="200" cy="92" r="15" fill="none" stroke="#AAFF00" strokeWidth="1.5" />
                <circle cx="200" cy="92" r="6" fill="#AAFF00" opacity="0.7" />
                <path d="M90,26 L100,50 L170,50 L180,26" fill="rgba(170,255,0,0.06)" stroke="#AAFF00" strokeWidth="1" />
                <line x1="137" y1="20" x2="137" y2="92" stroke="rgba(170,255,0,0.1)" strokeWidth="0.5" />
              </svg>
              <div className="vehicle-rating vehicle-rating-muted">9.4 / 10</div>
            </div>
            <div className="vehicle-info">
              <div className="vehicle-name">TESLA MODEL 3</div>
              <div className="vehicle-sub">Performance · 2024</div>
              <div className="vehicle-specs">
                <div>
                  <div className="vehicle-spec-label">AUTONOMÍA</div>
                  <div className="vehicle-spec-value">576 km</div>
                </div>
                <div>
                  <div className="vehicle-spec-label">0–100</div>
                  <div className="vehicle-spec-value">3.1 s</div>
                </div>
                <div>
                  <div className="vehicle-spec-label">PRECIO</div>
                  <div className="vehicle-spec-value">$45,990</div>
                </div>
              </div>
              <button className="neon-btn vehicle-btn">Ver Review</button>
            </div>
          </div>

          {/* Card 2 - Featured: BYD Seal */}
          <div className="feature-card glass-neon vehicle-card vehicle-card-featured reveal">
            <div className="vehicle-badge">
              ⭐ RECOMENDADO DEL MES
            </div>
            <div className="vehicle-visual vehicle-visual-featured">
              <svg
                className="vehicle-svg"
                viewBox="0 0 300 120"
                width="280"
                fill="none"
              >
                <path
                  d="M25,82 L45,48 Q60,26 88,22 L135,18 Q165,16 195,22 L238,34 Q258,44 263,68 L268,82 Q268,95 254,95 L38,95 Q22,95 22,82 Z"
                  fill="rgba(170,255,0,0.08)"
                  stroke="#AAFF00"
                  strokeWidth="2"
                />
                <circle cx="70" cy="95" r="16" fill="none" stroke="#AAFF00" strokeWidth="2" />
                <circle cx="70" cy="95" r="7" fill="#AAFF00" />
                <circle cx="205" cy="95" r="16" fill="none" stroke="#AAFF00" strokeWidth="2" />
                <circle cx="205" cy="95" r="7" fill="#AAFF00" />
                <path d="M88,22 L98,48 L175,48 L188,22" fill="rgba(170,255,0,0.1)" stroke="#AAFF00" strokeWidth="1.5" />
              </svg>
              <div className="vehicle-rating vehicle-rating-featured">9.8 / 10</div>
            </div>
            <div className="vehicle-info">
              <div className="vehicle-name vehicle-name-featured">BYD SEAL</div>
              <div className="vehicle-sub">AWD Premium · 2024</div>
              <div className="vehicle-specs">
                <div>
                  <div className="vehicle-spec-label">AUTONOMÍA</div>
                  <div className="vehicle-spec-value">600 km</div>
                </div>
                <div>
                  <div className="vehicle-spec-label">0–100</div>
                  <div className="vehicle-spec-value">3.8 s</div>
                </div>
                <div>
                  <div className="vehicle-spec-label">PRECIO</div>
                  <div className="vehicle-spec-value">$38,500</div>
                </div>
              </div>
              <button className="neon-btn vehicle-btn">Ver Review</button>
            </div>
          </div>

          {/* Card 3: Hyundai Ioniq 6 */}
          <div className="feature-card glass vehicle-card reveal">
            <div className="vehicle-visual">
              <svg
                className="vehicle-svg"
                viewBox="0 0 300 130"
                width="280"
                fill="none"
              >
                <path
                  d="M20,88 L42,52 Q58,30 88,26 L125,22 Q155,20 185,26 L225,36 Q248,46 255,72 L260,88 Q260,100 246,100 L35,100 Q20,100 20,88 Z"
                  fill="rgba(180,180,200,0.1)"
                  stroke="#AAFF00"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
                <circle cx="72" cy="100" r="14" fill="none" stroke="#AAFF00" strokeWidth="1.5" />
                <circle cx="72" cy="100" r="5" fill="#AAFF00" opacity="0.6" />
                <circle cx="198" cy="100" r="14" fill="none" stroke="#AAFF00" strokeWidth="1.5" />
                <circle cx="198" cy="100" r="5" fill="#AAFF00" opacity="0.6" />
                <path d="M88,26 L96,50 L172,50 L182,26" fill="rgba(170,255,0,0.05)" stroke="#AAFF00" strokeWidth="1" />
              </svg>
              <div className="vehicle-rating vehicle-rating-muted">9.1 / 10</div>
            </div>
            <div className="vehicle-info">
              <div className="vehicle-name">HYUNDAI IONIQ 6</div>
              <div className="vehicle-sub">SE Long Range · 2024</div>
              <div className="vehicle-specs">
                <div>
                  <div className="vehicle-spec-label">AUTONOMÍA</div>
                  <div className="vehicle-spec-value">614 km</div>
                </div>
                <div>
                  <div className="vehicle-spec-label">0–100</div>
                  <div className="vehicle-spec-value">5.1 s</div>
                </div>
                <div>
                  <div className="vehicle-spec-label">PRECIO</div>
                  <div className="vehicle-spec-value">$41,450</div>
                </div>
              </div>
              <button className="neon-btn vehicle-btn">Ver Review</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
