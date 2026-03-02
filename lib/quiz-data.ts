// All drag items and drop zone configurations for all sections

export type CardVariant =
  | 'note' | 'quote' | 'stamp' | 'keyword' | 'magazine'
  | 'torn' | 'lined' | 'note-pink' | 'note-blue' | 'note-green';

export interface DragItem {
  id: string;
  text: string;
  answer: string; // drop zone id this item belongs to
  section: string;
  quiz: string;
  cardVariant: CardVariant;
  thumbnail?: boolean;
}

export interface DropZoneConfig {
  id: string;
  label: string;
  section: string;
  quiz: string;
  column?: string; // for section 3 columns
}

// ─── Section 1 (quiz '1') ─────────────────────────────────────────────────────
export const section1Items: DragItem[] = [
  { id: 's1-1', text: 'Quyền cơ bản của con người', answer: 'giatri', section: 'section-1', quiz: '1', cardVariant: 'magazine' },
  { id: 's1-2', text: 'Hình thức tổ chức nhà nước', answer: 'phamtruct', section: 'section-1', quiz: '1', cardVariant: 'note-blue' },
  { id: 's1-3', text: 'Nguyên tắc tổ chức CT-XH', answer: 'nguyentac', section: 'section-1', quiz: '1', cardVariant: 'torn' },
  { id: 's1-4', text: 'Gắn liền các hình thái KT-XH', answer: 'phamtruls', section: 'section-1', quiz: '1', cardVariant: 'note-green' },
  { id: 's1-5', text: 'Dân chủ là sự thống trị của đa số', answer: 'lenin-quote', section: 'section-1', quiz: '1', cardVariant: 'quote' },
  { id: 's1-6', text: 'Dân là chủ và dân làm chủ', answer: 'hcm-quote', section: 'section-1', quiz: '1', cardVariant: 'lined' },
  { id: 's1-7', text: 'TK VII-VI TCN', answer: 'origin-date', section: 'section-1', quiz: '1', cardVariant: 'stamp' },
];

export const section1Zones: DropZoneConfig[] = [
  { id: 'giatri', label: 'Giá trị dân chủ', section: 'section-1', quiz: '1' },
  { id: 'phamtruct', label: 'Phạm trù chính trị', section: 'section-1', quiz: '1' },
  { id: 'nguyentac', label: 'Nguyên tắc tổ chức', section: 'section-1', quiz: '1' },
  { id: 'phamtruls', label: 'Phạm trù lịch sử', section: 'section-1', quiz: '1' },
  { id: 'lenin-quote', label: 'Lenin nói về dân chủ', section: 'section-1', quiz: '1' },
  { id: 'hcm-quote', label: 'Hồ Chí Minh về dân chủ', section: 'section-1', quiz: '1' },
  { id: 'origin-date', label: 'Thời điểm xuất hiện', section: 'section-1', quiz: '1' },
];

// ─── Section 2 (quiz '2') ─────────────────────────────────────────────────────
export const section2Items: DragItem[] = [
  { id: "s2-01", text: "Giai đoạn 1: đấu tranh giành chính quyền dân chủ", answer: "s2-zone-gd1", section: "section-2", quiz: "2", cardVariant: "note-green" },
  { id: "s2-02", text: "Giai đoạn 2: dùng dân chủ để tổ chức Nhà nước XHCN", answer: "s2-zone-gd2", section: "section-2", quiz: "2", cardVariant: "note-blue" },
  { id: "s2-03", text: "Công xã Pari (1871): phôi thai nền dân chủ XHCN", answer: "s2-zone-1871", section: "section-2", quiz: "2", cardVariant: "stamp" },
  { id: "s2-04", text: "Cách mạng Tháng Mười Nga (1917): xác lập nền dân chủ XHCN", answer: "s2-zone-1917", section: "section-2", quiz: "2", cardVariant: "stamp" },
  { id: "s2-05", text: "Phát triển từ thấp đến cao, kế thừa chọn lọc các giá trị dân chủ trước đó", answer: "s2-zone-phattrien", section: "section-2", quiz: "2", cardVariant: "lined" },
  { id: "s2-06", text: "Mọi quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ", answer: "s2-zone-dinhnghia", section: "section-2", quiz: "2", cardVariant: "magazine" },
  { id: "s2-07", text: "Chính trị: Đảng Cộng sản lãnh đạo vì lợi ích của toàn thể nhân dân", answer: "s2-zone-chinhtri", section: "section-2", quiz: "2", cardVariant: "note-pink" },
  { id: "s2-08", text: "Kinh tế: công hữu TLSX chủ yếu, phân phối theo lao động", answer: "s2-zone-kinhte", section: "section-2", quiz: "2", cardVariant: "note-green" },
  { id: "s2-09", text: "Tư tưởng-văn hóa-xã hội: Mác-Lênin chủ đạo, hài hòa lợi ích cá nhân - tập thể - xã hội", answer: "s2-zone-tutuong", section: "section-2", quiz: "2", cardVariant: "torn" },
];

export const section2Zones: DropZoneConfig[] = [
  { id: "s2-zone-gd1", label: "Giai đoạn 1", section: "section-2", quiz: "2" },
  { id: "s2-zone-gd2", label: "Giai đoạn 2", section: "section-2", quiz: "2" },
  { id: "s2-zone-1871", label: "Mốc 1871", section: "section-2", quiz: "2" },
  { id: "s2-zone-1917", label: "Mốc 1917", section: "section-2", quiz: "2" },
  { id: "s2-zone-phattrien", label: "Lộ trình phát triển", section: "section-2", quiz: "2" },
  { id: "s2-zone-dinhnghia", label: "Định nghĩa cốt lõi", section: "section-2", quiz: "2" },
  { id: "s2-zone-chinhtri", label: "Bản chất chính trị", section: "section-2", quiz: "2" },
  { id: "s2-zone-kinhte", label: "Bản chất kinh tế", section: "section-2", quiz: "2" },
  { id: "s2-zone-tutuong", label: "Bản chất tư tưởng-văn hóa-xã hội", section: "section-2", quiz: "2" },
];

