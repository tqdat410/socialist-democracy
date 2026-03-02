// Enriched content: descriptions, quotes, case studies, debate data
export interface HcmQuote {
  id: string;
  text: string;
  source: string;
}
export const hcmQuotes: HcmQuote[] = [
  { id: 'q1', text: 'Dân là chủ và dân làm chủ.', source: 'Hồ Chí Minh Toàn tập' },
  { id: 'q2', text: 'Nước ta là nước dân chủ, địa vị cao nhất là dân.', source: 'Bài nói tại Đại hội thống nhất Việt Minh - Liên Việt, 1951' },
  { id: 'q3', text: 'Bao nhiêu lợi ích đều vì dân. Bao nhiêu quyền hạn đều của dân.', source: 'Dân vận, 1949' },
  { id: 'q4', text: 'Chính phủ ta là chính phủ của nhân dân, do nhân dân bầu ra.', source: 'Tuyên ngôn Độc lập, 1945' },
];
export interface SectionDescription {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}
export const sectionDescriptions: SectionDescription[] = [
  {
    id: '1',
    title: 'Dân Chủ',
    subtitle: 'Quan niệm & Lịch sử',
    description: 'Khám phá nguồn gốc từ Hy Lạp cổ đại, bản chất giai cấp và các góc nhìn từ Lenin đến Hồ Chí Minh.',
    icon: '📜',
    color: '#C62828',
  },
  {
    id: '2',
    title: 'Dân Chủ XHCN',
    subtitle: 'Quá trình & Bản chất',
    description: 'Theo dõi 2.1 quá trình ra đời và 2.2 bản chất dân chủ XHCN trên các phương diện chính trị, kinh tế, tư tưởng-văn hóa-xã hội.',
    icon: '🗺',
    color: '#1565C0',
  },
  {
    id: '3',
    title: 'DC XHCN vs Tư Sản',
    subtitle: 'So sánh theo tiêu chí',
    description: 'Bảng so sánh bản chất DC XHCN và DC tư sản theo 7 tiêu chí kèm ví dụ thực tiễn.',
    icon: '⚖',
    color: '#2E7D32',
  },
];
export type HomePhotoOrientation = "landscape" | "portrait" | "square";
export type HomePhotoTone = "warm" | "neutral" | "cool";
export interface HomePhotoFrame {
  id: string;
  title: string;
  caption: string;
  style: string;
  size: string;
  orientation: HomePhotoOrientation;
  placeholderTone: HomePhotoTone;
  prompt: string;
}
export const homePhotoFrames: HomePhotoFrame[] = [
  {
    id: "hp-01",
    title: "Thảo luận công dân",
    caption: "Documentary candid · 3:2",
    style: "35mm documentary",
    size: "1536x1024",
    orientation: "landscape",
    placeholderTone: "warm",
    prompt:
      "Vietnamese university students discussing civic participation around a wooden board with pinned notes and red threads, natural window light, candid expressions, realistic skin tones, 35mm documentary photography, subtle film grain, shallow depth of field, no readable text.",
  },
  {
    id: "hp-02",
    title: "Khoảnh khắc ghim note",
    caption: "Editorial close-up · 4:5",
    style: "macro editorial",
    size: "1200x1500",
    orientation: "portrait",
    placeholderTone: "neutral",
    prompt:
      "Close-up of a hand pinning a paper note about social democracy concepts on a brown wooden board, red string crossing frame, tactile paper fibers, macro lens look, warm tungsten lighting, high detail, cinematic realism, no text on paper.",
  },
  {
    id: "hp-03",
    title: "Không gian lớp học",
    caption: "Vintage classroom · 4:3",
    style: "vintage academic",
    size: "1440x1080",
    orientation: "landscape",
    placeholderTone: "cool",
    prompt:
      "A classroom corner with chalkboard, civic study materials, printed timeline photos, tape and pushpins, Vietnamese academic atmosphere, vintage color grading, soft shadows, 1990s documentary mood, realistic scene, no legible words.",
  },
  {
    id: "hp-04",
    title: "Biểu tượng khái niệm",
    caption: "Concept still-life · 1:1",
    style: "flat-lay editorial",
    size: "1080x1080",
    orientation: "square",
    placeholderTone: "warm",
    prompt:
      "Still-life composition of justice scale icon, ballot card, notebook, red thread and pin on wooden desk-board surface, top-down flat lay, balanced composition, neutral warm palette, editorial product-photo quality, no readable text.",
  },
  {
    id: "hp-05",
    title: "Mạng kết nối dữ kiện",
    caption: "Noir-inspired cinematic · 3:2",
    style: "cinematic noir",
    size: "1600x1066",
    orientation: "landscape",
    placeholderTone: "neutral",
    prompt:
      "Investigation board aesthetic with clues about social governance and citizen rights, moody contrast but readable, side light, controlled haze, cinematic noir palette in warm browns and deep reds, realistic materials, no readable text.",
  },
  {
    id: "hp-06",
    title: "Trình bày nhóm học tập",
    caption: "Human interaction · 4:5",
    style: "photojournalism",
    size: "1080x1350",
    orientation: "portrait",
    placeholderTone: "cool",
    prompt:
      "Small student group presenting infographic notes in front of a wooden board, collaborative gestures, dynamic yet natural posture, realistic candid photojournalism, warm classroom tones, gentle film grain, no readable signage.",
  },
];

