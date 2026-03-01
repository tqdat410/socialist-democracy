"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HintTooltipProps {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  autoDismissMs?: number;
}

export default function HintTooltip({
  visible,
  message,
  onDismiss,
  autoDismissMs = 4000,
}: HintTooltipProps) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onDismiss, autoDismissMs);
    return () => clearTimeout(t);
  }, [visible, autoDismissMs, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          className="scrap paper-postit-yellow tape"
          style={{
            position: "fixed",
            bottom: "88px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 40,
            maxWidth: 320,
            textAlign: "center",
            fontSize: "0.9em",
            padding: "10px 16px",
            cursor: "pointer",
          }}
          onClick={onDismiss}
        >
          💡 {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
