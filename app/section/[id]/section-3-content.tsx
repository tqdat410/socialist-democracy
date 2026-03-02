"use client";

import ExportButton from "@/components/export/export-button";
import BoardPhotoCard from "@/components/layout/board-photo-card";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import Section3ComparisonMatrixBoard from "@/components/section3/section3-comparison-matrix-board";
import Section3PracticalExampleLane from "@/components/section3/section3-practical-example-lane";
import Section3ThreadOverlay from "@/components/section3/section3-thread-overlay";
import { getSectionIllustrationSlot } from "@/lib/content-data";

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

        <section className="section3v2-hero-wrap mb-8">
          <article className="scrap section3v2-title-note pushpin section1v2-rot-n2">
            <span className="home-thread-pin-anchor" data-section3-thread-pin="hero-title" aria-hidden />
            <h1 className="section3v2-hero-title">Bản chất DC XHCN và DC Tư sản</h1>
          </article>

          <article className="scrap paper-lined pushpin section3v2-guiding-note section1v2-rot-p1">
            <span className="home-thread-pin-anchor" data-section3-thread-pin="hero-guiding" aria-hidden />
            <p>
              Thông qua những ví dụ thực tiễn, sinh viên hãy chứng minh sự khác nhau về bản chất giữa dân chủ xã hội chủ
              nghĩa và dân chủ tư sản?
            </p>
          </article>

          <div className="section3v2-hero-dual-grid">
            <BoardPhotoCard
              slot={getSectionIllustrationSlot("s3-hero-xhcn")}
              className="section3v2-hero-dual-photo section3v2-hero-dual-photo-left section1v2-rot-image-1"
              pinAttribute="data-section3-thread-pin"
              pinKey="hero-xhcn"
              sizes="(max-width: 768px) 78vw, 320px"
            />
            <BoardPhotoCard
              slot={getSectionIllustrationSlot("s3-hero-ts")}
              className="section3v2-hero-dual-photo section3v2-hero-dual-photo-right section1v2-rot-image-2"
              pinAttribute="data-section3-thread-pin"
              pinKey="hero-ts"
              sizes="(max-width: 768px) 78vw, 320px"
            />
          </div>
        </section>

        <div>
          <Section3ComparisonMatrixBoard />
        </div>

        <div>
          <Section3PracticalExampleLane />
        </div>

        <div className="mb-8">
          <article className="scrap paper-kraft tape tape-red section3v2-final-conclusion-note section1v2-rot-n1">
            <p>
              Kết luận: DC XHCN bảo vệ quyền lao động như một quyền cơ bản do nhà nước đảm bảo; DC TS phụ thuộc nhiều vào
              tương quan lực lượng giữa chủ và thợ theo cơ chế thị trường.
            </p>
          </article>
        </div>
      </CorkBoard>
    </main>
  );
}
