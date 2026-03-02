"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import QuizBoard from "@/components/quiz/quiz-board";
import DropZone from "@/components/quiz/drop-zone";
import ComparisonTable from "@/components/interactive/comparison-table";
import ComparisonReviewGame from "@/components/interactive/comparison-review-game";
import DebatePrepGame from "@/components/interactive/debate-prep-game";
import ExpandableDimension from "@/components/interactive/expandable-dimension";
import CaseStudyModal from "@/components/interactive/case-study-modal";
import Flashcard from "@/components/cards/flashcard";
import ExportButton from "@/components/export/export-button";
import { section3aItems, section3aZones, section3bItems, section3bZones } from "@/lib/quiz-data";
import { section3Flashcards } from "@/lib/flashcard-data";
import { caseStudies } from "@/lib/content-data";
import { useQuizStore } from "@/stores/quiz-store";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

// All items and zones combined for section 3
const allSection3Items = [...section3aItems, ...section3bItems];
const allSection3Zones = [...section3aZones, ...section3bZones];

function DimensionsPhase() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="scrap paper-kraft pushpin mb-2" style={{ padding: "8px 14px" }}>
        <span style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "1em" }}>
          Phân loại thẻ vào đúng lĩnh vực DCCN XHCN
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Chính trị */}
        <ExpandableDimension
          title="CHÍNH TRỊ"
          color="#C62828"
          detailContent={
            <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.88em", lineHeight: 1.6 }}>
              Đảng Cộng sản lãnh đạo trên cơ sở chủ nghĩa Mác-Lênin. Nhà nước pháp quyền XHCN do nhân dân, vì nhân dân. Nhất nguyên chính trị đảm bảo thống nhất ý chí và hành động.
            </p>
          }
        >
          <DropZone zone={section3aZones[0]} allItems={allSection3Items} className="column-zone" />
        </ExpandableDimension>

        {/* Kinh tế */}
        <ExpandableDimension
          title="KINH TẾ"
          color="#2E7D32"
          detailContent={
            <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.88em", lineHeight: 1.6 }}>
              Công hữu tư liệu sản xuất chủ yếu đảm bảo không có bóc lột. Phân phối theo lao động — người cống hiến nhiều hơn được hưởng nhiều hơn. Lợi ích người lao động là động lực phát triển.
            </p>
          }
        >
          <DropZone zone={section3aZones[1]} allItems={allSection3Items} className="column-zone" />
        </ExpandableDimension>

        {/* Tư tưởng */}
        <ExpandableDimension
          title="TƯ TƯỞNG - VĂN HÓA"
          color="#1565C0"
          detailContent={
            <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.88em", lineHeight: 1.6 }}>
              Chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh là nền tảng. Kế thừa tinh hoa văn hóa dân tộc và nhân loại. Hài hòa lợi ích cá nhân - tập thể - xã hội.
            </p>
          }
        >
          <DropZone zone={section3aZones[2]} allItems={allSection3Items} className="column-zone" />
        </ExpandableDimension>
      </div>
    </div>
  );
}

function ComparisonPhase() {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="scrap paper-kraft pushpin mb-2" style={{ padding: "8px 14px" }}>
        <span style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "1em" }}>
          So sánh DC XHCN và DC Tư sản — Kéo thẻ vào bảng
        </span>
      </div>
      <ComparisonTable allItems={allSection3Items} />
    </div>
  );
}

export default function Section3Content() {
  const cs3 = caseStudies.find((c) => c.id === "cs3")!;
  const section3Phase = useQuizStore((s) => s.section3Phase);
  const setSectionPhase = useQuizStore((s) => s.setSectionPhase);
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const [activeTab, setActiveTab] = useState<"dimensions" | "comparison">(section3Phase);
  const droppedItemIds = useMemo(() => new Set(Object.values(droppedItems)), [droppedItems]);
  const section3Complete = useMemo(
    () => allSection3Items.every((item) => droppedItemIds.has(item.id)),
    [droppedItemIds],
  );

  function switchTab(tab: "dimensions" | "comparison") {
    setActiveTab(tab);
    setSectionPhase(tab);
  }

  return (
    <QuizBoard items={allSection3Items} zones={allSection3Zones} quiz={activeTab === "dimensions" ? "3a" : "3b"}>
      <SectionNav
        sectionId="3"
        title="DÂN CHỦ XHCN"
        totalItems={allSection3Items.length}
        quiz={activeTab === "dimensions" ? "3a" : "3b"}
        rightActions={section3Complete ? <ExportButton sectionId="3" compact usePushpin /> : null}
      />

      <CorkBoard id="section-3-board">
        {/* Hero */}
        <motion.div {...fadeUp} className="scrap paper-magazine tape text-center mb-6" style={{ padding: "20px 24px" }}>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "2em", letterSpacing: 3 }}>
            DÂN CHỦ XÃ HỘI CHỦ NGHĨA
          </h1>
          <p style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.75em", opacity: 0.8, marginTop: 4 }}>
            ĐẶC TRƯNG · SO SÁNH · THỰC TIỄN VIỆT NAM
          </p>
        </motion.div>

        {/* Phase tabs */}
        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.45 }} className="flex gap-3 mb-6">
          <button
            onClick={() => switchTab("dimensions")}
            className={`scrap ${activeTab === "dimensions" ? "paper-magazine" : "paper-news"}`}
            style={{ flex: 1, border: "none", cursor: "pointer", padding: "10px", fontFamily: "var(--font-anton)", fontSize: "0.85em" }}
          >
            3 LĨNH VỰC DCCN
          </button>
          <button
            onClick={() => switchTab("comparison")}
            className={`scrap ${activeTab === "comparison" ? "paper-magazine" : "paper-news"}`}
            style={{ flex: 1, border: "none", cursor: "pointer", padding: "10px", fontFamily: "var(--font-anton)", fontSize: "0.85em" }}
          >
            SO SÁNH XHCN vs TƯ SẢN
          </button>
        </motion.div>

        {/* Phase content */}
        <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.45 }}>
          {activeTab === "dimensions" ? <DimensionsPhase /> : <ComparisonPhase />}
        </motion.div>

        {/* Case study */}
        <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.45 }} className="mb-6">
          <CaseStudyModal caseStudy={cs3} />
        </motion.div>

        {/* Mini games */}
        <motion.div {...fadeUp} transition={{ delay: 0.25, duration: 0.45 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <div className="scrap paper-kraft tape mb-2 inline-block" style={{ padding: "4px 12px" }}>
              <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.78em" }}>PHÂN LOẠI NHANH</span>
            </div>
            <ComparisonReviewGame />
          </div>
          <div>
            <div className="scrap paper-kraft tape-red mb-2 inline-block" style={{ padding: "4px 12px" }}>
              <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.78em" }}>LUYỆN TRANH LUẬN</span>
            </div>
            <DebatePrepGame />
          </div>
        </motion.div>

        {/* Flashcards */}
        <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.45 }} className="mb-6">
          <div className="scrap paper-kraft pushpin mb-3 inline-block" style={{ padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>ÔN TẬP — NHẤN ĐỂ LẬT THẺ</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {section3Flashcards.map((card) => (
              <Flashcard key={card.id} card={card} />
            ))}
          </div>
        </motion.div>

      </CorkBoard>
    </QuizBoard>
  );
}
