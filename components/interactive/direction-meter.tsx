"use client";

import { motion } from "framer-motion";

interface DirectionMeterProps {
  leftLabel: string;
  rightLabel: string;
  value: number; // 0-100, 50 = center
  leftColor?: string;
  rightColor?: string;
}

export default function DirectionMeter({
  leftLabel, rightLabel, value,
  leftColor = "#C62828", rightColor = "#1565C0",
}: DirectionMeterProps) {
  return (
    <div className="scrap paper-news" style={{ padding: "12px 16px" }}>
      <div className="flex justify-between mb-1" style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.75em" }}>
        <span style={{ color: leftColor }}>{leftLabel}</span>
        <span style={{ color: rightColor }}>{rightLabel}</span>
      </div>
      <div style={{ height: 12, borderRadius: 6, background: `linear-gradient(to right, ${leftColor}, #999, ${rightColor})`, position: "relative", overflow: "visible" }}>
        <motion.div
          initial={{ left: "50%" }}
          animate={{ left: `${value}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: -4,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#fff",
            border: "3px solid #333",
            transform: "translateX(-50%)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
