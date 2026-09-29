import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  /** Number of reviews, shown in brackets. */
  count?: number;
  className?: string;
};

export function Rating({ value, count, className }: RatingProps) {
  const label = `Rated ${value} out of 5${count === undefined ? "" : ` from ${count} reviews`}`;

  return (
    <p className={cn("flex items-center gap-0.5 text-body-xs", className)}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true">
        <span className="text-gray-950">{value}</span>
        {count !== undefined && <span className="text-gray-700"> ({count})</span>}
      </span>
      <svg
        viewBox="0 0 13.16 12.57"
        className="size-4 p-px text-accent"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M6.106.344a.5.5 0 0 1 .95 0l1.218 3.72a.5.5 0 0 0 .475.345l3.914.009a.5.5 0 0 1 .294.903L9.795 7.63a.5.5 0 0 0-.181.557l1.2 3.725a.5.5 0 0 1-.768.559L6.874 10.177a.5.5 0 0 0-.586 0l-3.172 2.293a.5.5 0 0 1-.768-.559l1.2-3.725a.5.5 0 0 0-.18-.557L.206 5.321a.5.5 0 0 1 .294-.903l3.914-.009a.5.5 0 0 0 .474-.345z" />
      </svg>
    </p>
  );
}
