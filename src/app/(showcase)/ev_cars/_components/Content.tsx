export default function Content() {
  return (
    <section id="content">
      <div className="max-w-7xl mx-auto">
        <div className="content-header reveal">
          <div className="section-tag mb-4">Contenido</div>
          <h2 className="display">
            TODO LO QUE<br />
            NECESITAS<br />
            <span className="neon-text">SABER</span>
          </h2>
          <p>
            Creamos el ecosistema de contenido EV más completo en español
          </p>
        </div>

        <div className="feature-grid">
          {/* Card 1: Reviews en Profundidad */}
          <div className="feature-card glass reveal">
            <div className="card-icon">📹</div>
            <div className="card-title">REVIEWS EN PROFUNDIDAD</div>
            <p className="card-desc">
              Pruebas reales de más de 30 días con cada vehículo. Autonomía
              real, consumo, carga rápida, y la experiencia completa.
            </p>
            <a href="#" className="card-link">Ver Reviews →</a>
          </div>

          {/* Card 2: Comparativas Técnicas */}
          <div className="feature-card glass reveal">
            <div className="card-icon">🔬</div>
            <div className="card-title">COMPARATIVAS TÉCNICAS</div>
            <p className="card-desc">
              ¿Tesla vs BYD? ¿Ioniq vs Polestar? Comparamos con datos reales
              para que tú decidas con información, no con marketing.
            </p>
            <a href="#" className="card-link">Ver Comparativas →</a>
          </div>

          {/* Card 3: Asesoría Personalizada - Highlighted */}
          <div className="feature-card glass-neon reveal">
            <div className="card-icon">🎯</div>
            <div className="card-title card-title-neon">ASESORÍA PERSONALIZADA</div>
            <p className="card-desc">
              Te ayudo a encontrar el EV perfecto para tu presupuesto, estilo de
              vida y ciudad. Sesiones 1:1 disponibles.
            </p>
            <a href="#" className="card-link">Agendar Sesión →</a>
          </div>

          {/* Card 4: Guías de Carga */}
          <div className="feature-card glass reveal">
            <div className="card-icon">⚡</div>
            <div className="card-title">GUÍAS DE CARGA</div>
            <p className="card-desc">
              Todo sobre cargadores, tipos, instalación en casa, y redes de
              carga pública. No te quedes parado.
            </p>
            <a href="#" className="card-link">Ver Guías →</a>
          </div>

          {/* Card 5: EV en LATAM */}
          <div className="feature-card glass reveal">
            <div className="card-icon">🌎</div>
            <div className="card-title">EV EN LATAM</div>
            <p className="card-desc">
              Contenido específico para nuestra región: precios reales,
              disponibilidad, importación, garantías y más.
            </p>
            <a href="#" className="card-link">Explorar →</a>
          </div>

          {/* Card 6: Marketplace EV */}
          <div className="feature-card glass reveal">
            <div className="card-icon">🏪</div>
            <div className="card-title">MARKETPLACE EV</div>
            <p className="card-desc">
              Compra y vende tu vehículo eléctrico con total confianza.
              Verificación completa, sin sorpresas.
            </p>
            <a href="#" className="card-link">Ver Marketplace →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
