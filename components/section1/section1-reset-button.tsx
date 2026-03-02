"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuizStore } from "@/stores/quiz-store";

const LEGACY_SECTION1_ZONE_IDS = new Set([
  "giatri",
  "phamtruct",
  "nguyentac",
  "phamtruls",
  "lenin-quote",
  "hcm-quote",
  "origin-date",
]);

export default function Section1ResetButton() {
  const [open, setOpen] = useState(false);

  function handleConfirmReset() {
    useQuizStore.setState((state) => {
      const droppedItems = Object.fromEntries(
        Object.entries(state.droppedItems).filter(([zoneId, itemId]) => {
          if (zoneId.startsWith("s1-zone-")) return false;
          if (LEGACY_SECTION1_ZONE_IDS.has(zoneId)) return false;
          if (itemId.startsWith("s1-qn-")) return false;
          return true;
        }),
      );

      const wrongAttempts = Object.fromEntries(
        Object.entries(state.wrongAttempts).filter(([zoneId]) => {
          if (zoneId.startsWith("s1-zone-")) return false;
          if (LEGACY_SECTION1_ZONE_IDS.has(zoneId)) return false;
          return true;
        }),
      );

      return { droppedItems, wrongAttempts };
    });
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="scrap paper-kraft tape-red"
        style={{
          border: "none",
          cursor: "pointer",
          padding: "6px 12px",
          fontSize: "0.74em",
          fontFamily: "var(--font-anton)",
          letterSpacing: 0.6,
          lineHeight: 1.1,
        }}
      >
        Reset
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            style={{ background: "rgba(16, 10, 7, 0.6)" }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="scrap paper-kraft"
              style={{
                width: "min(460px, 100%)",
                padding: "16px 16px 14px",
                border: "1px solid rgba(67, 42, 28, 0.35)",
                boxShadow: "0 18px 36px rgba(10, 6, 4, 0.35)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <h3
                style={{
                  fontFamily: "var(--font-anton)",
                  letterSpacing: 1,
                  fontSize: "1rem",
                  color: "#5b2414",
                  lineHeight: 1.2,
                  marginBottom: 10,
                }}
              >
                Bạn có chắc muốn Reset?
              </h3>

              <div className="mt-2 flex items-center justify-end gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="scrap paper-news tape"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "6px 12px",
                    fontSize: "0.76em",
                    fontFamily: "var(--font-special-elite)",
                    letterSpacing: 0.3,
                    lineHeight: 1.1,
                  }}
                >
                  Hủy
                </button>
                <button
                  onClick={handleConfirmReset}
                  className="scrap paper-magazine tape-red"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "6px 12px",
                    fontSize: "0.76em",
                    fontFamily: "var(--font-anton)",
                    letterSpacing: 0.7,
                    lineHeight: 1.1,
                  }}
                >
                  Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
