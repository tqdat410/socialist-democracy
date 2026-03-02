"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SectionIllustrationSlot } from "@/lib/content-data";

interface BoardPhotoCardProps {
  slot: SectionIllustrationSlot | null;
  className?: string;
  sizes?: string;
  pinAttribute?: string;
  pinKey?: string;
}

export default function BoardPhotoCard({
  slot,
  className,
  sizes = "(max-width: 768px) 80vw, 260px",
  pinAttribute,
  pinKey,
}: BoardPhotoCardProps) {
  const pinProps =
    pinAttribute && pinKey
      ? ({ [pinAttribute]: pinKey } as Record<string, string>)
      : null;

  return (
    <figure className={cn("scrap board-polaroid pushpin", className)}>
      {pinProps ? (
        <span className="home-thread-pin-anchor" {...pinProps} aria-hidden />
      ) : null}

      <div className="board-polaroid-body">
        {slot?.hasRealAsset && slot.src ? (
          <Image
            src={slot.src}
            alt={slot.alt}
            fill
            className="board-polaroid-img"
            sizes={sizes}
          />
        ) : (
          <div className="board-photo-placeholder">
            <p>{slot?.placeholderText ?? "MINH HỌA CHƯA CÓ ẢNH"}</p>
          </div>
        )}
      </div>
      <figcaption>{slot?.caption ?? "minh họa"}</figcaption>
    </figure>
  );
}
