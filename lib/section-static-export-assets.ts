import { buildCloudinaryUrl, cloudinaryAssets } from "@/lib/cloudinary";

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
    cloudinaryUrl: buildCloudinaryUrl(cloudinaryAssets.sectionExport1, { raw: true }),
    ready: true,
  },
  "2": {
    sectionId: "2",
    filename: "section-2-lich-su-dan-chu.png",
    cloudinaryUrl: buildCloudinaryUrl(cloudinaryAssets.sectionExport2, { raw: true }),
    ready: true,
  },
  "3": {
    sectionId: "3",
    filename: "section-3-dan-chu-xhcn.png",
    cloudinaryUrl: buildCloudinaryUrl(cloudinaryAssets.sectionExport3, { raw: true }),
    ready: true,
  },
};

export function isSectionId(value: string): value is SectionId {
  return value === "1" || value === "2" || value === "3";
}
