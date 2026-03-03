"use client";

import { useEffect, useMemo, useState } from "react";
import {
  criticalPreloadImageUrls,
  deferredPreloadImageUrls,
} from "@/lib/cloudinary";

const MIN_LOADING_SCREEN_MS = 420;
const MAX_PRELOAD_WAIT_MS = 3000;

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new window.Image();
    let settled = false;

    const settle = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    image.onload = settle;
    image.onerror = settle;
    image.decoding = "async";
    image.src = url;

    if (image.complete) {
      settle();
    }
  });
}

interface ResourceLoadingGateProps {
  children: React.ReactNode;
}

export default function ResourceLoadingGate({
  children,
}: ResourceLoadingGateProps) {
  const criticalUrls = useMemo(
    () => Array.from(new Set(criticalPreloadImageUrls)),
    [],
  );
  const deferredUrls = useMemo(
    () => Array.from(new Set(deferredPreloadImageUrls)),
    [],
  );
  const [loadedCount, setLoadedCount] = useState(0);
  const [ready, setReady] = useState(() => criticalUrls.length === 0);

  useEffect(() => {
    let cancelled = false;
    const startedAt = Date.now();
    let completeTimeout: number | undefined;

    if (!criticalUrls.length) {
      return undefined;
    }

    const forceReadyTimeout = window.setTimeout(() => {
      if (!cancelled) {
        setReady(true);
      }
    }, MAX_PRELOAD_WAIT_MS);

    Promise.all(
      criticalUrls.map((url) =>
        preloadImage(url).then(() => {
          if (!cancelled) {
            setLoadedCount((prev) => prev + 1);
          }
        }),
      ),
    ).finally(() => {
      const elapsedMs = Date.now() - startedAt;
      const waitMs = Math.max(0, MIN_LOADING_SCREEN_MS - elapsedMs);
      completeTimeout = window.setTimeout(() => {
        if (!cancelled) {
          setReady(true);
        }
      }, waitMs);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(forceReadyTimeout);
      if (completeTimeout) {
        window.clearTimeout(completeTimeout);
      }
    };
  }, [criticalUrls]);

  useEffect(() => {
    if (!ready || !deferredUrls.length) {
      return;
    }

    void Promise.all(deferredUrls.map((url) => preloadImage(url)));
  }, [deferredUrls, ready]);

  if (ready) {
    return <>{children}</>;
  }

  const progress = criticalUrls.length
    ? Math.round((loadedCount / criticalUrls.length) * 100)
    : 100;

  return (
    <main className="home-board min-h-screen flex items-center justify-center p-4">
      <section className="scrap paper-magazine pushpin max-w-[440px] w-full p-6 text-center">
        <h1 className="font-[family-name:var(--font-anton)] text-[1.1rem] tracking-[0.12em] mb-2">
          ĐANG TẢI INFOGRAPHIC
        </h1>
        <p className="font-[family-name:var(--font-be-vietnam-pro)] text-sm opacity-90 mb-4">
          Chuẩn bị ảnh và bố cục để hiển thị mượt hơn.
        </p>

        <div
          aria-hidden
          className="w-full h-2 rounded-sm overflow-hidden"
          style={{ background: "rgba(255,255,255,0.4)" }}
        >
          <div
            className="h-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, rgba(204,32,40,0.95), rgba(255,180,80,0.95))",
            }}
          />
        </div>

        <p className="font-[family-name:var(--font-anton)] text-xs tracking-[0.14em] mt-3">
          {progress}%
        </p>
      </section>
    </main>
  );
}
