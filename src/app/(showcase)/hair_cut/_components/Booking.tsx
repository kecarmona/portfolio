import Image from "next/image";

export default function Booking() {
  return (
    <section id="booking">
      <div className="booking-inner">
        <div className="booking-card reveal-left">
          <h2>VISITA EL LOCAL</h2>
          <div className="booking-info-item">
            <div className="booking-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <div className="booking-info-label">Dirección</div>
              <div className="booking-info-val">
                Avenida Lujo 123, Suite 400
                <br />
                Centro de la Ciudad, Metro 10012
              </div>
            </div>
          </div>
          <div className="booking-info-item">
            <div className="booking-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <div>
              <div className="booking-info-label">Horario de Atención</div>
              <div className="booking-info-val">
                Mon – Fri &nbsp; 9:00 AM – 8:00 PM
                <br />
                Saturday &nbsp; 10:00 AM – 6:00 PM
                <br />
                Sunday &nbsp;&nbsp;&nbsp; Closed
              </div>
            </div>
          </div>
          <div className="booking-info-item">
            <div className="booking-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17v-.08z" />
              </svg>
            </div>
            <div>
              <div className="booking-info-label">Contacto</div>
              <div className="booking-info-val">
                +1 (555) 012-3456
                <br />
                hello@noblecut.com
              </div>
            </div>
          </div>
          <a href="#" className="btn-book">
            Asegura tu Turno
          </a>
        </div>

        <div className="booking-right reveal-right">
          <h2>
            Walk in. <br />
            Walk out
            <br />
            legendary.
          </h2>
          <p>
            Join the ranks of the well-groomed. Our chair is always waiting.
            Walk-ins welcome — appointments ensure you get the full Noble
            experience without the wait.
          </p>
          <div className="booking-photos">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Barber shop interior"
              width={300}
              height={225}
            />
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
              alt="Barber tools"
              width={300}
              height={225}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
