"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { name: "Cheesecake NY Style", price: "₡3,500", desc: "Frutos rojos frescos de temporada.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800" },
  { name: "Latte Vainilla Bourbon", price: "₡2,800", desc: "Espresso doble con infusión real de vainilla.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
  { name: "Tarta Chocolate Amargo", price: "₡3,200", desc: "Cacao 70%, base crocante y toque de sal marina.", img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=800" },
  { name: "Croissant de Almendras", price: "₡2,500", desc: "Doble horneado, crema de almendras artesanal.", img: "https://images.unsplash.com/photo-1549903072-7e6e0d6590cb?auto=format&fit=crop&q=80&w=800" }
];

export default function TresViasPage() {
  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);

  useGSAP(
    () => {
      // Hero Text Animation
      gsap.from(".reveal-text span", {
        y: "120%",
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      });

      // Parallax Effect for Images
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((img) => {
        gsap.to(img, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Animate up text
      gsap.utils.toArray<HTMLElement>(".animate-up").forEach((text) => {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        });
      });

      // Marquee Animation
      gsap.to(".marquee", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      // Custom Cursor Movement
      const onMouseMove = (e: MouseEvent) => {
        if (cursorRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      };
      window.addEventListener("mousemove", onMouseMove);

      // Hover Effect on Links
      const links = document.querySelectorAll("a, .cursor-pointer");
      const onMouseEnter = () =>
        gsap.to(cursorRef.current, { scale: 3, duration: 0.3 });
      const onMouseLeave = () =>
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });

      links.forEach((link) => {
        link.addEventListener("mouseenter", onMouseEnter);
        link.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        links.forEach((link) => {
          link.removeEventListener("mouseenter", onMouseEnter);
          link.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative w-full tv-root selection:bg-[#2C1E16] selection:text-[#F9F7F2]"
    >
      <div id="cursor" ref={cursorRef} className="hidden md:block"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 md:px-10 py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl font-bold tracking-tighter serif italic">
          TRES VÍAS.
        </div>
        <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest">
          <a href="#" className="nav-link cursor-pointer">
            Nuestra Historia
          </a>
          <a href="#" className="nav-link cursor-pointer">
            Menú
          </a>
          <a href="#" className="nav-link cursor-pointer">
            Visítanos
          </a>
        </div>
        <div className="cursor-pointer group">
          <div className="w-6 h-px bg-current mb-1 transition-all group-hover:w-8"></div>
          <div className="w-6 h-px bg-current"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-50"
            alt="Cheesecake and Coffee Texture"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="hero-title serif italic reveal-text overflow-hidden">
            <span className="block">El Refugio.</span>
            <span className="block text-right text-[#BC6C25]">Perfecto.</span>
          </h1>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] opacity-80">
            Artesanía pura, horneada hoy mismo.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-widest text-[#BC6C25] mb-6 block">
            — Nuestra Filosofía
          </span>
          <h2 className="text-3xl md:text-5xl serif leading-relaxed italic animate-up text-[#2C1E16]">
            No horneamos contra el reloj. Horneamos por la textura, la base
            crocante y el ritual silencioso del primer bocado.
          </h2>
        </div>
      </section>

      {/* Process / Best Sellers Section */}
      <section className="pb-40 px-6 md:px-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7 image-container h-[70vh] relative">
            <img
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover parallax-img"
              alt="Cheesecake New York Style"
            />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="serif italic text-2xl md:text-4xl shadow-sm">
                100% Artesanal
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-20 animate-up">
            <div className="image-container h-[50vh] mb-8">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover parallax-img"
                alt="Café de Especialidad"
              />
            </div>
            <h3 className="serif text-2xl italic text-[#2C1E16]">
              El Ritual del Café
            </h3>
            <p className="text-sm mt-4 leading-relaxed opacity-70">
              Una crema aterciopelada y un salón tranquilo. Nuestros granos son
              tostados específicamente para maridar con nuestros postres.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-32 px-6 md:px-20 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#BC6C25] mb-8 block animate-up">
              — El Menú
            </span>
            <div className="flex flex-col">
              {menuItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group cursor-pointer py-6 border-b border-[#2C1E16]/10 animate-up"
                  onMouseEnter={() => setActiveItem(idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className={`text-2xl md:text-5xl serif italic transition-all duration-500 ${activeItem === idx ? 'text-[#BC6C25] translate-x-4' : 'text-[#2C1E16] opacity-40 hover:opacity-80'}`}>
                      {item.name}
                    </h3>
                    <span className={`text-sm tracking-widest transition-opacity duration-500 ${activeItem === idx ? 'opacity-100' : 'opacity-0'}`}>
                      {item.price}
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-500 ${activeItem === idx ? 'max-h-20 opacity-100 mt-4 ml-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm opacity-70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block h-[70vh] w-full image-container relative animate-up">
            {menuItems.map((item, idx) => (
              <img 
                key={idx}
                src={item.img} 
                alt={item.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${activeItem === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-32 bg-[#2C1E16] text-[#F9F7F2] overflow-hidden border-y border-white/10">
        <div className="marquee-container">
          <div className="flex marquee text-8xl md:text-[12rem] serif italic lowercase opacity-30">
            <span className="px-10">mucho más que una pastelería.</span>
            <span className="px-10">mucho más que una pastelería.</span>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-7xl serif italic mb-12 animate-up">
          Encuentra Tu Refugio
        </h2>
        <a
          href="#"
          className="px-12 py-5 border border-[#2C1E16]/20 rounded-full hover:bg-[#2C1E16] hover:text-[#F9F7F2] transition-all duration-500 uppercase text-xs tracking-widest cursor-pointer animate-up"
        >
          Descubre el Menú
        </a>
        <footer className="mt-20 text-[10px] uppercase tracking-widest opacity-40">
          &copy; {new Date().getFullYear()} Pastelería Tres Vías. Todos los
          derechos reservados.
        </footer>
      </section>
    </div>
  );
}
