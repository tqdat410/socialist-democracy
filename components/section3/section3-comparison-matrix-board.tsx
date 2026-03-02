"use client";

import ScrapCard from "@/components/cards/scrap-card";
import { section3ComparisonCriteria } from "@/lib/content-data";
import { section3Items } from "@/lib/quiz-data";

const itemByZone = new Map(section3Items.map((item) => [item.answer, item]));
type TapeAccessory = "tape" | "tape-red" | "tape-blue";
type CriterionId = (typeof section3ComparisonCriteria)[number]["id"];
type MatrixStyleConfig = {
  criterionClass: string;
  criterionTiltClass: string;
  xhcnTiltClass: string;
  tusanTiltClass: string;
  xhcnAccessory: TapeAccessory;
  tusanAccessory: TapeAccessory;
};

const matrixStyleByCriterionId: Record<CriterionId, MatrixStyleConfig> = {
  giaicap: {
    criterionClass: "paper-postit-yellow tape",
    criterionTiltClass: "section3v2-tilt-a",
    xhcnTiltClass: "section3v2-tilt-b",
    tusanTiltClass: "section3v2-tilt-c",
    xhcnAccessory: "tape-blue",
    tusanAccessory: "tape-red",
  },
  coche: {
    criterionClass: "paper-postit-blue tape tape-blue",
    criterionTiltClass: "section3v2-tilt-d",
    xhcnTiltClass: "section3v2-tilt-e",
    tusanTiltClass: "section3v2-tilt-f",
    xhcnAccessory: "tape",
    tusanAccessory: "tape-red",
  },
  sohuu: {
    criterionClass: "paper-postit-pink tape tape-red",
    criterionTiltClass: "section3v2-tilt-g",
    xhcnTiltClass: "section3v2-tilt-h",
    tusanTiltClass: "section3v2-tilt-i",
    xhcnAccessory: "tape-blue",
    tusanAccessory: "tape",
  },
  phanphoi: {
    criterionClass: "paper-kraft tape",
    criterionTiltClass: "section3v2-tilt-j",
    xhcnTiltClass: "section3v2-tilt-k",
    tusanTiltClass: "section3v2-tilt-l",
    xhcnAccessory: "tape",
    tusanAccessory: "tape-blue",
  },
  phamvi: {
    criterionClass: "paper-postit-green tape tape-blue",
    criterionTiltClass: "section3v2-tilt-m",
    xhcnTiltClass: "section3v2-tilt-n",
    tusanTiltClass: "section3v2-tilt-o",
    xhcnAccessory: "tape-red",
    tusanAccessory: "tape",
  },
  nhanuoc: {
    criterionClass: "paper-postit-yellow tape tape-red",
    criterionTiltClass: "section3v2-tilt-p",
    xhcnTiltClass: "section3v2-tilt-q",
    tusanTiltClass: "section3v2-tilt-r",
    xhcnAccessory: "tape-blue",
    tusanAccessory: "tape-red",
  },
  tutuong: {
    criterionClass: "paper-postit-blue tape",
    criterionTiltClass: "section3v2-tilt-s",
    xhcnTiltClass: "section3v2-tilt-t",
    tusanTiltClass: "section3v2-tilt-u",
    xhcnAccessory: "tape-red",
    tusanAccessory: "tape-blue",
  },
};

const threadedPinByItemId = {
  "s3-11": "matrix-note-1",
  "s3-03": "matrix-note-6",
  "s3-02": "matrix-note-7",
  "s3-12": "matrix-note-8",
  "s3-13": "matrix-note-9",
  "s3-10": "matrix-note-3",
  "s3-07": "matrix-note-4",
  "s3-06": "matrix-note-5",
} as const;
const threadedPinByCriterionId = {
  coche: "matrix-note-2",
} as const;
const goldPinKeys = new Set([
  "matrix-note-1",
  "matrix-note-2",
  "matrix-note-3",
  "matrix-note-4",
  "matrix-note-5",
]);

function getItem(zoneId: string) {
  const item = itemByZone.get(zoneId);
  if (!item) {
    throw new Error(`Missing section 3 item for zone: ${zoneId}`);
  }
  return item;
}

export default function Section3ComparisonMatrixBoard() {
  return (
    <section className="section3v2-matrix-wrap mb-8">
      <div className="section3v2-matrix-table">
        {section3ComparisonCriteria.map((criterion) => {
          const xhcnItem = getItem(criterion.xhcnZoneId);
          const tusanItem = getItem(criterion.tusanZoneId);
          const styleConfig = matrixStyleByCriterionId[criterion.id];
          const criterionPinKey = threadedPinByCriterionId[criterion.id as keyof typeof threadedPinByCriterionId];
          const xhcnPinKey = threadedPinByItemId[xhcnItem.id as keyof typeof threadedPinByItemId];
          const tusanPinKey = threadedPinByItemId[tusanItem.id as keyof typeof threadedPinByItemId];
          const criterionPaperClass = criterionPinKey ? "paper-postit-blue pushpin" : styleConfig.criterionClass;
          const criterionPinClass = criterionPinKey && goldPinKeys.has(criterionPinKey) ? "section3v2-gold-pin" : "";
          const xhcnAccessory = xhcnPinKey ? "pushpin" : styleConfig.xhcnAccessory;
          const tusanAccessory = tusanPinKey ? "pushpin" : styleConfig.tusanAccessory;
          const xhcnPinClass = xhcnPinKey && goldPinKeys.has(xhcnPinKey) ? "section3v2-gold-pin" : "";
          const tusanPinClass = tusanPinKey && goldPinKeys.has(tusanPinKey) ? "section3v2-gold-pin" : "";

          return (
            <div className="section3v2-matrix-row" key={criterion.id}>
              <div className="section3v2-matrix-cell">
                <ScrapCard
                  variant={xhcnItem.cardVariant}
                  accessory={xhcnAccessory}
                  className={`section3v2-matrix-answer section3v2-matrix-answer-xhcn ${styleConfig.xhcnTiltClass} ${xhcnPinClass}`}
                >
                  {xhcnPinKey ? (
                    <span className="home-thread-pin-anchor" data-section3-thread-pin={xhcnPinKey} aria-hidden />
                  ) : null}
                  {xhcnItem.text}
                </ScrapCard>
              </div>
              <div className="section3v2-matrix-cell">
                <article className={`scrap section3v2-matrix-criterion ${criterionPaperClass} ${styleConfig.criterionTiltClass} ${criterionPinClass}`}>
                  {criterionPinKey ? (
                    <span className="home-thread-pin-anchor" data-section3-thread-pin={criterionPinKey} aria-hidden />
                  ) : null}
                  <span>{criterion.label}</span>
                </article>
              </div>
              <div className="section3v2-matrix-cell">
                <ScrapCard
                  variant={tusanItem.cardVariant}
                  accessory={tusanAccessory}
                  className={`section3v2-matrix-answer section3v2-matrix-answer-tusan ${styleConfig.tusanTiltClass} ${tusanPinClass}`}
                >
                  {tusanPinKey ? (
                    <span className="home-thread-pin-anchor" data-section3-thread-pin={tusanPinKey} aria-hidden />
                  ) : null}
                  {tusanItem.text}
                </ScrapCard>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
