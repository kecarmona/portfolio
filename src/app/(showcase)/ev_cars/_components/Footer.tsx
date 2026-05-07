export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-7xl mx-auto">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg
                className="logo-v"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="6,6 20,34 26,14" fill="white" opacity="0.9" />
                <polygon points="20,34 34,6 26,14" fill="#AAFF00" />
              </svg>
              <span className="footer-logo-text">VOLTIOS</span>
            </div>
            <p className="footer-desc">
              El ecosistema de contenido EV más completo en español. Reviews
              honestas, asesoría real, marketplace seguro.
            </p>
            <div className="footer-social">
              <a href="https://youtube.com/@voltico" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                ▶
              </a>
              <a href="https://instagram.com/voltico" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="https://twitter.com/voltico" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                𝕏
              </a>
            </div>
          </div>

          {/* Content links */}
          <div>
            <div className="footer-col-title">CONTENIDO</div>
            <div className="footer-links">
              <a href="#content">Reviews</a>
              <a href="#content">Comparativas</a>
              <a href="#content">Guías de Carga</a>
              <a href="#content">Podcast</a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <div className="footer-col-title">SERVICIOS</div>
            <div className="footer-links">
              <a href="#services">Asesoría 1:1</a>
              <a href="#vehicles">Marketplace</a>
              <a href="#services">Colaboraciones</a>
              <a href="#cta">Contacto</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {currentYear} VOLTIOS. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="footer-legal">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
