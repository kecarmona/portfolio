"use client";

import { useEffect, useRef } from "react";

interface RevealBlockProps {
  children: React.ReactNode;
  delay?: 1 | 2 | 3;
  className?: string;
}

export default function RevealBlock({ children, delay, className = "" }: RevealBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Opcional: si solo queremos que anime una vez
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(node);

    return () => observer.unobserve(node);
  }, []);

  const delayClass = delay ? `tv-reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`tv-reveal ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
