"use client";

import { motion } from "framer-motion";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";
import ScrapCard from "@/components/cards/scrap-card";
import type { DragItem } from "@/lib/quiz-data";

export interface TimelineEntry {
  zoneId: string;
  era: string;
  period: string;
  color: string;
  detail?: string;
}

interface TimelineZoneProps {
  entry: TimelineEntry;
  allItems: DragItem[];
  index: number;
}

function TimelineZone({ entry, allItems, index }: TimelineZoneProps) {
  const { isOver, setNodeRef } = useDroppable({ id: entry.zoneId });
  const isCorrect = useQuizStore((s) => s.isCorrect(entry.zoneId));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(entry.zoneId));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(entry.zoneId));
  const droppedItem = droppedItemId ? allItems.find((i) => i.id === droppedItemId) : null;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="flex items-start gap-4"
      style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
    >
      {/* Era label */}
      <div className="scrap paper-magazine" style={{ minWidth: 100, textAlign: "center", background: entry.color }}>
        <div style={{ fontFamily: "var(--font-anton)", fontSize: "0.9em" }}>{entry.era}</div>
        <div style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.7em", opacity: 0.8 }}>{entry.period}</div>
      </div>

      {/* Timeline dot */}
      <div style={{ width: 14, height: 14, borderRadius: "50%", background: entry.color, flexShrink: 0, marginTop: 12, boxShadow: "0 0 0 3px rgba(255,255,255,0.3)" }} />

      {/* Drop zone */}
      <div
        ref={setNodeRef}
        className={cn(
          "drop-zone flex-1",
          isOver && !isCorrect && "drag-hover",
          isCorrect && "correct",
          wrongAttempts > 0 && !isCorrect && "wrong"
        )}
        style={{ minHeight: 55 }}
      >
        {isCorrect && droppedItem ? (
          <ScrapCard variant={droppedItem.cardVariant} locked className="text-sm w-full">
            {droppedItem.thumbnail && <span className="card-thumb" aria-hidden />}
            {droppedItem.text}
          </ScrapCard>
        ) : (
          <span className="zone-label">{entry.era}</span>
        )}
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  entries: TimelineEntry[];
  allItems: DragItem[];
}

export default function Timeline({ entries, allItems }: TimelineProps) {
  return (
    <div className="relative flex flex-col gap-4 pl-2">
      {/* Vertical line */}
      <div style={{ position: "absolute", left: "calc(50% - 1px)", top: 0, bottom: 0, width: 2, background: "rgba(198,40,40,0.3)", zIndex: 0 }} />
      {entries.map((entry, i) => (
        <TimelineZone key={entry.zoneId} entry={entry} allItems={allItems} index={i} />
      ))}
    </div>
  );
}
