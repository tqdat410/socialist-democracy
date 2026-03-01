"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { debateRounds } from "@/lib/content-data";

type Phase = 'idle' | 'reading' | 'answered';

export default function DebatePrepGame() {
  const [roundIdx, setRoundIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('reading');
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  const round = debateRounds[roundIdx];

  function handleReveal() {
    setRevealed(true);
    setPhase('answered');
  }

  function handleNext() {
    if (roundIdx + 1 >= debateRounds.length) {
      setDone(true);
    } else {
      setRoundIdx((i) => i + 1);
      setRevealed(false);
      setPhase('reading');
    }
  }

  function handleRestart() {
    setRoundIdx(0);
    setRevealed(false);
    setPhase('reading');
    setDone(false);
  }

  if (done) {
    return (
      <div className="scrap paper-postit-yellow tape text-center" style={{ padding: "20px 24px" }}>
        <div style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "1.4em", marginBottom: 8 }}>
          Hoàn thành tập luyện tranh luận!
        </div>
        <div style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.9em", lineHeight: 1.6 }}>
          Bạn đã luyện tập phản bác {debateRounds.length} luận điểm của phía tư sản.
        </div>
        <button
          onClick={handleRestart}
          className="scrap paper-magazine"
          style={{ marginTop: 12, padding: "6px 20px", border: "none", cursor: "pointer", fontSize: "0.9em" }}
        >
          Luyện lại
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.72em", opacity: 0.6, textAlign: "center" }}>
        VÒNG {roundIdx + 1}/{debateRounds.length} — PHẢN BÁC LUẬN ĐIỂM TƯ SẢN
      </div>

      {/* Opponent claim */}
      <AnimatePresence mode="wait">
        <motion.div
          key={round.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="scrap paper-postit-pink tape-red"
          style={{ padding: "14px 16px" }}
        >
          <div style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.7em", opacity: 0.6, marginBottom: 4 }}>
            LUẬN ĐIỂM ĐỐI PHƯƠNG:
          </div>
          <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.05em", color: "#880E4F" }}>
            {round.claim}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Hint */}
      {!revealed && (
        <div className="scrap paper-postit-yellow" style={{ padding: "8px 12px", fontSize: "0.82em", fontFamily: "var(--font-patrick-hand)", opacity: 0.8 }}>
          Gợi ý: {round.hint}
        </div>
      )}

      {/* Reveal button */}
      {!revealed && (
        <button
          onClick={handleReveal}
          className="scrap paper-magazine tape"
          style={{ padding: "10px", border: "none", cursor: "pointer", fontFamily: "var(--font-anton)", fontSize: "0.9em", textAlign: "center" }}
        >
          Xem lập luận phản bác →
        </button>
      )}

      {/* Counter argument */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            <div className="scrap paper-lined tape-blue" style={{ padding: "14px 16px" }}>
              <div style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.7em", opacity: 0.6, marginBottom: 4 }}>
                PHẢN BÁC XHCN:
              </div>
              <p style={{ fontFamily: "var(--font-caveat)", fontSize: "1.05em", color: "#1A237E", lineHeight: 1.5 }}>
                {round.counter}
              </p>
            </div>
            <button
              onClick={handleNext}
              className="scrap paper-note-green"
              style={{ width: "100%", marginTop: 8, padding: "10px", border: "none", cursor: "pointer", fontFamily: "var(--font-anton)", fontSize: "0.85em", background: "#C8E6C9", color: "#1B5E20" }}
            >
              {roundIdx + 1 < debateRounds.length ? "Vòng tiếp theo →" : "Hoàn thành!"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
