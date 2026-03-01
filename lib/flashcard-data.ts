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
    front: 'Dân chủ nguyên thủy có đặc điểm gì?',
    back: 'Mầm mống dân chủ — bầu thủ lĩnh, quyết định bộ lạc theo tập thể, chưa có nhà nước',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-kraft',
  },
  {
    id: 'fc2-2',
    section: 'section-2',
    front: 'Công xã Paris 1871 có ý nghĩa gì?',
    back: 'Nhà nước vô sản đầu tiên trong lịch sử — mô hình dân chủ của giai cấp công nhân',
    frontBg: 'paper-postit-pink',
    backBg: 'paper-magazine',
  },
  {
    id: 'fc2-3',
    section: 'section-2',
    front: 'Cách mạng Tháng Mười 1917 mang lại điều gì?',
    back: 'Khai sinh nhà nước XHCN đầu tiên — mở ra thời đại dân chủ cho giai cấp công nhân và nhân dân lao động',
    frontBg: 'paper-postit-blue',
    backBg: 'paper-news',
  },
  {
    id: 'fc2-4',
    section: 'section-2',
    front: 'Tại sao dân chủ tư sản còn hạn chế?',
    back: 'Chỉ phục vụ thiểu số giai cấp tư sản — đa số nhân dân lao động vẫn bị bóc lột và thiếu quyền thực chất',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-lined',
  },
];

export const section3Flashcards: FlashCard[] = [
  {
    id: 'fc3-1',
    section: 'section-3',
    front: 'Ba lĩnh vực của DCCN XHCN là gì?',
    back: 'Chính trị — Kinh tế — Tư tưởng văn hóa',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-magazine',
  },
  {
    id: 'fc3-2',
    section: 'section-3',
    front: 'Đặc trưng chính trị của DCCN là gì?',
    back: 'Đảng Cộng sản lãnh đạo, nhất nguyên chính trị, nhân dân là chủ thể quyền lực nhà nước',
    frontBg: 'paper-postit-pink',
    backBg: 'paper-kraft',
  },
  {
    id: 'fc3-3',
    section: 'section-3',
    front: 'Đặc trưng kinh tế của DCCN là gì?',
    back: 'Công hữu tư liệu sản xuất chủ yếu, phân phối theo lao động, lợi ích người lao động là động lực',
    frontBg: 'paper-postit-blue',
    backBg: 'paper-news',
  },
  {
    id: 'fc3-4',
    section: 'section-3',
    front: 'DC XHCN khác DC tư sản ở điểm cốt lõi nào?',
    back: 'XHCN: quyền lực thực chất cho đại đa số. Tư sản: hình thức, thực chất phục vụ thiểu số tư bản',
    frontBg: 'paper-postit-yellow',
    backBg: 'paper-lined',
  },
];

export const allFlashcards: FlashCard[] = [
  ...section1Flashcards,
  ...section2Flashcards,
  ...section3Flashcards,
];
