// Flashcard Q&A data for all sections

export interface FlashCard {
  id: string;
  section: string;
  front: string; // question
  back: string;  // answer
  frontBg?: string; // CSS class for front face
  backBg?: string;  // CSS class for back face
}

export const section1Flashcards: FlashCard[] = [
  {
    id: 'fc1-1',
    section: 'section-1',
    front: 'Dân chủ xuất hiện từ bao giờ?',
    back: 'Thế kỷ VII-VI TCN tại Hy Lạp cổ đại — "demokratia" (dân trị)',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-magazine',
  },
  {
    id: 'fc1-2',
    section: 'section-1',
    front: 'Lenin định nghĩa dân chủ là gì?',
    back: 'Dân chủ là sự thống trị của đa số — nhà nước dân chủ là một dạng đặc biệt của nhà nước',
    frontBg: 'paper-postit-blue',
    backBg: 'paper-kraft',
  },
  {
    id: 'fc1-3',
    section: 'section-1',
    front: 'Hồ Chí Minh nói gì về dân chủ?',
    back: '"Dân là chủ và dân làm chủ" — nhân dân vừa là chủ thể vừa là đối tượng của quyền lực',
    frontBg: 'paper-postit-pink',
    backBg: 'paper-lined',
  },
  {
    id: 'fc1-4',
    section: 'section-1',
    front: 'Dân chủ mang tính giai cấp như thế nào?',
    back: 'Dân chủ gắn liền với các hình thái kinh tế-xã hội; không có dân chủ phi giai cấp, phi lịch sử',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-news',
  },
];

export const section2Flashcards: FlashCard[] = [
  {
    id: 'fc2-1',
    section: 'section-2',
    front: 'Hai giai đoạn ra đời của dân chủ XHCN là gì?',
    back: 'Giai đoạn 1: đấu tranh giành chính quyền dân chủ. Giai đoạn 2: dùng dân chủ để tổ chức Nhà nước XHCN.',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-kraft',
  },
  {
    id: 'fc2-2',
    section: 'section-2',
    front: 'Mốc 1871 và 1917 khác nhau thế nào?',
    back: '1871 là phôi thai (Công xã Pari), còn 1917 là mốc xác lập chính thức nền dân chủ XHCN (Cách mạng Tháng Mười Nga).',
    frontBg: 'paper-postit-pink',
    backBg: 'paper-magazine',
  },
  {
    id: 'fc2-3',
    section: 'section-2',
    front: 'Bản chất chính trị của dân chủ XHCN là gì?',
    back: 'Đảng Cộng sản lãnh đạo để thực hiện quyền lực và lợi ích của toàn thể nhân dân, không phải lợi ích của thiểu số.',
    frontBg: 'paper-postit-blue',
    backBg: 'paper-news',
  },
  {
    id: 'fc2-4',
    section: 'section-2',
    front: 'Bản chất kinh tế và tư tưởng-văn hóa của dân chủ XHCN là gì?',
    back: 'Kinh tế: công hữu TLSX chủ yếu, phân phối theo lao động. Tư tưởng-văn hóa: Mác-Lênin chủ đạo, phát triển con người toàn diện.',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-lined',
  },
];

export const section3Flashcards: FlashCard[] = [
  {
    id: 'fc3-1',
    section: 'section-3',
    front: 'Tiêu chí cốt lõi khác nhau về giai cấp lãnh đạo là gì?',
    back: 'DC XHCN: giai cấp công nhân lãnh đạo qua Đảng Cộng sản. DC tư sản: giai cấp tư sản nắm quyền lực thực chất.',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-magazine',
  },
  {
    id: 'fc3-2',
    section: 'section-3',
    front: 'So sánh sở hữu TLSX giữa hai nền dân chủ',
    back: 'DC XHCN dựa trên công hữu TLSX chủ yếu; DC tư sản dựa trên tư hữu TLSX và quyền lực của vốn.',
    frontBg: 'paper-postit-pink',
    backBg: 'paper-kraft',
  },
  {
    id: 'fc3-3',
    section: 'section-3',
    front: 'Khác biệt về phân phối lợi ích là gì?',
    back: 'DC XHCN phân phối theo kết quả lao động là chủ yếu; DC tư sản phân phối theo tư bản, dễ tạo bất bình đẳng.',
    frontBg: 'paper-postit-blue',
    backBg: 'paper-news',
  },
  {
    id: 'fc3-4',
    section: 'section-3',
    front: 'Vì sao nói khác nhau về bản chất nhà nước?',
    back: 'Nhà nước pháp quyền XHCN hướng tới lợi ích đại đa số nhân dân; nhà nước tư sản bảo vệ trật tự của giai cấp tư sản.',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-lined',
  },
];

export const allFlashcards: FlashCard[] = [
  ...section1Flashcards,
  ...section2Flashcards,
  ...section3Flashcards,
];
