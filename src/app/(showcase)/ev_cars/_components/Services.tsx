export default function Services() {
  return (
    <section id="services">
      <div className="max-w-7xl mx-auto">
        <div className="services-header">
          <div className="section-tag reveal">Servicios</div>
          <h2 className="display reveal">
            LO QUE PUEDO<br />
            <span className="neon-text">HACER</span> POR VOS
          </h2>
          <p className="reveal">
            Desde asesoría personalizada hasta colaboraciones con marcas — todo pensado para acelerar tu transición al mundo eléctrico.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1: 1:1 Advisory */}
          <div className="service-card glass reveal">
            <div className="service-icon">🎯</div>
            <div className="service-tag">Más Popular</div>
            <h3 className="service-title">Asesoría 1:1</h3>
            <p className="service-desc">
              Sesión personalizada para ayudarte a elegir tu próximo EV. Analizo tu presupuesto, rutina de uso y ubicación para darte la recomendación perfecta.
            </p>
            <ul className="service-features">
              <li>✅ Análisis de necesidades personal</li>
              <li>✅ Comparativa de modelos disponibles en tu país</li>
              <li>✅ Guía de infraestructura de carga</li>
              <li>✅ Seguimiento post-compra por 30 días</li>
            </ul>
            <div className="service-price">
              <span className="price-from">Desde</span>
              <span className="price-amount">$49</span>
              <span className="price-currency">USD</span>
            </div>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="neon-btn service-btn">
              Agendar Sesión →
            </a>
          </div>

          {/* Service 2: Brand Collaboration */}
          <div className="service-card glass-neon reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="service-icon">🤝</div>
            <div className="service-tag-neon">Para Marcas</div>
            <h3 className="service-title">Colaboraciones</h3>
            <p className="service-desc">
              Reviews honestas y contenido auténtico para marcas EV. Llego a una audiencia calificada que busca comprar su próximo vehículo eléctrico.
            </p>
            <ul className="service-features">
              <li>✅ Reviews en video para YouTube</li>
              <li>✅ Contenido para Instagram / TikTok</li>
              <li>✅ Test drives y primeras impresiones</li>
              <li>✅ Reportes de métricas y engagement</li>
            </ul>
            <div className="service-price">
              <span className="price-from">Proyectos desde</span>
              <span className="price-amount">$500</span>
              <span className="price-currency">USD</span>
            </div>
            <a href="https://wa.me/1234567890?text=Hola!%20Me%20interesa%20una%20colaboración" target="_blank" rel="noopener noreferrer" className="ghost-btn service-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Contactar por WhatsApp →
            </a>
          </div>

          {/* Service 3: Speaking */}
          <div className="service-card glass reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="service-icon">🎙️</div>
            <div className="service-tag">Eventos</div>
            <h3 className="service-title">Speaker & Charlas</h3>
            <p className="service-desc">
              Keynotes y charlas sobre movilidad eléctrica, adopción EV en LATAM y el futuro del transporte. Ideal para eventos corporativos y conferencias.
            </p>
            <ul className="service-features">
              <li>✅ Keynotes de 30-60 minutos</li>
              <li>✅ Paneles y Q&A</li>
              <li>✅ Talleres de adopción EV</li>
              <li>✅ Formato presencial o virtual</li>
            </ul>
            <div className="service-price">
              <span className="price-from">Consultar</span>
            </div>
            <a href="https://wa.me/1234567890?text=Hola!%20Me%20interesa%20contratar%20una%20charla" target="_blank" rel="noopener noreferrer" className="ghost-btn service-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Consultar Disponibilidad →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
