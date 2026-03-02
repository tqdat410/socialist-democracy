"use client";

import { useEffect, useMemo, useState } from "react";

type Section2PinKey =
  | "marx-photo"
  | "marx-main"
  | "marx-if"
  | "marx-through"
  | "marx-quote"
  | "stage-1-subnote"
  | "stage-2-subnote"
  | "history-1871-image"
  | "history-1871-note"
  | "history-1917-image"
  | "history-1917-note"
  | "history-development-image"
  | "history-development-note"
  | "closing-note"
  | "nature-1"
  | "nature-2"
  | "nature-3";

type Point = { x: number; y: number };

type Geometry = {
  width: number;
  height: number;
  pins: Record<Section2PinKey, Point>;
};

const PIN_KEYS: Section2PinKey[] = [
  "marx-photo",
  "marx-main",
  "marx-if",
  "marx-through",
  "marx-quote",
  "stage-1-subnote",
  "stage-2-subnote",
  "history-1871-image",
  "history-1871-note",
  "history-1917-image",
  "history-1917-note",
  "history-development-image",
  "history-development-note",
  "closing-note",
  "nature-1",
  "nature-2",
  "nature-3",
];

function readPin(container: HTMLElement, key: Section2PinKey): Point | null {
  const element = container.querySelector<HTMLElement>(
    `[data-section2-thread-pin="${key}"]`,
  );
  if (!element) return null;

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function hasGeometryChanged(prev: Geometry | null, next: Geometry): boolean {
  if (!prev) {
    return true;
  }

  if (prev.width !== next.width || prev.height !== next.height) {
    return true;
  }

  return PIN_KEYS.some((key) => {
    const prevPoint = prev.pins[key];
    const nextPoint = next.pins[key];
    return Math.abs(prevPoint.x - nextPoint.x) > 0.2 || Math.abs(prevPoint.y - nextPoint.y) > 0.2;
  });
}

function createThreadPath(from: Point, to: Point, curveStrength = 1): string {
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
  const bendY = Math.min(34, Math.max(16, length * 0.075)) * curveStrength;
  const controlX = midX;
  const controlY = midY + bendY;
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${controlX.toFixed(1)} ${controlY.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

export default function Section2ThreadOverlay({
  containerSelector = ".section2v2-board-shell",
}: {
  containerSelector?: string;
}) {
  const [geometry, setGeometry] = useState<Geometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const pins = {} as Record<Section2PinKey, Point>;
      for (const key of PIN_KEYS) {
        const point = readPin(container, key);
        if (!point) return;
        pins[key] = point;
      }

      const next: Geometry = {
        width: container.clientWidth,
        height: container.clientHeight,
        pins,
      };

      setGeometry((previous) => (hasGeometryChanged(previous, next) ? next : previous));
    };

    updateGeometry();
    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const observer = new ResizeObserver(updateGeometry);
    observer.observe(container);

    PIN_KEYS.forEach((key) => {
      const target = container.querySelector<HTMLElement>(`[data-section2-thread-pin="${key}"]`);
      if (target) {
        observer.observe(target);
      }
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
      observer.disconnect();
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
      createThreadPath(p["marx-photo"], p["marx-main"]),
      createThreadPath(p["marx-photo"], p["marx-if"]),
      createThreadPath(p["marx-photo"], p["marx-through"]),
      createThreadPath(p["marx-photo"], p["marx-quote"]),
      createThreadPath(p["stage-1-subnote"], p["history-1871-image"]),
      createThreadPath(p["stage-2-subnote"], p["history-1917-image"]),
      createThreadPath(p["stage-2-subnote"], p["history-development-image"]),
      createThreadPath(p["history-1871-image"], p["closing-note"]),
      createThreadPath(p["history-1917-image"], p["closing-note"]),
      createThreadPath(p["history-development-image"], p["closing-note"]),
      createThreadPath(p["closing-note"], p["marx-photo"], -0.9),
      createThreadPath(p["closing-note"], p["nature-1"], 1.1),
      createThreadPath(p["closing-note"], p["nature-2"], 1.05),
      createThreadPath(p["closing-note"], p["nature-3"], 1.1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section2v2-thread-overlay" aria-hidden />;
  }

  return (
    <div className="section2v2-thread-overlay" aria-hidden>
      <svg
        className="section2v2-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="section2v2-thread-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}