export interface SectionIllustrationSlot {
  id: string;
  section: "2" | "3";
  block: string;
  src: string;
  alt: string;
  caption: string;
  placeholderText: string;
  hasRealAsset: boolean;
}

export const sectionIllustrationSlots: SectionIllustrationSlot[] = [
  {
    id: "s2-hero",
    section: "2",
    block: "hero",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772421375/xhcn_a2x2ci.png",
    alt: "Minh họa tổng quan dân chủ xã hội chủ nghĩa",
    caption: "xã hội chủ nghĩa",
    placeholderText: "MINH HỌA: QUYỀN LỰC NHÂN DÂN TRONG DÂN CHỦ XHCN",
    hasRealAsset: true,
  },
  {
    id: "s2-1871",
    section: "2",
    block: "emergence-1871",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772450719/pari_oqblyo.png",
    alt: "Minh họa Công xã Pari năm 1871",
    caption: "công xã pari 1871",
    placeholderText: "MINH HỌA: CÔNG XÃ PARI 1871",
    hasRealAsset: true,
  },
  {
    id: "s2-1917",
    section: "2",
    block: "emergence-1917",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772450718/cmt10_xa3z2u.png",
    alt: "Minh họa Cách mạng Tháng Mười Nga năm 1917",
    caption: "cách mạng tháng mười 1917",
    placeholderText: "MINH HỌA: CÁCH MẠNG THÁNG MƯỜI NGA 1917",
    hasRealAsset: true,
  },
  {
    id: "s2-development",
    section: "2",
    block: "emergence-development",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772450719/pt_na4b03.png",
    alt: "Minh họa quá trình phát triển của nền dân chủ xã hội chủ nghĩa",
    caption: "phát triển",
    placeholderText: "MINH HỌA: QUÁ TRÌNH PHÁT TRIỂN DÂN CHỦ XHCN",
    hasRealAsset: true,
  },
  {
    id: "s2-political",
    section: "2",
    block: "nature-political",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772450730/ct_l8wbyo.png",
    alt: "Minh họa bản chất chính trị của dân chủ xã hội chủ nghĩa",
    caption: "bản chất chính trị",
    placeholderText: "MINH HỌA: ĐẢNG CỘNG SẢN LÃNH ĐẠO VÌ NHÂN DÂN",
    hasRealAsset: true,
  },
  {
    id: "s2-economic",
    section: "2",
    block: "nature-economic",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772450732/kt_jec9w7.png",
    alt: "Minh họa bản chất kinh tế của dân chủ xã hội chủ nghĩa",
    caption: "bản chất kinh tế",
    placeholderText: "MINH HỌA: CÔNG HỮU TLSX - PHÂN PHỐI THEO LAO ĐỘNG",
    hasRealAsset: true,
  },
  {
    id: "s2-cultural",
    section: "2",
    block: "nature-cultural",
    src: "https://res.cloudinary.com/do6szo7zy/image/upload/v1772450718/tt_c1ucgx.png",
    alt: "Minh họa bản chất tư tưởng văn hóa xã hội của dân chủ xã hội chủ nghĩa",
    caption: "tư tưởng - văn hóa - xã hội",
    placeholderText: "MINH HỌA: MÁC-LÊNIN CHỦ ĐẠO VÀ PHÁT TRIỂN CON NGƯỜI",
    hasRealAsset: true,
  },
  {
    id: "s3-hero",
    section: "3",
    block: "hero",
    src: "",
    alt: "Minh họa bảng so sánh dân chủ xã hội chủ nghĩa và dân chủ tư sản",
    caption: "bảng so sánh",
    placeholderText: "MINH HỌA: SO SÁNH BẢN CHẤT DC XHCN VÀ DC TƯ SẢN",
    hasRealAsset: false,
  },
  {
    id: "s3-matrix",
    section: "3",
    block: "matrix-context",
    src: "",
    alt: "Minh họa đối chiếu hai mô hình dân chủ theo các tiêu chí",
    caption: "đối chiếu tiêu chí",
    placeholderText: "MINH HỌA: MA TRẬN TIÊU CHÍ XHCN VS TƯ SẢN",
    hasRealAsset: false,
  },
  {
    id: "s3-example-1",
    section: "3",
    block: "example-vote",
    src: "",
    alt: "Minh họa ví dụ quyền bầu cử và tham gia chính trị",
    caption: "ví dụ 1",
    placeholderText: "MINH HỌA: QUYỀN BẦU CỬ VÀ THAM GIA CHÍNH TRỊ",
    hasRealAsset: false,
  },
  {
    id: "s3-example-2",
    section: "3",
    block: "example-ownership",
    src: "",
    alt: "Minh họa ví dụ sở hữu đất đai và phân phối lợi ích xã hội",
    caption: "ví dụ 2",
    placeholderText: "MINH HỌA: SỞ HỮU ĐẤT ĐAI VÀ PHÂN PHỐI LỢI ÍCH",
    hasRealAsset: false,
  },
  {
    id: "s3-example-3",
    section: "3",
    block: "example-labor",
    src: "",
    alt: "Minh họa ví dụ quyền lao động và an sinh xã hội",
    caption: "ví dụ 3",
    placeholderText: "MINH HỌA: QUYỀN LAO ĐỘNG VÀ AN SINH XÃ HỘI",
    hasRealAsset: false,
  },
];

