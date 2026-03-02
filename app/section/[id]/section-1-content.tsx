"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import CorkBoard from "@/components/layout/cork-board";
import SectionNav from "@/components/layout/section-nav";
import ExportButton from "@/components/export/export-button";
import RibbonFall from "@/components/feedback/ribbon-fall";
import Section1EvolutionNoteDropZone, {
  type Section1EvolutionNoteDefinition,
} from "@/components/section1/section1-evolution-note-drop-zone";
import Section1DropSlot from "@/components/section1/section1-drop-slot";
import Section1QuizBoard from "@/components/section1/section1-quiz-board";
import Section1ResetButton from "@/components/section1/section1-reset-button";
import {
  section1InteractiveItems,
  section1InteractiveZones,
  type Section1EvolutionBlockZoneId,
  type Section1PieceId,
  type Section1ZoneId,
} from "@/lib/section1-interactive-data";
import { useQuizStore } from "@/stores/quiz-store";

const greekIllustration = {
  title: "Hy Lạp",
  src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421373/hylap_jahgk5.png",
} as const;

const hcmLeftNote = "dân chủ trước hết là một giá trị nhân loại chung" as const;
const hcmRightQuote = "Chế độ ta là chế độ dân chủ, tức là nhân dân là người chủ, mà Chính phủ là người đầy tớ trung thành của nhân dân." as const;
const hcmFinalNote = "\"Dân chủ là một giá trị xã hội phản ánh những quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại.\" — Giáo trình CNXHKH 2021, tr.130" as const;

const marxLeninQuote = "Dân chủ là sự thống trị của đa số" as const;

const marxLeninNotes = [
  "(1) Là một giá trị xã hội phản ánh những quyền cơ bản của con người",
  "(2) Là một phạm trù chính trị gắn với các hình thức tổ chức nhà nước của giai cấp cầm quyền",
  "(3) Là một trong những nguyên tắc hoạt động của các tổ chức chính trị–xã hội",
  "(4) Là một phạm trù lịch sử gắn với quá trình ra đời, phát triển của lịch sử xã hội nhân loại",
] as const;

type DemocracyEvolutionBlock = {
  orderLabel: string;
  title: string;
  imageSrc: string;
  imagePieceId?: Section1PieceId;
  imageZoneId?: Section1ZoneId;
  noteDropZoneId: Section1EvolutionBlockZoneId;
  notes: ReadonlyArray<Section1EvolutionNoteDefinition>;
};

