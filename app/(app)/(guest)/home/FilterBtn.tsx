export function FilterBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 whitespace-nowrap
        ${
          active
            ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/30"
            : "bg-slate-800 border-slate-700 text-slate-400 hover:border-indigo-500 hover:text-slate-200"
        }`}
    >
      {label}
    </button>
  );
}
