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
  { id: 's2-1', text: 'Mầm mống DC, bầu thủ lĩnh', answer: 'csnt', section: 'section-2', quiz: '2', cardVariant: 'note-green', thumbnail: true },
  { id: 's2-2', text: 'DC chủ nô, chỉ thiểu số', answer: 'nole', section: 'section-2', quiz: '2', cardVariant: 'note-pink', thumbnail: true },
  { id: 's2-3', text: 'Chuyên chế PK, DC bị xóa', answer: 'phongkien', section: 'section-2', quiz: '2', cardVariant: 'torn', thumbnail: true },
  { id: 's2-4', text: 'TK XIV-XV, bước tiến, thiểu số', answer: 'tuban', section: 'section-2', quiz: '2', cardVariant: 'lined', thumbnail: true },
  { id: 's2-5', text: 'Quyền lực đại đa số nhân dân', answer: 'xhcn', section: 'section-2', quiz: '2', cardVariant: 'magazine' },
  { id: 's2-6', text: 'DC = tập quán, NN tự tiêu vong', answer: 'cscn', section: 'section-2', quiz: '2', cardVariant: 'note-blue', thumbnail: true },
  { id: 's2-7', text: '1871', answer: 'milestone-1871', section: 'section-2', quiz: '2', cardVariant: 'stamp' },
  { id: 's2-8', text: '1917', answer: 'milestone-1917', section: 'section-2', quiz: '2', cardVariant: 'stamp' },
];

export const section2Zones: DropZoneConfig[] = [
  { id: 'csnt', label: 'Cộng sản nguyên thủy', section: 'section-2', quiz: '2' },
  { id: 'nole', label: 'Chiếm hữu nô lệ', section: 'section-2', quiz: '2' },
  { id: 'phongkien', label: 'Phong kiến', section: 'section-2', quiz: '2' },
  { id: 'tuban', label: 'Tư bản chủ nghĩa', section: 'section-2', quiz: '2' },
  { id: 'xhcn', label: 'Xã hội chủ nghĩa', section: 'section-2', quiz: '2' },
  { id: 'cscn', label: 'Cộng sản chủ nghĩa', section: 'section-2', quiz: '2' },
  { id: 'milestone-1871', label: 'Công xã Paris', section: 'section-2', quiz: '2' },
  { id: 'milestone-1917', label: 'Cách mạng Tháng Mười', section: 'section-2', quiz: '2' },
];

// ─── Section 3a (quiz '3a') ────────────────────────────────────────────────────
export const section3aItems: DragItem[] = [
  { id: 's3a-ct1', text: 'Lãnh đạo qua ĐCS', answer: 'chinhtri', section: 'section-3', quiz: '3a', cardVariant: 'note-pink' },
  { id: 's3a-ct2', text: 'Nhất nguyên chính trị', answer: 'chinhtri', section: 'section-3', quiz: '3a', cardVariant: 'torn' },
  { id: 's3a-ct3', text: 'Nhân dân = chủ thể QL', answer: 'chinhtri', section: 'section-3', quiz: '3a', cardVariant: 'magazine' },
  { id: 's3a-kt1', text: 'Công hữu TLSX chủ yếu', answer: 'kinhte', section: 'section-3', quiz: '3a', cardVariant: 'note-green' },
  { id: 's3a-kt2', text: 'Phân phối theo lao động', answer: 'kinhte', section: 'section-3', quiz: '3a', cardVariant: 'lined' },
  { id: 's3a-kt3', text: 'Lợi ích NLĐ = động lực', answer: 'kinhte', section: 'section-3', quiz: '3a', cardVariant: 'keyword' },
  { id: 's3a-tt1', text: 'Mác-Lênin chủ đạo', answer: 'tutuong', section: 'section-3', quiz: '3a', cardVariant: 'note-blue' },
  { id: 's3a-tt2', text: 'Kế thừa tinh hoa VH', answer: 'tutuong', section: 'section-3', quiz: '3a', cardVariant: 'note' },
  { id: 's3a-tt3', text: 'Hài hòa cá nhân-TT-XH', answer: 'tutuong', section: 'section-3', quiz: '3a', cardVariant: 'keyword' },
];

export const section3aZones: DropZoneConfig[] = [
  { id: 'chinhtri', label: 'Lĩnh vực Chính trị', section: 'section-3', quiz: '3a', column: 'chinhtri' },
  { id: 'kinhte', label: 'Lĩnh vực Kinh tế', section: 'section-3', quiz: '3a', column: 'kinhte' },
  { id: 'tutuong', label: 'Lĩnh vực Tư tưởng-VH', section: 'section-3', quiz: '3a', column: 'tutuong' },
];

// ─── Section 3b (quiz '3b') ────────────────────────────────────────────────────
export type ComparisonSide = 'xhcn' | 'tusan';

export interface ComparisonItem extends DragItem {
  side: ComparisonSide;
  criterion: string;
}

