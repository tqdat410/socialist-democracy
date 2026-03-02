import type { Section2PieceId } from "@/lib/section2-interactive-data";

export type Section2ImagePieceConfig = {
  slotId: string;
  caption: string;
  frameClassName: string;
  frameType: "section1-polaroid" | "board-polaroid";
  pinKey: string;
};

export type Section2NotePieceConfig = {
  text: string;
  className: string;
  tapeClassName?: string;
  pushpin?: boolean;
  pinKey?: string;
  quoted?: boolean;
};

export const section2ImagePieces: Partial<Record<Section2PieceId, Section2ImagePieceConfig>> = {
  "s2-qn-marx-photo": {
    slotId: "s2-marx-photo",
    caption: "Mác-Lênin",
    frameClassName: "section1v2-polaroid section2v2-marx-photo section2v2-photo-tilt-marx",
    frameType: "section1-polaroid",
    pinKey: "marx-photo",
  },
  "s2-qn-history-1871-image": {
    slotId: "s2-1871",
    caption: "công xã pari 1871",
    frameClassName: "board-polaroid section2v2-history-photo section2v2-history-photo-tilt-1",
    frameType: "board-polaroid",
    pinKey: "history-1871-image",
  },
  "s2-qn-history-1917-image": {
    slotId: "s2-1917",
    caption: "cách mạng tháng mười 1917",
    frameClassName: "board-polaroid section2v2-history-photo section2v2-history-photo-tilt-2",
    frameType: "board-polaroid",
    pinKey: "history-1917-image",
  },
  "s2-qn-nature-cultural-image": {
    slotId: "s2-cultural",
    caption: "tư tưởng - văn hóa - xã hội",
    frameClassName: "board-polaroid section2v2-dimension-photo section2v2-photo-tilt-nature-3",
    frameType: "board-polaroid",
    pinKey: "nature-3",
  },
};

