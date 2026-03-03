"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  criticalPreloadImageUrls,
  deferredPreloadImageUrls,
} from "@/lib/cloudinary";

const MIN_LOADING_SCREEN_MS = 420;
const MAX_PRELOAD_WAIT_MS = 3000;
const PROGRESS_STEP_MS = 22;
const LOADING_FADE_OUT_MS = 420;
const THREAD_PATH_D = "M 28 24 Q 160 88 292 24";
const NORMALIZED_PATH_LENGTH = 100;

type LoadingGateSnapshot = {
  loadedCount: number;
  preloadComplete: boolean;
  loadingVisible: boolean;
  displayProgress: number;
};

let inMemoryLoadingGateSnapshot: LoadingGateSnapshot | null = null;

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
  const [loadedCount, setLoadedCount] = useState(
    () => inMemoryLoadingGateSnapshot?.loadedCount ?? 0,
  );
  const [preloadComplete, setPreloadComplete] = useState(
    () => inMemoryLoadingGateSnapshot?.preloadComplete ?? criticalUrls.length === 0,
  );
  const [loadingVisible, setLoadingVisible] = useState(
    () => inMemoryLoadingGateSnapshot?.loadingVisible ?? true,
  );
  const [displayProgress, setDisplayProgress] = useState(
    () => Math.max(1, inMemoryLoadingGateSnapshot?.displayProgress ?? 1),
  );
  const progressPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const startedAt = Date.now();
    let completeTimeout: number | undefined;

    if (!criticalUrls.length) {
      return undefined;
    }

    const forceReadyTimeout = window.setTimeout(() => {
      if (!cancelled) {
        setPreloadComplete(true);
      }
    }, MAX_PRELOAD_WAIT_MS);

    Promise.all(
      criticalUrls.map((url) =>
        preloadImage(url).then(() => {
          if (!cancelled) {
            setLoadedCount((prev) => Math.min(criticalUrls.length, prev + 1));
          }
        }),
      ),
    ).finally(() => {
      const elapsedMs = Date.now() - startedAt;
      const waitMs = Math.max(0, MIN_LOADING_SCREEN_MS - elapsedMs);
      completeTimeout = window.setTimeout(() => {
        if (!cancelled) {
          setPreloadComplete(true);
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
    if (!preloadComplete || !deferredUrls.length) {
      return;
    }

    void Promise.all(deferredUrls.map((url) => preloadImage(url)));
  }, [deferredUrls, preloadComplete]);

  const actualPercent = criticalUrls.length
    ? Math.round((loadedCount / criticalUrls.length) * 100)
    : 100;
  const targetProgress = preloadComplete
    ? 100
    : Math.max(1, Math.min(90, actualPercent));

  useEffect(() => {
    inMemoryLoadingGateSnapshot = {
      loadedCount,
      preloadComplete,
      loadingVisible,
      displayProgress,
    };
  }, [displayProgress, loadedCount, loadingVisible, preloadComplete]);

  useEffect(() => {
    if (displayProgress >= targetProgress) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDisplayProgress((previous) => {
        if (previous >= targetProgress) {
          window.clearInterval(intervalId);
          return previous;
        }

        return Math.min(targetProgress, previous + 1);
      });
    }, PROGRESS_STEP_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [displayProgress, targetProgress]);

  const shouldRevealContent = preloadComplete && displayProgress >= 100;

  useEffect(() => {
    if (!shouldRevealContent || !loadingVisible) {
      return;
    }

    const hideTimeout = window.setTimeout(() => {
      setLoadingVisible(false);
    }, LOADING_FADE_OUT_MS);

    return () => {
      window.clearTimeout(hideTimeout);
    };
  }, [loadingVisible, shouldRevealContent]);

  const progress = Math.round(Math.max(1, Math.min(100, displayProgress)));

  return (
    <div className="loading-gate-root">
      <div className={`loading-gate-content ${shouldRevealContent || !loadingVisible ? "is-visible" : ""}`}>
        {children}
      </div>

      {loadingVisible ? (
        <main
          className={`home-board loading-gate-screen min-h-screen flex items-center justify-center p-4 ${shouldRevealContent ? "is-fading" : ""}`}
        >
          <section className="loading-note-stack" aria-live="polite">
            <article className="scrap paper-postit-yellow tape tape-red loading-note-card">
              <h1 className="loading-note-title">Đang tải</h1>

              <div className="loading-thread-wrap" aria-hidden>
                <svg
                  className="loading-thread-svg"
                  viewBox="0 0 320 96"
                  preserveAspectRatio="none"
                >
                  <path className="loading-thread-base" d={THREAD_PATH_D} />
                  <path
                    ref={progressPathRef}
                    className="loading-thread-progress"
                    d={THREAD_PATH_D}
                    pathLength={NORMALIZED_PATH_LENGTH}
                    style={{
                      strokeDasharray: `${NORMALIZED_PATH_LENGTH}`,
                      strokeDashoffset: `${(
                        NORMALIZED_PATH_LENGTH * (1 - Math.max(0, Math.min(1, displayProgress / 100)))
                      ).toFixed(2)}`,
                    }}
                  />
                </svg>
                <span className="loading-pin loading-pin-left" />
                <span className="loading-pin loading-pin-right" />
              </div>

              <p className="loading-note-percent">{progress}%</p>
            </article>
          </section>
        </main>
      ) : null}
    </div>
  );
}
