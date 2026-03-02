"use client";

import Image from "next/image";
import BoardPhotoCard from "@/components/layout/board-photo-card";
import {
  getSectionIllustrationSlot,
} from "@/lib/content-data";
const MARX_LENIN_IMAGE_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421374/mac_lenin_opxtki.png";
const SECTION2_CLOSING_QUOTE = "\"Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với nền dân chủ có trong lịch sử nhân loại, là nền dân chủ mà ở đó, mọi quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ; dân chủ và pháp luật nằm trong sự thống nhất biện chứng; được thực hiện bằng nhà nước pháp quyền xã hội chủ nghĩa, đặt dưới sự lãnh đạo của Đảng Cộng sản.\"  — Giáo trình CNXHKH 2021, tr.134";

const HISTORY_NOTES = [
  {
    slotId: "s2-1871",
    imagePinKey: "history-1871-image",
    notePinKey: "history-1871-note",
    notes: [
      "Phôi thai của nền dân chủ XHCN",
      "giai cấp công nhân lập ra",
    ],
    notePaperClasses: [
      "paper-postit-yellow",
      "paper-kraft",
    ],
    noteTapeClasses: [
      "tape",
      "tape tape-red",
    ],
    photoRotateClass: "section2v2-history-photo-tilt-1",
    noteRotateClasses: [
      "section1v2-rot-p3",
      "section1v2-rot-n4",
    ],
  },
  {
    slotId: "s2-1917",
    imagePinKey: "history-1917-image",
    notePinKey: "history-1917-note",
    notes: [
      "dân chủ XHCN chính thức được xác lập",
      "nhà nước xã hội chủ nghĩa đầu tiên",
    ],
    notePaperClasses: [
      "paper-postit-blue",
      "paper-lined",
    ],
    noteTapeClasses: [
      "tape tape-blue",
      "tape",
    ],
    photoRotateClass: "section2v2-history-photo-tilt-2",
    noteRotateClasses: [
      "section1v2-rot-n3",
      "section1v2-rot-pair-2",
    ],
  },
  {
    slotId: "s2-development",
    imagePinKey: "history-development-image",
    notePinKey: "history-development-note",
    notes: [
      "từ thấp tới cao",
      "chưa hoàn thiện đến hoàn thiện",
      "kế thừa, chọn lọc",
    ],
    notePaperClasses: [
      "paper-postit-pink",
      "paper-postit-yellow",
      "paper-lined",
    ],
    noteTapeClasses: [
      "tape tape-red",
      "tape",
      "tape tape-blue",
    ],
    photoRotateClass: "section2v2-history-photo-tilt-3",
    noteRotateClasses: [
      "section1v2-rot-p2",
      "section1v2-rot-n4",
      "section1v2-rot-pair-4",
    ],
  },
] as const;

