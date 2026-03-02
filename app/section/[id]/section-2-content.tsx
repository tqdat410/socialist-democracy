"use client";

import { useMemo } from "react";
import ExportButton from "@/components/export/export-button";
import RibbonFall from "@/components/feedback/ribbon-fall";
import BoardPhotoCard from "@/components/layout/board-photo-card";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import Section2EmergenceBoard from "@/components/section2/section2-emergence-board";
import Section2NatureDimensionsBoard from "@/components/section2/section2-nature-dimensions-board";
import Section2QuizBoard from "@/components/section2/section2-quiz-board";
import Section2ResetButton from "@/components/section2/section2-reset-button";
import Section2ThreadOverlay from "@/components/section2/section2-thread-overlay";
import { getSectionIllustrationSlot } from "@/lib/content-data";
import {
  section2InteractiveItems,
  section2InteractiveZones,
} from "@/lib/section2-interactive-data";
import { useQuizStore } from "@/stores/quiz-store";

export default function Section2Content() {
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const droppedItemIds = useMemo(() => new Set(Object.values(droppedItems)), [droppedItems]);
  const section2Complete = useMemo(
    () => section2InteractiveItems.every((item) => droppedItemIds.has(item.id)),
    [droppedItemIds],
  );
  const ribbonBurstKey = section2Complete ? droppedItemIds.size : 0;

  return (
    <Section2QuizBoard items={section2InteractiveItems} zones={section2InteractiveZones} quiz="2">
      <RibbonFall burstKey={ribbonBurstKey} />
      <main className="home-board min-h-screen pb-16">
        <SectionNav
          sectionId="2"
          title="DÂN CHỦ XÃ HỘI CHỦ NGHĨA"
          showScore={false}
          rightActions={(
            <div className="flex items-center gap-2">
              <Section2ResetButton />
              {section2Complete ? <ExportButton sectionId="2" compact usePushpin /> : null}
            </div>
          )}
        />

        <CorkBoard id="section-2-board" className="section2v2-board-shell">
          <Section2ThreadOverlay />

          <section className="section2v2-hero-wrap mb-8">
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
          </section>

          <div>
            <Section2EmergenceBoard />
          </div>

          <div>
            <Section2NatureDimensionsBoard />
          </div>
        </CorkBoard>
      </main>
    </Section2QuizBoard>
  );
}
