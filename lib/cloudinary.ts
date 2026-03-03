const CLOUDINARY_IMAGE_BASE_URL = "https://res.cloudinary.com/do6szo7zy/image/upload";
const DEFAULT_UI_TRANSFORM = "f_auto,q_auto,dpr_auto,c_limit,w_1600";

export const cloudinaryAssets = {
  homepageHero: "v1772421372/homepage_qigykn.png",
  section1Title: "v1772421375/title_01_o3uorf.png",
  section1Greek: "v1772421373/hylap_jahgk5.png",
  section1MarxLenin: "v1772421374/mac_lenin_opxtki.png",
  section1Hcm: "v1772421373/hcm_hligrt.png",
  section1Evolution01: "v1772421385/csnt_zpbrm6.png",
  section1Evolution02: "v1772421372/chnl_xs6xxx.png",
  section1Evolution03: "v1772421374/pk_i1njbb.png",
  section1Evolution04: "v1772421375/tbcn_rgem7x.png",
  section1Evolution05: "v1772421375/xhcn_a2x2ci.png",
  section1Evolution06: "v1772421372/cscn_elhp11.png",
  section2Pari: "v1772450719/pari_oqblyo.png",
  section2Cmt10: "v1772450718/cmt10_xa3z2u.png",
  section2Development: "v1772450719/pt_na4b03.png",
  section2Political: "v1772450730/ct_l8wbyo.png",
  section2Economic: "v1772450732/kt_jec9w7.png",
  section2Cultural: "v1772450718/tt_c1ucgx.png",
  section3Example2: "v1772462767/vd2_xfum25.png",
  section3Example3: "v1772462763/vd3_vcsvvn.png",
  sectionExport1: "v1772426585/section-1_seft1y.png",
  sectionExport2: "v1772451276/section-2_pa8efg.png",
  sectionExport3: "v1772465947/section-3_gxguk4.png",
} as const;

export function buildCloudinaryUrl(
  assetPath: string,
  options?: {
    raw?: boolean;
    transform?: string;
  },
): string {
  if (options?.raw) {
    return `${CLOUDINARY_IMAGE_BASE_URL}/${assetPath}`;
  }

  const transform = options?.transform?.trim() || DEFAULT_UI_TRANSFORM;
  return `${CLOUDINARY_IMAGE_BASE_URL}/${transform}/${assetPath}`;
}

const allUiPreloadImageUrls: string[] = Array.from(
  new Set([
    buildCloudinaryUrl(cloudinaryAssets.homepageHero),
    buildCloudinaryUrl(cloudinaryAssets.section1Title),
    buildCloudinaryUrl(cloudinaryAssets.section1Greek),
    buildCloudinaryUrl(cloudinaryAssets.section1MarxLenin),
    buildCloudinaryUrl(cloudinaryAssets.section1Hcm),
    buildCloudinaryUrl(cloudinaryAssets.section1Evolution01),
    buildCloudinaryUrl(cloudinaryAssets.section1Evolution02),
    buildCloudinaryUrl(cloudinaryAssets.section1Evolution03),
    buildCloudinaryUrl(cloudinaryAssets.section1Evolution04),
    buildCloudinaryUrl(cloudinaryAssets.section1Evolution05),
    buildCloudinaryUrl(cloudinaryAssets.section1Evolution06),
    buildCloudinaryUrl(cloudinaryAssets.section2Pari),
    buildCloudinaryUrl(cloudinaryAssets.section2Cmt10),
    buildCloudinaryUrl(cloudinaryAssets.section2Development),
    buildCloudinaryUrl(cloudinaryAssets.section2Political),
    buildCloudinaryUrl(cloudinaryAssets.section2Economic),
    buildCloudinaryUrl(cloudinaryAssets.section2Cultural),
    buildCloudinaryUrl(cloudinaryAssets.section3Example2),
    buildCloudinaryUrl(cloudinaryAssets.section3Example3),
  ]),
);

export const criticalPreloadImageUrls: string[] = [
  buildCloudinaryUrl(cloudinaryAssets.homepageHero),
];

export const deferredPreloadImageUrls: string[] = allUiPreloadImageUrls.filter(
  (url) => !criticalPreloadImageUrls.includes(url),
);