export default function Section2EmergenceBoard() {
  return (
    <section className="section2v2-emergence-wrap mb-8">
      <div className="scrap paper-kraft tape section2v2-block-tag section2v2-block-tag-center section1v2-rot-n1">
        <h2>1. Quá trình ra đời của nền dân chủ XHCN</h2>
      </div>

      <div className="section2v2-marx-intro mb-5">
        <figure className="scrap section1v2-polaroid pushpin section2v2-marx-photo section2v2-photo-tilt-marx">
          <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-photo" aria-hidden />
          <div className="section1v2-polaroid-body">
            <Image
              src={MARX_LENIN_IMAGE_URL}
              alt="Ảnh minh họa Mác-Lênin"
              fill
              className="section1v2-polaroid-img"
              sizes="(max-width: 768px) 80vw, 260px"
            />
          </div>
          <figcaption>Mác-Lênin</figcaption>
        </figure>

        <div className="section2v2-marx-notes">
          <article className="scrap paper-postit-yellow pushpin section2v2-marx-note section1v2-rot-p3">
            <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-main" aria-hidden />
            giai cấp vô sản không thể hoàn thành cuộc cách mạng XHCN
          </article>
          <div className="section2v2-marx-note-row">
            <article className="scrap card-magazine pushpin section2v2-marx-note section2v2-marx-note-if section1v2-rot-n4">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-if" aria-hidden />
              NẾU
            </article>
            <article className="scrap paper-postit-blue tape tape-blue section2v2-marx-note section1v2-rot-pair-2">
              không được chuẩn bị để tiến tới cuộc cách mạng đó
            </article>
          </div>
          <div className="section2v2-marx-note-row">
            <article className="scrap paper-kraft pushpin section2v2-marx-note section2v2-marx-note-through section1v2-rot-p2">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-through" aria-hidden />
              thông qua
            </article>
            <article className="scrap paper-postit-pink tape tape-red section2v2-marx-note section1v2-rot-n3">
              cuộc đấu tranh cho dân chủ
            </article>
          </div>
          <article className="scrap paper-lined pushpin section2v2-marx-quote section1v2-rot-pair-3">
            <span className="home-thread-pin-anchor" data-section2-thread-pin="marx-quote" aria-hidden />
            <blockquote className="section1v2-quote section1v2-quote-sm">
              &quot;Chủ nghĩa xã hội không thể duy trì và thắng lợi, nếu không thực hiện đầy đủ dân chủ&quot;
            </blockquote>
          </article>
        </div>
      </div>

      <div className="section2v2-stage-columns mb-6">
        <div className="section2v2-stage-column">
          <article className="scrap paper-postit-yellow section2v2-stage-card-large section1v2-rot-n3">
            <h3>Giai đoạn 1</h3>
            <p>Giai cấp công nhân làm cách mạng giành lấy dân chủ</p>
            <article className="scrap paper-lined pushpin section2v2-stage-note-small">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="stage-1-subnote" aria-hidden />
              thông qua đấu tranh giai cấp để giành chính quyền nhà nước từ tay giai cấp tư sản
            </article>
          </article>
        </div>

        <div className="section2v2-stage-column">
          <article className="scrap paper-postit-blue section2v2-stage-card-large section1v2-rot-p2">
            <h3>Giai đoạn 2</h3>
            <p>Giai cấp công nhân dùng dân chủ tổ chức Nhà nước XHCN</p>
            <article className="scrap paper-lined pushpin section2v2-stage-note-small">
              <span className="home-thread-pin-anchor" data-section2-thread-pin="stage-2-subnote" aria-hidden />
              Nhà nước của giai cấp công nhân và nhân dân lao động
            </article>
          </article>
        </div>
      </div>

      <div className="section2v2-history-strip">
        {HISTORY_NOTES.map((note) => (
          <article key={note.slotId} className="section2v2-history-item">
            <BoardPhotoCard
              slot={getSectionIllustrationSlot(note.slotId)}
              className={`section2v2-history-photo ${note.photoRotateClass}`}
              pinAttribute="data-section2-thread-pin"
              pinKey={note.imagePinKey}
              sizes="(max-width: 768px) 74vw, 220px"
            />
            <div className="section2v2-history-note-stack">
              {note.notes.map((keyword, keywordIndex) => (
                <article
                  key={`${note.slotId}-keyword-${keywordIndex}`}
                  className={`scrap ${note.notePaperClasses[keywordIndex] ?? "paper-postit-yellow"} ${note.noteTapeClasses[keywordIndex] ?? "tape"} section2v2-history-keyword ${note.noteRotateClasses[keywordIndex] ?? "section1v2-rot-p1"}`}
                >
                  {keywordIndex === 0 ? (
                    <span className="home-thread-pin-anchor" data-section2-thread-pin={note.notePinKey} aria-hidden />
                  ) : null}
                  {keyword}
                </article>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className="scrap paper-lined pushpin section2v2-closing-note section1v2-rot-n2">
        <span className="home-thread-pin-anchor" data-section2-thread-pin="closing-note" aria-hidden />
        <blockquote className="section1v2-quote section1v2-quote-sm">
          {SECTION2_CLOSING_QUOTE}
        </blockquote>
      </article>
    </section>
  );
}
