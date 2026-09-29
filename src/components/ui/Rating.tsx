import { cn } from "@/lib/utils";

type RatingProps = {
  value: number;
  /** Number of reviews, shown in brackets. */
  count?: number;
  /** "sm": 12px text + small lime star (floating cards). "lg": 18px text + gray star (course cards). */
  size?: "sm" | "lg";
  className?: string;
};

const sizes = {
  sm: {
    text: "text-body-xs text-gray-950",
    star: "size-4 p-px text-accent",
    viewBox: "0 0 13.16 12.57",
    path: "M6.106.344a.5.5 0 0 1 .95 0l1.218 3.72a.5.5 0 0 0 .475.345l3.914.009a.5.5 0 0 1 .294.903L9.795 7.63a.5.5 0 0 0-.181.557l1.2 3.725a.5.5 0 0 1-.768.559L6.874 10.177a.5.5 0 0 0-.586 0l-3.172 2.293a.5.5 0 0 1-.768-.559l1.2-3.725a.5.5 0 0 0-.18-.557L.206 5.321a.5.5 0 0 1 .294-.903l3.914-.009a.5.5 0 0 0 .474-.345z",
  },
  lg: {
    text: "text-body-l text-neutral-700",
    star: "size-6 text-gray-200",
    viewBox: "0 0 24 24",
    path: "M14.43 9.612 12.96 4.772c-.29-.95-1.63-.95-1.91 0l-1.48 4.84H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6-1.43 4.61c-.29.93.79 1.68 1.56 1.09L12 16.922l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61 3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z",
  },
} as const;

export function Rating({ value, count, size = "sm", className }: RatingProps) {
  const style = sizes[size];
  const label = `Rated ${value} out of 5${count === undefined ? "" : ` from ${count} reviews`}`;

  return (
    <p className={cn("flex items-center gap-0.5", style.text, className)}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true">
        {value}
        {count !== undefined && <span className="text-gray-700"> ({count})</span>}
      </span>
      <svg
        viewBox={style.viewBox}
        className={style.star}
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d={style.path} />
      </svg>
    </p>
  );
}
