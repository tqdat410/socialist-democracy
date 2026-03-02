import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";

export type Section1PieceId =
  | "s1-qn-greek-date"
  | "s1-qn-greek-demos"
  | "s1-qn-greek-rule"
  | "s1-qn-greek-power"
  | "s1-qn-marx-photo"
  | "s1-qn-marx-note-1"
  | "s1-qn-marx-note-3"
  | "s1-qn-marx-note-4"
  | "s1-qn-hcm-photo"
  | "s1-qn-hcm-quote-left"
  | "s1-qn-hcm-note-right"
  | "s1-ev-image-02"
  | "s1-ev-image-03"
  | "s1-ev-image-04"
  | "s1-ev-image-06"
  | "s1-ev-note-1-seed"
  | "s1-ev-note-1-primitive"
  | "s1-ev-note-1-military"
  | "s1-ev-note-2-slave-owner"
  | "s1-ev-note-3-monarchy"
  | "s1-ev-note-4-late14-early15"
  | "s1-ev-note-4-minority-means"
  | "s1-ev-note-5-proletarian"
  | "s1-ev-note-5-socialist"
  | "s1-ev-note-5-majority-rights"
  | "s1-ev-note-6-classless"
  | "s1-ev-note-6-social-custom";

export type Section1ZoneId =
  | "s1-zone-greek-date"
  | "s1-zone-greek-demos"
  | "s1-zone-greek-rule"
  | "s1-zone-greek-power"
  | "s1-zone-marx-photo"
  | "s1-zone-marx-note-1"
  | "s1-zone-marx-note-3"
  | "s1-zone-marx-note-4"
  | "s1-zone-hcm-photo"
  | "s1-zone-hcm-quote-left"
  | "s1-zone-hcm-note-right"
  | "s1-zone-ev-image-02"
  | "s1-zone-ev-image-03"
  | "s1-zone-ev-image-04"
  | "s1-zone-ev-image-06"
  | "s1-zone-ev-note-1-seed"
  | "s1-zone-ev-note-1-primitive"
  | "s1-zone-ev-note-1-military"
  | "s1-zone-ev-note-2-slave-owner"
  | "s1-zone-ev-note-3-monarchy"
  | "s1-zone-ev-note-4-late14-early15"
  | "s1-zone-ev-note-4-minority-means"
  | "s1-zone-ev-note-5-proletarian"
  | "s1-zone-ev-note-5-socialist"
  | "s1-zone-ev-note-5-majority-rights"
  | "s1-zone-ev-note-6-classless"
  | "s1-zone-ev-note-6-social-custom";

export type Section1EvolutionBlockZoneId =
  | "s1-zone-ev-block-1"
  | "s1-zone-ev-block-2"
  | "s1-zone-ev-block-3"
  | "s1-zone-ev-block-4"
  | "s1-zone-ev-block-5"
  | "s1-zone-ev-block-6";

export type Section1DropTargetZoneId = Section1ZoneId | Section1EvolutionBlockZoneId;

type Section1InteractiveEntry = {
  id: Section1PieceId;
  answerZoneId: Section1ZoneId;
  label: string;
  cardVariant: DragItem["cardVariant"];
  dropTargetZoneId?: Section1DropTargetZoneId;
};

