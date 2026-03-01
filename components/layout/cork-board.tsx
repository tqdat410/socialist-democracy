"use client";

import { cn } from "@/lib/utils";

interface CorkBoardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// Wrapper that provides cork board context for export
export default function CorkBoard({ children, className, id }: CorkBoardProps) {
  return (
    <div
      id={id}
      className={cn(
        "relative max-w-[960px] mx-auto min-h-screen p-5 pb-32",
        className
      )}
    >
      {children}
    </div>
  );
}
