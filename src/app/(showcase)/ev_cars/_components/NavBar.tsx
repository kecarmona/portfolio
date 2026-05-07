"use client";

import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="navbar">
        <div className="nav-logo">
          <svg
            className="logo-v"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="6,6 20,34 26,14" fill="white" opacity="0.9" />
            <polygon points="20,34 34,6 26,14" fill="#AAFF00" />
            <polygon points="20,34 26,14 22,20" fill="#7ACC00" />
          </svg>
          <span>VOLTIOS</span>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#content" onClick={() => setMenuOpen(false)}>Contenido</a>
          <a href="#vehicles" onClick={() => setMenuOpen(false)}>Vehículos</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
        </div>
        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="neon-btn nav-cta hidden md:block">
          Contáctame
        </a>
        <button
          className="hamburger-btn md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger-line ${menuOpen ? "hamburger-line-open" : ""}`}></span>
          <span className={`hamburger-line ${menuOpen ? "hamburger-line-open" : ""}`}></span>
          <span className={`hamburger-line ${menuOpen ? "hamburger-line-open" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-content">
          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#content" onClick={() => setMenuOpen(false)}>Contenido</a>
          <a href="#vehicles" onClick={() => setMenuOpen(false)}>Vehículos</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="neon-btn mobile-cta">
            Contáctame
          </a>
          <div className="mobile-social">
            <a href="https://youtube.com/@voltico" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://instagram.com/voltico" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com/voltico" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </>
  );
}