export function getSectionIllustrationSlot(slotId: string): SectionIllustrationSlot | null {
  return sectionIllustrationSlots.find((slot) => slot.id === slotId) ?? null;
}

export interface Section2EmergencePoint {
  id: string;
  title: string;
  detail: string;
  zoneId: string;
}

export const section2EmergencePoints: Section2EmergencePoint[] = [
  {
    id: "stage-1",
    title: "Giai đoạn 1",
    detail: "Giai cấp công nhân đấu tranh giành dân chủ và giành chính quyền từ giai cấp tư sản.",
    zoneId: "s2-zone-gd1",
  },
  {
    id: "stage-2",
    title: "Giai đoạn 2",
    detail: "Giai cấp công nhân dùng dân chủ để tổ chức Nhà nước XHCN của công nhân và nhân dân lao động.",
    zoneId: "s2-zone-gd2",
  },
  {
    id: "milestone-1871",
    title: "Công xã Pari (1871)",
    detail: "Phôi thai của nền dân chủ XHCN với mô hình nhà nước kiểu mới của giai cấp công nhân.",
    zoneId: "s2-zone-1871",
  },
  {
    id: "milestone-1917",
    title: "Cách mạng Tháng Mười Nga (1917)",
    detail: "Đánh dấu nền dân chủ XHCN chính thức được xác lập cùng nhà nước XHCN đầu tiên trên thế giới.",
    zoneId: "s2-zone-1917",
  },
  {
    id: "trajectory",
    title: "Quá trình phát triển",
    detail: "Dân chủ XHCN phát triển từ thấp đến cao, từ chưa hoàn thiện đến hoàn thiện, có kế thừa chọn lọc.",
    zoneId: "s2-zone-phattrien",
  },
];

export const section2DefinitionQuote =
  "\"Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất, mọi quyền lực thuộc về nhân dân, được thực hiện bằng nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng Cộng sản.\"";

export const section2NatureCoreNotes: string[] = [
  "thủ tiêu tình trạng áp bức giai cấp, dân tộc",
  "giải phóng con người một cách triệt để, toàn diện",
  "thực hiện quyền tự do, bình đẳng của con người",
  "đảm bảo quyền lực thực sự thuộc về nhân dân",
];

export interface Section2NatureDimension {
  id: string;
  title: string;
  detail?: string;
  subNotes: string[];
  zoneId: string;
  illustrationSlotId: string;
}

export const section2NatureDimensions: Section2NatureDimension[] = [
  {
    id: "chinhtri",
    title: "Bản chất chính trị",
    detail:
      "sự lãnh đạo chính trị của giai cấp công nhân thông qua đảng của nó đối với toàn xã hội, thực hiện quyền lực và lợi ích của toàn thể nhân dân",
    subNotes: [
      "Mang bản chất giai cấp công nhân",
      "Do Đảng Cộng sản lãnh đạo",
      "Chủ thể quyền lực nhà nước là nhân dân",
    ],
    zoneId: "s2-zone-chinhtri",
    illustrationSlotId: "s2-political",
  },
  {
    id: "kinhte",
    title: "Bản chất kinh tế",
    subNotes: [
      "quyền làm chủ của nhân dân về các tư liệu sản xuất chủ yếu",
      "Quyền làm chủ trong quá trình sản xuất kinh doanh, quản lý và phân phối",
      "động lực cơ bản nhất",
      "công hữu về tư liệu sản xuất",
      "phân phối lợi ích theo kết quả lao động",
    ],
    zoneId: "s2-zone-kinhte",
    illustrationSlotId: "s2-economic",
  },
  {
    id: "tutuong",
    title: "Bản chất tư tưởng - văn hóa - xã hội",
    subNotes: [
      "hệ tư tưởng Mác–Lênin",
      "Kế thừa và phát huy tinh hoa văn hóa dân tộc và nhân loại",
      "Nhân dân được làm chủ, giải phóng con người, phát triển toàn diện",
      "Kết hợp hài hòa lợi ích",
    ],
    zoneId: "s2-zone-tutuong",
    illustrationSlotId: "s2-cultural",
  },
];

