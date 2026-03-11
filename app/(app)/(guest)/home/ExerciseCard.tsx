"use client";
import { useState } from "react";
import { Exercise } from "../../../data/types";
import { diffConfig, typeConfig } from "../../../constants/config";

export function ExerciseCard({
  exercise,
  color,
  onOpenTutor,
}: {
  exercise: Exercise;
  color: string;
  onOpenTutor: (exTitle: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const diff = diffConfig[exercise.difficulty];
  const typ = typeConfig[exercise.type];

  return (
    <div
      className="rounded-2xl bg-slate-800/60 border transition-all duration-200 hover:-translate-y-px hover:shadow-lg hover:shadow-black/30"
      style={{ borderColor: open ? color : "#1e293b" }}
    >
      {/* Header row */}
      <div
        className="flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 cursor-pointer select-none hover:bg-white/[0.02] rounded-2xl"
        onClick={() => setOpen(!open)}
      >
        {/* Left: status + title */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 transition-transform duration-200 hover:scale-110"
            style={{
              backgroundColor: exercise.solved ? "#22c55e22" : "#94a3b822",
              color: exercise.solved ? "#22c55e" : "#94a3b8",
            }}
          >
            {exercise.solved ? "✓" : "○"}
          </div>
          <h3 className="text-xs sm:text-sm font-semibold text-slate-100 truncate">
            {exercise.title}
          </h3>
        </div>

        {/* Right: badges + chevron */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <span
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${diff.badge}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${diff.dot}`}></span>
            {exercise.difficulty}
          </span>
          <span
            className={`hidden sm:inline px-2.5 py-1 rounded-full text-xs font-semibold ${typ}`}
          >
            {exercise.type}
          </span>
          {/* Mobile: compact badge */}
          <span
            className={`sm:hidden flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${diff.badge}`}
          >
            <span className={`w-1 h-1 rounded-full ${diff.dot}`}></span>
            {exercise.difficulty}
          </span>
          <span
            className="text-slate-500 text-xl leading-none transition-transform duration-300"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            ›
          </span>
        </div>
      </div>

      {/* Expandable body */}
      {open && (
        <div className="px-3 sm:px-5 pb-4 sm:pb-5 border-t border-slate-700/60 animate-slide-down">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-3 sm:pt-4 pb-3 sm:pb-4">
            {exercise.description}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button
              className="px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 shadow-md"
              style={{
                background: `linear-gradient(135deg, ${color}cc, ${color})`,
              }}
            >
              {exercise.solved ? "Xem lại lời giải" : "Bắt đầu giải"}
            </button>
            <button className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-slate-400 border border-slate-700 bg-slate-800 hover:border-amber-400 hover:text-amber-400 transition-all duration-200">
              💡 Gợi ý
            </button>
            <button
              onClick={() => onOpenTutor(exercise.title)}
              className="px-3 sm:px-4 py-2 sm:ml-auto rounded-lg text-xs sm:text-sm font-medium text-indigo-400 border border-indigo-900 bg-indigo-500/10 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              💬 Hỏi Gia Sư
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
