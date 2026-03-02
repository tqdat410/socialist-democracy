"use client";

import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";
import type { Section1PieceId, Section1ZoneId } from "@/lib/section1-interactive-data";
import Section1Piece from "@/components/section1/section1-piece";

interface Section1DropSlotProps {
  pieceId: Section1PieceId;
  zoneId: Section1ZoneId;
}

export default function Section1DropSlot({ pieceId, zoneId }: Section1DropSlotProps) {
  const { isOver, setNodeRef } = useDroppable({ id: zoneId });
  const isCorrect = useQuizStore((s) => s.isCorrect(zoneId));
  const droppedItemId = useQuizStore((s) => s.getDroppedItem(zoneId));
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(zoneId));

  const locked = isCorrect && droppedItemId === pieceId;

  if (locked) {
    return <Section1Piece pieceId={pieceId} mode="board" />;
  }

  return (
    <Section1Piece
      pieceId={pieceId}
      mode="ghost"
      setNodeRef={setNodeRef}
      className={cn(
        "section1-drop-slot",
        isOver && "section1-drop-slot-hover",
        wrongAttempts > 0 && "section1-drop-slot-wrong",
      )}
    />
  );
}

