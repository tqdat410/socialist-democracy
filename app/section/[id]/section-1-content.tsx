"use client";

import { motion } from "framer-motion";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import QuizBoard from "@/components/quiz/quiz-board";
import DropZone from "@/components/quiz/drop-zone";
import ExpandableDropZone from "@/components/interactive/expandable-drop-zone";
import QuoteCarousel from "@/components/interactive/quote-carousel";
import ExpandableDefinition from "@/components/interactive/expandable-definition";
import Flashcard from "@/components/cards/flashcard";
import CaseStudyModal from "@/components/interactive/case-study-modal";
import ExportButton from "@/components/export/export-button";
import { section1Items, section1Zones } from "@/lib/quiz-data";
import { section1Flashcards } from "@/lib/flashcard-data";
import { hcmQuotes, caseStudies } from "@/lib/content-data";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.45 } };

export default function Section1Content() {
  const cs1 = caseStudies.find((c) => c.id === "cs1")!;

  return (
    <QuizBoard items={section1Items} zones={section1Zones} quiz="1">
      <SectionNav sectionId="1" title="KHÁI NIỆM DÂN CHỦ" totalItems={section1Items.length} quiz="1" />

      <CorkBoard id="section-1-board">
        {/* Hero header */}
        <motion.div {...fadeUp} className="scrap paper-magazine tape text-center mb-6" style={{ padding: "20px 24px" }}>
          <h1 style={{ fontFamily: "var(--font-anton)", fontSize: "2em", letterSpacing: 3 }}>
            DÂN CHỦ LÀ GÌ?
          </h1>
          <p style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.75em", opacity: 0.8, marginTop: 4 }}>
            NGUỒN GỐC · BẢN CHẤT · Ý NGHĨA
          </p>
        </motion.div>

        {/* Definition panels */}
        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.45 }} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <ExpandableDefinition
            term="Demokratia — Dân trị"
            definition="Từ Hy Lạp cổ đại: 'demos' (nhân dân) + 'kratos' (quyền lực). Xuất hiện khoảng thế kỷ VII-VI TCN tại Athens — nơi công dân nam tự do họp bàn và quyết định công việc nhà nước."
            source="Thucydides, Lịch sử chiến tranh Peloponnese"
          />
          <ExpandableDefinition
            term="Dân chủ là phạm trù lịch sử"
            definition="Dân chủ không tồn tại bất biến — nó gắn liền với từng hình thái kinh tế-xã hội. Từ dân chủ nguyên thủy, chủ nô, phong kiến, tư sản đến XHCN — mỗi thời kỳ có nội dung và phạm vi khác nhau."
            source="Mác-Lênin, Nhà nước và Cách mạng"
          />
        </motion.div>

        {/* Drop zones grid — 7 items */}
        <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.45 }}>
          <div className="scrap paper-kraft pushpin mb-2" style={{ padding: "8px 14px" }}>
            <span style={{ fontFamily: "var(--font-permanent-marker)", fontSize: "1em" }}>
              Kéo thẻ vào đúng ô bên dưới
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {/* Expandable drop zones that reveal extra info on correct */}
            <ExpandableDropZone
              zone={section1Zones[0]}
              allItems={section1Items}
              expandedContent={
                <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.88em", lineHeight: 1.6, padding: "8px 0" }}>
                  Dân chủ là quyền cơ bản của con người — quyền tham gia vào các quyết định ảnh hưởng đến cuộc sống của mình.
                </p>
              }
            />
            <ExpandableDropZone
              zone={section1Zones[1]}
              allItems={section1Items}
              expandedContent={
                <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.88em", lineHeight: 1.6, padding: "8px 0" }}>
                  Về mặt chính trị, dân chủ là hình thức tổ chức nhà nước — phân biệt với quân chủ, độc tài hay thần quyền.
                </p>
              }
            />
            <DropZone zone={section1Zones[2]} allItems={section1Items} />
            <DropZone zone={section1Zones[3]} allItems={section1Items} />
            <DropZone zone={section1Zones[4]} allItems={section1Items} />
            <DropZone zone={section1Zones[5]} allItems={section1Items} />
            <DropZone zone={section1Zones[6]} allItems={section1Items} />
          </div>
        </motion.div>

        {/* Quote carousel */}
        <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.45 }} className="mb-6">
          <div className="scrap paper-kraft tape mb-2 inline-block" style={{ padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>TRÍCH DẪN HỒ CHÍ MINH</span>
          </div>
          <QuoteCarousel quotes={hcmQuotes} />
        </motion.div>

        {/* Case study */}
        <motion.div {...fadeUp} transition={{ delay: 0.25, duration: 0.45 }} className="mb-6">
          <CaseStudyModal caseStudy={cs1} />
        </motion.div>

        {/* Flashcards row */}
        <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.45 }} className="mb-6">
          <div className="scrap paper-kraft pushpin mb-3 inline-block" style={{ padding: "4px 12px" }}>
            <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>ÔN TẬP — NHẤN ĐỂ LẬT THẺ</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {section1Flashcards.map((card) => (
              <Flashcard key={card.id} card={card} />
            ))}
          </div>
        </motion.div>

        {/* Export */}
        <div className="flex justify-center mt-4 pb-4">
          <ExportButton targetId="section-1-board" filename="section-1-khai-niem-dan-chu" />
        </div>
      </CorkBoard>
    </QuizBoard>
  );
}
