"use client";
import { useState } from "react";
import { Tutor } from "../../../data/types";
import { subjects, tutors } from "../../../data/data";
import { ExerciseCard } from "./ExerciseCard";
import { SubjectTab } from "./SubjectTab";
import { StatsCard } from "./StatsCard";
import { FilterBtn } from "./FilterBtn";

export default function HomePage() {
  const [activeId, setActiveId] = useState(subjects[0].id);
  const [filterType, setFilterType] = useState("Tất cả");
  const [filterDiff, setFilterDiff] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Tutor chat state
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [activeTutor, setActiveTutor] = useState<Tutor | null>(null);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<
    { sender: "user" | "tutor"; text: string }[]
  >([]);

  const current = subjects.find((s) => s.id === activeId)!;

  const allEx = subjects.flatMap((s) => s.exercises);
  const totalSolved = allEx.filter((e) => e.solved).length;
  const totalEx = allEx.length;
  const globalPct = Math.round((totalSolved / totalEx) * 100);

  const heroSolved = current.exercises.filter((e) => e.solved).length;
  const heroTotal = current.exercises.length;
  const heroPct = Math.round((heroSolved / heroTotal) * 100);
  const circumference = 2 * Math.PI * 32;

  const filtered = current.exercises.filter((e) => {
    const matchType = filterType === "Tất cả" || e.type === filterType;
    const matchDiff = filterDiff === "Tất cả" || e.difficulty === filterDiff;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
    return matchType && matchDiff && matchSearch;
  });

  const switchSubject = (id: string) => {
    setActiveId(id);
    setFilterType("Tất cả");
    setFilterDiff("Tất cả");
    setSearch("");
    setSidebarOpen(false);
  };

  const handleOpenTutorForExercise = (title: string) => {
    setIsTutorOpen(true);
    setChatInput(`Em cần hỗ trợ giải bài: "${title}"`);
  };

  const sendMessage = () => {
    if (!chatInput.trim() || !activeTutor) return;
    setMessages((prev) => [...prev, { sender: "user", text: chatInput }]);
    setChatInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "tutor",
          text: `Chào em, thầy/cô đã nhận được câu hỏi. Em chia sẻ phần bài làm hiện tại để thầy/cô kiểm tra nhé!`,
        },
      ]);
    }, 1000);
  };

  const relevantTutors = tutors.filter((t) => t.subjects.includes(activeId));

  return (
    <div className="flex flex-col h-screen bg-[#090e1a] text-slate-100 overflow-hidden relative  mx-auto">
      {/* ── Header ── */}
      <header className="flex-shrink-0 border-b border-slate-800 bg-[#090e1a]/80 backdrop-blur-xl z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-5">
          {/* Mobile hamburger + Brand */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Hamburger - mobile only */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:border-indigo-500 transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {sidebarOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>

            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-indigo-500/30 flex-shrink-0">
              🏫
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-bold text-slate-100 leading-tight">
                Hub Study Lý Sơn
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">
                Nền tảng học tập • Giải đề & Bài tập
              </p>
            </div>
          </div>

          {/* Right: progress + avatar */}
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden sm:flex flex-col items-end gap-1.5">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Tiến độ tổng thể
              </span>
              <div className="flex items-center gap-2">
                <div className="w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700"
                    style={{ width: `${globalPct}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-purple-400">
                  {globalPct}%
                </span>
              </div>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold cursor-pointer hover:scale-105 transition-transform duration-200">
              BL
            </div>
          </div>
        </div>
      </header>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden relative max-w-[1600px] w-full mx-auto">
        {/* ── Mobile sidebar overlay ── */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-20 md:hidden transition-opacity duration-300 ${
            sidebarOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* ── Sidebar ── */}
        <aside
          className={`
            fixed md:relative top-0 left-0 bottom-0 z-30 md:z-auto
            w-64 sm:w-60 flex-shrink-0 border-r border-slate-800 bg-slate-900/95 md:bg-slate-900/60
            flex flex-col overflow-y-auto px-3 py-4 gap-1
            transition-transform duration-300 md:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Mobile close button */}
          <div className="flex items-center justify-between md:hidden mb-2 px-2">
            <span className="text-sm font-bold text-slate-300">Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400"
            >
              ✕
            </button>
          </div>

          {/* Section label */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 px-2 py-1.5">
            Các môn học
          </p>

          {/* Subject tabs */}
          <nav className="flex flex-col gap-0.5">
            {subjects.map((s) => (
              <SubjectTab
                key={s.id}
                subject={s}
                isActive={s.id === activeId}
                onClick={() => switchSubject(s.id)}
              />
            ))}
          </nav>

          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 px-2 mb-1">
              Thống kê
            </p>
            <StatsCard
              icon="✅"
              label="Đã hoàn thành"
              value={totalSolved}
              sub={`/${totalEx} bài`}
              color="#22c55e"
            />
            <StatsCard
              icon="🔥"
              label="Chuỗi ngày học"
              value="7"
              sub="ngày liên tiếp"
              color="#f59e0b"
            />
            <StatsCard
              icon="⭐"
              label="Điểm tích lũy"
              value="1,240"
              sub="điểm XP"
              color="#a855f7"
            />
          </div>
        </aside>

        {/* ── Content ── */}
        <main className="flex-1 overflow-y-auto px-3 sm:px-7 py-4 sm:py-6 flex flex-col gap-4 sm:gap-5">
          {/* Mobile: current subject pill */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300 hover:border-indigo-500 transition-colors"
          >
            <span>{current.icon}</span>
            <span className="font-medium">{current.name}</span>
            <span className="text-slate-500 text-xs">▼</span>
          </button>

          {/* Subject Hero */}
          <div
            className={`flex-shrink-0 rounded-2xl bg-gradient-to-r ${current.bgClass} p-4 sm:p-7 flex items-center justify-between relative overflow-hidden`}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="flex items-center gap-3 sm:gap-5 relative">
              <span className="text-3xl sm:text-5xl drop-shadow-lg">
                {current.icon}
              </span>
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {current.name}
                </h2>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  {heroSolved}/{heroTotal} bài đã hoàn thành
                </p>
              </div>
            </div>
            {/* Ring chart */}
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex-shrink-0">
              <svg
                viewBox="0 0 80 80"
                className="w-14 h-14 sm:w-20 sm:h-20 drop-shadow-lg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="6"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - heroPct / 100)}
                  transform="rotate(-90 40 40)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-bold text-white">
                {heroPct}%
              </span>
            </div>
          </div>

          {/* Filter bar */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-2xl px-3 sm:px-5 py-3 sm:py-3.5">
            {/* Search */}
            <div className="relative w-full sm:flex-1 sm:min-w-44">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                🔍
              </span>
              <input
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-2 pl-9 pr-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
                placeholder="Tìm kiếm bài tập..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Type filter */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-500">
                Loại:
              </span>
              {["Tất cả", "Trắc nghiệm", "Tự luận", "Đề thi"].map((t) => (
                <FilterBtn
                  key={t}
                  label={t}
                  active={filterType === t}
                  onClick={() => setFilterType(t)}
                />
              ))}
            </div>

            {/* Difficulty filter */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-xs font-semibold text-slate-500">
                Mức độ:
              </span>
              {["Tất cả", "Dễ", "Trung bình", "Khó"].map((d) => (
                <FilterBtn
                  key={d}
                  label={d}
                  active={filterDiff === d}
                  onClick={() => setFilterDiff(d)}
                />
              ))}
            </div>
          </div>

          {/* Result summary */}
          <div className="flex-shrink-0 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <span>
              Hiển thị{" "}
              <strong className="text-slate-200">{filtered.length}</strong> bài
              tập
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-emerald-400">
              {filtered.filter((e) => e.solved).length} đã hoàn thành
            </span>
          </div>

          {/* Exercise list */}
          <div className="flex flex-col gap-3 pb-8">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-slate-600 gap-3">
                <span className="text-5xl">🔍</span>
                <p className="text-sm">Không tìm thấy bài tập phù hợp</p>
              </div>
            ) : (
              filtered.map((ex) => (
                <ExerciseCard
                  key={ex.id}
                  exercise={ex}
                  color={current.color}
                  onOpenTutor={handleOpenTutorForExercise}
                />
              ))
            )}
          </div>
        </main>
      </div>

      {/* ── Tutor Panel Overlay ── */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isTutorOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsTutorOpen(false)}
      />

      {/* ── Tutor Panel Right Slide-in ── */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[400px] sm:max-w-full bg-slate-900 border-l border-slate-800 z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isTutorOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-900">
          <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
            🧑‍🏫 Hỏi Gia Sư
          </h2>
          <button
            onClick={() => setIsTutorOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 transition-colors"
          >
            ✕
          </button>
        </div>

        {!activeTutor ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
              Gia sư môn {current.name}
            </h3>
            <div className="flex flex-col gap-3">
              {relevantTutors.length > 0 ? (
                relevantTutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    onClick={() => setActiveTutor(tutor)}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 cursor-pointer hover:border-indigo-500 hover:bg-slate-800 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700 flex justify-center items-center text-2xl relative">
                        {tutor.avatar}
                        <span
                          className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${
                            tutor.status === "online"
                              ? "bg-emerald-500"
                              : "bg-slate-500"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-200 group-hover:text-indigo-400 transition-colors uppercase">
                          {tutor.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          ⭐ {tutor.rating.toFixed(1)} / 5
                        </p>
                      </div>
                      <button className="px-3 py-1.5 rounded-lg bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20">
                        Chat
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">
                  Hiện chưa có gia sư online cho môn {current.name}.
                </p>
              )}
            </div>

            <h3 className="text-sm font-semibold text-slate-400 mt-8 mb-4 uppercase tracking-wider">
              Gia sư môn khác
            </h3>
            <div className="flex flex-col gap-3">
              {tutors
                .filter((t) => !t.subjects.includes(activeId))
                .map((tutor) => (
                  <div
                    key={tutor.id}
                    onClick={() => setActiveTutor(tutor)}
                    className="bg-slate-800/30 border border-slate-800/80 rounded-xl p-4 cursor-pointer hover:border-slate-700 hover:bg-slate-800/50 transition-all opacity-80 hover:opacity-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex justify-center items-center text-xl relative">
                        {tutor.avatar}
                        <span
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 ${
                            tutor.status === "online"
                              ? "bg-emerald-500"
                              : "bg-slate-500"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-300">
                          {tutor.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col bg-[#0b1120]">
            <div className="p-3 bg-slate-800/60 border-b border-slate-800 flex items-center gap-3">
              <button
                onClick={() => {
                  setActiveTutor(null);
                  setMessages([]);
                }}
                className="w-8 h-8 rounded-full hover:bg-slate-700 flex items-center justify-center text-slate-400"
              >
                ←
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center relative">
                  {activeTutor.avatar}
                  <span
                    className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-slate-800 ${
                      activeTutor.status === "online"
                        ? "bg-emerald-500"
                        : "bg-slate-500"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase">
                    {activeTutor.name}
                  </div>
                  <div className="text-[10px] text-emerald-400">
                    Đang hoạt động
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              <div className="text-center text-xs text-slate-500 mb-2 border-b border-slate-800 pb-2 mx-4 sm:mx-10">
                Đây là đoạn chat riêng tư với {activeTutor.name}. Bạn có thể hỏi
                bài tập cụ thể hoặc nhờ hướng dẫn phương pháp.
              </div>

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm ${
                      msg.sender === "user"
                        ? "bg-indigo-500 text-white rounded-br-sm"
                        : "bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {messages.length > 0 &&
                messages[messages.length - 1].sender === "user" && (
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="animate-pulse">●</span> Đang gõ...
                  </div>
                )}
            </div>

            <div className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800">
              <div className="flex items-end gap-2 bg-slate-800 rounded-xl border border-slate-700 p-1 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  className="flex-1 bg-transparent resize-none max-h-32 min-h-[40px] p-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none"
                  placeholder="Nhập nội dung hỏi bài..."
                  rows={Math.min(chatInput.split("\n").length, 4)}
                />
                <button
                  onClick={sendMessage}
                  disabled={!chatInput.trim()}
                  className="w-10 h-10 mb-0.5 mr-0.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 disabled:bg-slate-700 disabled:text-slate-500 text-white flex justify-center items-center transition-colors"
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsTutorOpen(true)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/30 flex items-center justify-center text-2xl sm:text-3xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all z-30"
      >
        💬
      </button>
    </div>
  );
}