export const section3bItems: ComparisonItem[] = [
  // giaicap
  { id: 's3b-xhcn-gc', text: 'Giai cấp công nhân lãnh đạo', answer: 'giaicap-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'magazine', side: 'xhcn', criterion: 'giaicap' },
  { id: 's3b-ts-gc', text: 'Giai cấp tư sản lãnh đạo', answer: 'giaicap-tusan', section: 'section-3', quiz: '3b', cardVariant: 'note-pink', side: 'tusan', criterion: 'giaicap' },
  // coche
  { id: 's3b-xhcn-cc', text: 'Đảng Cộng sản lãnh đạo', answer: 'coche-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'note-blue', side: 'xhcn', criterion: 'coche' },
  { id: 's3b-ts-cc', text: 'Đa đảng, tam quyền phân lập', answer: 'coche-tusan', section: 'section-3', quiz: '3b', cardVariant: 'torn', side: 'tusan', criterion: 'coche' },
  // sohuu
  { id: 's3b-xhcn-sh', text: 'Công hữu tư liệu sản xuất', answer: 'sohuu-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'note-green', side: 'xhcn', criterion: 'sohuu' },
  { id: 's3b-ts-sh', text: 'Tư hữu tư liệu sản xuất', answer: 'sohuu-tusan', section: 'section-3', quiz: '3b', cardVariant: 'note-pink', side: 'tusan', criterion: 'sohuu' },
  // phanphoi
  { id: 's3b-xhcn-pp', text: 'Phân phối theo lao động', answer: 'phanphoi-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'lined', side: 'xhcn', criterion: 'phanphoi' },
  { id: 's3b-ts-pp', text: 'Phân phối theo tư bản', answer: 'phanphoi-tusan', section: 'section-3', quiz: '3b', cardVariant: 'note-blue', side: 'tusan', criterion: 'phanphoi' },
  // phamvi
  { id: 's3b-xhcn-pv', text: 'Toàn thể nhân dân lao động', answer: 'phamvi-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'magazine', side: 'xhcn', criterion: 'phamvi' },
  { id: 's3b-ts-pv', text: 'Hình thức, thiểu số hưởng', answer: 'phamvi-tusan', section: 'section-3', quiz: '3b', cardVariant: 'torn', side: 'tusan', criterion: 'phamvi' },
  // nhanuoc
  { id: 's3b-xhcn-nn', text: 'Nhà nước của nhân dân', answer: 'nhanuoc-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'note-green', side: 'xhcn', criterion: 'nhanuoc' },
  { id: 's3b-ts-nn', text: 'Nhà nước của giai cấp tư sản', answer: 'nhanuoc-tusan', section: 'section-3', quiz: '3b', cardVariant: 'note-pink', side: 'tusan', criterion: 'nhanuoc' },
  // baucu
  { id: 's3b-xhcn-bc', text: 'Bầu cử thực chất, mọi tầng lớp', answer: 'baucu-xhcn', section: 'section-3', quiz: '3b', cardVariant: 'note-blue', side: 'xhcn', criterion: 'baucu' },
  { id: 's3b-ts-bc', text: 'Bầu cử hình thức, tiền quyết định', answer: 'baucu-tusan', section: 'section-3', quiz: '3b', cardVariant: 'torn', side: 'tusan', criterion: 'baucu' },
];

export const section3bZones: DropZoneConfig[] = [
  { id: 'giaicap-xhcn', label: 'XHCN - Giai cấp', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'giaicap-tusan', label: 'Tư sản - Giai cấp', section: 'section-3', quiz: '3b', column: 'tusan' },
  { id: 'coche-xhcn', label: 'XHCN - Cơ chế', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'coche-tusan', label: 'Tư sản - Cơ chế', section: 'section-3', quiz: '3b', column: 'tusan' },
  { id: 'sohuu-xhcn', label: 'XHCN - Sở hữu', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'sohuu-tusan', label: 'Tư sản - Sở hữu', section: 'section-3', quiz: '3b', column: 'tusan' },
  { id: 'phanphoi-xhcn', label: 'XHCN - Phân phối', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'phanphoi-tusan', label: 'Tư sản - Phân phối', section: 'section-3', quiz: '3b', column: 'tusan' },
  { id: 'phamvi-xhcn', label: 'XHCN - Phạm vi', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'phamvi-tusan', label: 'Tư sản - Phạm vi', section: 'section-3', quiz: '3b', column: 'tusan' },
  { id: 'nhanuoc-xhcn', label: 'XHCN - Nhà nước', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'nhanuoc-tusan', label: 'Tư sản - Nhà nước', section: 'section-3', quiz: '3b', column: 'tusan' },
  { id: 'baucu-xhcn', label: 'XHCN - Bầu cử', section: 'section-3', quiz: '3b', column: 'xhcn' },
  { id: 'baucu-tusan', label: 'Tư sản - Bầu cử', section: 'section-3', quiz: '3b', column: 'tusan' },
];

// ─── All items combined ────────────────────────────────────────────────────────
export const allDragItems: DragItem[] = [
  ...section1Items,
  ...section2Items,
  ...section3aItems,
  ...section3bItems,
];
