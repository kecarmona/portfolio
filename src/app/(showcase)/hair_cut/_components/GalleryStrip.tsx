import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
];

export default function GalleryStrip() {
  return (
    <div className="gallery-strip">
      {galleryImages.map((src, i) => (
        <div className="gallery-strip-item" key={i}>
          <Image
            src={src}
            alt={`Barbería ${i + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
      <div className="gallery-strip-cta">
        <h3>¿Listo para un Cambio?</h3>
        <a href="#booking" className="btn-dark">
          Reserva un Turno
        </a>
      </div>
    </div>
  );
}