// ─── Section 3 (quiz '3') ─────────────────────────────────────────────────────
export const section3Items: DragItem[] = [
  { id: "s3-01", text: "Giai cấp công nhân lãnh đạo thông qua Đảng Cộng sản, đại diện lợi ích đại đa số", answer: "s3-zone-giaicap-xhcn", section: "section-3", quiz: "3", cardVariant: "magazine" },
  { id: "s3-02", text: "Giai cấp tư sản nắm quyền, đại diện lợi ích thiểu số sở hữu tư bản", answer: "s3-zone-giaicap-tusan", section: "section-3", quiz: "3", cardVariant: "note-pink" },
  { id: "s3-03", text: "Nhất nguyên chính trị với vai trò lãnh đạo của Đảng Cộng sản", answer: "s3-zone-coche-xhcn", section: "section-3", quiz: "3", cardVariant: "note-blue" },
  { id: "s3-04", text: "Đa nguyên đa đảng, cạnh tranh nhưng bản chất giai cấp tư sản không đổi", answer: "s3-zone-coche-tusan", section: "section-3", quiz: "3", cardVariant: "torn" },
  { id: "s3-05", text: "Công hữu TLSX chủ yếu, đất đai thuộc sở hữu toàn dân", answer: "s3-zone-sohuu-xhcn", section: "section-3", quiz: "3", cardVariant: "note-green" },
  { id: "s3-06", text: "Tư hữu TLSX, tư bản tư nhân chi phối kinh tế", answer: "s3-zone-sohuu-tusan", section: "section-3", quiz: "3", cardVariant: "note-pink" },
  { id: "s3-07", text: "Phân phối theo kết quả lao động là chủ yếu", answer: "s3-zone-phanphoi-xhcn", section: "section-3", quiz: "3", cardVariant: "lined" },
  { id: "s3-08", text: "Phân phối theo tư bản, dễ dẫn tới bất bình đẳng sâu sắc", answer: "s3-zone-phanphoi-tusan", section: "section-3", quiz: "3", cardVariant: "note-blue" },
  { id: "s3-09", text: "Phạm vi dân chủ hướng tới đại đa số nhân dân lao động", answer: "s3-zone-phamvi-xhcn", section: "section-3", quiz: "3", cardVariant: "note-green" },
  { id: "s3-10", text: "Dân chủ hình thức, quyền lực thực chất nghiêng về nhóm có vốn", answer: "s3-zone-phamvi-tusan", section: "section-3", quiz: "3", cardVariant: "torn" },
  { id: "s3-11", text: "Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân", answer: "s3-zone-nhanuoc-xhcn", section: "section-3", quiz: "3", cardVariant: "note-green" },
  { id: "s3-12", text: "Nhà nước pháp quyền tư sản bảo vệ trật tự của giai cấp tư sản", answer: "s3-zone-nhanuoc-tusan", section: "section-3", quiz: "3", cardVariant: "note-pink" },
  { id: "s3-13", text: "Hệ tư tưởng Mác-Lênin giữ vai trò chủ đạo trong xã hội mới", answer: "s3-zone-tutuong-xhcn", section: "section-3", quiz: "3", cardVariant: "magazine" },
  { id: "s3-14", text: "Đa tư tưởng, chịu ảnh hưởng mạnh của tư tưởng tự do tư sản", answer: "s3-zone-tutuong-tusan", section: "section-3", quiz: "3", cardVariant: "torn" },
];

export const section3Zones: DropZoneConfig[] = [
  { id: "s3-zone-giaicap-xhcn", label: "XHCN · Giai cấp", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-giaicap-tusan", label: "Tư sản · Giai cấp", section: "section-3", quiz: "3", column: "tusan" },
  { id: "s3-zone-coche-xhcn", label: "XHCN · Cơ chế", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-coche-tusan", label: "Tư sản · Cơ chế", section: "section-3", quiz: "3", column: "tusan" },
  { id: "s3-zone-sohuu-xhcn", label: "XHCN · Sở hữu", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-sohuu-tusan", label: "Tư sản · Sở hữu", section: "section-3", quiz: "3", column: "tusan" },
  { id: "s3-zone-phanphoi-xhcn", label: "XHCN · Phân phối", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-phanphoi-tusan", label: "Tư sản · Phân phối", section: "section-3", quiz: "3", column: "tusan" },
  { id: "s3-zone-phamvi-xhcn", label: "XHCN · Phạm vi", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-phamvi-tusan", label: "Tư sản · Phạm vi", section: "section-3", quiz: "3", column: "tusan" },
  { id: "s3-zone-nhanuoc-xhcn", label: "XHCN · Nhà nước", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-nhanuoc-tusan", label: "Tư sản · Nhà nước", section: "section-3", quiz: "3", column: "tusan" },
  { id: "s3-zone-tutuong-xhcn", label: "XHCN · Hệ tư tưởng", section: "section-3", quiz: "3", column: "xhcn" },
  { id: "s3-zone-tutuong-tusan", label: "Tư sản · Hệ tư tưởng", section: "section-3", quiz: "3", column: "tusan" },
];

// ─── All items combined ────────────────────────────────────────────────────────
export const allDragItems: DragItem[] = [
  ...section1Items,
  ...section2Items,
  ...section3Items,
];
