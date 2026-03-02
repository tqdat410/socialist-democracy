"use client";

import { useDroppable } from "@dnd-kit/core";
import Section2Piece from "@/components/section2/section2-piece";
import {
  getSection2PieceAnswerZoneId,
  type Section2GroupedBlockZoneId,
  type Section2PieceId,
} from "@/lib/section2-interactive-data";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/stores/quiz-store";

export type Section2GroupedNoteDefinition = {
  text: string;
  className: string;
  detachablePieceId?: Section2PieceId;
  pinKey?: string;
};

interface Section2GroupedNoteDropZoneProps {
  blockZoneId: Section2GroupedBlockZoneId;
  notes: ReadonlyArray<Section2GroupedNoteDefinition>;
  className?: string;
  preserveLayout?: boolean;
}

export default function Section2GroupedNoteDropZone({
  blockZoneId,
  notes,
  className,
  preserveLayout = false,
}: Section2GroupedNoteDropZoneProps) {
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(blockZoneId));

  const detachablePieceIds = notes
    .map((note) => note.detachablePieceId)
    .filter((pieceId): pieceId is Section2PieceId => Boolean(pieceId));

  const placedPieceIds = detachablePieceIds.filter((pieceId) => {
    const answerZoneId = getSection2PieceAnswerZoneId(pieceId);
    return droppedItems[answerZoneId] === pieceId;
  });

  const blockComplete = detachablePieceIds.length > 0 && placedPieceIds.length === detachablePieceIds.length;
  const { isOver, setNodeRef } = useDroppable({ id: blockZoneId, disabled: blockComplete });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "section2-grouped-note-drop-zone",
        preserveLayout && "section2-grouped-note-preserve-layout",
        isOver && !blockComplete && "section2-grouped-note-drop-zone-hover",
        wrongAttempts > 0 && !blockComplete && "section2-grouped-note-drop-zone-wrong",
        className,
      )}
    >
      {notes.map((note) => {
        if (note.detachablePieceId) {
          const answerZoneId = getSection2PieceAnswerZoneId(note.detachablePieceId);
          const droppedPieceId = droppedItems[answerZoneId];
          if (droppedPieceId !== note.detachablePieceId) {
            if (!preserveLayout) return null;
            return <Section2Piece key={note.detachablePieceId} pieceId={note.detachablePieceId} mode="ghost" />;
          }

          return <Section2Piece key={note.detachablePieceId} pieceId={note.detachablePieceId} mode="board" />;
        }

        return (
          <article key={`${blockZoneId}-${note.text}`} className={cn("scrap", note.className)}>
            {note.pinKey ? <span className="home-thread-pin-anchor" data-section2-thread-pin={note.pinKey} aria-hidden /> : null}
            {note.text}
          </article>
        );
      })}

      {!blockComplete && !preserveLayout ? (
        <article className="scrap section1-piece-ghost section2-grouped-note-ghost">
          <span className="section1-piece-question">?</span>
        </article>
      ) : null}
    </div>
  );
}
