"use client";

import type { Ref } from "react";
import Image from "next/image";
import { getSectionIllustrationSlot } from "@/lib/content-data";
import {
  getSection3MatrixCellByPieceId,
  type Section3PieceId,
} from "@/lib/section3-interactive-data";
import { cn } from "@/lib/utils";
import {
  getSection3InventoryFrame,
  getSection3MatrixCellRenderModel,
  section3ImagePieces,
} from "@/components/section3/section3-piece-config";

type Section3PieceMode = "board" | "ghost" | "inventory";

interface Section3PieceProps {
  pieceId: Section3PieceId;
  mode?: Section3PieceMode;
  className?: string;
  setNodeRef?: Ref<HTMLElement>;
}

function modeClass(mode: Section3PieceMode) {
  if (mode === "ghost") return "section1-piece-ghost";
  if (mode === "inventory") return "section1-piece-inventory";
  return "";
}

const section3VariantClass: Record<string, string> = {
  note: "card-note",
  quote: "card-quote",
  stamp: "card-stamp",
  keyword: "card-keyword",
  magazine: "card-magazine",
  torn: "card-torn",
  lined: "card-lined",
  "note-pink": "card-note-pink",
  "note-blue": "card-note-blue",
  "note-green": "card-note-green",
};

const section3AccessoryClass: Record<string, string> = {
  tape: "tape",
  "tape-red": "tape tape-red",
  "tape-blue": "tape tape-blue",
  pushpin: "pushpin",
  none: "",
};

function renderImagePiece(
  pieceId: Section3PieceId,
  mode: Section3PieceMode,
  className?: string,
  setNodeRef?: Ref<HTMLElement>,
) {
  const imagePiece = section3ImagePieces[pieceId];
  if (!imagePiece) return null;

  const isGhost = mode === "ghost";
  const showPushpin = mode !== "inventory";
  const showPins = mode !== "inventory";
  const slot = getSectionIllustrationSlot(imagePiece.slotId);

  return (
    <figure
      ref={setNodeRef as Ref<HTMLElement>}
      data-section3-piece={pieceId}
      className={cn(
        "scrap board-polaroid",
        imagePiece.frameClassName,
        showPushpin && "pushpin",
        modeClass(mode),
        className,
      )}
    >
      {showPins ? (
        <span className="home-thread-pin-anchor" data-section3-thread-pin={imagePiece.pinKey} aria-hidden />
      ) : null}
      {isGhost ? (
        <div className="section1-piece-ghost-image">
          <span className="section1-piece-question">?</span>
        </div>
      ) : (
        <>
          <div className="board-polaroid-body">
            {slot?.src ? (
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                className="board-polaroid-img"
                sizes="(max-width: 768px) 86vw, 250px"
              />
            ) : null}
          </div>
          <figcaption>{slot?.caption ?? imagePiece.caption}</figcaption>
        </>
      )}
    </figure>
  );
}

function renderMatrixNotePiece(
  pieceId: Section3PieceId,
  mode: Section3PieceMode,
  className?: string,
  setNodeRef?: Ref<HTMLElement>,
) {
  const matrixCell = getSection3MatrixCellByPieceId(pieceId);
  if (!matrixCell) return null;

  const model = getSection3MatrixCellRenderModel(matrixCell.criterionId, matrixCell.column);
  const isGhost = mode === "ghost";
  const showPins = mode !== "inventory";
  const showPushpinForGhost = mode === "ghost" && Boolean(model.pinKey);

  if (model.type === "criterion") {
    return (
      <article
        ref={setNodeRef as Ref<HTMLElement>}
        data-section3-piece={pieceId}
        className={cn(
          "scrap section3v2-matrix-criterion",
          mode === "board" ? model.className : "paper-postit-blue",
          model.tiltClass,
          model.pinClass,
          showPushpinForGhost && "pushpin",
          modeClass(mode),
          className,
        )}
      >
        {showPins && model.pinKey ? (
          <span className="home-thread-pin-anchor" data-section3-thread-pin={model.pinKey} aria-hidden />
        ) : null}
        {isGhost ? <span className="section1-piece-question">?</span> : <span>{model.text}</span>}
      </article>
    );
  }

  const accessory =
    mode === "board"
      ? model.accessory
      : model.pinKey && mode !== "inventory"
        ? "pushpin"
        : "none";

  return (
    <article
      ref={setNodeRef as Ref<HTMLElement>}
      data-section3-piece={pieceId}
      className={cn(
        "scrap",
        section3VariantClass[model.variant],
        section3AccessoryClass[accessory],
        model.className,
        model.tiltClass,
        model.pinClass,
        modeClass(mode),
        className,
      )}
    >
      {showPins && model.pinKey ? (
        <span className="home-thread-pin-anchor" data-section3-thread-pin={model.pinKey} aria-hidden />
      ) : null}
      {isGhost ? <span className="section1-piece-question">?</span> : model.text}
    </article>
  );
}

export { getSection3InventoryFrame };

export default function Section3Piece({
  pieceId,
  mode = "board",
  className,
  setNodeRef,
}: Section3PieceProps) {
  return (
    renderImagePiece(pieceId, mode, className, setNodeRef) ??
    renderMatrixNotePiece(pieceId, mode, className, setNodeRef) ??
    null
  );
}
