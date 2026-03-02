import { section3ComparisonCriteria } from "@/lib/content-data";
import type { AccessoryType, CardVariant } from "@/components/cards/scrap-card";
import {
  type Section3CriterionId,
  type Section3MatrixColumn,
  type Section3PieceId,
} from "@/lib/section3-interactive-data";
import { section3Items } from "@/lib/quiz-data";

export type Section3ImagePieceConfig = {
  slotId: string;
  caption: string;
  frameClassName: string;
  pinKey: string;
};

export type Section3MatrixStyleConfig = {
  criterionClass: string;
  criterionTiltClass: string;
  xhcnTiltClass: string;
  tusanTiltClass: string;
  xhcnAccessory: "tape" | "tape-red" | "tape-blue";
  tusanAccessory: "tape" | "tape-red" | "tape-blue";
};

export const section3ImagePieces: Partial<Record<Section3PieceId, Section3ImagePieceConfig>> = {
  "s3-qn-hero-xhcn-image": {
    slotId: "s3-hero-xhcn",
    caption: "xã hội chủ nghĩa",
    frameClassName: "section3v2-hero-dual-photo section3v2-hero-dual-photo-left section1v2-rot-image-1",
    pinKey: "hero-xhcn",
  },
  "s3-qn-example-1-image": {
    slotId: "s3-example-1",
    caption: "ví dụ 1",
    frameClassName: "section3v2-example-photo",
    pinKey: "example-1",
  },
  "s3-qn-example-2-image": {
    slotId: "s3-example-2",
    caption: "ví dụ 2",
    frameClassName: "section3v2-example-photo",
    pinKey: "example-2",
  },
  "s3-qn-example-3-image": {
    slotId: "s3-example-3",
    caption: "ví dụ 3",
    frameClassName: "section3v2-example-photo",
    pinKey: "example-3",
  },
};

export const section3MatrixStyleByCriterionId: Record<Section3CriterionId, Section3MatrixStyleConfig> = {
  giaicap: {
    criterionClass: "paper-postit-yellow tape",
    criterionTiltClass: "section3v2-tilt-a",
    xhcnTiltClass: "section3v2-tilt-b",
    tusanTiltClass: "section3v2-tilt-c",
    xhcnAccessory: "tape-blue",
    tusanAccessory: "tape-red",
  },
  coche: {
    criterionClass: "paper-postit-blue tape tape-blue",
    criterionTiltClass: "section3v2-tilt-d",
    xhcnTiltClass: "section3v2-tilt-e",
    tusanTiltClass: "section3v2-tilt-f",
    xhcnAccessory: "tape",
    tusanAccessory: "tape-red",
  },
  sohuu: {
    criterionClass: "paper-postit-pink tape tape-red",
    criterionTiltClass: "section3v2-tilt-g",
    xhcnTiltClass: "section3v2-tilt-h",
    tusanTiltClass: "section3v2-tilt-i",
    xhcnAccessory: "tape-blue",
    tusanAccessory: "tape",
  },
  phanphoi: {
    criterionClass: "paper-kraft tape",
    criterionTiltClass: "section3v2-tilt-j",
    xhcnTiltClass: "section3v2-tilt-k",
    tusanTiltClass: "section3v2-tilt-l",
    xhcnAccessory: "tape",
    tusanAccessory: "tape-blue",
  },
  phamvi: {
    criterionClass: "paper-postit-green tape tape-blue",
    criterionTiltClass: "section3v2-tilt-m",
    xhcnTiltClass: "section3v2-tilt-n",
    tusanTiltClass: "section3v2-tilt-o",
    xhcnAccessory: "tape-red",
    tusanAccessory: "tape",
  },
  nhanuoc: {
    criterionClass: "paper-postit-yellow tape tape-red",
    criterionTiltClass: "section3v2-tilt-p",
    xhcnTiltClass: "section3v2-tilt-q",
    tusanTiltClass: "section3v2-tilt-r",
    xhcnAccessory: "tape-blue",
    tusanAccessory: "tape-red",
  },
  tutuong: {
    criterionClass: "paper-postit-blue tape",
    criterionTiltClass: "section3v2-tilt-s",
    xhcnTiltClass: "section3v2-tilt-t",
    tusanTiltClass: "section3v2-tilt-u",
    xhcnAccessory: "tape-red",
    tusanAccessory: "tape-blue",
  },
};

