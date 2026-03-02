export type SectionId = "1" | "2" | "3";

export interface SectionStaticExportAsset {
  sectionId: SectionId;
  filename: string;
  cloudinaryUrl: string;
  ready: boolean;
}

export const SECTION_STATIC_EXPORT_ASSETS: Record<SectionId, SectionStaticExportAsset> = {
  "1": {
    sectionId: "1",
    filename: "section-1-dan-chu-va-su-phat-trien.png",
    cloudinaryUrl: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772426585/section-1_seft1y.png",
    ready: true,
  },
  "2": {
    sectionId: "2",
    filename: "section-2-lich-su-dan-chu.png",
    cloudinaryUrl: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772451276/section-2_pa8efg.png",
    ready: true,
  },
  "3": {
    sectionId: "3",
    filename: "section-3-dan-chu-xhcn.png",
    cloudinaryUrl: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772465947/section-3_gxguk4.png",
    ready: true,
  },
};

export function isSectionId(value: string): value is SectionId {
  return value === "1" || value === "2" || value === "3";
}
