import { techGroups, techMeta } from "../data/content";

const sizes = {
  sm: "text-[11px] px-2 py-1 gap-1.5",
  md: "text-xs px-2.5 py-1.5 gap-2",
};

export default function TechChip({ label, size = "sm" }) {
  const group = techMeta[label] ?? "other";
  const { color } = techGroups[group];

  return (
    <span
      className={`chip inline-flex items-center rounded-md border font-medium leading-none whitespace-nowrap ${sizes[size]}`}
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--chip-bg)",
        color: "var(--fg-muted)",
      }}
    >
      <span
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
