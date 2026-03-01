"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { FlashCard } from "@/lib/flashcard-data";

interface FlashcardProps {
  card: FlashCard;
  className?: string;
}

export default function Flashcard({ card, className }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn("flashcard", flipped && "flipped", className)}
      onClick={() => setFlipped((f) => !f)}
      title="Nhấn để lật thẻ"
    >
      <motion.div
        className="flashcard-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={cn(
            "flashcard-front",
            card.frontBg ?? "paper-postit-yellow"
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span>{card.front}</span>
        </div>

        {/* Back */}
        <div
          className={cn(
            "flashcard-back",
            card.backBg ?? "paper-magazine"
          )}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span>{card.back}</span>
        </div>
      </motion.div>
    </div>
  );
}
