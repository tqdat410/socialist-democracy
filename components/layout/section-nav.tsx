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
  score?: number;
  rightActions?: ReactNode;
}

export default function SectionNav({
  title,
  totalItems = 0,
  showScore = true,
  score,
  rightActions,
}: SectionNavProps) {
  const droppedItems = useQuizStore((s) => s.droppedItems);

  const resolvedScore = showScore
    ? score ?? Object.keys(droppedItems).length
    : 0;
  const pct = totalItems > 0 ? Math.round((resolvedScore / totalItems) * 100) : 0;

  return (
    <nav className="section-nav-shell sticky top-0 z-40 flex items-center gap-2 px-2 py-1.5 mb-3">
      <Link href="/" className="scrap paper-magazine tape text-sm px-2.5 py-1 no-underline" style={{ fontSize: "0.75em" }}>
        ← Trang chủ
      </Link>

      <div className="flex-1">
        <h2 className="section-nav-title font-[family-name:var(--font-anton)] text-white text-base tracking-widest">
          {title}
        </h2>
      </div>

      <div className="section-nav-actions flex items-center gap-2 shrink-0">
        {showScore && (
          <div className="scrap paper-news text-xs px-3 py-1" style={{ minWidth: 80, textAlign: "center" }}>
            <div className="font-[family-name:var(--font-anton)]" style={{ fontSize: "1.2em" }}>
              {resolvedScore}/{totalItems}
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
