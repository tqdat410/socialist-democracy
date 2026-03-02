import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";

export type Section2PieceId =
  | "s2-qn-marx-photo"
  | "s2-qn-marx-prepare"
  | "s2-qn-marx-struggle"
  | "s2-qn-stage1-subnote"
  | "s2-qn-stage2-subnote"
  | "s2-qn-history-1871-image"
  | "s2-qn-history-1917-image"
  | "s2-qn-dev-low-high"
  | "s2-qn-dev-unfinished-complete"
  | "s2-qn-core-abolish"
  | "s2-qn-core-equality"
  | "s2-qn-core-power"
  | "s2-qn-nature-cultural-image"
  | "s2-qn-political-class"
  | "s2-qn-political-party"
  | "s2-qn-political-subject"
  | "s2-qn-economic-ownership-right"
  | "s2-qn-economic-process-right"
  | "s2-qn-economic-motivation"
  | "s2-qn-economic-public-ownership"
  | "s2-qn-economic-distribution"
  | "s2-qn-cultural-marx-lenin"
  | "s2-qn-cultural-inheritance"
  | "s2-qn-cultural-human-development"
  | "s2-qn-cultural-harmonize";

export type Section2ZoneId =
  | "s2-zone-marx-photo"
  | "s2-zone-marx-prepare"
  | "s2-zone-marx-struggle"
  | "s2-zone-stage1-subnote"
  | "s2-zone-stage2-subnote"
  | "s2-zone-history-1871-image"
  | "s2-zone-history-1917-image"
  | "s2-zone-dev-low-high"
  | "s2-zone-dev-unfinished-complete"
  | "s2-zone-core-abolish"
  | "s2-zone-core-equality"
  | "s2-zone-core-power"
  | "s2-zone-nature-cultural-image"
  | "s2-zone-political-class"
  | "s2-zone-political-party"
  | "s2-zone-political-subject"
  | "s2-zone-economic-ownership-right"
  | "s2-zone-economic-process-right"
  | "s2-zone-economic-motivation"
  | "s2-zone-economic-public-ownership"
  | "s2-zone-economic-distribution"
  | "s2-zone-cultural-marx-lenin"
  | "s2-zone-cultural-inheritance"
  | "s2-zone-cultural-human-development"
  | "s2-zone-cultural-harmonize";

export type Section2GroupedBlockZoneId =
  | "s2-zone-block-development-notes"
  | "s2-zone-block-core-notes"
  | "s2-zone-block-political-notes"
  | "s2-zone-block-economic-notes"
  | "s2-zone-block-cultural-notes";

export type Section2DropTargetZoneId = Section2ZoneId | Section2GroupedBlockZoneId;

type Section2InteractiveEntry = {
  id: Section2PieceId;
  answerZoneId: Section2ZoneId;
  label: string;
  cardVariant: DragItem["cardVariant"];
  dropTargetZoneId?: Section2DropTargetZoneId;
};

