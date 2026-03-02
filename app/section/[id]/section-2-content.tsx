"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import QuizBoard from "@/components/quiz/quiz-board";
import DropZone from "@/components/quiz/drop-zone";
import Timeline from "@/components/interactive/timeline";
import type { TimelineEntry } from "@/components/interactive/timeline";
import MilestoneDetail from "@/components/interactive/milestone-detail";
import DirectionMeter from "@/components/interactive/direction-meter";
import Flashcard from "@/components/cards/flashcard";
import CaseStudyModal from "@/components/interactive/case-study-modal";
import ExportButton from "@/components/export/export-button";
import { section2Items, section2Zones } from "@/lib/quiz-data";
import { section2Flashcards } from "@/lib/flashcard-data";
import { caseStudies } from "@/lib/content-data";
import { useQuizStore } from "@/stores/quiz-store";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

const timelineEntries: TimelineEntry[] = [
  { zoneId: "csnt",       era: "Cộng sản nguyên thủy", period: "Tiền sử",         color: "#6D4C41" },
  { zoneId: "nole",       era: "Chiếm hữu nô lệ",      period: "TK V TCN – TK V", color: "#C62828" },
  { zoneId: "phongkien",  era: "Phong kiến",            period: "TK V – TK XIV",   color: "#4E342E" },
  { zoneId: "tuban",      era: "Tư bản",                period: "TK XIV – nay",    color: "#1565C0" },
  { zoneId: "xhcn",       era: "XHCN",                  period: "1917 – nay",      color: "#2E7D32" },
  { zoneId: "cscn",       era: "Cộng sản chủ nghĩa",   period: "Tương lai",       color: "#6A1B9A" },
];

export default function Section2Content() {
  const cs2 = caseStudies.find((c) => c.id === "cs2")!;
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const droppedItemIds = useMemo(() => new Set(Object.values(droppedItems)), [droppedItems]);
  const section2Complete = useMemo(
    () => section2Items.every((item) => droppedItemIds.has(item.id)),
    [droppedItemIds],
  );

  return (
    <QuizBoard items={section2Items} zones={section2Zones} quiz="2">
      <SectionNav
        sectionId="2"
        title="LỊCH SỬ DÂN CHỦ"
        totalItems={section2Items.length}
        quiz="2"
        rightActions={section2Complete ? <ExportButton sectionId="2" compact usePushpin /> : null}
      />

      <CorkBoard id="section-2-board">
        {/* Hero */}
        <motion.div {...fadeUp} className="scrap paper-magazine tape text-center mb-6" style={{ padding: "20px 24px" }}>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "2em", letterSpacing: 3 }}>
            HÀNH TRÌNH DÂN CHỦ
          </h1>
          <p style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.75em", opacity: 0.8, marginTop: 4 }}>
            TỪ BẦU THỦ LĨNH ĐẾN CÁCH MẠNG THÁNG MƯỜI
          </p>
        </motion.div>

        {/* Instruction */}
        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.45 }}>
          <div className="scrap paper-kraft pushpin mb-4" style={{ padding: "8px 14px" }}>
            <span style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "1em" }}>
              Kéo thẻ vào đúng hình thái kinh tế-xã hội trên dòng thời gian
            </span>
          </div>
        </motion.div>

        {/* Timeline drag quiz */}
        <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.45 }} className="mb-8">
          <Timeline entries={timelineEntries} allItems={section2Items} />
        </motion.div>

        {/* Milestone details */}
        <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.45 }} className="mb-6">
          <div className="scrap paper-kraft tape mb-3 inline-block" style={{ padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>
              CÁC CỘT MỐC QUAN TRỌNG — Nhấn để xem chi tiết
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <MilestoneDetail
              year="1871"
              title="Công xã Paris"
              body="Từ 18/3 đến 28/5/1871, giai cấp công nhân Paris nắm quyền lực nhà nước lần đầu tiên. Hội đồng Công xã gồm các đại biểu được bầu và bãi miễn, lương cán bộ ngang lương công nhân. Marx gọi đây là 'hình thức chính trị cuối cùng được tìm thấy để thực hiện sự giải phóng kinh tế của lao động'."
              color="#C62828"
            />
            <MilestoneDetail
              year="1917"
              title="Cách mạng Tháng Mười Nga"
              body="Ngày 7/11/1917 (25/10 theo lịch cũ), Đảng Bolshevik lãnh đạo giai cấp công nhân lật đổ Chính phủ Lâm thời. Khai sinh nhà nước XHCN đầu tiên — Liên bang Xô viết — mở ra kỷ nguyên dân chủ thực chất cho người lao động toàn thế giới."
              color="#2E7D32"
            />
          </div>

          {/* Milestone drop zones */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {section2Zones.filter((z) => z.id.startsWith("milestone")).map((zone) => (
              <DropZone key={zone.id} zone={zone} allItems={section2Items} />
            ))}
          </div>
        </motion.div>

        {/* Direction meter — democratization progress */}
        <motion.div {...fadeUp} transition={{ delay: 0.25, duration: 0.45 }} className="mb-6">
          <div className="scrap paper-kraft tape mb-2 inline-block" style={{ padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>
              MỨC ĐỘ DÂN CHỦ QUA CÁC THỜI KỲ
            </span>
          </div>
          <DirectionMeter leftLabel="Độc tài / Chuyên chế" rightLabel="Dân chủ thực chất" value={72} leftColor="#C62828" rightColor="#2E7D32" />
        </motion.div>

        {/* Case study */}
        <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.45 }} className="mb-6">
          <CaseStudyModal caseStudy={cs2} />
        </motion.div>

        {/* Flashcards */}
        <motion.div {...fadeUp} transition={{ delay: 0.35, duration: 0.45 }} className="mb-6">
          <div className="scrap paper-kraft pushpin mb-3 inline-block" style={{ padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>ÔN TẬP — NHẤN ĐỂ LẬT THẺ</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {section2Flashcards.map((card) => (
              <Flashcard key={card.id} card={card} />
            ))}
          </div>
        </motion.div>

      </CorkBoard>
    </QuizBoard>
  );
}