const democracyEvolutionBlocks: ReadonlyArray<DemocracyEvolutionBlock> = [
  {
    orderLabel: "01",
    title: "Cộng sản nguyên thủy",
    imageSrc: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421385/csnt_zpbrm6.png",
    noteDropZoneId: "s1-zone-ev-block-1",
    notes: [
      { text: "mầm mống của dân chủ", className: "paper-postit-yellow tape", span: "full", detachablePieceId: "s1-ev-note-1-seed" },
      { text: "Ph. Ăngghen", className: "paper-kraft tape", span: "full" },
      { text: "dân chủ nguyên thủy", className: "paper-postit-blue tape tape-blue", span: "half", detachablePieceId: "s1-ev-note-1-primitive" },
      { text: "dân chủ quân sự", className: "paper-postit-pink tape tape-red", span: "half", detachablePieceId: "s1-ev-note-1-military" },
    ],
  },
  {
    orderLabel: "02",
    title: "Chiếm hữu nô lệ",
    imageSrc: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421372/chnl_xs6xxx.png",
    imagePieceId: "s1-ev-image-02",
    imageZoneId: "s1-zone-ev-image-02",
    noteDropZoneId: "s1-zone-ev-block-2",
    notes: [
      { text: "dân chủ chủ nô", className: "paper-postit-yellow tape", span: "full", detachablePieceId: "s1-ev-note-2-slave-owner" },
      { text: "nền dân chủ của thiểu số, bảo vệ lợi ích của giai cấp cầm quyền", className: "paper-lined tape", span: "full" },
    ],
  },
  {
    orderLabel: "03",
    title: "Phong kiến",
    imageSrc: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421374/pk_i1njbb.png",
    imagePieceId: "s1-ev-image-03",
    imageZoneId: "s1-zone-ev-image-03",
    noteDropZoneId: "s1-zone-ev-block-3",
    notes: [
      { text: "độc tài chuyên chế phong kiến", className: "paper-postit-pink tape tape-red", span: "full" },
      { text: "quân chủ phong kiến", className: "paper-postit-blue tape tape-blue", span: "full", detachablePieceId: "s1-ev-note-3-monarchy" },
    ],
  },
  {
    orderLabel: "04",
    title: "Tư bản chủ nghĩa",
    imageSrc: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421375/tbcn_rgem7x.png",
    imagePieceId: "s1-ev-image-04",
    imageZoneId: "s1-zone-ev-image-04",
    noteDropZoneId: "s1-zone-ev-block-4",
    notes: [
      { text: "Cuối XIV - Đầu XV", className: "paper-postit-yellow tape", span: "half", detachablePieceId: "s1-ev-note-4-late14-early15" },
      { text: "dân chủ tư sản", className: "paper-postit-pink tape tape-red", span: "half" },
      { text: "dân chủ của thiểu số những người nắm giữ tư liệu sản xuất", className: "paper-lined tape", span: "full", detachablePieceId: "s1-ev-note-4-minority-means" },
    ],
  },
  {
    orderLabel: "05",
    title: "Xã hội chủ nghĩa",
    imageSrc: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421375/xhcn_a2x2ci.png",
    noteDropZoneId: "s1-zone-ev-block-5",
    notes: [
      { text: "Cách mạng Tháng Mười Nga (1917)", className: "paper-kraft tape", span: "full" },
      { text: "dân chủ vô sản", className: "paper-postit-blue tape tape-blue", span: "half", detachablePieceId: "s1-ev-note-5-proletarian" },
      { text: "dân chủ XHCN", className: "paper-postit-pink tape tape-red", span: "half", detachablePieceId: "s1-ev-note-5-socialist" },
      { text: "quyền lợi cho đại đa số nhân dân", className: "paper-lined tape", span: "full", detachablePieceId: "s1-ev-note-5-majority-rights" },
    ],
  },
  {
    orderLabel: "06",
    title: "Xã hội cộng sản chủ nghĩa",
    imageSrc: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421372/cscn_elhp11.png",
    imagePieceId: "s1-ev-image-06",
    imageZoneId: "s1-zone-ev-image-06",
    noteDropZoneId: "s1-zone-ev-block-6",
    notes: [
      { text: "tương lai", className: "paper-postit-yellow tape", span: "half" },
      { text: "không còn giai cấp", className: "paper-postit-blue tape tape-blue", span: "half", detachablePieceId: "s1-ev-note-6-classless" },
      { text: "nền dân chủ sẽ tự tiêu vong", className: "paper-postit-pink tape tape-red", span: "full" },
      { text: "một tập quán sinh hoạt trong xã hội", className: "paper-lined tape", span: "full", detachablePieceId: "s1-ev-note-6-social-custom" },
    ],
  },
];

const marxNoteCardClasses = [
  "paper-postit-yellow tape",
  "paper-postit-blue tape tape-blue",
  "paper-postit-pink tape tape-red",
  "paper-kraft tape",
] as const;

type GreekPinKey = "greek-photo" | "greek-date" | "greek-democracy" | "greek-note";
type MarxPinKey = "marx-photo" | "marx-quote";
type HcmPinKey = "hcm-photo" | "hcm-note-left" | "hcm-note-right" | "hcm-final-note";
type ImageChainPinKey = "chain-greek" | "chain-marx" | "chain-hcm";
type EvolutionImagePinKey = "evolution-1" | "evolution-2" | "evolution-3" | "evolution-4" | "evolution-5" | "evolution-6";

type Point = { x: number; y: number };

type GreekGeometry = {
  width: number;
  height: number;
  pins: Record<GreekPinKey, Point>;
};

type MarxGeometry = {
  width: number;
  height: number;
  pins: Record<MarxPinKey, Point>;
};

type HcmGeometry = {
  width: number;
  height: number;
  pins: Record<HcmPinKey, Point>;
};

type ImageChainGeometry = {
  width: number;
  height: number;
  pins: Record<ImageChainPinKey, Point>;
};

type EvolutionImageGeometry = {
  width: number;
  height: number;
  pins: Record<EvolutionImagePinKey, Point>;
};

const GREEK_PIN_KEYS: GreekPinKey[] = [
  "greek-photo",
  "greek-date",
  "greek-democracy",
  "greek-note",
];

const MARX_PIN_KEYS: MarxPinKey[] = [
  "marx-photo",
  "marx-quote",
];

