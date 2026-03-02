"use client";

import { useState } from "react";
import {
  SECTION_STATIC_EXPORT_ASSETS,
  type SectionId,
} from "@/lib/section-static-export-assets";

interface ExportButtonProps {
  sectionId: SectionId;
  compact?: boolean;
}

export default function ExportButton({ sectionId, compact = false }: ExportButtonProps) {
  const [loading, setLoading] = useState(false);
  const asset = SECTION_STATIC_EXPORT_ASSETS[sectionId];
  const disabled = loading || !asset.ready;

  async function handleDownload() {
    if (!asset.ready) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/exports/section/${sectionId}`);
      if (!response.ok) {
        throw new Error(`Static export failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = asset.filename;
      anchor.click();

      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      console.error("Static PNG export failed", err);
    } finally {
      setLoading(false);
    }
  }

  const label = loading
    ? "Đang xuất..."
    : asset.ready
      ? "Xuất PNG"
      : compact
        ? "PNG chưa sẵn sàng"
        : "Ảnh tĩnh chưa sẵn sàng";

  return (
    <div className="flex gap-2 shrink-0" data-export-ignore="true">
      <button
        onClick={handleDownload}
        disabled={disabled}
        className="scrap paper-magazine tape"
        style={{
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.72 : 1,
          padding: compact ? "6px 12px" : "8px 16px",
          fontSize: compact ? "0.74em" : "0.85em",
          fontFamily: "var(--font-anton)",
          letterSpacing: compact ? 0.6 : 1,
          lineHeight: 1.1,
        }}
      >
        {label}
      </button>
    </div>
  );
}
