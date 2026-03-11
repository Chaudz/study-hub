export function StatsCard({
  icon,
  label,
  value,
  sub,
  color,
}: {
  icon: string;
  label: string;
  value: string | number;
  sub: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
        style={{ background: `${color}22`, color }}
      >
        {icon}
      </div>
      <div>
        <div className="text-base font-bold" style={{ color }}>
          {value}
        </div>
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-[10px] text-slate-600">{sub}</div>
      </div>
    </div>
  );
}
