"use client";

import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import {
  getSection1PieceAnswerZoneId,
  type Section1EvolutionBlockZoneId,
  type Section1PieceId,
} from "@/lib/section1-interactive-data";
import { useQuizStore } from "@/stores/quiz-store";
import Section1Piece from "@/components/section1/section1-piece";

export type Section1EvolutionNoteDefinition = {
  text: string;
  className: string;
  span: "full" | "half";
  detachablePieceId?: Section1PieceId;
};

interface Section1EvolutionNoteDropZoneProps {
  blockZoneId: Section1EvolutionBlockZoneId;
  notes: ReadonlyArray<Section1EvolutionNoteDefinition>;
}

export default function Section1EvolutionNoteDropZone({ blockZoneId, notes }: Section1EvolutionNoteDropZoneProps) {
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const wrongAttempts = useQuizStore((s) => s.getWrongAttempts(blockZoneId));

  const detachablePieceIds = notes
    .map((note) => note.detachablePieceId)
    .filter((pieceId): pieceId is Section1PieceId => Boolean(pieceId));

  const placedPieceIds = detachablePieceIds.filter((pieceId) => {
    const answerZoneId = getSection1PieceAnswerZoneId(pieceId);
    return droppedItems[answerZoneId] === pieceId;
  });

  const blockComplete = detachablePieceIds.length > 0 && placedPieceIds.length === detachablePieceIds.length;
  const { isOver, setNodeRef } = useDroppable({ id: blockZoneId, disabled: blockComplete });

  return (
    <div className="section1v2-evolution-notes-wrap">
      <div
        ref={setNodeRef}
        className={cn(
          "section1v2-evolution-notes-grid section1-evolution-note-drop-zone",
          isOver && !blockComplete && "section1-evolution-note-drop-zone-hover",
          wrongAttempts > 0 && !blockComplete && "section1-evolution-note-drop-zone-wrong",
        )}
      >
        {notes.map((note) => {
          const noteSpanClass = note.span === "half"
            ? "section1v2-evolution-note-half"
            : "section1v2-evolution-note-full";

          if (note.detachablePieceId) {
            const answerZoneId = getSection1PieceAnswerZoneId(note.detachablePieceId);
            const droppedPieceId = droppedItems[answerZoneId];
            if (droppedPieceId !== note.detachablePieceId) {
              return null;
            }

            return (
              <Section1Piece
                key={note.detachablePieceId}
                pieceId={note.detachablePieceId}
                mode="board"
              />
            );
          }

          return (
            <article
              key={`${blockZoneId}-${note.text}`}
              className={`scrap section1v2-evolution-note ${note.className} ${noteSpanClass}`}
            >
              <p>{note.text}</p>
            </article>
          );
        })}

        {!blockComplete ? (
          <article className="scrap section1v2-evolution-note section1v2-evolution-note-full section1-piece-ghost section1-evolution-note-ghost">
            <span className="section1-piece-question">?</span>
          </article>
        ) : null}
      </div>
    </div>
  );
}
