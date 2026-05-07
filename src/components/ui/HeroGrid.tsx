"use client";

import { motion } from "framer-motion";

export default function HeroGrid() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">
      {/* Horizon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
      
      {/* Grid System */}
      <div 
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          initial={{ rotateX: 60, y: -200 }}
          animate={{ y: -100 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [transform:rotateX(60deg)]"
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
    </div>
  );
}
