"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { section3bItems } from "@/lib/quiz-data";

type GameState = 'playing' | 'done';

export default function ComparisonReviewGame() {
  const items = [...section3bItems].sort(() => Math.random() - 0.5).slice(0, 6);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [state, setState] = useState<GameState>('playing');

  const current = items[currentIdx];

  function handleAnswer(side: 'xhcn' | 'tusan') {
    if (feedback) return;
    const correct = current.side === side;
    setFeedback(correct ? 'correct' : 'wrong');
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      setFeedback(null);
      if (currentIdx + 1 >= items.length) {
        setState('done');
      } else {
        setCurrentIdx((i) => i + 1);
      }
    }, 900);
  }

  if (state === 'done') {
    return (
      <div className="scrap paper-postit-yellow tape text-center" style={{ padding: "20px 24px" }}>
        <div style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "1.5em" }}>Kết quả</div>
        <div style={{ fontFamily: "var(--font-anton)", fontSize: "2em", color: "#C62828", margin: "8px 0" }}>
          {score}/{items.length}
        </div>
        <div style={{ fontFamily: "var(--font-patrick-hand)", fontSize: "1em" }}>
          {score >= 5 ? "Xuất sắc! Bạn phân biệt rất tốt." : score >= 3 ? "Khá! Ôn thêm nhé." : "Cần ôn tập thêm!"}
        </div>
      </div>
    );
  }

  return (
    <div className="scrap paper-news" style={{ padding: "16px" }}>
      <div style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.75em", opacity: 0.6, marginBottom: 8 }}>
        PHÂN LOẠI NHANH — {currentIdx + 1}/{items.length}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`scrap ${feedback === 'correct' ? 'paper-postit-yellow' : feedback === 'wrong' ? 'paper-postit-pink' : 'paper-lined'}`}
          style={{ padding: "12px 16px", marginBottom: 12, textAlign: "center", fontFamily: "var(--font-caveat)", fontSize: "1.05em" }}
        >
          {current.text}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleAnswer('xhcn')}
          className="scrap paper-magazine"
          style={{ flex: 1, border: "none", cursor: "pointer", padding: "10px", fontFamily: "var(--font-anton)", fontSize: "0.85em" }}
        >
          DC XHCN
        </button>
        <button
          onClick={() => handleAnswer('tusan')}
          className="scrap paper-postit-blue"
          style={{ flex: 1, border: "none", cursor: "pointer", padding: "10px", fontFamily: "var(--font-anton)", fontSize: "0.85em", color: "#0D47A1" }}
        >
          DC Tư sản
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: 8, fontFamily: "var(--font-special-elite)", fontSize: "0.75em", opacity: 0.5 }}>
        Điểm: {score}
      </div>
    </div>
  );
}
