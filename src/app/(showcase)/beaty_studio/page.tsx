import Script from "next/script";
import BautyNavbar from "./_components/BautyNavbar";
import BautyHero from "./_components/BautyHero";
import BautyServices from "./_components/BautyServices";
import BautyMethod from "./_components/BautyMethod";
import BautyCommunity from "./_components/BautyCommunity";
import BautyFaq from "./_components/BautyFaq";
import BautyFooter from "./_components/BautyFooter";
import BautyRevealInit from "./_components/BautyRevealInit";
import SmoothScroll from "./_components/SmoothScroll";

const WHATSAPP_URL = "https://wa.me/tu-numero";

export default function BautyStudioPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Bauty Studio",
    "image": "https://images.unsplash.com/photo-1610992015762-36359df3747d?q=80&w=2000&auto=format&fit=crop",
    "@id": "https://localespuravida.com/beaty_studio",
    "url": "https://localespuravida.com/beaty_studio",
    "telephone": "+50688887777",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San José",
      "addressRegion": "SJ",
      "addressCountry": "CR"
    },
    "priceRange": "$$",
    "description": "Esmaltado semipermanente, Gel X, cejas y pestañas con los más altos estándares de higiene en un ambiente dark elegance."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo dura el servicio de Gel X?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aproximadamente entre 60 y 90 minutos, dependiendo del diseño. El resultado dura hasta 4 semanas impecable."
        }
      },
      {
        "@type": "Question",
        "name": "¿El semipermanente debilita mis uñas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En absoluto. Nuestra técnica de retiro es manual y cuidadosa, asegurando que tu uña natural permanezca fuerte."
        }
      }
    ]
  };

  return (
    <SmoothScroll>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Activador de animaciones — único "use client" de la página */}
      <BautyRevealInit />

      <BautyNavbar whatsappUrl={WHATSAPP_URL} />

      <main>
        <BautyHero whatsappUrl={WHATSAPP_URL} />
        <BautyServices />
        <BautyMethod />
        <BautyCommunity />
        <BautyFaq />
      </main>

      <BautyFooter whatsappUrl={WHATSAPP_URL} />
    </SmoothScroll>
  );
}
