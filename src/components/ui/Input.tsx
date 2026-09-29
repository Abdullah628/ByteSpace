import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  invalid?: boolean;
};

export function Input({ invalid = false, className, ...props }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        "h-13 w-full min-w-0 rounded-full border border-gray-200 bg-white px-6 text-body-m text-gray-950",
        "transition-colors placeholder:text-gray-700 hover:border-gray-300",
        "focus-visible:border-primary focus-visible:outline-offset-0",
        invalid && "border-danger hover:border-danger",
        className,
      )}
      {...props}
    />
  );
}
