"use client";

import { motion } from "framer-motion";
import Flashcard from "@/components/cards/flashcard";
import ExportButton from "@/components/export/export-button";
import BoardPhotoCard from "@/components/layout/board-photo-card";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import Section3ComparisonMatrixBoard from "@/components/section3/section3-comparison-matrix-board";
import Section3PracticalExampleLane from "@/components/section3/section3-practical-example-lane";
import Section3ThreadOverlay from "@/components/section3/section3-thread-overlay";
import { getSectionIllustrationSlot } from "@/lib/content-data";
import { section3Flashcards } from "@/lib/flashcard-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

export default function Section3Content() {
  return (
    <main className="home-board min-h-screen pb-16">
      <SectionNav
        sectionId="3"
        title="SO SÁNH BẢN CHẤT DC XHCN VÀ DC TƯ SẢN"
        showScore={false}
        rightActions={<ExportButton sectionId="3" compact usePushpin />}
      />

      <CorkBoard id="section-3-board" className="section3v2-board-shell">
        <Section3ThreadOverlay />

          <motion.section {...fadeUp} className="section3v2-hero-wrap mb-8">
            <article className="scrap section3v2-title-note tape section1v2-rot-n2">
              <h1 className="section3v2-hero-title">Bản chất DC XHCN và DC Tư sản</h1>
              <p className="section3v2-hero-subtitle">
                Đối chiếu theo tiêu chí lý luận và kiểm chứng bằng ví dụ thực tiễn
              </p>
            </article>

            <BoardPhotoCard
              slot={getSectionIllustrationSlot("s3-hero")}
              className="section3v2-hero-photo section1v2-rot-p3"
              pinAttribute="data-section3-thread-pin"
              pinKey="hero-photo"
              sizes="(max-width: 768px) 78vw, 260px"
            />
          </motion.section>

          <motion.div {...fadeUp} transition={{ delay: 0.06, duration: 0.45 }}>
            <article className="scrap paper-lined tape section3v2-intro-note section1v2-rot-p1 mb-6">
              <p>
                Giáo trình CNXHKH 2021 nhấn mạnh DC XHCN khác về chất so với DC tư sản ở bản chất giai cấp,
                cơ chế chính trị và bản chất nhà nước, đồng thời khác cả về nền tảng sở hữu, phân phối và hệ tư tưởng.
              </p>
            </article>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.45 }}>
            <Section3ComparisonMatrixBoard />
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.14, duration: 0.45 }}>
            <Section3PracticalExampleLane />
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.18, duration: 0.45 }} className="mb-8">
            <article className="scrap paper-kraft tape-red section3v2-recap-note section1v2-rot-n1">
              <p>
                Kết luận: DC XHCN hướng quyền lực thực chất về đại đa số nhân dân lao động; DC tư sản mang hình thức dân chủ
                nhưng quyền lực và lợi ích thường tập trung vào thiểu số nắm giữ tư bản.
              </p>
            </article>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.22, duration: 0.45 }} className="mb-6">
            <div className="scrap paper-kraft pushpin mb-3 inline-block" style={{ padding: "4px 12px" }}>
              <span style={{ fontFamily: "var(--font-special-elite)", fontSize: "0.8em" }}>
                ÔN TẬP — NHẤN ĐỂ LẬT THẺ
              </span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {section3Flashcards.map((card) => (
                <Flashcard key={card.id} card={card} />
              ))}
            </div>
          </motion.div>
      </CorkBoard>
    </main>
  );
}
