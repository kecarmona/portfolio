"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EvCarsEffects() {
  useEffect(() => {
    // 1. Custom Cursor — Lightning Bolt (DISABLED ON TOUCH)
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    let animationFrameId: number;
    let cursorCleanup = () => {};

    if (!isTouchDevice) {
      // Hide cursor elements on touch devices
      const cursorBoltEl = document.getElementById("cursorBolt");
      const cursorRingEl = document.getElementById("cursorRing");

      // Restore default cursor on wrapper for non-touch
      const wrapper = document.getElementById("ev-cars-wrapper");
      if (wrapper) wrapper.style.cursor = "none";

      const cursorBolt = document.getElementById("cursorBolt");
      const ring = document.getElementById("cursorRing");
      if (cursorBolt && ring) {
        let mouseX = 0,
          mouseY = 0,
          ringX = 0,
          ringY = 0;

        // Spark trail
        let lastSparkX = 0,
          lastSparkY = 0;

        const spawnSpark = (x: number, y: number) => {
          const dx = x - lastSparkX;
          const dy = y - lastSparkY;
          if (Math.sqrt(dx * dx + dy * dy) < 8) return;
          lastSparkX = x;
          lastSparkY = y;

          const spark = document.createElement("div");
          spark.className = "spark";
          const size = 3 + Math.random() * 5;
          spark.style.cssText = `width:${size}px;height:${size}px;left:${x + (Math.random() - 0.5) * 16}px;top:${y + (Math.random() - 0.5) * 16}px;`;
          document.body.appendChild(spark);
          setTimeout(() => spark.remove(), 500);
        };

        const onMouseMove = (e: MouseEvent) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          cursorBolt.style.left = mouseX + "px";
          cursorBolt.style.top = mouseY + "px";
          spawnSpark(mouseX, mouseY);
        };

        document.addEventListener("mousemove", onMouseMove);

        // Cursor ring animation with requestAnimationFrame
        const animateRing = () => {
          ringX += (mouseX - ringX) * 0.1;
          ringY += (mouseY - ringY) * 0.1;
          ring.style.left = ringX + "px";
          ring.style.top = ringY + "px";
          animationFrameId = requestAnimationFrame(animateRing);
        };
        animateRing();

        // Hover states for links and buttons
        const hoverElements = document.querySelectorAll("a, button");

        const onMouseEnter = () => {
          cursorBolt.classList.add("is-hover");
        };

        const onMouseLeave = () => {
          cursorBolt.classList.remove("is-hover");
        };

        hoverElements.forEach((el) => {
          el.addEventListener("mouseenter", onMouseEnter);
          el.addEventListener("mouseleave", onMouseLeave);
        });

        cursorCleanup = () => {
          document.removeEventListener("mousemove", onMouseMove);
          cancelAnimationFrame(animationFrameId);
          hoverElements.forEach((el) => {
            el.removeEventListener("mouseenter", onMouseEnter);
            el.removeEventListener("mouseleave", onMouseLeave);
          });
        };
      }
    } else {
      // Touch device: hide cursor elements, restore default cursor
      const cursorBoltEl = document.getElementById("cursorBolt");
      const cursorRingEl = document.getElementById("cursorRing");
      if (cursorBoltEl) cursorBoltEl.style.display = "none";
      if (cursorRingEl) cursorRingEl.style.display = "none";
      const wrapper = document.getElementById("ev-cars-wrapper");
      if (wrapper) wrapper.style.cursor = "auto";
    }

    // 2. Navbar scroll detection
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
      }
    };
    window.addEventListener("scroll", onScroll);

    // 3. Electric Circuit Canvas Animation
    const canvas = document.getElementById("heroCanvas") as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let circuitAnimationId: number;
    let resizeCanvas: () => void = () => {};

    if (canvas) {
      ctx = canvas.getContext("2d");

      resizeCanvas = () => {
        const hero = document.getElementById("hero");
        if (!hero) return;
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
        initCircuit();
      };

      // Circuit nodes grid
      interface CircuitNode {
        x: number;
        y: number;
        radius: number;
        isHotSpot: boolean;
        pulsePhase: number;
        pulseSpeed: number;
      }

      interface CircuitTrace {
        from: number;
        to: number;
        points: { x: number; y: number }[];
      }

      interface EnergyPulse {
        traceIndex: number;
        progress: number;
        speed: number;
        type: "circle" | "square";
        size: number;
        opacity: number;
      }

      let nodes: CircuitNode[] = [];
      let traces: CircuitTrace[] = [];
      let pulses: EnergyPulse[] = [];
      let cols = 0;
      let rows = 0;
      let cellW = 0;
      let cellH = 0;
      const gridSize = 40;
      const jitter = 0.35;

      function initCircuit() {
        if (!ctx || !canvas) return;
        const w = canvas.width;
        const h = canvas.height;
        cols = Math.ceil(w / gridSize) + 2;
        rows = Math.ceil(h / gridSize) + 2;
        cellW = w / (cols - 1);
        cellH = h / (rows - 1);

        // Generate nodes with jitter
        nodes = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const jx = cellW * jitter * (Math.random() - 0.5) * 2;
            const jy = cellH * jitter * (Math.random() - 0.5) * 2;
            const isHot = Math.random() < 0.08;
            nodes.push({
              x: c * cellW + jx,
              y: r * cellH + jy,
              radius: isHot ? 2.5 : 1,
              isHotSpot: isHot,
              pulsePhase: Math.random() * Math.PI * 2,
              pulseSpeed: 0.01 + Math.random() * 0.02,
            });
          }
        }

        // Generate traces (PCB-style orthogonal paths)
        traces = [];
        const visited = new Set<string>();

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            const key = `${r},${c}`;
            if (visited.has(key)) continue;

            // Connect right (horizontal trace)
            if (c < cols - 1 && Math.random() < 0.55) {
              const from = idx;
              const to = idx + 1;
              const fromNode = nodes[from];
              const toNode = nodes[to];
              const midX = (fromNode.x + toNode.x) / 2;
              const jitterY = (Math.random() - 0.5) * cellH * 0.3;
              traces.push({
                from,
                to,
                points: [
                  { x: fromNode.x, y: fromNode.y },
                  { x: midX, y: fromNode.y + jitterY },
                  { x: midX, y: toNode.y + jitterY },
                  { x: toNode.x, y: toNode.y },
                ],
              });
              visited.add(key);
            }

            // Connect down (vertical trace)
            if (r < rows - 1 && Math.random() < 0.45) {
              const from = idx;
              const to = idx + cols;
              const fromNode = nodes[from];
              const toNode = nodes[to];
              const midY = (fromNode.y + toNode.y) / 2;
              const jitterX = (Math.random() - 0.5) * cellW * 0.3;
              traces.push({
                from,
                to,
                points: [
                  { x: fromNode.x, y: fromNode.y },
                  { x: fromNode.x + jitterX, y: midY },
                  { x: toNode.x + jitterX, y: midY },
                  { x: toNode.x, y: toNode.y },
                ],
              });
              visited.add(key);
            }
          }
        }

        // Energy pulses (38 particles)
        pulses = [];
        for (let i = 0; i < 38; i++) {
          pulses.push({
            traceIndex: Math.floor(Math.random() * traces.length),
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.005,
            type: Math.random() < 0.6 ? "circle" : "square",
            size: 1.5 + Math.random() * 2.5,
            opacity: 0.4 + Math.random() * 0.6,
          });
        }
      }

      function getPointOnTrace(trace: CircuitTrace, t: number) {
        const pts = trace.points;
        const segments = pts.length - 1;
        const seg = Math.min(Math.floor(t * segments), segments - 1);
        const localT = (t * segments) - seg;
        return {
          x: pts[seg].x + (pts[seg + 1].x - pts[seg].x) * localT,
          y: pts[seg].y + (pts[seg + 1].y - pts[seg].y) * localT,
        };
      }

      function getCenterFade(x: number, y: number) {
        if (!canvas) return 0;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const dx = (x - cx) / (canvas.width * 0.45);
        const dy = (y - cy) / (canvas.height * 0.45);
        const dist = Math.sqrt(dx * dx + dy * dy);
        return Math.max(0, 1 - dist);
      }

      let frame = 0;

      const drawCircuit = () => {
        if (!ctx || !canvas) return;
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const w = canvas.width;
        const h = canvas.height;

        // Draw traces
        for (const trace of traces) {
          const fade = getCenterFade(
            (trace.points[0].x + trace.points[trace.points.length - 1].x) / 2,
            (trace.points[0].y + trace.points[trace.points.length - 1].y) / 2,
          );
          if (fade < 0.05) continue;

          ctx.beginPath();
          ctx.moveTo(trace.points[0].x, trace.points[0].y);
          for (let i = 1; i < trace.points.length; i++) {
            ctx.lineTo(trace.points[i].x, trace.points[i].y);
          }
          ctx.strokeStyle = `rgba(170, 255, 0, ${0.04 * fade})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Draw nodes
        for (const node of nodes) {
          const fade = getCenterFade(node.x, node.y);
          if (fade < 0.05) continue;

          if (node.isHotSpot) {
            // Pulsing hot spot
            const pulse = 0.5 + 0.5 * Math.sin(frame * node.pulseSpeed * 10 + node.pulsePhase);
            const glowSize = 6 + pulse * 8;

            // Outer glow
            const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
            grad.addColorStop(0, `rgba(170, 255, 0, ${0.15 * fade * pulse})`);
            grad.addColorStop(1, "rgba(170, 255, 0, 0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius * (1 + pulse * 0.5), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(170, 255, 0, ${0.6 * fade * pulse})`;
            ctx.fill();
          } else {
            // Regular node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(170, 255, 0, ${0.12 * fade})`;
            ctx.fill();
          }
        }

        // Draw energy pulses
        for (const pulse of pulses) {
          if (pulse.traceIndex >= traces.length) continue;
          const trace = traces[pulse.traceIndex];
          const pos = getPointOnTrace(trace, pulse.progress);
          const fade = getCenterFade(pos.x, pos.y);
          if (fade < 0.05) continue;

          ctx.save();
          ctx.globalAlpha = pulse.opacity * fade;

          if (pulse.type === "circle") {
            // Circular pulse - like electric charge
            const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, pulse.size * 3);
            grad.addColorStop(0, "rgba(170, 255, 0, 0.9)");
            grad.addColorStop(0.4, "rgba(170, 255, 0, 0.4)");
            grad.addColorStop(1, "rgba(170, 255, 0, 0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, pulse.size * 3, 0, Math.PI * 2);
            ctx.fill();

            // Core dot
            ctx.fillStyle = "#AAFF00";
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, pulse.size, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Square pulse - like data packet
            const half = pulse.size * 0.8;
            ctx.fillStyle = "rgba(170, 255, 0, 0.7)";
            ctx.shadowColor = "rgba(170, 255, 0, 0.6)";
            ctx.shadowBlur = 6;
            ctx.fillRect(pos.x - half, pos.y - half, half * 2, half * 2);
            ctx.shadowBlur = 0;
          }

          ctx.restore();

          // Advance pulse
          pulse.progress += pulse.speed;
          if (pulse.progress > 1) {
            pulse.progress = 0;
            pulse.traceIndex = Math.floor(Math.random() * traces.length);
          }
        }

        circuitAnimationId = requestAnimationFrame(drawCircuit);
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
      drawCircuit();
    }

    // 4. GSAP Scroll Reveal Animations
    gsap.utils.toArray(".reveal").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray(".reveal-left").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray(".reveal-right").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray(".reveal-scale").forEach((el: any) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    // 5. Hero Entrance Animation
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .fromTo(
        "#hero-tag",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        "#hero-h1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        "#hero-p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        "#hero-btns",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        "#hero-stats > *",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        "-=0.2"
      );

    // 6. Progress Bar Animations
    document.querySelectorAll(".prog-fill[data-width]").forEach((bar: any) => {
      ScrollTrigger.create({
        trigger: bar,
        start: "top 90%",
        onEnter: () => {
          bar.style.width = bar.dataset.width + "%";
        },
      });
    });

    // 7. Counter Animations
    function animateCounter(el: HTMLElement, target: number) {
      let start: number | null = null;
      const duration = 2000;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toString();
        }
      };
      requestAnimationFrame(step);
    }

    document.querySelectorAll("[data-target]").forEach((el: any) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => animateCounter(el, parseInt(el.dataset.target)),
      });
    });

    // Cleanup function
    return () => {
      cursorCleanup();
      window.removeEventListener("scroll", onScroll);

      // Cleanup canvas circuit animation
      cancelAnimationFrame(circuitAnimationId);
      window.removeEventListener("resize", resizeCanvas);

      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());

      // Kill all GSAP tweens and timelines
      gsap.killTweensOf("*");
      heroTl.kill();
    };
  }, []);

  return null;
}