const section2InteractiveEntries: ReadonlyArray<Section2InteractiveEntry> = [
  { id: "s2-qn-marx-photo", answerZoneId: "s2-zone-marx-photo", label: "Ảnh Mác-Lênin", cardVariant: "note-blue" },
  { id: "s2-qn-marx-prepare", answerZoneId: "s2-zone-marx-prepare", label: "không được chuẩn bị để tiến tới cuộc cách mạng đó", cardVariant: "note-blue" },
  { id: "s2-qn-marx-struggle", answerZoneId: "s2-zone-marx-struggle", label: "cuộc đấu tranh cho dân chủ", cardVariant: "note-pink" },
  { id: "s2-qn-stage1-subnote", answerZoneId: "s2-zone-stage1-subnote", label: "thông qua đấu tranh giai cấp để giành chính quyền nhà nước từ tay giai cấp tư sản", cardVariant: "lined" },
  { id: "s2-qn-stage2-subnote", answerZoneId: "s2-zone-stage2-subnote", label: "Nhà nước của giai cấp công nhân và nhân dân lao động", cardVariant: "lined" },
  { id: "s2-qn-history-1871-image", answerZoneId: "s2-zone-history-1871-image", label: "Ảnh Công xã Pari", cardVariant: "note-blue" },
  { id: "s2-qn-history-1917-image", answerZoneId: "s2-zone-history-1917-image", label: "Ảnh CMT10", cardVariant: "note-blue" },
  {
    id: "s2-qn-dev-low-high",
    answerZoneId: "s2-zone-dev-low-high",
    dropTargetZoneId: "s2-zone-block-development-notes",
    label: "từ thấp tới cao",
    cardVariant: "note-pink",
  },
  {
    id: "s2-qn-dev-unfinished-complete",
    answerZoneId: "s2-zone-dev-unfinished-complete",
    dropTargetZoneId: "s2-zone-block-development-notes",
    label: "chưa hoàn thiện đến hoàn thiện",
    cardVariant: "note",
  },
  {
    id: "s2-qn-core-abolish",
    answerZoneId: "s2-zone-core-abolish",
    dropTargetZoneId: "s2-zone-block-core-notes",
    label: "thủ tiêu tình trạng áp bức giai cấp, dân tộc",
    cardVariant: "note",
  },
  {
    id: "s2-qn-core-equality",
    answerZoneId: "s2-zone-core-equality",
    dropTargetZoneId: "s2-zone-block-core-notes",
    label: "thực hiện quyền tự do, bình đẳng của con người",
    cardVariant: "note-pink",
  },
  {
    id: "s2-qn-core-power",
    answerZoneId: "s2-zone-core-power",
    dropTargetZoneId: "s2-zone-block-core-notes",
    label: "đảm bảo quyền lực thực sự thuộc về nhân dân",
    cardVariant: "note-green",
  },
  { id: "s2-qn-nature-cultural-image", answerZoneId: "s2-zone-nature-cultural-image", label: "Ảnh tư tưởng - văn hóa - xã hội", cardVariant: "note-blue" },
  {
    id: "s2-qn-political-class",
    answerZoneId: "s2-zone-political-class",
    dropTargetZoneId: "s2-zone-block-political-notes",
    label: "Mang bản chất giai cấp công nhân",
    cardVariant: "note",
  },
  {
    id: "s2-qn-political-party",
    answerZoneId: "s2-zone-political-party",
    dropTargetZoneId: "s2-zone-block-political-notes",
    label: "Do Đảng Cộng sản lãnh đạo",
    cardVariant: "note-blue",
  },
  {
    id: "s2-qn-political-subject",
    answerZoneId: "s2-zone-political-subject",
    dropTargetZoneId: "s2-zone-block-political-notes",
    label: "Chủ thể quyền lực nhà nước là nhân dân",
    cardVariant: "note",
  },
  {
    id: "s2-qn-economic-ownership-right",
    answerZoneId: "s2-zone-economic-ownership-right",
    dropTargetZoneId: "s2-zone-block-economic-notes",
    label: "quyền làm chủ của nhân dân về các tư liệu sản xuất chủ yếu",
    cardVariant: "note",
  },
  {
    id: "s2-qn-economic-process-right",
    answerZoneId: "s2-zone-economic-process-right",
    dropTargetZoneId: "s2-zone-block-economic-notes",
    label: "Quyền làm chủ trong quá trình sản xuất kinh doanh, quản lý và phân phối",
    cardVariant: "note-blue",
  },
  {
    id: "s2-qn-economic-motivation",
    answerZoneId: "s2-zone-economic-motivation",
    dropTargetZoneId: "s2-zone-block-economic-notes",
    label: "động lực cơ bản nhất",
    cardVariant: "note-pink",
  },
  {
    id: "s2-qn-economic-public-ownership",
    answerZoneId: "s2-zone-economic-public-ownership",
    dropTargetZoneId: "s2-zone-block-economic-notes",
    label: "công hữu về tư liệu sản xuất",
    cardVariant: "note-green",
  },
  {
    id: "s2-qn-economic-distribution",
    answerZoneId: "s2-zone-economic-distribution",
    dropTargetZoneId: "s2-zone-block-economic-notes",
    label: "phân phối lợi ích theo kết quả lao động",
    cardVariant: "lined",
  },
  {
    id: "s2-qn-cultural-marx-lenin",
    answerZoneId: "s2-zone-cultural-marx-lenin",
    dropTargetZoneId: "s2-zone-block-cultural-notes",
    label: "hệ tư tưởng Mác–Lênin",
    cardVariant: "note",
  },
  {
    id: "s2-qn-cultural-inheritance",
    answerZoneId: "s2-zone-cultural-inheritance",
    dropTargetZoneId: "s2-zone-block-cultural-notes",
    label: "Kế thừa và phát huy tinh hoa văn hóa dân tộc và nhân loại",
    cardVariant: "note-blue",
  },
  {
    id: "s2-qn-cultural-human-development",
    answerZoneId: "s2-zone-cultural-human-development",
    dropTargetZoneId: "s2-zone-block-cultural-notes",
    label: "Nhân dân được làm chủ, giải phóng con người, phát triển toàn diện",
    cardVariant: "note-pink",
  },
  {
    id: "s2-qn-cultural-harmonize",
    answerZoneId: "s2-zone-cultural-harmonize",
    dropTargetZoneId: "s2-zone-block-cultural-notes",
    label: "Kết hợp hài hòa lợi ích",
    cardVariant: "note-green",
  },
];