export const section3ThreadedPinByItemId = {
  "s3-11": "matrix-note-1",
  "s3-03": "matrix-note-6",
  "s3-02": "matrix-note-7",
  "s3-12": "matrix-note-8",
  "s3-13": "matrix-note-9",
  "s3-10": "matrix-note-3",
  "s3-07": "matrix-note-4",
  "s3-06": "matrix-note-5",
} as const;

export const section3ThreadedPinByCriterionId = {
  coche: "matrix-note-2",
} as const;

export const section3GoldPinKeys = new Set([
  "matrix-note-1",
  "matrix-note-2",
  "matrix-note-3",
  "matrix-note-4",
  "matrix-note-5",
]);

const section3ItemByZone = new Map(section3Items.map((item) => [item.answer, item]));
const section3CriterionById = new Map(section3ComparisonCriteria.map((criterion) => [criterion.id, criterion]));

export type Section3MatrixCellRenderModel =
  | {
      type: "criterion";
      text: string;
      className: string;
      tiltClass: string;
      pinKey?: string;
      pinClass: string;
    }
  | {
      type: "answer";
      text: string;
      variant: CardVariant;
      className: string;
      accessory: AccessoryType;
      tiltClass: string;
      pinKey?: string;
      pinClass: string;
    };

export function getSection3MatrixCellRenderModel(
  criterionId: Section3CriterionId,
  column: Section3MatrixColumn,
): Section3MatrixCellRenderModel {
  const criterion = section3CriterionById.get(criterionId);
  const styleConfig = section3MatrixStyleByCriterionId[criterionId];
  if (!criterion || !styleConfig) {
    throw new Error(`Missing section 3 matrix config for criterion: ${criterionId}`);
  }

  if (column === "criterion") {
    const pinKey = section3ThreadedPinByCriterionId[criterionId as keyof typeof section3ThreadedPinByCriterionId];
    const className = pinKey ? "paper-postit-blue pushpin" : styleConfig.criterionClass;
    const pinClass = pinKey && section3GoldPinKeys.has(pinKey) ? "section3v2-gold-pin" : "";
    return {
      type: "criterion",
      text: criterion.label,
      className,
      tiltClass: styleConfig.criterionTiltClass,
      pinKey,
      pinClass,
    };
  }

  const zoneId = column === "xhcn" ? criterion.xhcnZoneId : criterion.tusanZoneId;
  const item = section3ItemByZone.get(zoneId);
  if (!item) {
    throw new Error(`Missing section 3 item for zone: ${zoneId}`);
  }

  const pinKey = section3ThreadedPinByItemId[item.id as keyof typeof section3ThreadedPinByItemId];
  const pinClass = pinKey && section3GoldPinKeys.has(pinKey) ? "section3v2-gold-pin" : "";
  const className = column === "xhcn" ? "section3v2-matrix-answer section3v2-matrix-answer-xhcn" : "section3v2-matrix-answer section3v2-matrix-answer-tusan";
  const tiltClass = column === "xhcn" ? styleConfig.xhcnTiltClass : styleConfig.tusanTiltClass;
  const baseAccessory = column === "xhcn" ? styleConfig.xhcnAccessory : styleConfig.tusanAccessory;
  const accessory: AccessoryType = pinKey ? "pushpin" : baseAccessory;

  return {
    type: "answer",
    text: item.text,
    variant: item.cardVariant,
    className,
    accessory,
    tiltClass,
    pinKey,
    pinClass,
  };
}

export function getSection3InventoryFrame(pieceId: Section3PieceId): { width: number; height: number; scale: number } {
  switch (pieceId) {
    case "s3-qn-hero-xhcn-image":
    case "s3-qn-example-1-image":
    case "s3-qn-example-2-image":
    case "s3-qn-example-3-image":
      return { width: 166, height: 140, scale: 0.55 };

    case "s3-qn-giaicap-criterion":
    case "s3-qn-coche-criterion":
    case "s3-qn-sohuu-criterion":
    case "s3-qn-phanphoi-criterion":
    case "s3-qn-phamvi-tusan":
    case "s3-qn-nhanuoc-criterion":
    case "s3-qn-tutuong-criterion":
      return { width: 206, height: 84, scale: 0.68 };

    case "s3-qn-coche-xhcn":
    case "s3-qn-nhanuoc-xhcn":
    case "s3-qn-tutuong-xhcn":
      return { width: 318, height: 104, scale: 0.58 };

    default:
      return { width: 280, height: 96, scale: 0.62 };
  }
}
