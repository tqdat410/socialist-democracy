"use client";

import type { Ref } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Section1PieceId } from "@/lib/section1-interactive-data";

type Section1PieceMode = "board" | "ghost" | "inventory";

interface Section1PieceProps {
  pieceId: Section1PieceId;
  mode?: Section1PieceMode;
  className?: string;
  setNodeRef?: Ref<HTMLElement>;
}

const MARX_LENIN_IMAGE_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421374/mac_lenin_opxtki.png";
const HCM_IMAGE_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421373/hcm_hligrt.png";
const EVOLUTION_IMAGE_02_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421372/chnl_xs6xxx.png";
const EVOLUTION_IMAGE_03_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421374/pk_i1njbb.png";
const EVOLUTION_IMAGE_04_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421375/tbcn_rgem7x.png";
const EVOLUTION_IMAGE_06_URL = "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421372/cscn_elhp11.png";

const MARX_NOTE_1 = "(1) Là một giá trị xã hội phản ánh những quyền cơ bản của con người";
const MARX_NOTE_3 = "(3) Là một trong những nguyên tắc hoạt động của các tổ chức chính trị–xã hội";
const MARX_NOTE_4 = "(4) Là một phạm trù lịch sử gắn với quá trình ra đời, phát triển của lịch sử xã hội nhân loại";
const HCM_QUOTE_LEFT = "Dân chủ là dân là chủ và dân làm chủ; mọi quyền hạn thuộc về nhân dân.";
const HCM_NOTE_RIGHT = "dân chủ là một thể chế chính trị, một chế độ xã hội";
const EV_NOTE_1_SEED = "mầm mống của dân chủ";
const EV_NOTE_1_PRIMITIVE = "dân chủ nguyên thủy";
const EV_NOTE_1_MILITARY = "dân chủ quân sự";
const EV_NOTE_2_SLAVE_OWNER = "dân chủ chủ nô";
const EV_NOTE_3_MONARCHY = "quân chủ phong kiến";
const EV_NOTE_4_LATE14_EARLY15 = "Cuối XIV - Đầu XV";
const EV_NOTE_4_MINORITY_MEANS = "dân chủ của thiểu số những người nắm giữ tư liệu sản xuất";
const EV_NOTE_5_PROLETARIAN = "dân chủ vô sản";
const EV_NOTE_5_SOCIALIST = "dân chủ XHCN";
const EV_NOTE_5_MAJORITY_RIGHTS = "quyền lợi cho đại đa số nhân dân";
const EV_NOTE_6_CLASSLESS = "không còn giai cấp";
const EV_NOTE_6_SOCIAL_CUSTOM = "một tập quán sinh hoạt trong xã hội";

export function getSection1InventoryFrame(pieceId: Section1PieceId): { width: number; height: number; scale: number } {
  switch (pieceId) {
    case "s1-qn-marx-photo":
    case "s1-qn-hcm-photo":
    case "s1-ev-image-02":
    case "s1-ev-image-03":
    case "s1-ev-image-04":
    case "s1-ev-image-06":
      return { width: 166, height: 140, scale: 0.55 };
    case "s1-qn-marx-note-1":
    case "s1-qn-marx-note-3":
    case "s1-qn-marx-note-4":
      return { width: 240, height: 104, scale: 0.68 };
    case "s1-qn-hcm-quote-left":
      return { width: 268, height: 132, scale: 0.67 };
    case "s1-qn-hcm-note-right":
      return { width: 246, height: 118, scale: 0.7 };
    case "s1-ev-note-1-seed":
    case "s1-ev-note-2-slave-owner":
    case "s1-ev-note-3-monarchy":
    case "s1-ev-note-5-proletarian":
    case "s1-ev-note-5-socialist":
    case "s1-ev-note-6-classless":
      return { width: 240, height: 84, scale: 0.68 };
    case "s1-ev-note-1-primitive":
    case "s1-ev-note-1-military":
    case "s1-ev-note-4-late14-early15":
      return { width: 212, height: 80, scale: 0.68 };
    case "s1-ev-note-4-minority-means":
    case "s1-ev-note-5-majority-rights":
    case "s1-ev-note-6-social-custom":
      return { width: 270, height: 96, scale: 0.68 };
    default:
      return { width: 156, height: 72, scale: 0.76 };
  }
}

function modeClass(mode: Section1PieceMode) {
  if (mode === "ghost") return "section1-piece-ghost";
  if (mode === "inventory") return "section1-piece-inventory";
  return "";
}

