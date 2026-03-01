"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MilestoneDetailProps {
  year: string;
  title: string;
  body: string;
  color?: string;
}

export default function MilestoneDetail({ year, title, body, color = "#C62828" }: MilestoneDetailProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="stamp"
        style={{ background: "rgba(255,255,255,0.9)", border: `3px solid ${color}`, color, cursor: "pointer" }}
      >
        {year}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="scrap paper-news max-w-[420px]">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "var(--font-anton)", fontSize: "1.4em", color }}>
              {year} — {title}
            </DialogTitle>
          </DialogHeader>
          <p style={{ fontFamily: "var(--font-courier-prime)", fontSize: "0.9em", lineHeight: 1.7, marginTop: 8 }}>
            {body}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
