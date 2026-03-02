"use client";

import type { Ref } from "react";
import Image from "next/image";
import { getSectionIllustrationSlot } from "@/lib/content-data";
import type { Section2PieceId } from "@/lib/section2-interactive-data";
import { cn } from "@/lib/utils";
import {
  getSection2InventoryFrame,
  section2ImagePieces,
  section2MarxImageUrl,
  section2NotePieces,
} from "@/components/section2/section2-piece-config";

type Section2PieceMode = "board" | "ghost" | "inventory";

interface Section2PieceProps {
  pieceId: Section2PieceId;
  mode?: Section2PieceMode;
  className?: string;
  setNodeRef?: Ref<HTMLElement>;
}

function modeClass(mode: Section2PieceMode) {
  if (mode === "ghost") return "section1-piece-ghost";
  if (mode === "inventory") return "section1-piece-inventory";
  return "";
}

function renderImagePiece(
  pieceId: Section2PieceId,
  mode: Section2PieceMode,
  className?: string,
  setNodeRef?: Ref<HTMLElement>,
) {
  const imagePiece = section2ImagePieces[pieceId];
  if (!imagePiece) return null;

  const isGhost = mode === "ghost";
  const showPushpin = mode !== "inventory";
  const showPins = mode !== "inventory";
  const slot = getSectionIllustrationSlot(imagePiece.slotId);
  const imageSrc = pieceId === "s2-qn-marx-photo" ? section2MarxImageUrl : slot?.src;
  const imageAlt = slot?.alt ?? imagePiece.caption;
  const bodyClassName = imagePiece.frameType === "section1-polaroid" ? "section1v2-polaroid-body" : "board-polaroid-body";
  const imageClassName = imagePiece.frameType === "section1-polaroid" ? "section1v2-polaroid-img" : "board-polaroid-img";

  return (
    <figure
      ref={setNodeRef as Ref<HTMLElement>}
      data-section2-piece={pieceId}
      className={cn("scrap", imagePiece.frameClassName, showPushpin && "pushpin", modeClass(mode), className)}
    >
      {showPins ? <span className="home-thread-pin-anchor" data-section2-thread-pin={imagePiece.pinKey} aria-hidden /> : null}
      {isGhost ? (
        <div className="section1-piece-ghost-image"><span className="section1-piece-question">?</span></div>
      ) : (
        <>
          <div className={bodyClassName}>
            {imageSrc ? <Image src={imageSrc} alt={imageAlt} fill className={imageClassName} sizes="(max-width: 768px) 86vw, 250px" /> : null}
          </div>
          <figcaption>{slot?.caption ?? imagePiece.caption}</figcaption>
        </>
      )}
    </figure>
  );
}

function renderNotePiece(
  pieceId: Section2PieceId,
  mode: Section2PieceMode,
  className?: string,
  setNodeRef?: Ref<HTMLElement>,
) {
  const notePiece = section2NotePieces[pieceId];
  if (!notePiece) return null;

  const isGhost = mode === "ghost";
  const showTape = mode === "board";
  const showPushpin = mode !== "inventory";
  const showPins = mode !== "inventory";

  return (
    <article
      ref={setNodeRef as Ref<HTMLElement>}
      data-section2-piece={pieceId}
      className={cn(
        "scrap section2-piece-note",
        notePiece.className,
        showTape && notePiece.tapeClassName,
        showPushpin && notePiece.pushpin && "pushpin",
        modeClass(mode),
        className,
      )}
    >
      {showPins && notePiece.pinKey ? <span className="home-thread-pin-anchor" data-section2-thread-pin={notePiece.pinKey} aria-hidden /> : null}
      {isGhost ? <span className="section1-piece-question">?</span> : notePiece.text}
    </article>
  );
}

export { getSection2InventoryFrame };

export default function Section2Piece({ pieceId, mode = "board", className, setNodeRef }: Section2PieceProps) {
  return (
    renderImagePiece(pieceId, mode, className, setNodeRef) ??
    renderNotePiece(pieceId, mode, className, setNodeRef) ??
    null
  );
}
