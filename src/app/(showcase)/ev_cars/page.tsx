import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import About from "./_components/About";
import Content from "./_components/Content";
import Vehicles from "./_components/Vehicles";
import Services from "./_components/Services";
import EVCalculator from "./_components/EVCalculator";
import Testimonials from "./_components/Testimonials";
import Cta from "./_components/Cta";
import Footer from "./_components/Footer";
import EvCarsEffects from "./_components/EvCarsEffects";

export default function EvCarsPage() {
  return (
    <>
      {/* Custom Cursor — Lightning Bolt */}
      <svg
        className="cursor-bolt"
        id="cursorBolt"
        width="28"
        height="40"
        viewBox="0 0 28 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="16,0 4,22 13,22 10,40 26,14 16,14"
          fill="rgba(170,255,0,0.18)"
        />
        <polygon points="16,0 4,22 13,22 10,40 26,14 16,14" fill="#AAFF00" />
        <polygon
          points="16,3 7,21 14,21 12,35 23,16 15,16"
          fill="rgba(255,255,255,0.35)"
        />
      </svg>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Marquee */}
      <Marquee />

      {/* About Section */}
      <About />

      {/* Content / Features */}
      <Content />

      {/* Vehicles Showcase */}
      <Vehicles />

      {/* Services Section */}
      <Services />

      {/* EV Savings Calculator */}
      <EVCalculator />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <Cta />

      {/* Footer */}
      <Footer />

      {/* Client-side Effects */}
      <EvCarsEffects />
    </>
  );
}
