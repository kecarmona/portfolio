import TopBar from "./_components/TopBar";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Handmade from "./_components/Handmade";
import Services from "./_components/Services";
import Products from "./_components/Products";
import Menu from "./_components/Menu";
import FeaturesWithIcons from "./_components/FeaturesWithIcons";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function SweetBakeryPage() {
  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Features Row */}
      <Features />

      {/* Handmade Section */}
      <Handmade />

      {/* Services Section */}
      <Services />

      {/* Products Section */}
      <Products />

      {/* Recommendation Menu */}
      <Menu />

      {/* Features with Icons */}
      <FeaturesWithIcons />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact / CTA */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
