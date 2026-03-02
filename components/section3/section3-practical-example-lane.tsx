"use client";

import BoardPhotoCard from "@/components/layout/board-photo-card";
import {
  getSectionIllustrationSlot,
  section3PracticalExamples,
} from "@/lib/content-data";

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

          return (
            <article key={example.id} className={`scrap section3v2-example-card ${paperClass} ${tiltClass}`}>
              <BoardPhotoCard
                slot={getSectionIllustrationSlot(example.illustrationSlotId)}
                className="section3v2-example-photo"
                pinAttribute="data-section3-thread-pin"
                pinKey={`example-${index + 1}`}
                sizes="(max-width: 768px) 74vw, 220px"
              />

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
