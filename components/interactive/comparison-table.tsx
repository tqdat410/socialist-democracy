"use client";

import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";
import ScrapCard from "@/components/cards/scrap-card";
import { comparisonCriteria } from "@/lib/content-data";
import type { DragItem } from "@/lib/quiz-data";

interface ComparisonCellProps {
  zoneId: string;
  allItems: DragItem[];
}

function ComparisonCell({ zoneId, allItems }: ComparisonCellProps) {
  const { isOver, setNodeRef } = useDroppable({ id: zoneId });
  const isCorrect = useQuizStore((s) => s.isCorrect(zoneId));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(zoneId));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(zoneId));
  const droppedItem = droppedItemId ? allItems.find((i) => i.id === droppedItemId) : null;

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "drop-zone",
        isOver && !isCorrect && "drag-hover",
        isCorrect && "correct",
        wrongAttempts > 0 && !isCorrect && "wrong"
      )}
      style={{ minHeight: 48 }}
    >
      {isCorrect && droppedItem ? (
        <ScrapCard variant={droppedItem.cardVariant} locked className="text-xs w-full">
          {droppedItem.text}
        </ScrapCard>
      ) : (
        <span className="zone-label" style={{ fontSize: "0.7em" }}>
          {isCorrect ? "✓" : "Thả thẻ vào đây"}
        </span>
      )}
    </div>
  );
}

interface ComparisonTableProps {
  allItems: DragItem[];
}

export default function ComparisonTable({ allItems }: ComparisonTableProps) {
  return (
    <div className="scrap paper-news" style={{ padding: 0, overflow: "hidden" }}>
      {/* Header */}
      <div className="grid grid-cols-3" style={{ background: "#3E2723", color: "#F5E6C8" }}>
        <div style={{ padding: "8px 12px", fontFamily: "var(--font-special-elite)", fontSize: "0.8em", opacity: 0.7 }}>Tiêu chí</div>
        <div style={{ padding: "8px 12px", fontFamily: "var(--font-anton)", fontSize: "0.9em", textAlign: "center", background: "#C62828" }}>DC XHCN</div>
        <div style={{ padding: "8px 12px", fontFamily: "var(--font-anton)", fontSize: "0.9em", textAlign: "center", background: "#1565C0" }}>DC Tư sản</div>
      </div>

      {/* Rows */}
      {comparisonCriteria.map((criterion, i) => (
        <div
          key={criterion.id}
          className="grid grid-cols-3 items-start"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: i % 2 === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)" }}
        >
          <div style={{ padding: "8px 12px", fontFamily: "var(--font-special-elite)", fontSize: "0.78em", alignSelf: "center" }}>
            {criterion.label}
          </div>
          <div style={{ padding: 6 }}>
            <ComparisonCell zoneId={`${criterion.id}-xhcn`} allItems={allItems} />
          </div>
          <div style={{ padding: 6 }}>
            <ComparisonCell zoneId={`${criterion.id}-tusan`} allItems={allItems} />
          </div>
        </div>
      ))}
    </div>
  );
}
