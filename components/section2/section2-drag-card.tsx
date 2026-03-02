"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Section2Piece, { getSection2InventoryFrame } from "@/components/section2/section2-piece";
import { isSection2PieceId } from "@/lib/section2-interactive-data";
import type { DragItem } from "@/lib/quiz-data";

interface Section2DragCardProps {
  item: DragItem;
  disabled?: boolean;
}

export default function Section2DragCard({ item, disabled }: Section2DragCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
    disabled,
  });

  if (!isSection2PieceId(item.id)) return null;

  const frame = getSection2InventoryFrame(item.id);
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
        <Section2Piece pieceId={item.id} mode="inventory" />
      </div>
    </div>
  );
}
