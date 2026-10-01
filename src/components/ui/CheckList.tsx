import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  className?: string;
};

/** List of benefits, each with a blue check icon. */
export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-label-l text-gray-950">
          <svg
            viewBox="0 0 24 24"
            className="size-6 shrink-0 text-primary"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}
