import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type InputGroupProps = ComponentPropsWithoutRef<"div">;

/** Lays out an input (first child, which grows) with its action button beside it. */
export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      className={cn("flex items-center gap-3 *:first:min-w-0 *:first:flex-1 sm:gap-6", className)}
      {...props}
    />
  );
}
