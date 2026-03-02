"use client";

import BoardPhotoCard from "@/components/layout/board-photo-card";
import {
  getSectionIllustrationSlot,
  section3PracticalExamples,
} from "@/lib/content-data";

export default function Section3PracticalExampleLane() {
  return (
    <section className="section3v2-example-wrap mb-8">
      <div className="scrap paper-kraft tape section3v2-block-tag section1v2-rot-n1">
        <h2>Ví dụ thực tiễn chứng minh sự khác biệt bản chất</h2>
      </div>

      <div className="section3v2-example-grid">
        {section3PracticalExamples.map((example, index) => (
          <article
            key={example.id}
            className={`scrap section3v2-example-card ${index % 2 === 0 ? "paper-postit-yellow" : "paper-postit-blue"} ${index === 1 ? "section1v2-rot-p2" : "section1v2-rot-n2"}`}
          >
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
        ))}
      </div>
    </section>
  );
}