const section1InteractiveEntries: ReadonlyArray<Section1InteractiveEntry> = [
  { id: "s1-qn-greek-date", answerZoneId: "s1-zone-greek-date", label: "Thế kỷ VII-VI TCN", cardVariant: "stamp" },
  { id: "s1-qn-greek-demos", answerZoneId: "s1-zone-greek-demos", label: "DEMOS", cardVariant: "note-green" },
  { id: "s1-qn-greek-rule", answerZoneId: "s1-zone-greek-rule", label: "cai trị", cardVariant: "note-pink" },
  { id: "s1-qn-greek-power", answerZoneId: "s1-zone-greek-power", label: "quyền lực", cardVariant: "torn" },
  { id: "s1-qn-marx-photo", answerZoneId: "s1-zone-marx-photo", label: "Ảnh Mác-Lênin", cardVariant: "note-blue" },
  { id: "s1-qn-marx-note-1", answerZoneId: "s1-zone-marx-note-1", label: "Luận điểm (1)", cardVariant: "note-green" },
  { id: "s1-qn-marx-note-3", answerZoneId: "s1-zone-marx-note-3", label: "Luận điểm (3)", cardVariant: "note-pink" },
  { id: "s1-qn-marx-note-4", answerZoneId: "s1-zone-marx-note-4", label: "Luận điểm (4)", cardVariant: "torn" },
  { id: "s1-qn-hcm-photo", answerZoneId: "s1-zone-hcm-photo", label: "Ảnh Hồ Chí Minh", cardVariant: "note-blue" },
  { id: "s1-qn-hcm-quote-left", answerZoneId: "s1-zone-hcm-quote-left", label: "Quote Hồ Chí Minh", cardVariant: "quote" },
  { id: "s1-qn-hcm-note-right", answerZoneId: "s1-zone-hcm-note-right", label: "Dân chủ là một thể chế chính trị...", cardVariant: "note-blue" },

  { id: "s1-ev-image-02", answerZoneId: "s1-zone-ev-image-02", label: "Ảnh Chiếm hữu nô lệ", cardVariant: "note-blue" },
  { id: "s1-ev-image-03", answerZoneId: "s1-zone-ev-image-03", label: "Ảnh Phong kiến", cardVariant: "note-blue" },
  { id: "s1-ev-image-04", answerZoneId: "s1-zone-ev-image-04", label: "Ảnh Tư bản chủ nghĩa", cardVariant: "note-blue" },
  { id: "s1-ev-image-06", answerZoneId: "s1-zone-ev-image-06", label: "Ảnh Xã hội cộng sản chủ nghĩa", cardVariant: "note-blue" },

  {
    id: "s1-ev-note-1-seed",
    answerZoneId: "s1-zone-ev-note-1-seed",
    dropTargetZoneId: "s1-zone-ev-block-1",
    label: "mầm mống của dân chủ",
    cardVariant: "note-green",
  },
  {
    id: "s1-ev-note-1-primitive",
    answerZoneId: "s1-zone-ev-note-1-primitive",
    dropTargetZoneId: "s1-zone-ev-block-1",
    label: "dân chủ nguyên thủy",
    cardVariant: "note-blue",
  },
  {
    id: "s1-ev-note-1-military",
    answerZoneId: "s1-zone-ev-note-1-military",
    dropTargetZoneId: "s1-zone-ev-block-1",
    label: "dân chủ quân sự",
    cardVariant: "note-pink",
  },
  {
    id: "s1-ev-note-2-slave-owner",
    answerZoneId: "s1-zone-ev-note-2-slave-owner",
    dropTargetZoneId: "s1-zone-ev-block-2",
    label: "dân chủ chủ nô",
    cardVariant: "note-green",
  },
  {
    id: "s1-ev-note-3-monarchy",
    answerZoneId: "s1-zone-ev-note-3-monarchy",
    dropTargetZoneId: "s1-zone-ev-block-3",
    label: "quân chủ phong kiến",
    cardVariant: "note-blue",
  },
  {
    id: "s1-ev-note-4-late14-early15",
    answerZoneId: "s1-zone-ev-note-4-late14-early15",
    dropTargetZoneId: "s1-zone-ev-block-4",
    label: "Cuối XIV - Đầu XV",
    cardVariant: "note-green",
  },
  {
    id: "s1-ev-note-4-minority-means",
    answerZoneId: "s1-zone-ev-note-4-minority-means",
    dropTargetZoneId: "s1-zone-ev-block-4",
    label: "dân chủ của thiểu số những người nắm giữ tư liệu sản xuất",
    cardVariant: "lined",
  },
  {
    id: "s1-ev-note-5-proletarian",
    answerZoneId: "s1-zone-ev-note-5-proletarian",
    dropTargetZoneId: "s1-zone-ev-block-5",
    label: "dân chủ vô sản",
    cardVariant: "note-blue",
  },
  {
    id: "s1-ev-note-5-socialist",
    answerZoneId: "s1-zone-ev-note-5-socialist",
    dropTargetZoneId: "s1-zone-ev-block-5",
    label: "dân chủ XHCN",
    cardVariant: "note-pink",
  },
  {
    id: "s1-ev-note-5-majority-rights",
    answerZoneId: "s1-zone-ev-note-5-majority-rights",
    dropTargetZoneId: "s1-zone-ev-block-5",
    label: "quyền lợi cho đại đa số nhân dân",
    cardVariant: "lined",
  },
  {
    id: "s1-ev-note-6-classless",
    answerZoneId: "s1-zone-ev-note-6-classless",
    dropTargetZoneId: "s1-zone-ev-block-6",
    label: "không còn giai cấp",
    cardVariant: "note-blue",
  },
  {
    id: "s1-ev-note-6-social-custom",
    answerZoneId: "s1-zone-ev-note-6-social-custom",
    dropTargetZoneId: "s1-zone-ev-block-6",
    label: "một tập quán sinh hoạt trong xã hội",
    cardVariant: "lined",
  },
];

