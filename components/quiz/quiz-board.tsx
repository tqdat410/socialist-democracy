"use client";

import { DndContext, DragOverlay, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { useState } from "react";
import { useQuizStore } from "@/stores/quiz-store";
import BottomTray from "@/components/quiz/bottom-tray";
import DragCard from "@/components/quiz/drag-card";
import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";

interface QuizBoardProps {
  items: DragItem[];
  zones: DropZoneConfig[];
  quiz: string;
  children: React.ReactNode; // section layout with DropZone components
}

export default function QuizBoard({ items, quiz, children }: QuizBoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { recordDrop, isCorrect } = useQuizStore();

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } })
  );

  const activeItem = activeId ? items.find((i) => i.id === activeId) : null;

  function handleDragEnd(event: import("@dnd-kit/core").DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;

    const draggedItem = items.find((i) => i.id === active.id);
    if (!draggedItem) return;

    const targetZone = over.id as string;
    if (isCorrect(targetZone)) return; // already filled

    const correct = draggedItem.answer === targetZone;
    recordDrop(targetZone, draggedItem.id, correct);

    if (!correct) {
      // Visual shake feedback handled by CSS class applied in DropZone
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(e) => setActiveId(e.active.id as string)}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      {children}
      <BottomTray items={items} quiz={quiz} />
      <DragOverlay>
        {activeItem ? (
          <DragCard item={activeItem} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
