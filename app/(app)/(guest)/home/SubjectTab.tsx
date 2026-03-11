import { Subject } from "../../../data/types";

export function SubjectTab({
  subject,
  isActive,
  onClick,
}: {
  subject: Subject;
  isActive: boolean;
  onClick: () => void;
}) {
  const solved = subject.exercises.filter((e) => e.solved).length;
  const total = subject.exercises.length;
  const pct = Math.round((solved / total) * 100);

  return (
    <button
      onClick={onClick}
      className="relative w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all duration-200 text-left overflow-hidden group"
      style={
        isActive
          ? { background: `${subject.color}18`, borderColor: subject.color }
          : { background: "transparent", borderColor: "transparent" }
      }
    >
      {/* hover layer */}
      {!isActive && (
        <span className="absolute inset-0 bg-slate-700/0 group-hover:bg-slate-700/40 transition-all duration-200 rounded-xl" />
      )}

      <span className="text-lg w-7 text-center flex-shrink-0">
        {subject.icon}
      </span>
      <span className="text-sm font-medium text-slate-200 flex-1 truncate">
        {subject.name}
      </span>
      <span
        className="text-xs font-semibold flex-shrink-0"
        style={{ color: isActive ? subject.color : "#64748b" }}
      >
        {solved}/{total}
      </span>

      {/* Progress mini bar */}
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-700">
        <span
          className="absolute left-0 top-0 bottom-0 transition-all duration-500 rounded-full"
          style={{ width: `${pct}%`, backgroundColor: subject.color }}
        />
      </span>
    </button>
  );
}
