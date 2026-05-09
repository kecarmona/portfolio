"use client";

import { useState, useEffect } from "react";
import type { NavbarDict } from "@/dictionaries/types";
import { BRAND } from "@/dictionaries/constants";

export default function Navbar({ dict }: { dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: dict.about },
    { href: "#stack", label: dict.stack },
    { href: "#projects", label: dict.projects },
    { href: "#contact", label: dict.contact },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-50 reveal transition-[width,max-width] duration-300 ease-out ${
          isScrolled
            ? "md:w-[90vw] md:max-w-5xl"
            : "md:w-auto md:max-w-5xl"
        }`}
        style={{ animationDelay: "0.1s" }}
      >
        <nav
          className={`glass-strong px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 md:gap-6 ${
            isOpen ? "rounded-2xl" : "rounded-full"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] flex items-center justify-center text-xs font-bold">
              {BRAND.initials}
            </div>
            <span className="font-medium text-sm">{BRAND.name}</span>
          </div>

          {/* Desktop Navigation - visible on md+ screens */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 text-sm text-white/60">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Hire Button - visible on md+ screens */}
          <a
            href={`mailto:${BRAND.email}`}
            className="hidden md:inline-flex bg-white text-[#0a0820] px-3 lg:px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium hover:scale-105 transition shrink-0 whitespace-nowrap"
          >
            {dict.hire}
          </a>

          {/* Mobile Hamburger Button - visible only on small screens */}
          <button
            className="md:hidden p-1.5 sm:p-2 text-white/80 hover:text-white transition shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-20 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="glass-strong py-4 px-6 flex flex-col gap-4 rounded-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-white/80 hover:text-white py-2 border-b border-white/10 last:border-0"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${BRAND.email}`}
            className="bg-white text-[#0a0820] px-4 py-3 rounded-full text-sm font-medium text-center mt-2"
            onClick={closeMenu}
          >
            {dict.hire}
          </a>
        </nav>
      </div>
    </>
  );
}
