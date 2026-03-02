"use client";

import BoardPhotoCard from "@/components/layout/board-photo-card";
import Section2DropSlot from "@/components/section2/section2-drop-slot";
import Section2GroupedNoteDropZone, {
  type Section2GroupedNoteDefinition,
} from "@/components/section2/section2-grouped-note-drop-zone";
import { getSectionIllustrationSlot } from "@/lib/content-data";

const CORE_NOTES: ReadonlyArray<Section2GroupedNoteDefinition> = [
  {
    text: "thủ tiêu tình trạng áp bức giai cấp, dân tộc",
    className: "section2v2-nature-core-note card-note-blue section1v2-rot-n1",
    detachablePieceId: "s2-qn-core-abolish",
  },
  {
    text: "giải phóng con người một cách triệt để, toàn diện",
    className: "section2v2-nature-core-note card-note-green tape tape-blue section1v2-rot-p1",
  },
  {
    text: "thực hiện quyền tự do, bình đẳng của con người",
    className: "section2v2-nature-core-note card-note-pink section1v2-rot-n2",
    detachablePieceId: "s2-qn-core-equality",
  },
  {
    text: "đảm bảo quyền lực thực sự thuộc về nhân dân",
    className: "section2v2-nature-core-note paper-postit-green section1v2-rot-p2",
    detachablePieceId: "s2-qn-core-power",
  },
];

const POLITICAL_NOTES: ReadonlyArray<Section2GroupedNoteDefinition> = [
  {
    text: "Mang bản chất giai cấp công nhân",
    className: "section2v2-dimension-subnote paper-postit-yellow section1v2-rot-p1",
    detachablePieceId: "s2-qn-political-class",
  },
  {
    text: "Do Đảng Cộng sản lãnh đạo",
    className: "section2v2-dimension-subnote paper-postit-blue section1v2-rot-n1",
    detachablePieceId: "s2-qn-political-party",
  },
  {
    text: "Chủ thể quyền lực nhà nước là nhân dân",
    className: "section2v2-dimension-subnote paper-kraft tape section1v2-rot-p2",
    detachablePieceId: "s2-qn-political-subject",
  },
];

const ECONOMIC_NOTES: ReadonlyArray<Section2GroupedNoteDefinition> = [
  {
    text: "quyền làm chủ của nhân dân về các tư liệu sản xuất chủ yếu",
    className: "section2v2-dimension-subnote paper-postit-yellow tape section1v2-rot-n1",
    detachablePieceId: "s2-qn-economic-ownership-right",
  },
  {
    text: "Quyền làm chủ trong quá trình sản xuất kinh doanh, quản lý và phân phối",
    className: "section2v2-dimension-subnote paper-postit-blue tape tape-blue section1v2-rot-p1",
    detachablePieceId: "s2-qn-economic-process-right",
  },
  {
    text: "động lực cơ bản nhất",
    className: "section2v2-dimension-subnote paper-postit-pink section1v2-rot-p1",
    detachablePieceId: "s2-qn-economic-motivation",
  },
  {
    text: "công hữu về tư liệu sản xuất",
    className: "section2v2-dimension-subnote paper-postit-green section1v2-rot-n1",
    detachablePieceId: "s2-qn-economic-public-ownership",
  },
  {
    text: "phân phối lợi ích theo kết quả lao động",
    className: "section2v2-dimension-subnote paper-lined section1v2-rot-p2",
    detachablePieceId: "s2-qn-economic-distribution",
  },
];

const CULTURAL_NOTES: ReadonlyArray<Section2GroupedNoteDefinition> = [
  {
    text: "hệ tư tưởng Mác–Lênin",
    className: "section2v2-dimension-subnote paper-postit-yellow section1v2-rot-p1",
    detachablePieceId: "s2-qn-cultural-marx-lenin",
  },
  {
    text: "Kế thừa và phát huy tinh hoa văn hóa dân tộc và nhân loại",
    className: "section2v2-dimension-subnote paper-postit-blue tape tape-blue section1v2-rot-n1",
    detachablePieceId: "s2-qn-cultural-inheritance",
  },
  {
    text: "Nhân dân được làm chủ, giải phóng con người, phát triển toàn diện",
    className: "section2v2-dimension-subnote paper-postit-pink tape tape-red section1v2-rot-p2",
    detachablePieceId: "s2-qn-cultural-human-development",
  },
  {
    text: "Kết hợp hài hòa lợi ích",
    className: "section2v2-dimension-subnote paper-postit-green section1v2-rot-n2",
    detachablePieceId: "s2-qn-cultural-harmonize",
  },
];

export default function Section2NatureDimensionsBoard() {
  return (
    <section className="section2v2-nature-wrap mb-8">
      <div className="scrap paper-kraft tape-red section2v2-block-tag section1v2-rot-p1">
        <h2>2. Bản chất của nền dân chủ xã hội chủ nghĩa</h2>
      </div>

      <Section2GroupedNoteDropZone
        blockZoneId="s2-zone-block-core-notes"
        notes={CORE_NOTES}
        className="section2v2-nature-core-notes"
        preserveLayout
      />

      <div className="section2v2-nature-grid">
        <article className="scrap section2v2-dimension-card paper-postit-green section1v2-rot-n1">
          <BoardPhotoCard
            slot={getSectionIllustrationSlot("s2-political")}
            className="section2v2-dimension-photo section2v2-photo-tilt-nature-1"
            pinAttribute="data-section2-thread-pin"
            pinKey="nature-1"
            sizes="(max-width: 768px) 72vw, 210px"
          />
          <h3>Bản chất chính trị</h3>
          <p>
            sự lãnh đạo chính trị của giai cấp công nhân thông qua đảng của nó đối với toàn xã hội,
            thực hiện quyền lực và lợi ích của toàn thể nhân dân
          </p>
          <Section2GroupedNoteDropZone
            blockZoneId="s2-zone-block-political-notes"
            notes={POLITICAL_NOTES}
            className="section2v2-dimension-subnotes"
          />
        </article>

        <article className="scrap section2v2-dimension-card paper-postit-blue section1v2-rot-p1">
          <BoardPhotoCard
            slot={getSectionIllustrationSlot("s2-economic")}
            className="section2v2-dimension-photo section2v2-photo-tilt-nature-2"
            pinAttribute="data-section2-thread-pin"
            pinKey="nature-2"
            sizes="(max-width: 768px) 72vw, 210px"
          />
          <h3>Bản chất kinh tế</h3>
          <Section2GroupedNoteDropZone
            blockZoneId="s2-zone-block-economic-notes"
            notes={ECONOMIC_NOTES}
            className="section2v2-dimension-subnotes"
          />
        </article>

        <article className="scrap section2v2-dimension-card paper-postit-yellow section1v2-rot-n1">
          <Section2DropSlot pieceId="s2-qn-nature-cultural-image" zoneId="s2-zone-nature-cultural-image" />
          <h3>Bản chất tư tưởng - văn hóa - xã hội</h3>
          <Section2GroupedNoteDropZone
            blockZoneId="s2-zone-block-cultural-notes"
            notes={CULTURAL_NOTES}
            className="section2v2-dimension-subnotes"
          />
        </article>
      </div>
    </section>
  );
}
