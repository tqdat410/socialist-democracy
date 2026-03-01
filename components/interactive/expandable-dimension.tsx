"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableDimensionProps {
  title: string;
  color?: string;
  children: React.ReactNode;
  detailContent?: React.ReactNode;
}

export default function ExpandableDimension({
  title, color = "#C62828", children, detailContent,
}: ExpandableDimensionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setExpanded((e) => !e)}
        className="scrap paper-magazine"
        style={{
          background: color,
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          width: "100%",
        }}
      >
        <span style={{ fontFamily: "var(--font-anton)", fontSize: "1em", letterSpacing: 1 }}>
          {title}
        </span>
        <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.85em", opacity: 0.8 }}>
          {expanded ? "▲" : "▼"}
        </span>
      </button>

      {/* Drop zone area for items */}
      <div>{children}</div>

      {/* Expandable detail */}
      <AnimatePresence>
        {expanded && detailContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="scrap paper-news" style={{ padding: "12px 16px", borderTop: `3px solid ${color}` }}>
              {detailContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
