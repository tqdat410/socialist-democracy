"use client";

import { motion } from "framer-motion";
import ExportButton from "@/components/export/export-button";
import BoardPhotoCard from "@/components/layout/board-photo-card";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import Section2EmergenceBoard from "@/components/section2/section2-emergence-board";
import Section2NatureDimensionsBoard from "@/components/section2/section2-nature-dimensions-board";
import Section2ThreadOverlay from "@/components/section2/section2-thread-overlay";
import { getSectionIllustrationSlot } from "@/lib/content-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

export default function Section2Content() {
  return (
    <main className="home-board min-h-screen pb-16">
      <SectionNav
        sectionId="2"
        title="DÂN CHỦ XÃ HỘI CHỦ NGHĨA"
        showScore={false}
        rightActions={<ExportButton sectionId="2" compact usePushpin />}
      />

      <CorkBoard id="section-2-board" className="section2v2-board-shell">
        <Section2ThreadOverlay />

          <motion.section {...fadeUp} className="section2v2-hero-wrap mb-8">
            <BoardPhotoCard
              slot={getSectionIllustrationSlot("s2-hero")}
              className="section2v2-hero-photo section2v2-photo-tilt-hero"
              sizes="(max-width: 768px) 78vw, 260px"
            />

            <div className="section2v2-hero-note-stack">
              <article className="scrap section2v2-hero-note-main tape section1v2-rot-p2">
                <h1>Dân chủ</h1>
              </article>
              <article className="scrap section2v2-hero-note-sub tape section1v2-rot-n3">
                <h2>Xã hội chủ nghĩa</h2>
              </article>
            </div>
          </motion.section>

          <motion.div {...fadeUp} transition={{ delay: 0.12, duration: 0.45 }}>
            <Section2EmergenceBoard />
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.16, duration: 0.45 }}>
            <Section2NatureDimensionsBoard />
          </motion.div>
      </CorkBoard>
    </main>
  );
}
