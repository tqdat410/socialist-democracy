"use client";

import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";
import ScrapCard from "@/components/cards/scrap-card";
import type { DropZoneConfig } from "@/lib/quiz-data";
import type { DragItem } from "@/lib/quiz-data";

interface DropZoneProps {
  zone: DropZoneConfig;
  allItems: DragItem[];
  className?: string;
  children?: React.ReactNode;
}

export default function DropZone({ zone, allItems, className, children }: DropZoneProps) {
  const { isOver, setNodeRef } = useDroppable({ id: zone.id });
  const isCorrect = useQuizStore((s) => s.isCorrect(zone.id));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(zone.id));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(zone.id));

  const droppedItem = droppedItemId
    ? allItems.find((i) => i.id === droppedItemId)
    : null;

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "drop-zone",
        isOver && !isCorrect && "drag-hover",
        isCorrect && "correct",
        wrongAttempts > 0 && !isCorrect && "wrong",
        className
      )}
    >
      {isCorrect && droppedItem ? (
        <ScrapCard variant={droppedItem.cardVariant} locked className="text-sm w-full">
          {droppedItem.thumbnail && <span className="card-thumb" aria-hidden />}
          {droppedItem.text}
        </ScrapCard>
      ) : (
        <>
          <span className="zone-label">{zone.label}</span>
          {children}
        </>
      )}
    </div>
  );
}
