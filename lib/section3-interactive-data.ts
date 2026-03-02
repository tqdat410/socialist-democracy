import type { DragItem, DropZoneConfig } from "@/lib/quiz-data";

export type Section3CriterionId =
  | "giaicap"
  | "coche"
  | "sohuu"
  | "phanphoi"
  | "phamvi"
  | "nhanuoc"
  | "tutuong";

export type Section3MatrixColumn = "xhcn" | "criterion" | "tusan";

export type Section3PieceId =
  | "s3-qn-hero-xhcn-image"
  | "s3-qn-example-1-image"
  | "s3-qn-example-2-image"
  | "s3-qn-example-3-image"
  | "s3-qn-giaicap-criterion"
  | "s3-qn-giaicap-tusan"
  | "s3-qn-coche-xhcn"
  | "s3-qn-coche-criterion"
  | "s3-qn-sohuu-xhcn"
  | "s3-qn-sohuu-criterion"
  | "s3-qn-phanphoi-criterion"
  | "s3-qn-phanphoi-tusan"
  | "s3-qn-phamvi-xhcn"
  | "s3-qn-phamvi-tusan"
  | "s3-qn-nhanuoc-xhcn"
  | "s3-qn-nhanuoc-criterion"
  | "s3-qn-tutuong-criterion"
  | "s3-qn-tutuong-xhcn";

export type Section3ZoneId =
  | "s3-zone-hero-xhcn-image"
  | "s3-zone-example-1-image"
  | "s3-zone-example-2-image"
  | "s3-zone-example-3-image"
  | "s3-zone-note-giaicap-criterion"
  | "s3-zone-note-giaicap-tusan"
  | "s3-zone-note-coche-xhcn"
  | "s3-zone-note-coche-criterion"
  | "s3-zone-note-sohuu-xhcn"
  | "s3-zone-note-sohuu-criterion"
  | "s3-zone-note-phanphoi-criterion"
  | "s3-zone-note-phanphoi-tusan"
  | "s3-zone-note-phamvi-xhcn"
  | "s3-zone-note-phamvi-tusan"
  | "s3-zone-note-nhanuoc-xhcn"
  | "s3-zone-note-nhanuoc-criterion"
  | "s3-zone-note-tutuong-criterion"
  | "s3-zone-note-tutuong-xhcn";

type Section3InteractiveEntry = {
  id: Section3PieceId;
  answerZoneId: Section3ZoneId;
  label: string;
  cardVariant: DragItem["cardVariant"];
};

const section3InteractiveEntries: ReadonlyArray<Section3InteractiveEntry> = [
  {
    id: "s3-qn-hero-xhcn-image",
    answerZoneId: "s3-zone-hero-xhcn-image",
    label: "Ảnh minh họa XHCN",
    cardVariant: "note-blue",
  },
  {
    id: "s3-qn-example-1-image",
    answerZoneId: "s3-zone-example-1-image",
    label: "Ảnh ví dụ 1",
    cardVariant: "note-blue",
  },
  {
    id: "s3-qn-example-2-image",
    answerZoneId: "s3-zone-example-2-image",
    label: "Ảnh ví dụ 2",
    cardVariant: "note-blue",
  },
  {
    id: "s3-qn-example-3-image",
    answerZoneId: "s3-zone-example-3-image",
    label: "Ảnh ví dụ 3",
    cardVariant: "note-blue",
  },
  {
    id: "s3-qn-giaicap-criterion",
    answerZoneId: "s3-zone-note-giaicap-criterion",
    label: "Tiêu chí giai cấp lãnh đạo",
    cardVariant: "note",
  },
  {
    id: "s3-qn-giaicap-tusan",
    answerZoneId: "s3-zone-note-giaicap-tusan",
    label: "Nội dung tư sản - giai cấp",
    cardVariant: "note-pink",
  },
  {
    id: "s3-qn-coche-xhcn",
    answerZoneId: "s3-zone-note-coche-xhcn",
    label: "Nội dung XHCN - cơ chế",
    cardVariant: "note-blue",
  },
  {
    id: "s3-qn-coche-criterion",
    answerZoneId: "s3-zone-note-coche-criterion",
    label: "Tiêu chí cơ chế chính trị",
    cardVariant: "note",
  },
  {
    id: "s3-qn-sohuu-xhcn",
    answerZoneId: "s3-zone-note-sohuu-xhcn",
    label: "Nội dung XHCN - sở hữu",
    cardVariant: "note-green",
  },
  {
    id: "s3-qn-sohuu-criterion",
    answerZoneId: "s3-zone-note-sohuu-criterion",
    label: "Tiêu chí sở hữu TLSX",
    cardVariant: "note",
  },
  {
    id: "s3-qn-phanphoi-criterion",
    answerZoneId: "s3-zone-note-phanphoi-criterion",
    label: "Tiêu chí phân phối lợi ích",
    cardVariant: "note",
  },
  {
    id: "s3-qn-phanphoi-tusan",
    answerZoneId: "s3-zone-note-phanphoi-tusan",
    label: "Nội dung tư sản - phân phối",
    cardVariant: "note-blue",
  },
  {
    id: "s3-qn-phamvi-xhcn",
    answerZoneId: "s3-zone-note-phamvi-xhcn",
    label: "Nội dung XHCN - phạm vi dân chủ",
    cardVariant: "note-green",
  },
  {
    id: "s3-qn-phamvi-tusan",
    answerZoneId: "s3-zone-note-phamvi-tusan",
    label: "Nội dung tư sản - phạm vi dân chủ",
    cardVariant: "torn",
  },
  {
    id: "s3-qn-nhanuoc-xhcn",
    answerZoneId: "s3-zone-note-nhanuoc-xhcn",
    label: "Nội dung XHCN - bản chất nhà nước",
    cardVariant: "note-green",
  },
  {
    id: "s3-qn-nhanuoc-criterion",
    answerZoneId: "s3-zone-note-nhanuoc-criterion",
    label: "Tiêu chí bản chất nhà nước",
    cardVariant: "note",
  },
  {
    id: "s3-qn-tutuong-criterion",
    answerZoneId: "s3-zone-note-tutuong-criterion",
    label: "Tiêu chí hệ tư tưởng",
    cardVariant: "note",
  },
  {
    id: "s3-qn-tutuong-xhcn",
    answerZoneId: "s3-zone-note-tutuong-xhcn",
    label: "Nội dung XHCN - hệ tư tưởng",
    cardVariant: "magazine",
  },
] as const;

