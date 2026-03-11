# 🏫 Hub Study Lý Sơn

> **Nền tảng học tập trực tuyến dành cho học sinh Lý Sơn** — Giải đề, bài tập & hỗ trợ gia sư trực tuyến.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Tính năng nổi bật

- 📚 **Quản lý bài tập theo môn học** — Duyệt bài theo từng môn, lọc theo loại (trắc nghiệm, tự luận, đề thi) và mức độ (dễ, trung bình, khó).
- 🔍 **Tìm kiếm thông minh** — Tìm kiếm bài tập theo tên trong thời gian thực.
- 📊 **Thống kê tiến độ học tập** — Theo dõi số bài đã hoàn thành, chuỗi ngày học và điểm XP tích lũy.
- 🧑‍🏫 **Chat với Gia Sư trực tuyến** — Slide panel từ phía phải cho phép học sinh chọn gia sư phù hợp và đặt câu hỏi trực tiếp.
- 📱 **Responsive hoàn toàn** — Giao diện tối ưu cho cả desktop và mobile với sidebar menu hamburger.
- 🔐 **Xác thực người dùng** — Hệ thống đăng nhập / đăng xuất với JWT (access token + refresh token) lưu vào LocalStorage.

---

## 🛠️ Tech Stack

| Công nghệ                                    | Phiên bản | Mục đích                     |
| -------------------------------------------- | --------- | ---------------------------- |
| [Next.js](https://nextjs.org)                | 16.1.6    | Framework chính (App Router) |
| [React](https://react.dev)                   | 19.2.3    | UI Library                   |
| [TypeScript](https://www.typescriptlang.org) | ^5        | Type safety                  |
| [TailwindCSS](https://tailwindcss.com)       | ^4        | Styling                      |
| [Axios](https://axios-http.com)              | ^1.13.6   | HTTP Client                  |
| [clsx](https://github.com/lukeed/clsx)       | ^2.1.1    | Conditional class names      |

---

## 📁 Cấu trúc thư mục

```
hub-lyson/
├── app/
│   ├── (app)/
│   │   ├── (guest)/
│   │   │   ├── home/           # Trang chủ học tập (bài tập, gia sư, thống kê)
│   │   │   │   ├── page.tsx
│   │   │   │   ├── ExerciseCard.tsx
│   │   │   │   ├── FilterBtn.tsx
│   │   │   │   ├── StatsCard.tsx
│   │   │   │   └── SubjectTab.tsx
│   │   │   └── signin/         # Trang đăng nhập
│   │   └── (main)/
│   ├── components/
│   │   └── Layouts/
│   │       ├── BaseLayout.tsx
│   │       ├── GuestLayout.tsx
│   │       └── components/
│   │           └── Header.tsx
│   ├── context/
│   │   └── AuthContext.tsx      # Global auth state (login / logout)
│   ├── data/                    # Dữ liệu môn học và gia sư
│   ├── lib/
│   │   └── axios.ts             # Axios instance + interceptors
│   ├── types.ts                 # TypeScript types
│   ├── globals.css
│   └── layout.tsx
├── public/
├── .env                         # Biến môi trường
├── next.config.ts
├── tailwind.config.*
└── package.json
```

---

## 🚀 Bắt đầu nhanh

### Yêu cầu hệ thống

- **Node.js** >= 18.x
- **npm** >= 9.x (hoặc yarn / pnpm / bun)

### Cài đặt

```bash
# 1. Clone repository
git clone <URL_REPOSITORY>
cd hub-lyson

# 2. Cài đặt dependencies
npm install

# 3. Tạo file biến môi trường
cp .env.example .env
# (Chỉnh sửa .env theo hướng dẫn bên dưới)

# 4. Chạy môi trường phát triển
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem kết quả.

---

## ⚙️ Biến môi trường

Tạo file `.env` ở thư mục gốc với nội dung sau:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

| Biến                  | Mô tả               | Giá trị mặc định        |
| --------------------- | ------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL` | URL của Backend API | `http://localhost:3001` |

---

## 📜 Các lệnh có sẵn

```bash
npm run dev      # Chạy development server (có hot-reload)
npm run build    # Build production bundle
npm run start    # Chạy production server
npm run lint     # Kiểm tra lỗi ESLint
```

---

## 🔐 Xác thực (Authentication)

Ứng dụng sử dụng JWT authentication với flow sau:

1. Người dùng đăng nhập tại `/signin`
2. API trả về `access_token`, `refresh_token` và thông tin `user`
3. Dữ liệu được lưu vào **LocalStorage**
4. `axios interceptor` tự động đính kèm `Bearer token` vào mọi request
5. Khi token hết hạn (HTTP 401), hệ thống sẽ thực hiện refresh token

---

## 🧑‍🏫 Tính năng Gia Sư (Tutor Chat)

- Nhấn nút 💬 (floating button) góc phải màn hình để mở panel gia sư
- Chọn gia sư phù hợp với môn học đang học
- Nhấn **"Ask Tutor"** trực tiếp từ bài tập để mở chat với ngữ cảnh bài tập sẵn
- Chat real-time với phản hồi tự động

---

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo **Pull Request** hoặc mở **Issue** nếu bạn gặp lỗi hoặc có ý tưởng cải tiến.

---

## 📄 License

Dự án này được phát triển nội bộ cho **Hub Study Lý Sơn**. All rights reserved.

---

<div align="center">
  Made with ❤️ for students of Lý Sơn Island
</div>
