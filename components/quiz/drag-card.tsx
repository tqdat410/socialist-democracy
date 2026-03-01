"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import ScrapCard from "@/components/cards/scrap-card";
import type { DragItem } from "@/lib/quiz-data";

interface DragCardProps {
  item: DragItem;
  disabled?: boolean;
}

export default function DragCard({ item, disabled }: DragCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    cursor: disabled ? "default" : "grab",
    touchAction: "none",
    flexShrink: 0,
    minWidth: "fit-content",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ScrapCard
        variant={item.cardVariant}
        className={cn(
          "select-none text-sm !p-2 !m-0",
          isDragging && "dragging shadow-2xl scale-105"
        )}
      >
        {item.thumbnail && (
          <span className="card-thumb" aria-hidden />
        )}
        {item.text}
      </ScrapCard>
    </div>
  );
}
