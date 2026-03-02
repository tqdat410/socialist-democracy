"use client";

import ScrapCard from "@/components/cards/scrap-card";
import BoardPhotoCard from "@/components/layout/board-photo-card";
import {
  getSectionIllustrationSlot,
  section3ComparisonCriteria,
} from "@/lib/content-data";
import { section3Items } from "@/lib/quiz-data";

const itemByZone = new Map(section3Items.map((item) => [item.answer, item]));

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
      <div className="scrap paper-kraft tape-red section3v2-block-tag section1v2-rot-p1">
        <h2>Bảng so sánh bản chất DC XHCN và DC Tư sản</h2>
      </div>

      <div className="section3v2-matrix-intro">
        <BoardPhotoCard
          slot={getSectionIllustrationSlot("s3-matrix")}
          className="section3v2-matrix-photo section1v2-rot-image-1"
          pinAttribute="data-section3-thread-pin"
          pinKey="matrix-photo"
          sizes="(max-width: 768px) 72vw, 240px"
        />
        <article className="scrap paper-lined tape section3v2-matrix-note section1v2-rot-pair-1">
          <p>
            Dựa trên giáo trình CNXHKH 2021, sự khác nhau về chất giữa hai nền dân chủ thể hiện ở
            bản chất giai cấp, cơ chế chính trị, sở hữu tư liệu sản xuất, phân phối lợi ích, phạm vi dân chủ,
            bản chất nhà nước và hệ tư tưởng.
          </p>
        </article>
      </div>

      <div className="section3v2-matrix-table">
        <div className="section3v2-matrix-row section3v2-matrix-row-head">
          <div className="section3v2-matrix-head section3v2-matrix-cell">Tiêu chí</div>
          <div className="section3v2-matrix-head section3v2-matrix-cell section3v2-matrix-head-xhcn">DC XHCN</div>
          <div className="section3v2-matrix-head section3v2-matrix-cell section3v2-matrix-head-tusan">DC Tư sản</div>
        </div>

        {section3ComparisonCriteria.map((criterion, index) => {
          const xhcnItem = getItem(criterion.xhcnZoneId);
          const tusanItem = getItem(criterion.tusanZoneId);

          return (
            <div className="section3v2-matrix-row" key={criterion.id}>
              <div className="section3v2-matrix-cell section3v2-matrix-criterion">
                <span className="section3v2-row-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{criterion.label}</span>
              </div>
              <div className="section3v2-matrix-cell">
                <ScrapCard
                  variant={xhcnItem.cardVariant}
                  accessory="tape"
                  className="section3v2-matrix-answer section3v2-matrix-answer-xhcn section1v2-rot-n1"
                >
                  {xhcnItem.text}
                </ScrapCard>
              </div>
              <div className="section3v2-matrix-cell">
                <ScrapCard
                  variant={tusanItem.cardVariant}
                  accessory="tape-red"
                  className="section3v2-matrix-answer section3v2-matrix-answer-tusan section1v2-rot-p1"
                >
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
