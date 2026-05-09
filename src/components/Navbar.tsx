"use client";

import { useState, useEffect, useRef, useId } from "react";
import type { NavbarDict } from "@/dictionaries/types";
import { BRAND } from "@/dictionaries/constants";

const SECTION_IDS = ["about", "stack", "projects", "contact"] as const;

export default function Navbar({ dict }: { dict: NavbarDict }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const drawerId = useId();

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

  // Body scroll lock + inert siblings while drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;

    // Compensate scrollbar width to avoid layout shift when overflow:hidden hides it.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const siblings: HTMLElement[] = [main, footer].filter(
      (el): el is HTMLElement => el !== null,
    );

    const supportsInert = "inert" in HTMLElement.prototype;
    siblings.forEach((el) => {
      if (supportsInert) {
        (el as HTMLElement & { inert: boolean }).inert = true;
      } else {
        el.setAttribute("aria-hidden", "true");
      }
    });

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      siblings.forEach((el) => {
        if (supportsInert) {
          (el as HTMLElement & { inert: boolean }).inert = false;
        } else {
          el.removeAttribute("aria-hidden");
        }
      });
    };
  }, [isOpen]);

  // Focus management: trap Tab inside drawer, focus first link on open,
  // Esc closes, restore focus to hamburger on close.
  useEffect(() => {
    if (!isOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    const getFocusable = (): HTMLElement[] => {
      const selector =
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      return Array.from(drawer.querySelectorAll<HTMLElement>(selector));
    };

    // Defer initial focus until after the drawer's open transition completes (300ms),
    // otherwise Safari may scroll the viewport to the focused element while it's still animating.
    const focusTimeout = window.setTimeout(() => {
      const focusables = getFocusable();
      focusables[0]?.focus();
    }, 300);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Restore focus to the hamburger when drawer closes (only if it was open).
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      hamburgerRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  // Active section indicator via IntersectionObserver
  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });
        let bestId: string | null = null;
        let bestRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        setActiveSection(bestRatio > 0 ? bestId : null);
      },
      { threshold: [0.4, 0.6, 0.8] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "#about", id: "about", label: dict.about },
    { href: "#stack", id: "stack", label: dict.stack },
    { href: "#projects", id: "projects", label: dict.projects },
    { href: "#contact", id: "contact", label: dict.contact },
  ];

  const closeMenu = () => setIsOpen(false);

  const drawerLabel = dict.menu;

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
          aria-label="Primary"
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
          <div className="hidden md:flex items-center gap-3 lg:gap-5 text-sm text-white/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
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
            ref={hamburgerRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center min-w-11 min-h-11 -mr-2 text-white/80 hover:text-white transition shrink-0"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls={drawerId}
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
        aria-hidden="true"
      />

      {/* Mobile Drawer — div, not nav, so role="dialog" doesn't conflict with the implicit nav landmark */}
      <div
        ref={drawerRef}
        id={drawerId}
        role="dialog"
        aria-modal="true"
        aria-label={drawerLabel}
        className={`fixed top-20 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav aria-label={drawerLabel} className="glass-strong py-4 px-6 flex flex-col gap-4 rounded-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-white/80 hover:text-white py-2 border-b border-white/10 last:border-0"
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={`mailto:${BRAND.email}`}
            className="bg-white text-[#0a0820] px-4 py-3 rounded-full text-sm font-medium text-center mt-2"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            {dict.hire}
          </a>
        </nav>
      </div>
    </>
  );
}
