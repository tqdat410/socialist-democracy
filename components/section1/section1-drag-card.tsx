"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Section1Piece, { getSection1InventoryFrame } from "@/components/section1/section1-piece";
import type { DragItem } from "@/lib/quiz-data";
import { isSection1PieceId } from "@/lib/section1-interactive-data";

interface Section1DragCardProps {
  item: DragItem;
  disabled?: boolean;
}

export default function Section1DragCard({ item, disabled }: Section1DragCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id, disabled });

  if (!isSection1PieceId(item.id)) return null;

  const frame = getSection1InventoryFrame(item.id);
  const displayScale = Math.min(0.86, frame.scale * 1.18);
  const scaledWidth = Math.max(1, Math.round(frame.width * displayScale));
  const scaledHeight = Math.max(1, Math.round(frame.height * displayScale));
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.32 : 1,
    cursor: disabled ? "default" : "grab",
    touchAction: "none" as const,
    width: `${scaledWidth}px`,
    height: `${scaledHeight}px`,
    flexShrink: 0,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="section1-inventory-item">
      <div className="section1-inventory-scale" style={{ transform: `scale(${displayScale})` }}>
        <Section1Piece pieceId={item.id} mode="inventory" />
      </div>
    </div>
  );
}