const HCM_PIN_KEYS: HcmPinKey[] = [
  "hcm-photo",
  "hcm-note-left",
  "hcm-note-right",
  "hcm-final-note",
];

const IMAGE_CHAIN_PIN_KEYS: ImageChainPinKey[] = [
  "chain-greek",
  "chain-marx",
  "chain-hcm",
];

const EVOLUTION_IMAGE_PIN_KEYS: EvolutionImagePinKey[] = [
  "evolution-1",
  "evolution-2",
  "evolution-3",
  "evolution-4",
  "evolution-5",
  "evolution-6",
];

function hasGreekGeometryChanged(prev: GreekGeometry | null, next: GreekGeometry): boolean {
  if (!prev) return true;
  if (prev.width !== next.width || prev.height !== next.height) return true;

  return GREEK_PIN_KEYS.some((key) => {
    const prevPoint = prev.pins[key];
    const nextPoint = next.pins[key];
    return Math.abs(prevPoint.x - nextPoint.x) > 0.2 || Math.abs(prevPoint.y - nextPoint.y) > 0.2;
  });
}

function readGreekPinPoint(container: HTMLElement, key: GreekPinKey): Point | null {
  const element = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
  if (!element) return null;

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function hasMarxGeometryChanged(prev: MarxGeometry | null, next: MarxGeometry): boolean {
  if (!prev) return true;
  if (prev.width !== next.width || prev.height !== next.height) return true;

  return MARX_PIN_KEYS.some((key) => {
    const prevPoint = prev.pins[key];
    const nextPoint = next.pins[key];
    return Math.abs(prevPoint.x - nextPoint.x) > 0.2 || Math.abs(prevPoint.y - nextPoint.y) > 0.2;
  });
}

function readMarxPinPoint(container: HTMLElement, key: MarxPinKey): Point | null {
  const element = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
  if (!element) return null;

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function hasHcmGeometryChanged(prev: HcmGeometry | null, next: HcmGeometry): boolean {
  if (!prev) return true;
  if (prev.width !== next.width || prev.height !== next.height) return true;

  return HCM_PIN_KEYS.some((key) => {
    const prevPoint = prev.pins[key];
    const nextPoint = next.pins[key];
    return Math.abs(prevPoint.x - nextPoint.x) > 0.2 || Math.abs(prevPoint.y - nextPoint.y) > 0.2;
  });
}

function readHcmPinPoint(container: HTMLElement, key: HcmPinKey): Point | null {
  const element = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
  if (!element) return null;

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function hasImageChainGeometryChanged(prev: ImageChainGeometry | null, next: ImageChainGeometry): boolean {
  if (!prev) return true;
  if (prev.width !== next.width || prev.height !== next.height) return true;

  return IMAGE_CHAIN_PIN_KEYS.some((key) => {
    const prevPoint = prev.pins[key];
    const nextPoint = next.pins[key];
    return Math.abs(prevPoint.x - nextPoint.x) > 0.2 || Math.abs(prevPoint.y - nextPoint.y) > 0.2;
  });
}

function readImageChainPinPoint(container: HTMLElement, key: ImageChainPinKey): Point | null {
  const element = container.querySelector<HTMLElement>(`[data-image-thread-pin="${key}"]`);
  if (!element) return null;

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function hasEvolutionImageGeometryChanged(prev: EvolutionImageGeometry | null, next: EvolutionImageGeometry): boolean {
  if (!prev) return true;
  if (prev.width !== next.width || prev.height !== next.height) return true;

  return EVOLUTION_IMAGE_PIN_KEYS.some((key) => {
    const prevPoint = prev.pins[key];
    const nextPoint = next.pins[key];
    return Math.abs(prevPoint.x - nextPoint.x) > 0.2 || Math.abs(prevPoint.y - nextPoint.y) > 0.2;
  });
}

function readEvolutionImagePinPoint(container: HTMLElement, key: EvolutionImagePinKey): Point | null {
  const element = container.querySelector<HTMLElement>(`[data-stage-image-thread-pin="${key}"]`);
  if (!element) return null;

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function createThreadPath(from: Point, to: Point, curveDirection: 1 | -1, curveStrength = 1): string {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  const rawLength = Math.max(1, Math.hypot(deltaX, deltaY));
  const ux = deltaX / rawLength;
  const uy = deltaY / rawLength;
  const trim = Math.min(9, rawLength * 0.28);
  const start = { x: from.x + ux * trim, y: from.y + uy * trim };
  const end = { x: to.x - ux * trim, y: to.y - uy * trim };
  const innerDx = end.x - start.x;
  const innerDy = end.y - start.y;
  const length = Math.max(1, Math.hypot(innerDx, innerDy));
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const bend = Math.min(34, Math.max(16, length * 0.075)) * curveDirection * curveStrength;
  const normalX = (-innerDy / length) * bend;
  const normalY = (innerDx / length) * bend;

  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${(midX + normalX).toFixed(1)} ${(midY + normalY).toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function GreekThreadOverlay({ containerSelector = ".section1v2-greek-layout" }: { containerSelector?: string }) {
  const [geometry, setGeometry] = useState<GreekGeometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const points = GREEK_PIN_KEYS.map((key) => readGreekPinPoint(container, key));
      if (points.some((point) => !point)) return;

      const nextGeometry: GreekGeometry = {
        width,
        height,
        pins: {
          "greek-photo": points[0] as Point,
          "greek-date": points[1] as Point,
          "greek-democracy": points[2] as Point,
          "greek-note": points[3] as Point,
        },
      };

      setGeometry((previous) => (hasGreekGeometryChanged(previous, nextGeometry) ? nextGeometry : previous));
    };

    updateGeometry();
    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(container);

    GREEK_PIN_KEYS.forEach((key) => {
      const target = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
      if (target) resizeObserver.observe(target);
    });

    window.addEventListener("resize", updateGeometry);
    window.addEventListener("orientationchange", updateGeometry);

    let trackingFrame: number | null = null;
    let pointerInside = false;

    const trackWhileInteracting = () => {
      updateGeometry();
      if (pointerInside) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      } else {
        trackingFrame = null;
      }
    };

    const startTracking = () => {
      pointerInside = true;
      if (trackingFrame === null) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      }
    };

    const stopTracking = () => {
      pointerInside = false;
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
        trackingFrame = null;
      }
      updateGeometry();
    };

    container.addEventListener("pointerenter", startTracking);
    container.addEventListener("pointerleave", stopTracking);

    return () => {
      cancelAnimationFrame(rafOne);
      cancelAnimationFrame(rafTwo);
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
      }
      resizeObserver.disconnect();
      container.removeEventListener("pointerenter", startTracking);
      container.removeEventListener("pointerleave", stopTracking);
      window.removeEventListener("resize", updateGeometry);
      window.removeEventListener("orientationchange", updateGeometry);
    };
  }, [containerSelector]);

  const paths = useMemo(() => {
    if (!geometry) return null;
    const p = geometry.pins;

    return [
      createThreadPath(p["greek-photo"], p["greek-date"], 1),
      createThreadPath(p["greek-photo"], p["greek-democracy"], 1),
      createThreadPath(p["greek-democracy"], p["greek-note"], -1),
      createThreadPath(p["greek-photo"], p["greek-note"], 1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section1v2-greek-thread-overlay" aria-hidden />;
  }

  return (
    <div className="section1v2-greek-thread-overlay" aria-hidden>
      <svg
        className="section1v2-greek-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="section1v2-greek-thread-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}

function MarxThreadOverlay({ containerSelector = ".section1v2-marx-layout" }: { containerSelector?: string }) {
  const [geometry, setGeometry] = useState<MarxGeometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const points = MARX_PIN_KEYS.map((key) => readMarxPinPoint(container, key));
      if (points.some((point) => !point)) return;

      const nextGeometry: MarxGeometry = {
        width,
        height,
        pins: {
          "marx-photo": points[0] as Point,
          "marx-quote": points[1] as Point,
        },
      };

      setGeometry((previous) => (hasMarxGeometryChanged(previous, nextGeometry) ? nextGeometry : previous));
    };

    updateGeometry();
    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(container);

    MARX_PIN_KEYS.forEach((key) => {
      const target = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
      if (target) resizeObserver.observe(target);
    });

    window.addEventListener("resize", updateGeometry);
    window.addEventListener("orientationchange", updateGeometry);

    let trackingFrame: number | null = null;
    let pointerInside = false;

    const trackWhileInteracting = () => {
      updateGeometry();
      if (pointerInside) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      } else {
        trackingFrame = null;
      }
    };

    const startTracking = () => {
      pointerInside = true;
      if (trackingFrame === null) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      }
    };

    const stopTracking = () => {
      pointerInside = false;
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
        trackingFrame = null;
      }
      updateGeometry();
    };

    container.addEventListener("pointerenter", startTracking);
    container.addEventListener("pointerleave", stopTracking);

    return () => {
      cancelAnimationFrame(rafOne);
      cancelAnimationFrame(rafTwo);
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
      }
      resizeObserver.disconnect();
      container.removeEventListener("pointerenter", startTracking);
      container.removeEventListener("pointerleave", stopTracking);
      window.removeEventListener("resize", updateGeometry);
      window.removeEventListener("orientationchange", updateGeometry);
    };
  }, [containerSelector]);

  const paths = useMemo(() => {
    if (!geometry) return null;
    const p = geometry.pins;

    return [
      createThreadPath(p["marx-photo"], p["marx-quote"], -1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section1v2-marx-thread-overlay" aria-hidden />;
  }

  return (
    <div className="section1v2-marx-thread-overlay" aria-hidden>
      <svg
        className="section1v2-marx-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="section1v2-marx-thread-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}

function HcmThreadOverlay({ containerSelector = ".section1v2-hcm-layout" }: { containerSelector?: string }) {
  const [geometry, setGeometry] = useState<HcmGeometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const points = HCM_PIN_KEYS.map((key) => readHcmPinPoint(container, key));
      if (points.some((point) => !point)) return;

      const nextGeometry: HcmGeometry = {
        width,
        height,
        pins: {
          "hcm-photo": points[0] as Point,
          "hcm-note-left": points[1] as Point,
          "hcm-note-right": points[2] as Point,
          "hcm-final-note": points[3] as Point,
        },
      };

      setGeometry((previous) => (hasHcmGeometryChanged(previous, nextGeometry) ? nextGeometry : previous));
    };

    updateGeometry();
    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(container);

    HCM_PIN_KEYS.forEach((key) => {
      const target = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
      if (target) resizeObserver.observe(target);
    });

    window.addEventListener("resize", updateGeometry);
    window.addEventListener("orientationchange", updateGeometry);

    let trackingFrame: number | null = null;
    let pointerInside = false;

    const trackWhileInteracting = () => {
      updateGeometry();
      if (pointerInside) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      } else {
        trackingFrame = null;
      }
    };

    const startTracking = () => {
      pointerInside = true;
      if (trackingFrame === null) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      }
    };

    const stopTracking = () => {
      pointerInside = false;
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
        trackingFrame = null;
      }
      updateGeometry();
    };

    container.addEventListener("pointerenter", startTracking);
    container.addEventListener("pointerleave", stopTracking);

    return () => {
      cancelAnimationFrame(rafOne);
      cancelAnimationFrame(rafTwo);
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
      }
      resizeObserver.disconnect();
      container.removeEventListener("pointerenter", startTracking);
      container.removeEventListener("pointerleave", stopTracking);
      window.removeEventListener("resize", updateGeometry);
      window.removeEventListener("orientationchange", updateGeometry);
    };
  }, [containerSelector]);

  const paths = useMemo(() => {
    if (!geometry) return null;
    const p = geometry.pins;

    return [
      createThreadPath(p["hcm-photo"], p["hcm-note-left"], -1),
      createThreadPath(p["hcm-photo"], p["hcm-note-right"], 1),
      createThreadPath(p["hcm-photo"], p["hcm-final-note"], -1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section1v2-hcm-thread-overlay" aria-hidden />;
  }

  return (
    <div className="section1v2-hcm-thread-overlay" aria-hidden>
      <svg
        className="section1v2-hcm-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="section1v2-hcm-thread-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}

function ImageChainThreadOverlay({ containerSelector = "#section-1-board" }: { containerSelector?: string }) {
  const [geometry, setGeometry] = useState<ImageChainGeometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const points = IMAGE_CHAIN_PIN_KEYS.map((key) => readImageChainPinPoint(container, key));
      if (points.some((point) => !point)) return;

      const nextGeometry: ImageChainGeometry = {
        width,
        height,
        pins: {
          "chain-greek": points[0] as Point,
          "chain-marx": points[1] as Point,
          "chain-hcm": points[2] as Point,
        },
      };

      setGeometry((previous) => (hasImageChainGeometryChanged(previous, nextGeometry) ? nextGeometry : previous));
    };

    updateGeometry();
    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(container);

    IMAGE_CHAIN_PIN_KEYS.forEach((key) => {
      const target = container.querySelector<HTMLElement>(`[data-image-thread-pin="${key}"]`);
      if (target) resizeObserver.observe(target);
    });

    window.addEventListener("resize", updateGeometry);
    window.addEventListener("orientationchange", updateGeometry);

    let trackingFrame: number | null = null;
    let pointerInside = false;

    const trackWhileInteracting = () => {
      updateGeometry();
      if (pointerInside) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      } else {
        trackingFrame = null;
      }
    };

    const startTracking = () => {
      pointerInside = true;
      if (trackingFrame === null) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      }
    };

    const stopTracking = () => {
      pointerInside = false;
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
        trackingFrame = null;
      }
      updateGeometry();
    };

    container.addEventListener("pointerenter", startTracking);
    container.addEventListener("pointerleave", stopTracking);

    return () => {
      cancelAnimationFrame(rafOne);
      cancelAnimationFrame(rafTwo);
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
      }
      resizeObserver.disconnect();
      container.removeEventListener("pointerenter", startTracking);
      container.removeEventListener("pointerleave", stopTracking);
      window.removeEventListener("resize", updateGeometry);
      window.removeEventListener("orientationchange", updateGeometry);
    };
  }, [containerSelector]);

  const paths = useMemo(() => {
    if (!geometry) return null;
    const p = geometry.pins;

    return [
      createThreadPath(p["chain-greek"], p["chain-marx"], 1),
      createThreadPath(p["chain-marx"], p["chain-hcm"], -1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section1v2-image-chain-overlay" aria-hidden />;
  }

  return (
    <div className="section1v2-image-chain-overlay" aria-hidden>
      <svg
        className="section1v2-image-chain-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="section1v2-image-chain-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}

function EvolutionImageChainThreadOverlay({ containerSelector = ".section1v2-evolution-stack" }: { containerSelector?: string }) {
  const [geometry, setGeometry] = useState<EvolutionImageGeometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const points = EVOLUTION_IMAGE_PIN_KEYS.map((key) => readEvolutionImagePinPoint(container, key));
      if (points.some((point) => !point)) return;

      const nextGeometry: EvolutionImageGeometry = {
        width,
        height,
        pins: {
          "evolution-1": points[0] as Point,
          "evolution-2": points[1] as Point,
          "evolution-3": points[2] as Point,
          "evolution-4": points[3] as Point,
          "evolution-5": points[4] as Point,
          "evolution-6": points[5] as Point,
        },
      };

      setGeometry((previous) => (hasEvolutionImageGeometryChanged(previous, nextGeometry) ? nextGeometry : previous));
    };

    updateGeometry();
    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(container);

    EVOLUTION_IMAGE_PIN_KEYS.forEach((key) => {
      const target = container.querySelector<HTMLElement>(`[data-stage-image-thread-pin="${key}"]`);
      if (target) resizeObserver.observe(target);
    });

    window.addEventListener("resize", updateGeometry);
    window.addEventListener("orientationchange", updateGeometry);

    let trackingFrame: number | null = null;
    let pointerInside = false;

    const trackWhileInteracting = () => {
      updateGeometry();
      if (pointerInside) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      } else {
        trackingFrame = null;
      }
    };

    const startTracking = () => {
      pointerInside = true;
      if (trackingFrame === null) {
        trackingFrame = requestAnimationFrame(trackWhileInteracting);
      }
    };

    const stopTracking = () => {
      pointerInside = false;
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
        trackingFrame = null;
      }
      updateGeometry();
    };

    container.addEventListener("pointerenter", startTracking);
    container.addEventListener("pointerleave", stopTracking);

    return () => {
      cancelAnimationFrame(rafOne);
      cancelAnimationFrame(rafTwo);
      if (trackingFrame !== null) {
        cancelAnimationFrame(trackingFrame);
      }
      resizeObserver.disconnect();
      container.removeEventListener("pointerenter", startTracking);
      container.removeEventListener("pointerleave", stopTracking);
      window.removeEventListener("resize", updateGeometry);
      window.removeEventListener("orientationchange", updateGeometry);
    };
  }, [containerSelector]);

  const paths = useMemo(() => {
    if (!geometry) return null;
    const p = geometry.pins;

    return [
      createThreadPath(p["evolution-1"], p["evolution-2"], 1),
      createThreadPath(p["evolution-2"], p["evolution-3"], 1),
      createThreadPath(p["evolution-3"], p["evolution-4"], -1, 3.0),
      createThreadPath(p["evolution-4"], p["evolution-5"], 1),
      createThreadPath(p["evolution-5"], p["evolution-6"], 1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section1v2-evolution-thread-overlay" aria-hidden />;
  }

  return (
    <div className="section1v2-evolution-thread-overlay" aria-hidden>
      <svg
        className="section1v2-evolution-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="section1v2-evolution-thread-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}

export default function Section1Content() {
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const droppedItemIds = useMemo(() => new Set(Object.values(droppedItems)), [droppedItems]);
  const section1Complete = useMemo(
    () => section1InteractiveItems.every((item) => droppedItemIds.has(item.id)),
    [droppedItemIds],
  );
  const ribbonBurstKey = section1Complete ? droppedItemIds.size : 0;

  return (
    <Section1QuizBoard items={section1InteractiveItems} zones={section1InteractiveZones} quiz="1">
      <RibbonFall burstKey={ribbonBurstKey} />
      <main className="home-board min-h-screen pb-16">
        <SectionNav
          sectionId="1"
          title="DÂN CHỦ"
          showScore={false}
          rightActions={(
            <div className="flex items-center gap-2">
              <Section1ResetButton />
              {section1Complete ? <ExportButton sectionId="1" compact usePushpin /> : null}
            </div>
          )}
        />

        <CorkBoard id="section-1-board" className="section1v2-board">
        <section className="section1v2-hero-wrap mb-8">
          <article className="scrap section1v2-title-note tape section1v2-rot-n2">
            <h1 className="section1v2-hero-title">Dân chủ và sự ra đời, phát triển của dân chủ</h1>
          </article>

          <figure className="scrap section1v2-polaroid pushpin section1v2-hero-photo section1v2-rot-p3">
            <div className="section1v2-polaroid-body">
              <Image
                src="https://res.cloudinary.com/do6szo7zy/image/upload/v1772421375/title_01_o3uorf.png"
                alt="Minh họa biểu tượng dân chủ"
                fill
                className="section1v2-polaroid-img"
                sizes="(max-width: 768px) 80vw, 260px"
              />
            </div>
            <figcaption>dân chủ</figcaption>
          </figure>
        </section>

        <section className="mb-8">
          <div className="scrap paper-kraft tape section1v2-section-tag section1v2-rot-n1">
            <h2>1. Quan niệm về dân chủ</h2>
          </div>

          <div className="section1v2-greek-layout mb-4">
            <figure className="scrap section1v2-polaroid pushpin section1v2-greek-photo section1v2-rot-image-1">
              <span className="home-thread-pin-anchor" data-thread-pin="greek-photo" data-image-thread-pin="chain-greek" aria-hidden />
              <div className="section1v2-polaroid-body">
                <Image
                  src={greekIllustration.src}
                  alt={`Ảnh minh họa ${greekIllustration.title}`}
                  fill
                  className="section1v2-polaroid-img"
                  sizes="(max-width: 768px) 88vw, 280px"
                />
              </div>
              <figcaption>{greekIllustration.title}</figcaption>
            </figure>

            <div className="section1v2-greek-stack">
              <div className="section1v2-greek-top">
                <Section1DropSlot pieceId="s1-qn-greek-date" zoneId="s1-zone-greek-date" />
                <article className="scrap section1v2-token-card paper-postit-yellow pushpin section1v2-greek-democracy-card">
                  <span className="home-thread-pin-anchor" data-thread-pin="greek-democracy" aria-hidden />
                  Democracy
                </article>
              </div>

              <div className="section1v2-greek-core">
                <Section1DropSlot pieceId="s1-qn-greek-demos" zoneId="s1-zone-greek-demos" />
                <article className="scrap section1v2-token-card paper-postit-blue tape tape-blue section1v2-greek-token-kratos">
                  KRATOS
                </article>
              </div>

              <div className="section1v2-greek-meaning">
                <article className="scrap section1v2-token-card paper-lined tape section1v2-greek-meaning-people">
                  Nhân Dân
                </article>
                <Section1DropSlot pieceId="s1-qn-greek-rule" zoneId="s1-zone-greek-rule" />
                <Section1DropSlot pieceId="s1-qn-greek-power" zoneId="s1-zone-greek-power" />
              </div>

              <article className="scrap paper-lined pushpin section1v2-greek-note section1v2-rot-pair-1">
                <span className="home-thread-pin-anchor" data-thread-pin="greek-note" aria-hidden />
                nhân dân cai trị hay quyền lực thuộc về nhân dân
              </article>
            </div>
            <GreekThreadOverlay />
          </div>

          <div className="section1v2-marx-layout mb-4">
            <div className="section1v2-marx-stack">
              <article className="scrap paper-lined pushpin section1v2-marx-quote-card section1v2-rot-pair-2">
                <span className="home-thread-pin-anchor" data-thread-pin="marx-quote" aria-hidden />
                <blockquote className="section1v2-quote section1v2-marx-quote-main">&quot;{marxLeninQuote}&quot;</blockquote>
              </article>

              <Section1DropSlot pieceId="s1-qn-marx-note-1" zoneId="s1-zone-marx-note-1" />
              <article className={`scrap section1v2-marx-note-card ${marxNoteCardClasses[1]} section1v2-marx-note-2`}>
                <p>{marxLeninNotes[1]}</p>
              </article>
              <Section1DropSlot pieceId="s1-qn-marx-note-3" zoneId="s1-zone-marx-note-3" />
              <Section1DropSlot pieceId="s1-qn-marx-note-4" zoneId="s1-zone-marx-note-4" />
            </div>

            <Section1DropSlot pieceId="s1-qn-marx-photo" zoneId="s1-zone-marx-photo" />
            <MarxThreadOverlay />
          </div>

          <div className="section1v2-hcm-layout mb-4">
            <div className="section1v2-hcm-col section1v2-hcm-col-left">
              <article className="scrap paper-postit-yellow pushpin section1v2-hcm-note-card section1v2-hcm-note-left">
                <span className="home-thread-pin-anchor" data-thread-pin="hcm-note-left" aria-hidden />
                <p>{hcmLeftNote}</p>
              </article>
              <Section1DropSlot pieceId="s1-qn-hcm-quote-left" zoneId="s1-zone-hcm-quote-left" />
            </div>

            <Section1DropSlot pieceId="s1-qn-hcm-photo" zoneId="s1-zone-hcm-photo" />

            <div className="section1v2-hcm-col section1v2-hcm-col-right">
              <Section1DropSlot pieceId="s1-qn-hcm-note-right" zoneId="s1-zone-hcm-note-right" />
              <article className="scrap paper-lined tape tape-red section1v2-hcm-quote-card section1v2-hcm-quote-right">
                <blockquote className="section1v2-quote section1v2-hcm-quote-main">&quot;{hcmRightQuote}&quot;</blockquote>
              </article>
            </div>

            <article className="scrap pushpin section1v2-hcm-final-note section1v2-paper-punched section1v2-rot-pair-3">
              <span className="home-thread-pin-anchor" data-thread-pin="hcm-final-note" aria-hidden />
              <p>{hcmFinalNote}</p>
            </article>

            <HcmThreadOverlay />
          </div>

        </section>

        <ImageChainThreadOverlay />

        <section className="mb-8">
          <div className="scrap paper-kraft tape tape-red section1v2-section-tag section1v2-rot-p1">
            <h2>2. Sự ra đời và phát triển của dân chủ</h2>
          </div>

          <div className="section1v2-evolution-stack">
            {democracyEvolutionBlocks.map((block, index) => {
              const imagePin = `evolution-${index + 1}` as EvolutionImagePinKey;

              return (
                <article key={block.orderLabel} className="section1v2-evolution-block">
                  {block.imagePieceId && block.imageZoneId ? (
                    <Section1DropSlot pieceId={block.imagePieceId} zoneId={block.imageZoneId} />
                  ) : (
                    <figure className={`scrap section1v2-polaroid pushpin section1v2-evolution-photo section1v2-evolution-photo-${index + 1}`}>
                      <span className="home-thread-pin-anchor" data-stage-image-thread-pin={imagePin} aria-hidden />
                      <div className="section1v2-polaroid-body">
                        <Image
                          src={block.imageSrc}
                          alt={`Ảnh minh họa ${block.title}`}
                          fill
                          className="section1v2-polaroid-img"
                          sizes="(max-width: 768px) 86vw, 260px"
                        />
                      </div>
                      <figcaption>{block.title}</figcaption>
                    </figure>
                  )}

                  <Section1EvolutionNoteDropZone blockZoneId={block.noteDropZoneId} notes={block.notes} />
                </article>
              );
            })}

            <EvolutionImageChainThreadOverlay />
          </div>
        </section>
        </CorkBoard>
      </main>
    </Section1QuizBoard>
  );
}
