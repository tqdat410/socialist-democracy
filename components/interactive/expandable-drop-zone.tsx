"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";
import ScrapCard from "@/components/cards/scrap-card";
import type { DropZoneConfig, DragItem } from "@/lib/quiz-data";

interface ExpandableDropZoneProps {
  zone: DropZoneConfig;
  allItems: DragItem[];
  expandedContent?: React.ReactNode;
  className?: string;
}

export default function ExpandableDropZone({
  zone, allItems, expandedContent, className,
}: ExpandableDropZoneProps) {
  const { isOver, setNodeRef } = useDroppable({ id: zone.id });
  const isCorrect = useQuizStore((s) => s.isCorrect(zone.id));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(zone.id));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(zone.id));

  const droppedItem = droppedItemId ? allItems.find((i) => i.id === droppedItemId) : null;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        ref={setNodeRef}
        className={cn(
          "drop-zone",
          isOver && !isCorrect && "drag-hover",
          isCorrect && "correct",
          wrongAttempts > 0 && !isCorrect && "wrong"
        )}
      >
        {isCorrect && droppedItem ? (
          <ScrapCard variant={droppedItem.cardVariant} locked className="text-sm w-full">
            {droppedItem.text}
          </ScrapCard>
        ) : (
          <span className="zone-label">{zone.label}</span>
        )}
      </div>

      <AnimatePresence>
        {isCorrect && expandedContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
