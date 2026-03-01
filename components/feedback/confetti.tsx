"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
}

const COLORS = ["#C62828", "#FFF59D", "#BBDEFB", "#C8E6C9", "#F8BBD0", "#FFB300"];

interface ConfettiProps {
  trigger: boolean;
  onComplete?: () => void;
}

export default function Confetti({ trigger, onComplete }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!trigger) return;
    const newPieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.4,
    }));
    setPieces(newPieces);
    const timer = setTimeout(() => {
      setPieces([]);
      onComplete?.();
    }, 2500);
    return () => clearTimeout(timer);
  }, [trigger, onComplete]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      <AnimatePresence>
        {pieces.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "-5vh", x: `${p.x}vw`, opacity: 1, rotate: 0 }}
            animate={{ y: "110vh", rotate: 720, opacity: 0 }}
            transition={{ duration: 1.8 + p.delay, ease: "easeIn", delay: p.delay }}
            style={{
              position: "absolute",
              top: 0,
              width: p.size,
              height: p.size,
              background: p.color,
              borderRadius: Math.random() > 0.5 ? "50%" : 2,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