export interface Section3ComparisonCriterion {
  id: string;
  label: string;
  xhcnZoneId: string;
  tusanZoneId: string;
}

export const section3ComparisonCriteria: Section3ComparisonCriterion[] = [
  { id: "giaicap", label: "Giai cấp lãnh đạo", xhcnZoneId: "s3-zone-giaicap-xhcn", tusanZoneId: "s3-zone-giaicap-tusan" },
  { id: "coche", label: "Cơ chế chính trị", xhcnZoneId: "s3-zone-coche-xhcn", tusanZoneId: "s3-zone-coche-tusan" },
  { id: "sohuu", label: "Sở hữu TLSX", xhcnZoneId: "s3-zone-sohuu-xhcn", tusanZoneId: "s3-zone-sohuu-tusan" },
  { id: "phanphoi", label: "Phân phối lợi ích", xhcnZoneId: "s3-zone-phanphoi-xhcn", tusanZoneId: "s3-zone-phanphoi-tusan" },
  { id: "phamvi", label: "Phạm vi dân chủ", xhcnZoneId: "s3-zone-phamvi-xhcn", tusanZoneId: "s3-zone-phamvi-tusan" },
  { id: "nhanuoc", label: "Bản chất nhà nước", xhcnZoneId: "s3-zone-nhanuoc-xhcn", tusanZoneId: "s3-zone-nhanuoc-tusan" },
  { id: "tutuong", label: "Hệ tư tưởng", xhcnZoneId: "s3-zone-tutuong-xhcn", tusanZoneId: "s3-zone-tutuong-tusan" },
];

export interface Section3PracticalExample {
  id: string;
  title: string;
  xhcn: string;
  tusan: string;
  conclusion: string;
  illustrationSlotId: string;
}

export const section3PracticalExamples: Section3PracticalExample[] = [
  {
    id: "example-vote",
    title: "Ví dụ 1: Quyền bầu cử và tham gia chính trị",
    xhcn: "Việt Nam bảo đảm quyền bầu cử phổ thông cho công dân; tinh thần tổng tuyển cử 1946 nhấn mạnh mọi công dân đều có quyền bầu cử và ứng cử.",
    tusan: "Ở một số nước tư bản, quyền bầu cử mở rộng chậm theo lịch sử và vẫn chịu ảnh hưởng lớn của tài chính vận động chính trị.",
    conclusion: "Khác biệt cốt lõi nằm ở mức độ thực chất của quyền làm chủ chính trị của đại đa số nhân dân.",
    illustrationSlotId: "s3-example-1",
  },
  {
    id: "example-ownership",
    title: "Ví dụ 2: Sở hữu đất đai và phân phối lợi ích xã hội",
    xhcn: "Đất đai và tài nguyên chủ yếu thuộc sở hữu toàn dân do Nhà nước đại diện quản lý; phân phối lợi ích gắn mục tiêu an sinh cho đại đa số.",
    tusan: "Chế độ tư hữu TLSX dẫn đến lợi ích tập trung vào nhóm nắm giữ tư bản, bất bình đẳng xã hội gia tăng.",
    conclusion: "Khác biệt thể hiện ở nền tảng sở hữu và định hướng phân phối lợi ích.",
    illustrationSlotId: "s3-example-2",
  },
  {
    id: "example-labor",
    title: "Ví dụ 3: Quyền lao động và an sinh xã hội",
    xhcn: "Nhà nước bảo đảm quyền lao động, BHXH, hỗ trợ thất nghiệp và chính sách an sinh cho người lao động.",
    tusan: "Quyền lao động và an sinh chịu tác động mạnh của thị trường, tương quan lực lượng chủ - thợ và vận động hành lang.",
    conclusion: "Khác biệt nằm ở vai trò của Nhà nước trong bảo vệ quyền lợi người lao động.",
    illustrationSlotId: "s3-example-3",
  },
];