const section1EntryById = new Map(section1InteractiveEntries.map((entry) => [entry.id, entry]));
const section1EvolutionBlockZones: Section1EvolutionBlockZoneId[] = [
  "s1-zone-ev-block-1",
  "s1-zone-ev-block-2",
  "s1-zone-ev-block-3",
  "s1-zone-ev-block-4",
  "s1-zone-ev-block-5",
  "s1-zone-ev-block-6",
];

const section1EvolutionNoteBlockEntries = section1InteractiveEntries.filter((entry) =>
  Boolean(entry.dropTargetZoneId && section1EvolutionBlockZones.includes(entry.dropTargetZoneId as Section1EvolutionBlockZoneId)),
);

const section1NotePieceIdsByBlockZone = new Map<Section1EvolutionBlockZoneId, Section1PieceId[]>();
section1EvolutionNoteBlockEntries.forEach((entry) => {
  const zoneId = entry.dropTargetZoneId as Section1EvolutionBlockZoneId;
  const existing = section1NotePieceIdsByBlockZone.get(zoneId) ?? [];
  existing.push(entry.id);
  section1NotePieceIdsByBlockZone.set(zoneId, existing);
});

const section1DropZoneMap = new Map<Section1DropTargetZoneId, string>();
section1InteractiveEntries.forEach((entry) => {
  section1DropZoneMap.set(entry.answerZoneId, entry.label);
  if (entry.dropTargetZoneId) {
    section1DropZoneMap.set(entry.dropTargetZoneId, entry.label);
  }
});

section1EvolutionBlockZones.forEach((zoneId, index) => {
  if (!section1DropZoneMap.has(zoneId)) {
    section1DropZoneMap.set(zoneId, `Block thời kỳ ${index + 1}`);
  }
});

export const section1InteractiveItems: DragItem[] = section1InteractiveEntries.map((entry) => ({
  id: entry.id,
  text: entry.label,
  answer: entry.answerZoneId,
  section: "section-1",
  quiz: "1",
  cardVariant: entry.cardVariant,
}));

export const section1InteractiveZones: DropZoneConfig[] = Array.from(section1DropZoneMap.entries()).map(([id, label]) => ({
  id,
  label,
  section: "section-1",
  quiz: "1",
}));

export function isSection1PieceId(value: string): value is Section1PieceId {
  return section1EntryById.has(value as Section1PieceId);
}

export function isSection1EvolutionBlockZoneId(value: string): value is Section1EvolutionBlockZoneId {
  return section1EvolutionBlockZones.includes(value as Section1EvolutionBlockZoneId);
}

export function isSection1EvolutionNotePieceId(value: string): value is Section1PieceId {
  const entry = section1EntryById.get(value as Section1PieceId);
  return Boolean(entry?.dropTargetZoneId && isSection1EvolutionBlockZoneId(entry.dropTargetZoneId));
}

export function getSection1PieceAnswerZoneId(pieceId: Section1PieceId): Section1ZoneId {
  return section1EntryById.get(pieceId)!.answerZoneId;
}

export function getSection1PieceDropTargetZoneId(pieceId: Section1PieceId): Section1DropTargetZoneId {
  const entry = section1EntryById.get(pieceId)!;
  return entry.dropTargetZoneId ?? entry.answerZoneId;
}

export function getSection1EvolutionNoteBlockZoneId(pieceId: Section1PieceId): Section1EvolutionBlockZoneId | null {
  const entry = section1EntryById.get(pieceId);
  if (!entry?.dropTargetZoneId) return null;
  return isSection1EvolutionBlockZoneId(entry.dropTargetZoneId) ? entry.dropTargetZoneId : null;
}

export function getSection1EvolutionBlockNotePieceIds(zoneId: Section1EvolutionBlockZoneId): ReadonlyArray<Section1PieceId> {
  return section1NotePieceIdsByBlockZone.get(zoneId) ?? [];
}
