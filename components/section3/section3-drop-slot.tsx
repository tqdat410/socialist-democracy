"use client";

import { useDroppable } from "@dnd-kit/core";
import Section3Piece from "@/components/section3/section3-piece";
import type { Section3PieceId, Section3ZoneId } from "@/lib/section3-interactive-data";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";

interface Section3DropSlotProps {
  pieceId: Section3PieceId;
  zoneId: Section3ZoneId;
}

export default function Section3DropSlot({ pieceId, zoneId }: Section3DropSlotProps) {
  const { isOver, setNodeRef } = useDroppable({ id: zoneId });
  const isCorrect = useQuizStore((s) => s.isCorrect(zoneId));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(zoneId));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(zoneId));

  const locked = isCorrect && droppedItemId === pieceId;
  if (locked) {
    return <Section3Piece pieceId={pieceId} mode="board" />;
  }

  return (
    <Section3Piece
      pieceId={pieceId}
      mode="ghost"
      setNodeRef={setNodeRef}
      className={cn(
        "section3-drop-slot",
        isOver && "section3-drop-slot-hover",
        wrongAttempts > 0 && "section3-drop-slot-wrong",
      )}
    />
  );
}
