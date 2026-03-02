"use client";

import { motion } from "framer-motion";

interface RibbonFallProps {
  burstKey: number;
}

type RibbonPiece = {
  id: number;
  x: number;
  drift: number;
  width: number;
  height: number;
  delay: number;
  duration: number;
  rotateStart: number;
  rotateEnd: number;
  color: string;
};

const RIBBON_COLORS = ["#C62828", "#E53935", "#BBDEFB", "#FFE082", "#C8E6C9", "#F8BBD0", "#FFB300"];

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

const RIBBONS: RibbonPiece[] = Array.from({ length: 26 }, (_, index) => {
  const baseX = ((index * 37) % 100) + ((index % 4) - 1.5) * 0.9;
  return {
    id: index,
    x: clamp(baseX, 2, 98),
    drift: ((index % 5) - 2) * 8,
    width: 6 + (index % 3) * 2,
    height: 18 + (index % 5) * 6,
    delay: (index % 9) * 0.08,
    duration: 1.7 + (index % 6) * 0.13,
    rotateStart: -24 + (index % 7) * 8,
    rotateEnd: -24 + (index % 7) * 8 + (index % 2 === 0 ? 320 : -320),
    color: RIBBON_COLORS[index % RIBBON_COLORS.length],
  };
});

export default function RibbonFall({ burstKey }: RibbonFallProps) {
  if (burstKey <= 0) return null;

  return (
    <motion.div
      key={`ribbon-fall-layer-${burstKey}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
      aria-hidden
    >
      {RIBBONS.map((piece) => (
        <motion.div
          key={`${burstKey}-${piece.id}`}
          initial={{
            y: "-14vh",
            x: `${piece.x}vw`,
            opacity: 0,
            rotate: piece.rotateStart,
          }}
          animate={{
            y: "112vh",
            x: `calc(${piece.x}vw + ${piece.drift}px)`,
            opacity: [0.95, 0.95, 0],
            rotate: piece.rotateEnd,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
          style={{
            position: "absolute",
            top: 0,
            width: piece.width,
            height: piece.height,
            background: piece.color,
            borderRadius: 2,
            boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
          }}
        />
      ))}
    </motion.div>
  );
}
