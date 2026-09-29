import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BrandBackdropProps = ComponentPropsWithoutRef<"div">;

/** Brand-blue surface with the Figma grid lines, clipping anything that overflows. */
export function BrandBackdrop({ className, children, ...props }: BrandBackdropProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-primary", className)} {...props}>
      {/* 2880px = 24 grid cells, so a line always falls on the horizontal center. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-720 -translate-x-1/2 brand-grid"
      />
      {children}
    </div>
  );
}
