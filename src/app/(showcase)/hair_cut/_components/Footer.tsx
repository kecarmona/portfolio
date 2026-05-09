export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">EL CORTE <span>NOBLE</span></div>
            <div className="footer-tagline">
              &quot;Cada hombre merece el corte perfecto.&quot;
            </div>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" title="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="social-link" title="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="social-link" title="Twitter/X">
              <svg viewBox="0 0 24 24">
                <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2024 El Corte Noble. Todos los derechos reservados.
          </div>
          <div className="footer-copy">Creado con precisión.</div>
        </div>
      </div>
    </footer>
  );
}