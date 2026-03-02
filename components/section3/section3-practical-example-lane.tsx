"use client";

import Section3DropSlot from "@/components/section3/section3-drop-slot";
import { section3PracticalExamples } from "@/lib/content-data";
import { getSection3PieceAnswerZoneId, type Section3PieceId } from "@/lib/section3-interactive-data";

const examplePaperClasses = [
  "paper-postit-yellow",
  "paper-postit-blue",
  "paper-postit-pink",
] as const;
const exampleTiltClasses = [
  "section3v2-tilt-v",
  "section3v2-tilt-w",
  "section3v2-tilt-x",
] as const;

const exampleImagePieceIds: readonly Section3PieceId[] = [
  "s3-qn-example-1-image",
  "s3-qn-example-2-image",
  "s3-qn-example-3-image",
];

export default function Section3PracticalExampleLane() {
  return (
    <section className="section3v2-example-wrap mb-8">
      <div className="scrap paper-kraft tape section3v2-block-tag section1v2-rot-n1">
        <h2>Ví dụ thực tiễn chứng minh sự khác biệt bản chất</h2>
      </div>

      <div className="section3v2-example-grid">
        {section3PracticalExamples.map((example, index) => {
          const paperClass = examplePaperClasses[index % examplePaperClasses.length];
          const tiltClass = exampleTiltClasses[index % exampleTiltClasses.length];
          const imagePieceId = exampleImagePieceIds[index];

          return (
            <article key={example.id} className={`scrap section3v2-example-card ${paperClass} ${tiltClass}`}>
              <Section3DropSlot pieceId={imagePieceId} zoneId={getSection3PieceAnswerZoneId(imagePieceId)} />

              <h3>{example.title}</h3>

              <p className="section3v2-example-side">
                <strong>DC XHCN:</strong> {example.xhcn}
              </p>
              <p className="section3v2-example-side">
                <strong>DC tư sản:</strong> {example.tusan}
              </p>
              <p className="section3v2-example-conclusion">
                <strong>Kết luận:</strong> {example.conclusion}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
