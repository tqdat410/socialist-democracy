"use client";

import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useQuizStore } from "@/stores/quiz-store";
import DragCard from "@/components/quiz/drag-card";
import type { DragItem } from "@/lib/quiz-data";

interface BottomTrayProps {
  items: DragItem[];
  quiz: string;
}

export default function BottomTray({ items, quiz }: BottomTrayProps) {
  const droppedItems = useQuizStore((s) => s.droppedItems);

  // Only show items not yet correctly dropped
  const available = items.filter(
    (item) => item.quiz === quiz && !Object.values(droppedItems).includes(item.id)
  );

  if (available.length === 0) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-center p-4"
        style={{ background: "rgba(139,105,20,0.95)", borderTop: "2px solid rgba(255,255,255,0.15)" }}
      >
        <span className="scrap paper-magazine tape text-sm px-4 py-2">
          Hoàn thành! Kéo thả tất cả thẻ đúng vị trí.
        </span>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30"
      style={{ background: "rgba(139,105,20,0.95)", borderTop: "2px solid rgba(255,255,255,0.15)" }}
    >
      <div className="w-full px-4 py-2">
        <p
          className="text-center mb-1"
          style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.68em", color: "rgba(255,255,255,0.6)", letterSpacing: 1, lineHeight: 1 }}
        >
          KÉO THẺ VÀO ĐÚNG Ô — {available.length} thẻ còn lại
        </p>
        <SortableContext items={available.map((i) => i.id)} strategy={rectSortingStrategy}>
          <div className="flex flex-nowrap gap-3 justify-start overflow-x-auto pt-3 pb-2 px-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.2) transparent", WebkitOverflowScrolling: "touch" }}>
            {available.map((item) => (
              <DragCard key={item.id} item={item} />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
