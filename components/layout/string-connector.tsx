"use client";

// Decorative SVG red string connecting elements on the cork board
interface StringConnectorProps {
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  width?: number;
  height?: number;
}

export default function StringConnector({
  x1 = 0, y1 = 0, x2 = 100, y2 = 100,
  width = 200, height = 150,
}: StringConnectorProps) {
  // Slight curve for organic look
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 + 20;

  return (
    <svg
      width={width}
      height={height}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 0, opacity: 0.5 }}
      aria-hidden
    >
      <path
        d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
        fill="none"
        stroke="#C62828"
        strokeWidth="1.5"
        strokeDasharray="none"
      />
    </svg>
  );
}
