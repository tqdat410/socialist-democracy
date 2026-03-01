"use client";

import { useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

interface ExportButtonProps {
  targetId: string; // id of the element to capture
  filename?: string;
}

export default function ExportButton({ targetId, filename = "infographic" }: ExportButtonProps) {
  const [loading, setLoading] = useState<"png" | "pdf" | null>(null);

  async function capture(): Promise<string> {
    const el = document.getElementById(targetId);
    if (!el) throw new Error("Target element not found");
    return toPng(el, { cacheBust: true, quality: 0.95 });
  }

  async function handlePng() {
    try {
      setLoading("png");
      const dataUrl = await capture();
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `${filename}.png`;
      a.click();
    } catch (err) {
      console.error("PNG export failed", err);
    } finally {
      setLoading(null);
    }
  }

  async function handlePdf() {
    try {
      setLoading("pdf");
      const dataUrl = await capture();
      const el = document.getElementById(targetId);
      const w = el?.offsetWidth ?? 960;
      const h = el?.offsetHeight ?? 1200;
      // A4 landscape ratio
      const pdf = new jsPDF({ orientation: w > h ? "landscape" : "portrait", unit: "px", format: [w, h] });
      pdf.addImage(dataUrl, "PNG", 0, 0, w, h);
      pdf.save(`${filename}.pdf`);
    } catch (err) {
      console.error("PDF export failed", err);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handlePng}
        disabled={loading !== null}
        className="scrap paper-magazine tape"
        style={{ border: "none", cursor: loading ? "wait" : "pointer", padding: "8px 16px", fontSize: "0.85em", fontFamily: "var(--font-anton)", letterSpacing: 1 }}
      >
        {loading === "png" ? "Đang xuất..." : "Xuất PNG"}
      </button>
      <button
        onClick={handlePdf}
        disabled={loading !== null}
        className="scrap paper-news tape-blue"
        style={{ border: "none", cursor: loading ? "wait" : "pointer", padding: "8px 16px", fontSize: "0.85em", fontFamily: "var(--font-anton)", letterSpacing: 1 }}
      >
        {loading === "pdf" ? "Đang xuất..." : "Xuất PDF"}
      </button>
    </div>
  );
}
