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
    description: 'Hành trình dân chủ qua các hình thái kinh tế-xã hội — từ bầu thủ lĩnh đến Cách mạng Tháng Mười.',
    icon: '🗺',
    color: '#1565C0',
  },
  {
    id: '3',
    title: 'DC XHCN vs Tư Sản',
    subtitle: 'So sánh theo tiêu chí',
    description: 'Phân tích 3 lĩnh vực dân chủ XHCN và so sánh với dân chủ tư sản qua 7 tiêu chí.',
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
export interface CaseStudy { id: string; section: string; title: string; body: string; source: string; }
export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    section: 'section-1',
    title: 'Dân chủ Athen — Nền tảng đầu tiên',
    body: 'Khoảng 508 TCN, Cleisthenes cải cách Athen: hội đồng 500 người được bầu theo lô, mọi công dân nam tự do đều có quyền phát biểu tại Hội đồng nhân dân (ekklesia). Tuy nhiên phụ nữ, nô lệ và người ngoại quốc bị loại trừ — minh chứng cho tính giai cấp của dân chủ.',
    source: 'Thucydides, Lịch sử chiến tranh Peloponnese',
  },
  {
    id: 'cs2',
    section: 'section-2',
    title: 'Công xã Paris 1871 — 72 ngày lịch sử',
    body: 'Từ 18/3 đến 28/5/1871, giai cấp công nhân Paris nắm quyền lực nhà nước lần đầu tiên. Công xã bầu ra hội đồng, trả lương cán bộ bằng lương công nhân, tách nhà thờ khỏi nhà nước, giáo dục miễn phí. Marx gọi đây là "hình thức chính trị cuối cùng được tìm thấy để thực hiện sự giải phóng kinh tế của lao động".',
    source: 'Marx, Nội chiến ở Pháp, 1871',
  },
  {
    id: 'cs3',
    section: 'section-3',
    title: 'Việt Nam — Mô hình DCCN trong thực tiễn',
    body: 'Hiến pháp 2013 Điều 2: "Nhà nước Cộng hòa XHCN Việt Nam là nhà nước pháp quyền XHCN của Nhân dân, do Nhân dân, vì Nhân dân." Cơ chế "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ" thể hiện 3 lĩnh vực DCCN: chính trị (Đảng), kinh tế (phân phối theo lao động), tư tưởng (Mác-Lênin, tư tưởng HCM).',
    source: 'Hiến pháp Việt Nam 2013',
  },
];
// Debate prep data for section 3
export interface DebateRound { id: number; claim: string; counter: string; hint: string; }
export const debateRounds: DebateRound[] = [
  {
    id: 1,
    claim: '"Dân chủ tư sản là dân chủ thực sự vì có bầu cử tự do!"',
    counter: 'Bầu cử tư sản bị chi phối bởi tiền bạc và truyền thông tập đoàn — chỉ giai cấp tư sản mới thực sự có quyền lực.',
    hint: 'Nghĩ đến vai trò của tiền trong bầu cử Mỹ',
  },
  {
    id: 2,
    claim: '"Đa đảng mới là dân chủ, một đảng là độc tài!"',
    counter: 'Số lượng đảng không quyết định chất lượng dân chủ. Đảng đại diện giai cấp công nhân lãnh đạo bảo đảm lợi ích đại đa số hơn đa đảng phục vụ tư bản.',
    hint: 'Chú ý: đa đảng nhưng đều phục vụ ai?',
  },
  {
    id: 3,
    claim: '"Kinh tế thị trường tư bản tạo ra nhiều tự do hơn!"',
    counter: 'Tự do kinh tế tư bản chỉ thực sự có với người có tư bản. Công hữu TLSX và phân phối theo lao động tạo ra công bằng thực chất cho người lao động.',
    hint: 'Tự do với người không có vốn là gì?',
  },
  {
    id: 4,
    claim: '"Các nước XHCN đã sụp đổ, chứng tỏ mô hình thất bại!"',
    counter: 'Sự sụp đổ Liên Xô xuất phát từ sai lầm chủ quan, không phủ nhận tính đúng đắn của lý luận XHCN. Việt Nam, Trung Quốc vẫn phát triển thành công trên nền tảng XHCN.',
    hint: 'Phân biệt lý luận và thực tiễn cụ thể',
  },
  {
    id: 5,
    claim: '"Nhân quyền ở các nước XHCN bị hạn chế hơn!"',
    counter: 'DCCN bảo đảm quyền kinh tế-xã hội thiết thực: giáo dục, y tế, việc làm cho đại đa số. Nhân quyền tư sản chỉ trên giấy tờ nếu thiếu điều kiện vật chất thực hiện.',
    hint: 'Quyền con người gồm cả quyền kinh tế-xã hội',
  },
];
export const comparisonCriteria = [
  { id: 'giaicap', label: 'Giai cấp lãnh đạo' },
  { id: 'coche', label: 'Cơ chế chính trị' },
  { id: 'sohuu', label: 'Sở hữu TLSX' },
  { id: 'phanphoi', label: 'Phân phối' },
  { id: 'phamvi', label: 'Phạm vi hưởng quyền' },
  { id: 'nhanuoc', label: 'Bản chất nhà nước' },
  { id: 'baucu', label: 'Bầu cử' },
];
