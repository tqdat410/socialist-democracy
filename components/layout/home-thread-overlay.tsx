"use client";

import { useEffect, useMemo, useState } from "react";

type PinKey = "photo" | "note-1" | "note-2" | "note-3";

type Point = {
  x: number;
  y: number;
};

type Geometry = {
  width: number;
  height: number;
  pins: Record<PinKey, Point>;
};

const PIN_KEYS: PinKey[] = ["photo", "note-1", "note-2", "note-3"];

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

function readPinPoint(container: HTMLElement, key: PinKey): Point | null {
  const element = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);

  if (!element) {
    return null;
  }

  const pinRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return {
    x: pinRect.left - containerRect.left + pinRect.width / 2,
    y: pinRect.top - containerRect.top + pinRect.height / 2,
  };
}

function createThreadPath(from: Point, to: Point, curveDirection: 1 | -1): string {
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
  const bend = Math.min(34, Math.max(16, length * 0.075)) * curveDirection;
  const normalX = (-innerDy / length) * bend;
  const normalY = (innerDx / length) * bend;

  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${(midX + normalX).toFixed(1)} ${(midY + normalY).toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

interface HomeThreadOverlayProps {
  containerSelector?: string;
}

export function HomeThreadOverlay({ containerSelector = ".home-shell" }: HomeThreadOverlayProps) {
  const [geometry, setGeometry] = useState<Geometry | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);

    if (!container) {
      return;
    }

    const updateGeometry = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const points = PIN_KEYS.map((key) => readPinPoint(container, key));

      if (points.some((point) => !point)) {
        return;
      }

      const [photo, note1, note2, note3] = points as Point[];
      const nextGeometry: Geometry = {
        width,
        height,
        pins: {
          photo,
          "note-1": note1,
          "note-2": note2,
          "note-3": note3,
        },
      };

      setGeometry((previous) => (hasGeometryChanged(previous, nextGeometry) ? nextGeometry : previous));
    };

    updateGeometry();

    const rafOne = requestAnimationFrame(updateGeometry);
    const rafTwo = requestAnimationFrame(() => requestAnimationFrame(updateGeometry));

    const resizeObserver = new ResizeObserver(updateGeometry);
    resizeObserver.observe(container);

    for (const key of PIN_KEYS) {
      const target = container.querySelector<HTMLElement>(`[data-thread-pin="${key}"]`);
      if (target) {
        resizeObserver.observe(target);
      }
    }

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
    if (!geometry) {
      return null;
    }

    const { photo, "note-1": note1, "note-2": note2, "note-3": note3 } = geometry.pins;

    return [
      createThreadPath(photo, note1, -1),
      createThreadPath(photo, note2, -1),
      createThreadPath(photo, note3, -1),
      createThreadPath(note1, note2, 1),
      createThreadPath(note2, note3, 1),
    ];
  }, [geometry]);

  if (!geometry || !paths) {
    return <div className="home-thread-overlay" aria-hidden />;
  }

  return (
    <div className="home-thread-overlay" aria-hidden>
      <svg
        className="home-thread-svg"
        viewBox={`0 0 ${Math.max(1, geometry.width)} ${Math.max(1, geometry.height)}`}
        preserveAspectRatio="none"
      >
        {paths.map((pathData, index) => (
          <path key={index} className="home-thread-path" d={pathData} />
        ))}
      </svg>
    </div>
  );
}
