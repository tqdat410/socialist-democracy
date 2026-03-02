"use client";

import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useMemo } from "react";
import Section3DragCard from "@/components/section3/section3-drag-card";
import type { DragItem } from "@/lib/quiz-data";
import { useQuizStore } from "@/stores/quiz-store";

interface Section3BottomTrayProps {
  items: DragItem[];
  quiz: string;
}

function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export default function Section3BottomTray({ items, quiz }: Section3BottomTrayProps) {
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const droppedSignature = Object.values(droppedItems).sort().join("|");

  const available = items.filter(
    (item) => item.quiz === quiz && !Object.values(droppedItems).includes(item.id),
  );

  const shuffledAvailable = useMemo(() => {
    return [...available].sort((a, b) => {
      const scoreA = hashString(`${quiz}|${droppedSignature}|${a.id}`);
      const scoreB = hashString(`${quiz}|${droppedSignature}|${b.id}`);
      return scoreA - scoreB;
    });
  }, [available, droppedSignature, quiz]);

  if (available.length === 0) return null;

  return (
    <div className="section-tray-shell fixed bottom-0 left-0 right-0 z-30">
      <div className="w-full px-3 py-2">
        <SortableContext items={shuffledAvailable.map((item) => item.id)} strategy={rectSortingStrategy}>
          <div className="section1-bottom-tray-scroll">
            {shuffledAvailable.map((item) => (
              <Section3DragCard key={item.id} item={item} />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
