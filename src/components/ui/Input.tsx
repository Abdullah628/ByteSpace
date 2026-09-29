import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  invalid?: boolean;
  /** Decorative icon shown inside the field, before the text. */
  icon?: ReactNode;
};

export function Input({ invalid = false, icon, className, ...props }: InputProps) {
  const input = (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        "h-13 w-full min-w-0 rounded-full border border-gray-200 bg-white px-6 text-body-m text-gray-950",
        "transition-colors placeholder:text-gray-700 hover:border-gray-300",
        "focus-visible:border-primary focus-visible:outline-offset-0",
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
