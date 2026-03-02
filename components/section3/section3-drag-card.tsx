"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Section3Piece, { getSection3InventoryFrame } from "@/components/section3/section3-piece";
import { isSection3PieceId } from "@/lib/section3-interactive-data";
import type { DragItem } from "@/lib/quiz-data";

interface Section3DragCardProps {
  item: DragItem;
  disabled?: boolean;
}

export default function Section3DragCard({ item, disabled }: Section3DragCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    disabled,
  });

  if (!isSection3PieceId(item.id)) return null;

  const frame = getSection3InventoryFrame(item.id);
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
        <Section3Piece pieceId={item.id} mode="inventory" />
      </div>
    </div>
  );
}