export default function Section1Piece({
  pieceId,
  mode = "board",
  className,
  setNodeRef,
}: Section1PieceProps) {
  const isGhost = mode === "ghost";
  const showTape = mode === "board";
  const showPushpin = mode !== "inventory";
  const showPins = mode !== "inventory";
  const extraClass = cn(modeClass(mode), className);

  switch (pieceId) {
    case "s1-qn-greek-date":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-token-card card-magazine section1v2-greek-date section1v2-greek-date-card",
            showTape && "tape-red",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-thread-pin="greek-date" aria-hidden />}
          {isGhost ? <span className="section1-piece-question">?</span> : "VII-VI TCN"}
        </article>
      );

    case "s1-qn-greek-demos":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-token-card paper-postit-yellow section1v2-greek-token-demos",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : "DEMOS"}
        </article>
      );

    case "s1-qn-greek-rule":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-token-card paper-postit-pink section1v2-greek-meaning-rule",
            showTape && "tape tape-red",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : "cai trị"}
        </article>
      );

    case "s1-qn-greek-power":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-token-card paper-kraft section1v2-greek-meaning-power",
            showTape && "tape tape-blue",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : "quyền lực"}
        </article>
      );

    case "s1-qn-marx-photo":
      return (
        <figure
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-polaroid section1v2-marx-photo section1v2-rot-image-2",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-thread-pin="marx-photo" data-image-thread-pin="chain-marx" aria-hidden />}
          {isGhost ? (
            <div className="section1-piece-ghost-image">
              <span className="section1-piece-question">?</span>
            </div>
          ) : (
            <>
              <div className="section1v2-polaroid-body">
                <Image src={MARX_LENIN_IMAGE_URL} alt="Ảnh minh họa Mác-Lênin" fill className="section1v2-polaroid-img" sizes="(max-width: 768px) 88vw, 250px" />
              </div>
              <figcaption>Mác-Lênin</figcaption>
            </>
          )}
        </figure>
      );

    case "s1-qn-marx-note-1":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-marx-note-card paper-postit-yellow section1v2-marx-note-1",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{MARX_NOTE_1}</p>}
        </article>
      );

    case "s1-qn-marx-note-3":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-marx-note-card paper-postit-pink section1v2-marx-note-3",
            showTape && "tape tape-red",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{MARX_NOTE_3}</p>}
        </article>
      );

    case "s1-qn-marx-note-4":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-marx-note-card paper-kraft section1v2-marx-note-4",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{MARX_NOTE_4}</p>}
        </article>
      );

    case "s1-qn-hcm-photo":
      return (
        <figure
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-polaroid section1v2-hcm-photo section1v2-rot-image-3",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-thread-pin="hcm-photo" data-image-thread-pin="chain-hcm" aria-hidden />}
          {isGhost ? (
            <div className="section1-piece-ghost-image">
              <span className="section1-piece-question">?</span>
            </div>
          ) : (
            <>
              <div className="section1v2-polaroid-body">
                <Image src={HCM_IMAGE_URL} alt="Ảnh minh họa Hồ Chí Minh" fill className="section1v2-polaroid-img" sizes="(max-width: 768px) 88vw, 250px" />
              </div>
              <figcaption>Hồ Chí Minh</figcaption>
            </>
          )}
        </figure>
      );

    case "s1-qn-hcm-quote-left":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap paper-lined section1v2-hcm-quote-card section1v2-hcm-quote-left",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? (
            <span className="section1-piece-question">?</span>
          ) : (
            <blockquote className="section1v2-quote section1v2-hcm-quote-main">&quot;{HCM_QUOTE_LEFT}&quot;</blockquote>
          )}
        </article>
      );

    case "s1-qn-hcm-note-right":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap paper-postit-blue section1v2-hcm-note-card section1v2-hcm-note-right",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-thread-pin="hcm-note-right" aria-hidden />}
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{HCM_NOTE_RIGHT}</p>}
        </article>
      );

    case "s1-ev-image-02":
      return (
        <figure
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-polaroid section1v2-evolution-photo section1v2-evolution-photo-2",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-stage-image-thread-pin="evolution-2" aria-hidden />}
          {isGhost ? (
            <div className="section1-piece-ghost-image">
              <span className="section1-piece-question">?</span>
            </div>
          ) : (
            <>
              <div className="section1v2-polaroid-body">
                <Image src={EVOLUTION_IMAGE_02_URL} alt="Ảnh minh họa Chiếm hữu nô lệ" fill className="section1v2-polaroid-img" sizes="(max-width: 768px) 86vw, 220px" />
              </div>
              <figcaption>Chiếm hữu nô lệ</figcaption>
            </>
          )}
        </figure>
      );

    case "s1-ev-image-03":
      return (
        <figure
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-polaroid section1v2-evolution-photo section1v2-evolution-photo-3",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-stage-image-thread-pin="evolution-3" aria-hidden />}
          {isGhost ? (
            <div className="section1-piece-ghost-image">
              <span className="section1-piece-question">?</span>
            </div>
          ) : (
            <>
              <div className="section1v2-polaroid-body">
                <Image src={EVOLUTION_IMAGE_03_URL} alt="Ảnh minh họa Phong kiến" fill className="section1v2-polaroid-img" sizes="(max-width: 768px) 86vw, 220px" />
              </div>
              <figcaption>Phong kiến</figcaption>
            </>
          )}
        </figure>
      );

    case "s1-ev-image-04":
      return (
        <figure
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-polaroid section1v2-evolution-photo section1v2-evolution-photo-4",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-stage-image-thread-pin="evolution-4" aria-hidden />}
          {isGhost ? (
            <div className="section1-piece-ghost-image">
              <span className="section1-piece-question">?</span>
            </div>
          ) : (
            <>
              <div className="section1v2-polaroid-body">
                <Image src={EVOLUTION_IMAGE_04_URL} alt="Ảnh minh họa Tư bản chủ nghĩa" fill className="section1v2-polaroid-img" sizes="(max-width: 768px) 86vw, 220px" />
              </div>
              <figcaption>Tư bản chủ nghĩa</figcaption>
            </>
          )}
        </figure>
      );

    case "s1-ev-image-06":
      return (
        <figure
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-polaroid section1v2-evolution-photo section1v2-evolution-photo-6",
            showPushpin && "pushpin",
            extraClass,
          )}
        >
          {showPins && <span className="home-thread-pin-anchor" data-stage-image-thread-pin="evolution-6" aria-hidden />}
          {isGhost ? (
            <div className="section1-piece-ghost-image">
              <span className="section1-piece-question">?</span>
            </div>
          ) : (
            <>
              <div className="section1v2-polaroid-body">
                <Image src={EVOLUTION_IMAGE_06_URL} alt="Ảnh minh họa Xã hội cộng sản chủ nghĩa" fill className="section1v2-polaroid-img" sizes="(max-width: 768px) 86vw, 220px" />
              </div>
              <figcaption>Xã hội cộng sản chủ nghĩa</figcaption>
            </>
          )}
        </figure>
      );

    case "s1-ev-note-1-seed":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-full paper-postit-yellow",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_1_SEED}</p>}
        </article>
      );

    case "s1-ev-note-1-primitive":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-half paper-postit-blue",
            showTape && "tape tape-blue",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_1_PRIMITIVE}</p>}
        </article>
      );

    case "s1-ev-note-1-military":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-half paper-postit-pink",
            showTape && "tape tape-red",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_1_MILITARY}</p>}
        </article>
      );

    case "s1-ev-note-2-slave-owner":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-full paper-postit-yellow",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_2_SLAVE_OWNER}</p>}
        </article>
      );

    case "s1-ev-note-3-monarchy":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-full paper-postit-blue",
            showTape && "tape tape-blue",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_3_MONARCHY}</p>}
        </article>
      );

    case "s1-ev-note-4-late14-early15":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-half paper-postit-yellow",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_4_LATE14_EARLY15}</p>}
        </article>
      );

    case "s1-ev-note-4-minority-means":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-full paper-lined",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_4_MINORITY_MEANS}</p>}
        </article>
      );

    case "s1-ev-note-5-proletarian":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-half paper-postit-blue",
            showTape && "tape tape-blue",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_5_PROLETARIAN}</p>}
        </article>
      );

    case "s1-ev-note-5-socialist":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-half paper-postit-pink",
            showTape && "tape tape-red",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_5_SOCIALIST}</p>}
        </article>
      );

    case "s1-ev-note-5-majority-rights":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-full paper-lined",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_5_MAJORITY_RIGHTS}</p>}
        </article>
      );

    case "s1-ev-note-6-classless":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-half paper-postit-blue",
            showTape && "tape tape-blue",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_6_CLASSLESS}</p>}
        </article>
      );

    case "s1-ev-note-6-social-custom":
      return (
        <article
          ref={setNodeRef as Ref<HTMLElement>}
          data-section1-piece={pieceId}
          className={cn(
            "scrap section1v2-evolution-note section1v2-evolution-note-full paper-lined",
            showTape && "tape",
            extraClass,
          )}
        >
          {isGhost ? <span className="section1-piece-question">?</span> : <p>{EV_NOTE_6_SOCIAL_CUSTOM}</p>}
        </article>
      );

    default:
      return null;
  }
}
