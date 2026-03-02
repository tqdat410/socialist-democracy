"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useQuizStore } from "@/stores/quiz-store";

interface SectionNavProps {
  sectionId: string;
  title: string;
  totalItems?: number;
  quiz?: string;
  showScore?: boolean;
  rightActions?: ReactNode;
}

export default function SectionNav({
  title,
  totalItems = 0,
  showScore = true,
  rightActions,
}: SectionNavProps) {
  const droppedItems = useQuizStore((s) => s.droppedItems);

  // Count correct drops that belong to this quiz
  const score = showScore ? Object.keys(droppedItems).length : 0;
  const pct = totalItems > 0 ? Math.round((score / totalItems) * 100) : 0;

  return (
    <nav className="sticky top-0 z-40 flex items-center gap-3 p-3 mb-4"
      style={{ background: "rgba(139,105,20,0.85)", backdropFilter: "blur(6px)", borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
      <Link href="/" className="scrap paper-magazine tape text-sm px-3 py-1 no-underline" style={{ fontSize: "0.8em" }}>
        ← Trang chủ
      </Link>

      <div className="flex-1">
        <h2 className="font-[family-name:var(--font-anton)] text-white text-lg tracking-widest">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {showScore && (
          <div className="scrap paper-news text-xs px-3 py-1" style={{ minWidth: 80, textAlign: "center" }}>
            <div className="font-[family-name:var(--font-anton)]" style={{ fontSize: "1.2em" }}>
              {score}/{totalItems}
            </div>
            <div style={{ fontSize: "0.75em", opacity: 0.7 }}>ĐIỂM SỐ</div>
            <div style={{ marginTop: 4, height: 4, background: "#ddd", borderRadius: 2 }}>
              <div style={{ width: `${pct}%`, height: "100%", background: "#C62828", borderRadius: 2, transition: "width 0.3s" }} />
            </div>
          </div>
        )}
        {rightActions}
      </div>
    </nav>
  );
}
