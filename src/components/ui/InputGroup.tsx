import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type InputGroupProps = ComponentPropsWithoutRef<"div">;

/** Lays out an input with its action button beside it (newsletter, hero search). */
export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      className={cn("flex items-center gap-3 sm:gap-6 [&>input]:flex-1", className)}
      {...props}
    />
  );
}
