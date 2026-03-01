"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HcmQuote } from "@/lib/content-data";

interface QuoteCarouselProps {
  quotes: HcmQuote[];
}

export default function QuoteCarousel({ quotes }: QuoteCarouselProps) {
  const [idx, setIdx] = useState(0);
  const current = quotes[idx];

  function prev() { setIdx((i) => (i - 1 + quotes.length) % quotes.length); }
  function next() { setIdx((i) => (i + 1) % quotes.length); }

  return (
    <div className="scrap paper-lined tape-washi relative overflow-hidden" style={{ minHeight: 100, padding: "20px 16px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.15em", color: "#1A237E", fontStyle: "italic" }}>
            &ldquo;{current.text}&rdquo;
          </p>
          <p style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.72em", opacity: 0.6, marginTop: 6 }}>
            — {current.source}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 justify-center mt-3">
        <button onClick={prev} className="scrap paper-postit-yellow" style={{ padding: "2px 10px", fontSize: "1.1em", border: "none", cursor: "pointer" }}>←</button>
        <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em", alignSelf: "center", opacity: 0.6 }}>
          {idx + 1}/{quotes.length}
        </span>
        <button onClick={next} className="scrap paper-postit-yellow" style={{ padding: "2px 10px", fontSize: "1.1em", border: "none", cursor: "pointer" }}>→</button>
      </div>
    </div>
  );
}
