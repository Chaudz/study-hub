export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  bgClass: string;
  exercises: Exercise[];
}

export interface Tutor {
  id: string;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  status: "online" | "offline";
}

export interface Exercise {
  id: number;
  title: string;
  difficulty: "Dễ" | "Trung bình" | "Khó";
  type: "Trắc nghiệm" | "Tự luận" | "Đề thi";
  description: string;
  solved: boolean;
}
