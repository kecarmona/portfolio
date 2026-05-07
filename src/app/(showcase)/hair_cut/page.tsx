import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import StatsStrip from "./_components/StatsStrip";
import Marquee from "./_components/Marquee";
import Services from "./_components/Services";
import About from "./_components/About";
import Team from "./_components/Team";
import GalleryStrip from "./_components/GalleryStrip";
import Booking from "./_components/Booking";
import Footer from "./_components/Footer";
import HairCutEffects from "./_components/HairCutEffects";

export default function HairCutPage() {
  return (
    <>
      {/* Custom Cursor */}
      <div id="cursor"></div>
      <div id="cursor-ring"></div>

      {/* Particles Canvas */}
      <canvas id="particles"></canvas>

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Stats Strip */}
      <StatsStrip />

      {/* Marquee */}
      <Marquee />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Team Section */}
      <Team />

      {/* Gallery Strip */}
      <GalleryStrip />

      {/* Booking Section */}
      <Booking />

      {/* Footer */}
      <Footer />

      {/* Client-side Effects */}
      <HairCutEffects />
    </>
  );
}