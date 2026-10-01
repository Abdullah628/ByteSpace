import { cn } from "@/lib/utils";

type CategoryPillProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export function CategoryPill({ label, selected, onSelect }: CategoryPillProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "shrink-0 rounded-3xl px-4 py-3 text-label-m whitespace-nowrap transition-colors",
        selected ? "bg-accent text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
      )}
    >
      {label}
    </button>
  );
}