const section2EntryById = new Map(section2InteractiveEntries.map((entry) => [entry.id, entry]));

const section2GroupedBlockZones: Section2GroupedBlockZoneId[] = [
  "s2-zone-block-development-notes",
  "s2-zone-block-core-notes",
  "s2-zone-block-political-notes",
  "s2-zone-block-economic-notes",
  "s2-zone-block-cultural-notes",
];

const section2GroupedEntries = section2InteractiveEntries.filter((entry) =>
  Boolean(entry.dropTargetZoneId && section2GroupedBlockZones.includes(entry.dropTargetZoneId as Section2GroupedBlockZoneId)),
);

const section2PieceIdsByGroupedZone = new Map<Section2GroupedBlockZoneId, Section2PieceId[]>();
section2GroupedEntries.forEach((entry) => {
  const zoneId = entry.dropTargetZoneId as Section2GroupedBlockZoneId;
  const existing = section2PieceIdsByGroupedZone.get(zoneId) ?? [];
  existing.push(entry.id);
  section2PieceIdsByGroupedZone.set(zoneId, existing);
});

const section2DropZoneMap = new Map<Section2DropTargetZoneId, string>();
section2InteractiveEntries.forEach((entry) => {
  section2DropZoneMap.set(entry.answerZoneId, entry.label);
  if (entry.dropTargetZoneId) {
    section2DropZoneMap.set(entry.dropTargetZoneId, entry.label);
  }
});

section2GroupedBlockZones.forEach((zoneId, index) => {
  if (!section2DropZoneMap.has(zoneId)) {
    section2DropZoneMap.set(zoneId, `Section 2 grouped block ${index + 1}`);
  }
});

export const section2InteractiveItems: DragItem[] = section2InteractiveEntries.map((entry) => ({
  id: entry.id,
  text: entry.label,
  answer: entry.answerZoneId,
  section: "section-2",
  quiz: "2",
  cardVariant: entry.cardVariant,
}));

export const section2InteractiveZones: DropZoneConfig[] = Array.from(section2DropZoneMap.entries()).map(([id, label]) => ({
  id,
  label,
  section: "section-2",
  quiz: "2",
}));

export function isSection2PieceId(value: string): value is Section2PieceId {
  return section2EntryById.has(value as Section2PieceId);
}

export function isSection2GroupedBlockZoneId(value: string): value is Section2GroupedBlockZoneId {
  return section2GroupedBlockZones.includes(value as Section2GroupedBlockZoneId);
}

export function isSection2GroupedPieceId(value: string): value is Section2PieceId {
  const entry = section2EntryById.get(value as Section2PieceId);
  return Boolean(entry?.dropTargetZoneId && isSection2GroupedBlockZoneId(entry.dropTargetZoneId));
}

export function getSection2PieceAnswerZoneId(pieceId: Section2PieceId): Section2ZoneId {
  return section2EntryById.get(pieceId)!.answerZoneId;
}

export function getSection2GroupedBlockZoneId(pieceId: Section2PieceId): Section2GroupedBlockZoneId | null {
  const entry = section2EntryById.get(pieceId);
  if (!entry?.dropTargetZoneId) return null;
  return isSection2GroupedBlockZoneId(entry.dropTargetZoneId) ? entry.dropTargetZoneId : null;
}

export function getSection2GroupedBlockPieceIds(zoneId: Section2GroupedBlockZoneId): ReadonlyArray<Section2PieceId> {
  return section2PieceIdsByGroupedZone.get(zoneId) ?? [];
}
