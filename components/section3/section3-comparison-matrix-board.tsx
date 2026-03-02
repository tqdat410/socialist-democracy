"use client";

import ScrapCard from "@/components/cards/scrap-card";
import Section3DropSlot from "@/components/section3/section3-drop-slot";
import { section3ComparisonCriteria } from "@/lib/content-data";
import {
  getSection3MatrixCellPieceId,
  getSection3PieceAnswerZoneId,
  type Section3CriterionId,
} from "@/lib/section3-interactive-data";
import { getSection3MatrixCellRenderModel } from "@/components/section3/section3-piece-config";

export default function Section3ComparisonMatrixBoard() {
  return (
    <section className="section3v2-matrix-wrap mb-8">
      <div className="section3v2-matrix-table">
        {section3ComparisonCriteria.map((criterion) => {
          const criterionId = criterion.id as Section3CriterionId;

          const xhcnPieceId = getSection3MatrixCellPieceId(criterionId, "xhcn");
          const criterionPieceId = getSection3MatrixCellPieceId(criterionId, "criterion");
          const tusanPieceId = getSection3MatrixCellPieceId(criterionId, "tusan");

          const xhcnModel = getSection3MatrixCellRenderModel(criterionId, "xhcn");
          const criterionModel = getSection3MatrixCellRenderModel(criterionId, "criterion");
          const tusanModel = getSection3MatrixCellRenderModel(criterionId, "tusan");

          return (
            <div className="section3v2-matrix-row" key={criterion.id}>
              <div className="section3v2-matrix-cell">
                {xhcnPieceId ? (
                  <Section3DropSlot
                    pieceId={xhcnPieceId}
                    zoneId={getSection3PieceAnswerZoneId(xhcnPieceId)}
                  />
                ) : xhcnModel.type === "answer" ? (
                  <ScrapCard
                    variant={xhcnModel.variant}
                    accessory={xhcnModel.accessory}
                    className={`${xhcnModel.className} ${xhcnModel.tiltClass} ${xhcnModel.pinClass}`}
                  >
                    {xhcnModel.pinKey ? (
                      <span className="home-thread-pin-anchor" data-section3-thread-pin={xhcnModel.pinKey} aria-hidden />
                    ) : null}
                    {xhcnModel.text}
                  </ScrapCard>
                ) : null}
              </div>
              <div className="section3v2-matrix-cell">
                {criterionPieceId ? (
                  <Section3DropSlot
                    pieceId={criterionPieceId}
                    zoneId={getSection3PieceAnswerZoneId(criterionPieceId)}
                  />
                ) : criterionModel.type === "criterion" ? (
                  <article className={`scrap section3v2-matrix-criterion ${criterionModel.className} ${criterionModel.tiltClass} ${criterionModel.pinClass}`}>
                    {criterionModel.pinKey ? (
                      <span className="home-thread-pin-anchor" data-section3-thread-pin={criterionModel.pinKey} aria-hidden />
                    ) : null}
                    <span>{criterionModel.text}</span>
                  </article>
                ) : null}
              </div>
              <div className="section3v2-matrix-cell">
                {tusanPieceId ? (
                  <Section3DropSlot
                    pieceId={tusanPieceId}
                    zoneId={getSection3PieceAnswerZoneId(tusanPieceId)}
                  />
                ) : tusanModel.type === "answer" ? (
                  <ScrapCard
                    variant={tusanModel.variant}
                    accessory={tusanModel.accessory}
                    className={`${tusanModel.className} ${tusanModel.tiltClass} ${tusanModel.pinClass}`}
                  >
                    {tusanModel.pinKey ? (
                      <span className="home-thread-pin-anchor" data-section3-thread-pin={tusanModel.pinKey} aria-hidden />
                    ) : null}
                    {tusanModel.text}
                  </ScrapCard>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
