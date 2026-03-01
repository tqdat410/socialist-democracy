"use client";

import { cn } from "@/lib/utils";

export type CardVariant =
  | 'note' | 'quote' | 'stamp' | 'keyword' | 'magazine'
  | 'torn' | 'lined' | 'note-pink' | 'note-blue' | 'note-green';

export type AccessoryType = 'tape' | 'tape-red' | 'tape-blue' | 'pushpin' | 'none';

interface ScrapCardProps {
  variant?: CardVariant;
  accessory?: AccessoryType;
  children: React.ReactNode;
  className?: string;
  locked?: boolean;
  onClick?: () => void;
}

// Maps variant to CSS class from scrapbook.css
const variantClass: Record<CardVariant, string> = {
  note: 'card-note',
  quote: 'card-quote',
  stamp: 'card-stamp',
  keyword: 'card-keyword',
  magazine: 'card-magazine',
  torn: 'card-torn',
  lined: 'card-lined',
  'note-pink': 'card-note-pink',
  'note-blue': 'card-note-blue',
  'note-green': 'card-note-green',
};

const accessoryClass: Record<AccessoryType, string> = {
  tape: 'tape',
  'tape-red': 'tape-red',
  'tape-blue': 'tape-blue',
  pushpin: 'pushpin',
  none: '',
};

export default function ScrapCard({
  variant = 'note',
  accessory = 'none',
  children,
  className,
  locked = false,
  onClick,
}: ScrapCardProps) {
  return (
    <div
      className={cn(
        'scrap',
        variantClass[variant],
        accessory !== 'none' && accessoryClass[accessory],
        locked && 'locked',
        className
      )}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : undefined }}
    >
      {children}
    </div>
  );
}
