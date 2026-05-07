export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="testimonials-header text-center mb-20 reveal">
          <div className="section-tag mb-4">Testimonios</div>
          <h2 className="display">
            LA COMUNIDAD
            <br />
            <span className="neon-text">HABLA</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card glass feature-card reveal">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              Gracias a Voltios tomé la mejor decisión de mi vida al comprar mi
              primer EV. La review del BYD Seal fue exactamente lo que
              necesitaba — honesta y sin publicidad.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar testimonial-avatar-neon">
                CA
              </div>
              <div>
                <div className="testimonial-name">Carlos Armas</div>
                <div className="testimonial-role">Ingeniero · Costa Rica</div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
            </div>
          </div>

          {/* Testimonial 2 - Highlighted */}
          <div className="testimonial-card glass-neon feature-card reveal">
            <div className="quote-mark quote-mark-neon">"</div>
            <p className="testimonial-text">
              La asesoría personalizada valió cada centavo. Me ahorró meses de
              investigación y miles de dólares en potenciales errores. ¡Ya
              manejo mi Tesla Model 3!
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar testimonial-avatar-mixed">
                MR
              </div>
              <div>
                <div className="testimonial-name">María Rodríguez</div>
                <div className="testimonial-role">Médica · Colombia</div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card glass feature-card reveal">
            <div className="quote-mark">"</div>
            <p className="testimonial-text">
              Llevo siguiendo el canal desde hace 3 años. La calidad del
              contenido técnico es de otro nivel. No existe nada igual en
              español para la región.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar testimonial-avatar-dark">
                JP
              </div>
              <div>
                <div className="testimonial-name">Juan Pablo Soto</div>
                <div className="testimonial-role">Empresario · México</div>
              </div>
              <div className="testimonial-rating">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
