"use client";

import { DndContext, DragOverlay, PointerSensor, TouchSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import Section1BottomTray from "@/components/section1/section1-bottom-tray";
import Section1Piece, { getSection1InventoryFrame } from "@/components/section1/section1-piece";
import {
  getSection1EvolutionNoteBlockZoneId,
  getSection1PieceAnswerZoneId,
  isSection1EvolutionBlockZoneId,
  isSection1EvolutionNotePieceId,
  isSection1PieceId,
} from "@/lib/section1-interactive-data";
import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";
import { useQuizStore } from "@/stores/quiz-store";

interface Section1QuizBoardProps {
  items: DragItem[];
  zones: DropZoneConfig[];
  quiz: string;
  children: React.ReactNode;
}

export default function Section1QuizBoard({ items, zones: _zones, quiz, children }: Section1QuizBoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { recordDrop, isCorrect } = useQuizStore();
  const hasDropZones = _zones.length > 0;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } }),
  );

  const activeItem = activeId ? items.find((i) => i.id === activeId) : null;
  const activeFrame = activeItem && isSection1PieceId(activeItem.id)
    ? getSection1InventoryFrame(activeItem.id)
    : null;
  const activeDisplayScale = activeFrame ? Math.min(0.86, activeFrame.scale * 1.18) : null;

  function handleDragEnd(event: import("@dnd-kit/core").DragEndEvent) {
    if (!hasDropZones) return;

    const { active, over } = event;
    setActiveId(null);
    if (!over) return;

    const draggedItem = items.find((i) => i.id === active.id);
    if (!draggedItem) return;

    const targetZone = over.id as string;

    if (isSection1EvolutionNotePieceId(draggedItem.id)) {
      if (!isSection1EvolutionBlockZoneId(targetZone)) return;

      const expectedBlockZone = getSection1EvolutionNoteBlockZoneId(draggedItem.id);
      if (!expectedBlockZone) return;

      if (targetZone !== expectedBlockZone) {
        recordDrop(targetZone, draggedItem.id, false);
        return;
      }

      const answerZone = getSection1PieceAnswerZoneId(draggedItem.id);
      if (isCorrect(answerZone)) return;
      recordDrop(answerZone, draggedItem.id, true);
      return;
    }

    if (isSection1EvolutionBlockZoneId(targetZone)) return;
    if (isCorrect(targetZone)) return;

    const correct = draggedItem.answer === targetZone;
    recordDrop(targetZone, draggedItem.id, correct);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event) => setActiveId(event.active.id as string)}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      {children}
      <Section1BottomTray items={items} quiz={quiz} />
      <DragOverlay>
        {activeItem && isSection1PieceId(activeItem.id) && activeFrame && activeDisplayScale ? (
          <div
            className="section1-overlay-item"
            style={{
              width: `${Math.max(1, Math.round(activeFrame.width * activeDisplayScale))}px`,
              height: `${Math.max(1, Math.round(activeFrame.height * activeDisplayScale))}px`,
            }}
          >
            <div
              className="section1-overlay-scale"
              style={{ transform: `scale(${activeDisplayScale})` }}
            >
              <Section1Piece pieceId={activeItem.id} mode="inventory" />
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