const section3EntryById = new Map(section3InteractiveEntries.map((entry) => [entry.id, entry]));
const section3DropZoneMap = new Map(section3InteractiveEntries.map((entry) => [entry.answerZoneId, entry.label]));

const section3MatrixCellToPieceIdMap = new Map<string, Section3PieceId>([
  ["giaicap:criterion", "s3-qn-giaicap-criterion"],
  ["giaicap:tusan", "s3-qn-giaicap-tusan"],
  ["coche:xhcn", "s3-qn-coche-xhcn"],
  ["coche:criterion", "s3-qn-coche-criterion"],
  ["sohuu:xhcn", "s3-qn-sohuu-xhcn"],
  ["sohuu:criterion", "s3-qn-sohuu-criterion"],
  ["phanphoi:criterion", "s3-qn-phanphoi-criterion"],
  ["phanphoi:tusan", "s3-qn-phanphoi-tusan"],
  ["phamvi:xhcn", "s3-qn-phamvi-xhcn"],
  ["phamvi:tusan", "s3-qn-phamvi-tusan"],
  ["nhanuoc:xhcn", "s3-qn-nhanuoc-xhcn"],
  ["nhanuoc:criterion", "s3-qn-nhanuoc-criterion"],
  ["tutuong:criterion", "s3-qn-tutuong-criterion"],
  ["tutuong:xhcn", "s3-qn-tutuong-xhcn"],
]);

const section3PieceIdToMatrixCellMap = new Map<
  Section3PieceId,
  { criterionId: Section3CriterionId; column: Section3MatrixColumn }
>();

section3MatrixCellToPieceIdMap.forEach((pieceId, key) => {
  const [criterionId, column] = key.split(":") as [Section3CriterionId, Section3MatrixColumn];
  section3PieceIdToMatrixCellMap.set(pieceId, { criterionId, column });
});

export const section3InteractiveItems: DragItem[] = section3InteractiveEntries.map((entry) => ({
  id: entry.id,
  text: entry.label,
  answer: entry.answerZoneId,
  section: "section-3",
  quiz: "3",
  cardVariant: entry.cardVariant,
}));

export const section3InteractiveZones: DropZoneConfig[] = Array.from(section3DropZoneMap.entries()).map(([id, label]) => ({
  id,
  label,
  section: "section-3",
  quiz: "3",
}));

export function isSection3PieceId(value: string): value is Section3PieceId {
  return section3EntryById.has(value as Section3PieceId);
}

export function getSection3PieceAnswerZoneId(pieceId: Section3PieceId): Section3ZoneId {
  return section3EntryById.get(pieceId)!.answerZoneId;
}

export function getSection3MatrixCellPieceId(
  criterionId: Section3CriterionId,
  column: Section3MatrixColumn,
): Section3PieceId | null {
  return section3MatrixCellToPieceIdMap.get(`${criterionId}:${column}`) ?? null;
}

export function getSection3MatrixCellByPieceId(
  pieceId: Section3PieceId,
): { criterionId: Section3CriterionId; column: Section3MatrixColumn } | null {
  return section3PieceIdToMatrixCellMap.get(pieceId) ?? null;
}
