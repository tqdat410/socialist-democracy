"use client";

import {
  DndContext,
  DragOverlay,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import Section2BottomTray from "@/components/section2/section2-bottom-tray";
import Section2Piece, { getSection2InventoryFrame } from "@/components/section2/section2-piece";
import {
  getSection2GroupedBlockZoneId,
  getSection2PieceAnswerZoneId,
  isSection2GroupedBlockZoneId,
  isSection2GroupedPieceId,
  isSection2PieceId,
} from "@/lib/section2-interactive-data";
import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";
import { useQuizStore } from "@/stores/quiz-store";

interface Section2QuizBoardProps {
  items: DragItem[];
  zones: DropZoneConfig[];
  quiz: string;
  children: React.ReactNode;
}

export default function Section2QuizBoard({ items, zones: _zones, quiz, children }: Section2QuizBoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { recordDrop, isCorrect } = useQuizStore();
  const hasDropZones = _zones.length > 0;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } }),
  );

  const activeItem = activeId ? items.find((item) => item.id === activeId) : null;
  const activeFrame = activeItem && isSection2PieceId(activeItem.id)
    ? getSection2InventoryFrame(activeItem.id)
    : null;
  const activeDisplayScale = activeFrame ? Math.min(0.86, activeFrame.scale * 1.18) : null;

  function handleDragEnd(event: import("@dnd-kit/core").DragEndEvent) {
    if (!hasDropZones) return;

    const { active, over } = event;
    setActiveId(null);
    if (!over) return;

    const draggedItem = items.find((item) => item.id === active.id);
    if (!draggedItem) return;

    const targetZone = over.id as string;

    if (isSection2GroupedPieceId(draggedItem.id)) {
      if (!isSection2GroupedBlockZoneId(targetZone)) return;

      const expectedBlockZone = getSection2GroupedBlockZoneId(draggedItem.id);
      if (!expectedBlockZone) return;

      if (targetZone !== expectedBlockZone) {
        recordDrop(targetZone, draggedItem.id, false);
        return;
      }

      const answerZoneId = getSection2PieceAnswerZoneId(draggedItem.id);
      if (isCorrect(answerZoneId)) return;
      recordDrop(answerZoneId, draggedItem.id, true);
      return;
    }

    if (isSection2GroupedBlockZoneId(targetZone)) return;
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
      <Section2BottomTray items={items} quiz={quiz} />
      <DragOverlay>
        {activeItem && isSection2PieceId(activeItem.id) && activeFrame && activeDisplayScale ? (
          <div
            className="section1-overlay-item"
            style={{
              width: `${Math.max(1, Math.round(activeFrame.width * activeDisplayScale))}px`,
              height: `${Math.max(1, Math.round(activeFrame.height * activeDisplayScale))}px`,
            }}
          >
            <div className="section1-overlay-scale" style={{ transform: `scale(${activeDisplayScale})` }}>
              <Section2Piece pieceId={activeItem.id} mode="inventory" />
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