export const section2NotePieces: Partial<Record<Section2PieceId, Section2NotePieceConfig>> = {
  "s2-qn-marx-prepare": {
    text: "không được chuẩn bị để tiến tới cuộc cách mạng đó",
    className: "paper-postit-blue section2v2-marx-note section1v2-rot-pair-2",
    tapeClassName: "tape tape-blue",
  },
  "s2-qn-marx-struggle": {
    text: "cuộc đấu tranh cho dân chủ",
    className: "paper-postit-pink section2v2-marx-note section1v2-rot-n3",
    tapeClassName: "tape tape-red",
  },
  "s2-qn-stage1-subnote": {
    text: "thông qua đấu tranh giai cấp để giành chính quyền nhà nước từ tay giai cấp tư sản",
    className: "paper-lined section2v2-stage-note-small",
    pushpin: true,
    pinKey: "stage-1-subnote",
  },
  "s2-qn-stage2-subnote": {
    text: "Nhà nước của giai cấp công nhân và nhân dân lao động",
    className: "paper-lined section2v2-stage-note-small",
    pushpin: true,
    pinKey: "stage-2-subnote",
  },
  "s2-qn-dev-low-high": {
    text: "từ thấp tới cao",
    className: "paper-postit-pink section2v2-history-keyword section1v2-rot-p2",
    tapeClassName: "tape tape-red",
  },
  "s2-qn-dev-unfinished-complete": {
    text: "chưa hoàn thiện đến hoàn thiện",
    className: "paper-postit-yellow section2v2-history-keyword section1v2-rot-n4",
    tapeClassName: "tape",
  },
  "s2-qn-core-abolish": {
    text: "thủ tiêu tình trạng áp bức giai cấp, dân tộc",
    className: "section2v2-nature-core-note card-note-blue section1v2-rot-p1",
    tapeClassName: "tape tape-blue",
  },
  "s2-qn-core-equality": {
    text: "thực hiện quyền tự do, bình đẳng của con người",
    className: "section2v2-nature-core-note card-note-pink section1v2-rot-n2",
    tapeClassName: "tape tape-red",
  },
  "s2-qn-core-power": {
    text: "đảm bảo quyền lực thực sự thuộc về nhân dân",
    className: "section2v2-nature-core-note paper-postit-green section1v2-rot-p2",
    tapeClassName: "tape",
  },
  "s2-qn-political-class": {
    text: "Mang bản chất giai cấp công nhân",
    className: "section2v2-dimension-subnote paper-postit-yellow section1v2-rot-p1",
    tapeClassName: "tape",
  },
  "s2-qn-political-party": {
    text: "Do Đảng Cộng sản lãnh đạo",
    className: "section2v2-dimension-subnote paper-postit-blue section1v2-rot-n1",
    tapeClassName: "tape tape-blue",
  },
  "s2-qn-political-subject": {
    text: "Chủ thể quyền lực nhà nước là nhân dân",
    className: "section2v2-dimension-subnote paper-kraft section1v2-rot-p2",
    tapeClassName: "tape",
  },
  "s2-qn-economic-ownership-right": {
    text: "quyền làm chủ của nhân dân về các tư liệu sản xuất chủ yếu",
    className: "section2v2-dimension-subnote paper-postit-yellow section1v2-rot-n1",
    tapeClassName: "tape",
  },
  "s2-qn-economic-process-right": {
    text: "Quyền làm chủ trong quá trình sản xuất kinh doanh, quản lý và phân phối",
    className: "section2v2-dimension-subnote paper-postit-blue section1v2-rot-p1",
    tapeClassName: "tape tape-blue",
  },
  "s2-qn-economic-motivation": {
    text: "động lực cơ bản nhất",
    className: "section2v2-dimension-subnote paper-postit-pink section1v2-rot-p1",
    tapeClassName: "tape tape-red",
  },
  "s2-qn-economic-public-ownership": {
    text: "công hữu về tư liệu sản xuất",
    className: "section2v2-dimension-subnote paper-postit-green section1v2-rot-n1",
    tapeClassName: "tape",
  },
  "s2-qn-economic-distribution": {
    text: "phân phối lợi ích theo kết quả lao động",
    className: "section2v2-dimension-subnote paper-lined section1v2-rot-p2",
    tapeClassName: "tape tape-blue",
  },
  "s2-qn-cultural-marx-lenin": {
    text: "hệ tư tưởng Mác–Lênin",
    className: "section2v2-dimension-subnote paper-postit-yellow section1v2-rot-p1",
    tapeClassName: "tape",
  },
  "s2-qn-cultural-inheritance": {
    text: "Kế thừa và phát huy tinh hoa văn hóa dân tộc và nhân loại",
    className: "section2v2-dimension-subnote paper-postit-blue section1v2-rot-n1",
    tapeClassName: "tape tape-blue",
  },
  "s2-qn-cultural-human-development": {
    text: "Nhân dân được làm chủ, giải phóng con người, phát triển toàn diện",
    className: "section2v2-dimension-subnote paper-postit-pink section1v2-rot-p2",
    tapeClassName: "tape tape-red",
  },
  "s2-qn-cultural-harmonize": {
    text: "Kết hợp hài hòa lợi ích",
    className: "section2v2-dimension-subnote paper-postit-green section1v2-rot-n2",
    tapeClassName: "tape tape-blue",
  },
};

export const section2MarxImageUrl = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421374/mac_lenin_opxtki.png";

export function getSection2InventoryFrame(pieceId: Section2PieceId): { width: number; height: number; scale: number } {
  switch (pieceId) {
    case "s2-qn-marx-photo":
    case "s2-qn-history-1871-image":
    case "s2-qn-history-1917-image":
    case "s2-qn-nature-cultural-image":
      return { width: 166, height: 140, scale: 0.55 };
    case "s2-qn-stage1-subnote":
      return { width: 314, height: 126, scale: 0.62 };
    case "s2-qn-stage2-subnote":
      return { width: 268, height: 112, scale: 0.64 };
    case "s2-qn-marx-prepare":
      return { width: 276, height: 94, scale: 0.66 };
    case "s2-qn-marx-struggle":
      return { width: 246, height: 90, scale: 0.68 };
    case "s2-qn-core-abolish":
    case "s2-qn-core-equality":
    case "s2-qn-core-power":
      return { width: 292, height: 88, scale: 0.64 };
    case "s2-qn-cultural-inheritance":
    case "s2-qn-cultural-human-development":
    case "s2-qn-economic-ownership-right":
    case "s2-qn-economic-process-right":
      return { width: 320, height: 96, scale: 0.61 };
    default:
      return { width: 250, height: 86, scale: 0.66 };
  }
}
