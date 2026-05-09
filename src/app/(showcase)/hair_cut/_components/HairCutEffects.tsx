"use client";

import { useEffect } from "react";

export default function HairCutEffects() {
  useEffect(() => {
    // 1. Cursor
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };
    
    document.addEventListener("mousemove", onMouseMove);

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      animationFrameId = requestAnimationFrame(animRing);
    };
    animRing();

    const hoverElements = document.querySelectorAll("a, button, .service-card, .team-card, .gallery-strip-item");
    
    const onMouseEnter = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.background = "rgba(201,168,76,0.4)";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };
    
    const onMouseLeave = () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      cursor.style.background = "var(--gold)";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // 2. Nav Scroll
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
      }
      
      // Parallax on hero
      const heroBg = document.getElementById("heroBg");
      if (heroBg && window.scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);

    // 3. Hero BG Load
    const heroBg = document.getElementById("heroBg");
    if (heroBg) {
      setTimeout(() => heroBg.classList.add("loaded"), 100);
    }

    // 4. Scroll Reveal
    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));

    // 5. Marquee
    const marqueeItems = [
      "Cortes de Autor",
      "Toalla Caliente",
      "Esculpido de Barba",
      "Cuidado Premium",
      "Est. 2012",
      "El Ritual Completo",
      "Maestros Barberos",
      "Sin Cita Previa",
      "Pleno Centro",
    ];
    const track = document.getElementById("marqueeTrack");
    if (track && track.children.length === 0) {
      const fill = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];
      fill.forEach((txt, i) => {
        const item = document.createElement("div");
        item.className = "marquee-item";
        item.innerHTML = (i > 0 ? '<div class="marquee-dot"></div>' : "") + txt;
        track.appendChild(item);
      });
    }

    // 6. Particles
    const canvas = document.getElementById("particles") as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let particleAnimationId: number;

    if (canvas) {
      ctx = canvas.getContext("2d");
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      class Particle {
        x: number = 0;
        y: number = 0;
        size: number = 0;
        speedY: number = 0;
        speedX: number = 0;
        opacity: number = 0;
        life: number = 0;
        maxLife: number = 0;

        constructor() {
          this.reset();
        }
        reset() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height + canvas.height;
          this.size = Math.random() * 1.5 + 0.3;
          this.speedY = -(Math.random() * 0.4 + 0.1);
          this.speedX = (Math.random() - 0.5) * 0.2;
          this.opacity = Math.random() * 0.4 + 0.05;
          this.life = 0;
          this.maxLife = Math.random() * 300 + 200;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.life++;
          if (this.life > this.maxLife || this.y < -10) this.reset();
        }
        draw(ctx: CanvasRenderingContext2D) {
          const fade = this.life < 40
            ? this.life / 40
            : this.life > this.maxLife - 40
              ? (this.maxLife - this.life) / 40
              : 1;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201,168,76,${this.opacity * fade})`;
          ctx.fill();
        }
      }

      const particles: Particle[] = [];
      for (let i = 0; i < 60; i++) {
        const p = new Particle();
        p.y = Math.random() * canvas.height;
        particles.push(p);
      }

      const animParticles = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.update();
          p.draw(ctx!);
        });
        particleAnimationId = requestAnimationFrame(animParticles);
      };
      animParticles();
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
      if (particleAnimationId) cancelAnimationFrame(particleAnimationId);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
      io.disconnect();
    };
  }, []);

  return null;
}
