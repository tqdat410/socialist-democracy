"use client";

import { useEffect, useMemo, useState } from "react";

type Section3PinKey =
  | "hero-title"
  | "hero-guiding"
  | "hero-xhcn"
  | "hero-ts"
  | "example-1"
  | "example-2"
  | "example-3"
  | "matrix-note-1"
  | "matrix-note-2"
  | "matrix-note-3"
  | "matrix-note-4"
  | "matrix-note-5"
  | "matrix-note-6"
  | "matrix-note-7"
  | "matrix-note-8"
  | "matrix-note-9";

type Point = { x: number; y: number };

type Geometry = {
  width: number;
  height: number;
  pins: Record<Section3PinKey, Point>;
};

const PIN_KEYS: Section3PinKey[] = [
  "hero-title",
  "hero-guiding",
  "hero-xhcn",
  "hero-ts",
  "example-1",
  "example-2",
  "example-3",
  "matrix-note-1",
  "matrix-note-2",
  "matrix-note-3",
  "matrix-note-4",
  "matrix-note-5",
  "matrix-note-6",
  "matrix-note-7",
  "matrix-note-8",
  "matrix-note-9",
];

type ThreadPath = {
  d: string;
  className: "section3v2-thread-path" | "section3v2-thread-path-gold";
};

function readPin(container: HTMLElement, key: Section3PinKey): Point | null {
  const element = container.querySelector<HTMLElement>(
    `[data-section3-thread-pin="${key}"]`,
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

function createThreadPath(from: Point, to: Point, curveDirection: 1 | -1, curveStrength = 1): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const rawLength = Math.max(1, Math.hypot(dx, dy));
  const ux = dx / rawLength;
  const uy = dy / rawLength;
  const trim = Math.min(9, rawLength * 0.28);
  const start = { x: from.x + ux * trim, y: from.y + uy * trim };
  const end = { x: to.x - ux * trim, y: to.y - uy * trim };
  const innerDx = end.x - start.x;
  const innerDy = end.y - start.y;
  const innerLength = Math.max(1, Math.hypot(innerDx, innerDy));
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const bend = Math.min(34, Math.max(16, innerLength * 0.075)) * curveDirection * curveStrength;
  const normalX = (-innerDy / innerLength) * bend;
  const normalY = (innerDx / innerLength) * bend;
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${(midX + normalX).toFixed(1)} ${(midY + normalY).toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function createStraightThreadPath(from: Point, to: Point): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const rawLength = Math.max(1, Math.hypot(dx, dy));
  const ux = dx / rawLength;
  const uy = dy / rawLength;
  const trim = Math.min(9, rawLength * 0.28);
  const start = { x: from.x + ux * trim, y: from.y + uy * trim };
  const end = { x: to.x - ux * trim, y: to.y - uy * trim };
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} L ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function createDownwardThreadPath(from: Point, to: Point): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const rawLength = Math.max(1, Math.hypot(dx, dy));
  const ux = dx / rawLength;
  const uy = dy / rawLength;
  const trim = Math.min(9, rawLength * 0.28);
  const start = { x: from.x + ux * trim, y: from.y + uy * trim };
  const end = { x: to.x - ux * trim, y: to.y - uy * trim };
  const innerDx = end.x - start.x;
  const innerDy = end.y - start.y;
  const innerLength = Math.max(1, Math.hypot(innerDx, innerDy));
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const bend = Math.min(42, Math.max(18, innerLength * 0.11));
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${midX.toFixed(1)} ${(midY + bend).toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

export default function Section3ThreadOverlay({
  containerSelector = ".section3v2-board-shell",
}: {
  containerSelector?: string;
}) {
  const [geometry, setGeometry] = useState<Geometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const updateGeometry = () => {
      const pins = {} as Record<Section3PinKey, Point>;
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
      const target = container.querySelector<HTMLElement>(`[data-section3-thread-pin="${key}"]`);
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

  const paths = useMemo<ThreadPath[] | null>(() => {
    if (!geometry) return null;
    const p = geometry.pins;
    return [
      {
        d: createThreadPath(p["hero-title"], p["hero-guiding"], 1),
        className: "section3v2-thread-path",
      },
      {
        d: createThreadPath(p["hero-guiding"], p["hero-xhcn"], -1),
        className: "section3v2-thread-path",
      },
      {
        d: createThreadPath(p["hero-guiding"], p["hero-ts"], 1),
        className: "section3v2-thread-path",
      },
      {
        d: createStraightThreadPath(p["matrix-note-1"], p["matrix-note-2"]),
        className: "section3v2-thread-path-gold",
      },
      {
        d: createStraightThreadPath(p["matrix-note-2"], p["matrix-note-3"]),
        className: "section3v2-thread-path-gold",
      },
      {
        d: createStraightThreadPath(p["matrix-note-3"], p["matrix-note-4"]),
        className: "section3v2-thread-path-gold",
      },
      {
        d: createStraightThreadPath(p["matrix-note-4"], p["matrix-note-5"]),
        className: "section3v2-thread-path-gold",
      },
      {
        d: createStraightThreadPath(p["matrix-note-5"], p["matrix-note-1"]),
        className: "section3v2-thread-path-gold",
      },
      {
        d: createThreadPath(p["matrix-note-6"], p["matrix-note-7"], 1),
        className: "section3v2-thread-path",
      },
      {
        d: createThreadPath(p["matrix-note-7"], p["matrix-note-8"], -1),
        className: "section3v2-thread-path",
      },
      {
        d: createDownwardThreadPath(p["matrix-note-9"], p["matrix-note-8"]),
        className: "section3v2-thread-path",
      },
      {
        d: createThreadPath(p["matrix-note-9"], p["matrix-note-6"], -1),
        className: "section3v2-thread-path",
      },
      {
        d: createThreadPath(p["example-1"], p["example-2"], 1),
        className: "section3v2-thread-path",
      },
      {
        d: createDownwardThreadPath(p["example-2"], p["example-3"]),
        className: "section3v2-thread-path",
      },
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="section3v2-thread-overlay" aria-hidden />;
  }

  return (
    <div className="section3v2-thread-overlay" aria-hidden>
      <svg
        className="section3v2-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className={pathData.className} d={pathData.d} />
        ))}
      </svg>
    </div>
  );
}
