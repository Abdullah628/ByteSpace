import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

// `ComponentProps` (not `...WithoutRef`) so form libraries can pass a ref (a plain prop in React 19).
type InputProps = ComponentProps<"input"> & {
  invalid?: boolean;
  /** "pill": fully rounded (newsletter, search). "boxed": 12px corners, larger text (auth forms). */
  variant?: "pill" | "boxed";
  /** Decorative icon shown inside the field, before the text. */
  icon?: ReactNode;
};

const variants = {
  pill: "rounded-full border-gray-200 text-body-m hover:border-gray-300",
  boxed: "rounded-xl border-gray-100 text-body-l hover:border-gray-200",
} as const;

export function Input({
  invalid = false,
  variant = "pill",
  icon,
  className,
  ...props
}: InputProps) {
  const input = (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        "h-13 w-full min-w-0 border bg-white px-6 text-gray-950",
        "transition-colors placeholder:text-gray-700",
        "focus-visible:border-primary focus-visible:outline-offset-0",
        variants[variant],
        invalid && "border-danger hover:border-danger",
        icon && "pl-14",
        className,
      )}
      {...props}
    />
  );

  if (!icon) return input;

  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-6 flex size-6 -translate-y-1/2 items-center justify-center text-gray-400"
      >
        {icon}
      </span>
      {input}
    </div>
  );
}
