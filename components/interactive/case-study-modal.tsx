"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStudy } from "@/lib/content-data";

interface CaseStudyModalProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyModal({ caseStudy }: CaseStudyModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="scrap paper-kraft tape-red"
        style={{ display: "block", width: "100%", textAlign: "left", border: "none", cursor: "pointer", padding: "10px 14px" }}
      >
        <span style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "0.95em" }}>
          📌 {caseStudy.title}
        </span>
        <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.72em", display: "block", opacity: 0.6, marginTop: 2 }}>
          Nhấn để đọc thêm →
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="scrap paper-news"
              style={{ maxWidth: 480, width: "100%", padding: "20px 24px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "1.2em", color: "#C62828", marginBottom: 10 }}>
                {caseStudy.title}
              </h3>
              <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.9em", lineHeight: 1.7 }}>
                {caseStudy.body}
              </p>
              <p style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.72em", opacity: 0.5, marginTop: 10 }}>
                — {caseStudy.source}
              </p>
              <button
                onClick={() => setOpen(false)}
                className="scrap paper-magazine"
                style={{ marginTop: 12, padding: "4px 16px", border: "none", cursor: "pointer", fontSize: "0.85em" }}
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
