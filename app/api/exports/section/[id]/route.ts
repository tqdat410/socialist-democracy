import { NextResponse } from "next/server";
import {
  isSectionId,
  SECTION_STATIC_EXPORT_ASSETS,
} from "@/lib/section-static-export-assets";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  if (!isSectionId(id)) {
    return NextResponse.json({ error: "Invalid section id" }, { status: 400 });
  }

  const asset = SECTION_STATIC_EXPORT_ASSETS[id];
  if (!asset.ready || !asset.cloudinaryUrl.trim()) {
    return NextResponse.json(
      { error: "Static asset not ready" },
      { status: 404 },
    );
  }

  let upstream: Response;
  try {
    upstream = await fetch(asset.cloudinaryUrl, {
      next: { revalidate: 300 },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach static asset source" },
      { status: 502 },
    );
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Failed to fetch static asset" },
      { status: 502 },
    );
  }

  const contentType = upstream.headers.get("content-type") || "image/png";
  const bytes = await upstream.arrayBuffer();

  return new Response(bytes, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${asset.filename}"`,
      "Cache-Control": "public, max-age=300",
    },
  });
}
