"use client";

import BoardPhotoCard from "@/components/layout/board-photo-card";
import {
  getSectionIllustrationSlot,
  section2NatureCoreNotes,
  section2NatureDimensions,
} from "@/lib/content-data";
const SUBNOTE_PAPERS = ["paper-postit-yellow", "paper-postit-blue", "paper-postit-pink", "paper-kraft", "paper-lined"];
const SUBNOTE_TAPES = ["tape", "tape tape-blue", "tape tape-red"];
const SUBNOTE_ROTS = ["section1v2-rot-n1", "section1v2-rot-p1", "section1v2-rot-n2", "section1v2-rot-p2"];
const CORE_NOTE_ROTS = ["section1v2-rot-n1", "section1v2-rot-p1", "section1v2-rot-n2", "section1v2-rot-p2"];
const CORE_NOTE_PAPERS = ["paper-postit-yellow", "card-note-blue", "card-note-green", "card-note-pink"];
const CORE_NOTE_TAPES = ["tape", "tape tape-blue", "tape tape-red", "tape"];

function getSubNotePaperClass(subNote: string, index: number) {
  if (subNote === "Kết hợp hài hòa lợi ích") {
    return "paper-postit-green";
  }
  return SUBNOTE_PAPERS[index % SUBNOTE_PAPERS.length];
}

export default function Section2NatureDimensionsBoard() {
  return (
    <section className="section2v2-nature-wrap mb-8">
      <div className="scrap paper-kraft tape-red section2v2-block-tag section1v2-rot-p1">
        <h2>2. Bản chất của nền dân chủ xã hội chủ nghĩa</h2>
      </div>

      <div className="section2v2-nature-core-notes">
        {section2NatureCoreNotes.map((note, noteIndex) => (
          <article
            key={`section2-core-note-${noteIndex}`}
            className={`scrap section2v2-nature-core-note ${CORE_NOTE_PAPERS[noteIndex % CORE_NOTE_PAPERS.length]} ${CORE_NOTE_TAPES[noteIndex % CORE_NOTE_TAPES.length]} ${CORE_NOTE_ROTS[noteIndex] ?? "section1v2-rot-n1"}`}
          >
            {note}
          </article>
        ))}
      </div>

      <div className="section2v2-nature-grid">
        {section2NatureDimensions.map((dimension, index) => (
          <article
            key={dimension.id}
            className={`scrap section2v2-dimension-card ${dimension.id === "chinhtri" ? "paper-postit-green" : index % 2 === 0 ? "paper-postit-yellow" : "paper-postit-blue"} ${index === 1 ? "section1v2-rot-p1" : "section1v2-rot-n1"}`}
          >
            <BoardPhotoCard
              slot={getSectionIllustrationSlot(dimension.illustrationSlotId)}
              className={`section2v2-dimension-photo section2v2-photo-tilt-nature-${index + 1}`}
              pinAttribute="data-section2-thread-pin"
              pinKey={`nature-${index + 1}`}
              sizes="(max-width: 768px) 72vw, 210px"
            />
            <h3>{dimension.title}</h3>
            {dimension.detail ? <p>{dimension.detail}</p> : null}
            <div className="section2v2-dimension-subnotes">
              {dimension.subNotes.map((subNote, subNoteIndex) => (
                <article
                  key={`${dimension.id}-subnote-${subNoteIndex}`}
                  className={`scrap section2v2-dimension-subnote ${getSubNotePaperClass(subNote, subNoteIndex + index)} ${SUBNOTE_TAPES[subNoteIndex % SUBNOTE_TAPES.length]} ${SUBNOTE_ROTS[subNoteIndex % SUBNOTE_ROTS.length]}`}
                >
                  {subNote}
                </article>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
