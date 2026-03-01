"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableDefinitionProps {
  term: string;
  definition: string;
  source?: string;
}

export default function ExpandableDefinition({ term, definition, source }: ExpandableDefinitionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="scrap paper-news" style={{ padding: "10px 14px" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <span style={{ fontFamily: "var(--font-anton)", fontSize: "1em", letterSpacing: 1 }}>{term}</span>
        <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.85em", opacity: 0.6 }}>{open ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.9em", marginTop: 8, lineHeight: 1.6 }}>
              {definition}
            </p>
            {source && (
              <p style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.72em", opacity: 0.55, marginTop: 4 }}>
                — {source}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
