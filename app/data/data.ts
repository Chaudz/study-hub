import { Subject, Tutor } from "./types";

export const tutors: Tutor[] = [
  {
    id: "t1",
    name: "Thầy Hùng",
    avatar: "👨‍🏫",
    subjects: ["toan", "ly", "hoa"],
    rating: 4.9,
    status: "online",
  },
  {
    id: "t2",
    name: "Cô Lan",
    avatar: "👩‍🏫",
    subjects: ["van", "anh"],
    rating: 4.8,
    status: "online",
  },
  {
    id: "t3",
    name: "Thầy Minh",
    avatar: "🧑‍💻",
    subjects: ["tin", "toan"],
    rating: 5.0,
    status: "offline",
  },
  {
    id: "t4",
    name: "Cô Hoa",
    avatar: "👩‍🔬",
    subjects: ["hoa", "sinh"],
    rating: 4.7,
    status: "online",
  },
];

export const subjects: Subject[] = [
  {
    id: "toan",
    name: "Toán",
    icon: "📐",
    color: "#6366f1",
    bgClass: "from-indigo-500 to-purple-600",
    exercises: [
      {
        id: 1,
        title: "Giải phương trình bậc hai",
        difficulty: "Dễ",
        type: "Tự luận",
        description:
          "Tìm nghiệm của phương trình ax² + bx + c = 0 sử dụng công thức nghiệm.",
        solved: true,
      },
      {
        id: 2,
        title: "Tích phân hàm hợp",
        difficulty: "Khó",
        type: "Tự luận",
        description:
          "Tính tích phân ∫f(g(x))g'(x)dx bằng phương pháp đặt ẩn phụ.",
        solved: false,
      },
      {
        id: 3,
        title: "Đề thi HK1 Toán 10",
        difficulty: "Trung bình",
        type: "Đề thi",
        description:
          "Đề thi học kỳ 1 lớp 10 gồm 40 câu trắc nghiệm + 4 câu tự luận.",
        solved: false,
      },
      {
        id: 4,
        title: "Hàm số lượng giác",
        difficulty: "Trung bình",
        type: "Trắc nghiệm",
        description: "Ôn tập các hàm sin, cos, tan và các bài toán liên quan.",
        solved: true,
      },
    ],
  },
  {
    id: "van",
    name: "Ngữ văn",
    icon: "📖",
    color: "#ec4899",
    bgClass: "from-pink-500 to-rose-600",
    exercises: [
      {
        id: 1,
        title: "Phân tích bài thơ Đây thôn Vĩ Dạ",
        difficulty: "Trung bình",
        type: "Tự luận",
        description:
          "Phân tích hình ảnh thiên nhiên và tâm trạng tác giả trong bài thơ.",
        solved: false,
      },
      {
        id: 2,
        title: "Nghị luận xã hội về lòng biết ơn",
        difficulty: "Dễ",
        type: "Tự luận",
        description:
          "Viết bài văn nghị luận về chủ đề lòng biết ơn trong cuộc sống.",
        solved: true,
      },
      {
        id: 3,
        title: "Đề thi thử THPT Quốc gia 2025",
        difficulty: "Khó",
        type: "Đề thi",
        description:
          "Đề thi thử với đầy đủ phần đọc hiểu và làm văn theo cấu trúc mới.",
        solved: false,
      },
    ],
  },
  {
    id: "anh",
    name: "Tiếng Anh",
    icon: "🌍",
    color: "#0ea5e9",
    bgClass: "from-sky-500 to-cyan-600",
    exercises: [
      {
        id: 1,
        title: "Grammar: Present Perfect",
        difficulty: "Dễ",
        type: "Trắc nghiệm",
        description: "40 câu trắc nghiệm về thì hiện tại hoàn thành.",
        solved: true,
      },
      {
        id: 2,
        title: "Reading Comprehension",
        difficulty: "Trung bình",
        type: "Tự luận",
        description:
          "Đọc hiểu đoạn văn về chủ đề môi trường và trả lời câu hỏi.",
        solved: false,
      },
      {
        id: 3,
        title: "Đề thi THPT 2024 - Mã 403",
        difficulty: "Khó",
        type: "Đề thi",
        description: "Đề chính thức THPT Quốc gia 2024 mã đề 403.",
        solved: false,
      },
      {
        id: 4,
        title: "Từ vựng chủ đề Education",
        difficulty: "Dễ",
        type: "Trắc nghiệm",
        description: "50 câu từ vựng về chủ đề giáo dục.",
        solved: true,
      },
    ],
  },
  {
    id: "ly",
    name: "Vật lý",
    icon: "⚡",
    color: "#f59e0b",
    bgClass: "from-amber-500 to-orange-600",
    exercises: [
      {
        id: 1,
        title: "Định luật Newton",
        difficulty: "Dễ",
        type: "Trắc nghiệm",
        description:
          "Ôn tập 3 định luật Newton và các ứng dụng trong bài toán cơ học.",
        solved: false,
      },
      {
        id: 2,
        title: "Điện trường & Điện thế",
        difficulty: "Khó",
        type: "Tự luận",
        description:
          "Bài toán tính điện trường và điện thế từ phân bố điện tích.",
        solved: false,
      },
      {
        id: 3,
        title: "Đề thi HK2 Vật lý 11",
        difficulty: "Trung bình",
        type: "Đề thi",
        description: "Đề thi học kỳ 2 lớp 11 chương trình mới 2025.",
        solved: true,
      },
    ],
  },
  {
    id: "hoa",
    name: "Hóa học",
    icon: "🧪",
    color: "#10b981",
    bgClass: "from-emerald-500 to-teal-600",
    exercises: [
      {
        id: 1,
        title: "Phản ứng oxi hóa - khử",
        difficulty: "Trung bình",
        type: "Tự luận",
        description: "Cân bằng phương trình hóa học theo phương pháp electron.",
        solved: true,
      },
      {
        id: 2,
        title: "Hóa hữu cơ - Ancol & Andehit",
        difficulty: "Khó",
        type: "Trắc nghiệm",
        description: "30 câu lý thuyết và bài tập về ancol, andehit, axit.",
        solved: false,
      },
      {
        id: 3,
        title: "Đề thi thử Hóa 2025",
        difficulty: "Khó",
        type: "Đề thi",
        description: "Đề thi thử tốt nghiệp THPT môn Hóa học năm 2025.",
        solved: false,
      },
    ],
  },
  {
    id: "sinh",
    name: "Sinh học",
    icon: "🧬",
    color: "#22c55e",
    bgClass: "from-green-500 to-lime-600",
    exercises: [
      {
        id: 1,
        title: "Di truyền và biến dị",
        difficulty: "Trung bình",
        type: "Trắc nghiệm",
        description: "Bài tập lai một cặp tính trạng theo quy luật Mendel.",
        solved: false,
      },
      {
        id: 2,
        title: "Sinh thái học - Quần thể",
        difficulty: "Dễ",
        type: "Tự luận",
        description: "Phân tích các đặc trưng cơ bản của quần thể sinh vật.",
        solved: true,
      },
      {
        id: 3,
        title: "Đề thi Sinh học tốt nghiệp",
        difficulty: "Khó",
        type: "Đề thi",
        description:
          "Đề thi tốt nghiệp THPT môn Sinh học với giải thích chi tiết.",
        solved: false,
      },
    ],
  },
  {
    id: "su",
    name: "Lịch sử",
    icon: "🏛️",
    color: "#f97316",
    bgClass: "from-orange-500 to-red-600",
    exercises: [
      {
        id: 1,
        title: "Cách mạng tháng Tám 1945",
        difficulty: "Dễ",
        type: "Tự luận",
        description:
          "Phân tích nguyên nhân, diễn biến và ý nghĩa cuộc Cách mạng tháng Tám.",
        solved: true,
      },
      {
        id: 2,
        title: "Chiến tranh Việt Nam 1954–1975",
        difficulty: "Khó",
        type: "Đề thi",
        description:
          "Bộ câu hỏi tổng hợp về hai cuộc kháng chiến chống Pháp và Mỹ.",
        solved: false,
      },
    ],
  },
  {
    id: "dia",
    name: "Địa lý",
    icon: "🗺️",
    color: "#8b5cf6",
    bgClass: "from-violet-500 to-purple-600",
    exercises: [
      {
        id: 1,
        title: "Địa lý tự nhiên Việt Nam",
        difficulty: "Trung bình",
        type: "Trắc nghiệm",
        description: "Câu hỏi về địa hình, khí hậu, sông ngòi của Việt Nam.",
        solved: false,
      },
      {
        id: 2,
        title: "Vùng kinh tế - ĐBSCL",
        difficulty: "Dễ",
        type: "Tự luận",
        description: "Phân tích thế mạnh kinh tế vùng đồng bằng sông Cửu Long.",
        solved: true,
      },
    ],
  },
  {
    id: "gdkt",
    name: "GDKT & PL",
    icon: "⚖️",
    color: "#64748b",
    bgClass: "from-slate-500 to-gray-600",
    exercises: [
      {
        id: 1,
        title: "Quyền và nghĩa vụ công dân",
        difficulty: "Dễ",
        type: "Trắc nghiệm",
        description:
          "Ôn tập kiến thức về quyền và nghĩa vụ cơ bản của công dân.",
        solved: false,
      },
      {
        id: 2,
        title: "Pháp luật về hôn nhân & gia đình",
        difficulty: "Trung bình",
        type: "Tự luận",
        description:
          "Phân tích các quy định pháp luật về hôn nhân và gia đình.",
        solved: false,
      },
    ],
  },
  {
    id: "tin",
    name: "Tin học",
    icon: "💻",
    color: "#3b82f6",
    bgClass: "from-blue-500 to-indigo-600",
    exercises: [
      {
        id: 1,
        title: "Thuật toán sắp xếp",
        difficulty: "Trung bình",
        type: "Tự luận",
        description:
          "Cài đặt bubble sort, selection sort và so sánh độ phức tạp.",
        solved: true,
      },
      {
        id: 2,
        title: "Cơ sở dữ liệu SQL",
        difficulty: "Khó",
        type: "Tự luận",
        description: "Viết các câu lệnh SELECT, JOIN, GROUP BY trong SQL.",
        solved: false,
      },
      {
        id: 3,
        title: "Đề thi Tin học thực hành",
        difficulty: "Khó",
        type: "Đề thi",
        description: "Đề thi thực hành lập trình Pascal/Python.",
        solved: false,
      },
    ],
  },
];
