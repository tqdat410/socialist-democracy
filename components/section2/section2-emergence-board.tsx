"use client";

import BoardPhotoCard from "@/components/layout/board-photo-card";
import Section2DropSlot from "@/components/section2/section2-drop-slot";
import Section2GroupedNoteDropZone, {
  type Section2GroupedNoteDefinition,
} from "@/components/section2/section2-grouped-note-drop-zone";
import { getSectionIllustrationSlot } from "@/lib/content-data";

const MARX_MAIN_NOTE = "giai cấp vô sản không thể hoàn thành cuộc cách mạng XHCN";
const MARX_QUOTE = "Chủ nghĩa xã hội không thể duy trì và thắng lợi, nếu không thực hiện đầy đủ dân chủ";
const SECTION2_CLOSING_QUOTE = "\"Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với nền dân chủ có trong lịch sử nhân loại, là nền dân chủ mà ở đó, mọi quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ; dân chủ và pháp luật nằm trong sự thống nhất biện chứng; được thực hiện bằng nhà nước pháp quyền xã hội chủ nghĩa, đặt dưới sự lãnh đạo của Đảng Cộng sản.\"  — Giáo trình CNXHKH 2021, tr.134";

const DEVELOPMENT_GROUP_NOTES: ReadonlyArray<Section2GroupedNoteDefinition> = [
  {
    text: "từ thấp tới cao",
    className: "paper-postit-pink tape tape-red section2v2-history-keyword section1v2-rot-p2",
    detachablePieceId: "s2-qn-dev-low-high",
  },
  {
    text: "chưa hoàn thiện đến hoàn thiện",
    className: "paper-postit-yellow tape section2v2-history-keyword section1v2-rot-n4",
    detachablePieceId: "s2-qn-dev-unfinished-complete",
  },
  {
    text: "kế thừa, chọn lọc",
    className: "paper-lined tape tape-blue section2v2-history-keyword section1v2-rot-pair-4",
    pinKey: "history-development-note",
  },
];

export default function Section2EmergenceBoard() {
  return (
    <section className="section2v2-emergence-wrap mb-8">
      <div className="scrap paper-kraft tape section2v2-block-tag section2v2-block-tag-center section1v2-rot-n1">
        <h2>1. Quá trình ra đời của nền dân chủ XHCN</h2>
      </div>

      <div className="section2v2-marx-intro mb-5">
        <Section2DropSlot pieceId="s2-qn-marx-photo" zoneId="s2-zone-marx-photo" />

        <div className="section2v2-marx-notes">
          <article className="scrap paper-postit-yellow pushpin section2v2-marx-note section1v2-rot-p3">
            <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-main" aria-hidden />
            {MARX_MAIN_NOTE}
          </article>

          <div className="section2v2-marx-note-row">
            <article className="scrap card-magazine pushpin section2v2-marx-note section2v2-marx-note-if section1v2-rot-n4">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-if" aria-hidden />
              NẾU
            </article>
            <Section2DropSlot pieceId="s2-qn-marx-prepare" zoneId="s2-zone-marx-prepare" />
          </div>

          <div className="section2v2-marx-note-row">
            <article className="scrap paper-kraft pushpin section2v2-marx-note section2v2-marx-note-through section1v2-rot-p2">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-through" aria-hidden />
              thông qua
            </article>
            <Section2DropSlot pieceId="s2-qn-marx-struggle" zoneId="s2-zone-marx-struggle" />
          </div>

          <article className="scrap paper-lined pushpin section2v2-marx-quote section1v2-rot-pair-3">
            <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-quote" aria-hidden />
            <blockquote className="section1v2-quote section1v2-quote-sm">&quot;{MARX_QUOTE}&quot;</blockquote>
          </article>
        </div>
      </div>

      <div className="section2v2-stage-columns mb-6">
        <div className="section2v2-stage-column">
          <article className="scrap paper-postit-yellow section2v2-stage-card-large section1v2-rot-n3">
            <h3>Giai đoạn 1</h3>
            <p>Giai cấp công nhân làm cách mạng giành lấy dân chủ</p>
            <Section2DropSlot pieceId="s2-qn-stage1-subnote" zoneId="s2-zone-stage1-subnote" />
          </article>
        </div>

        <div className="section2v2-stage-column">
          <article className="scrap paper-postit-blue section2v2-stage-card-large section1v2-rot-p2">
            <h3>Giai đoạn 2</h3>
            <p>Giai cấp công nhân dùng dân chủ tổ chức Nhà nước XHCN</p>
            <Section2DropSlot pieceId="s2-qn-stage2-subnote" zoneId="s2-zone-stage2-subnote" />
          </article>
        </div>
      </div>

      <div className="section2v2-history-strip">
        <article className="section2v2-history-item">
          <Section2DropSlot pieceId="s2-qn-history-1871-image" zoneId="s2-zone-history-1871-image" />
          <div className="section2v2-history-note-stack">
            <article className="scrap paper-postit-yellow tape section2v2-history-keyword section1v2-rot-p3">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="history-1871-note" aria-hidden />
              Phôi thai của nền dân chủ XHCN
            </article>
            <article className="scrap paper-kraft tape tape-red section2v2-history-keyword section1v2-rot-n4">
              giai cấp công nhân lập ra
            </article>
          </div>
        </article>

        <article className="section2v2-history-item">
          <Section2DropSlot pieceId="s2-qn-history-1917-image" zoneId="s2-zone-history-1917-image" />
          <div className="section2v2-history-note-stack">
            <article className="scrap paper-postit-blue tape tape-blue section2v2-history-keyword section1v2-rot-n3">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="history-1917-note" aria-hidden />
              dân chủ XHCN chính thức được xác lập
            </article>
            <article className="scrap paper-lined tape section2v2-history-keyword section1v2-rot-pair-2">
              nhà nước xã hội chủ nghĩa đầu tiên
            </article>
          </div>
        </article>

        <article className="section2v2-history-item">
          <BoardPhotoCard
            slot={getSectionIllustrationSlot("s2-development")}
            className="section2v2-history-photo section2v2-history-photo-tilt-3"
            pinAttribute="data-section2-thread-pin"
            pinKey="history-development-image"
            sizes="(max-width: 768px) 74vw, 220px"
          />
          <Section2GroupedNoteDropZone
            blockZoneId="s2-zone-block-development-notes"
            notes={DEVELOPMENT_GROUP_NOTES}
            className="section2v2-history-note-stack"
          />
        </article>
      </div>

      <article className="scrap paper-lined pushpin section2v2-closing-note section1v2-rot-n2">
        <span className="home-thread-pin-anchor" data-section2-thread-pin="closing-note" aria-hidden />
        <blockquote className="section1v2-quote section1v2-quote-sm">{SECTION2_CLOSING_QUOTE}</blockquote>
      </article>
    </section>
  );
}
