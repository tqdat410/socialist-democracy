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
import Section3BottomTray from "@/components/section3/section3-bottom-tray";
import Section3Piece, { getSection3InventoryFrame } from "@/components/section3/section3-piece";
import { isSection3PieceId } from "@/lib/section3-interactive-data";
import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";
import { useQuizStore } from "@/stores/quiz-store";

interface Section3QuizBoardProps {
  items: DragItem[];
  zones: DropZoneConfig[];
  quiz: string;
  children: React.ReactNode;
}

export default function Section3QuizBoard({ items, zones: _zones, quiz, children }: Section3QuizBoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { recordDrop, isCorrect } = useQuizStore();
  const hasDropZones = _zones.length > 0;

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } }),
  );

  const activeItem = activeId ? items.find((item) => item.id === activeId) : null;
  const activeFrame = activeItem && isSection3PieceId(activeItem.id)
    ? getSection3InventoryFrame(activeItem.id)
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
      <Section3BottomTray items={items} quiz={quiz} />
      <DragOverlay>
        {activeItem && isSection3PieceId(activeItem.id) && activeFrame && activeDisplayScale ? (
          <div
            className="section1-overlay-item"
            style={{
              width: `${Math.max(1, Math.round(activeFrame.width * activeDisplayScale))}px`,
              height: `${Math.max(1, Math.round(activeFrame.height * activeDisplayScale))}px`,
            }}
          >
            <div className="section1-overlay-scale" style={{ transform: `scale(${activeDisplayScale})` }}>
              <Section3Piece pieceId={activeItem.id} mode="inventory" />
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
