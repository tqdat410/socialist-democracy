"use client";

import { useDroppable } from "@dnd-kit/core";
import Section2Piece from "@/components/section2/section2-piece";
import type { Section2PieceId, Section2ZoneId } from "@/lib/section2-interactive-data";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";

interface Section2DropSlotProps {
  pieceId: Section2PieceId;
  zoneId: Section2ZoneId;
}

export default function Section2DropSlot({ pieceId, zoneId }: Section2DropSlotProps) {
  const { isOver, setNodeRef } = useDroppable({ id: zoneId });
  const isCorrect = useQuizStore((s) => s.isCorrect(zoneId));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(zoneId));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(zoneId));

  const locked = isCorrect && droppedItemId === pieceId;
  if (locked) {
    return <Section2Piece pieceId={pieceId} mode="board" />;
  }

  return (
    <Section2Piece
      pieceId={pieceId}
      mode="ghost"
      setNodeRef={setNodeRef}
      className={cn(
        "section2-drop-slot",
        isOver && "section2-drop-slot-hover",
        wrongAttempts > 0 && "section2-drop-slot-wrong",
      )}
    />
  );
}
