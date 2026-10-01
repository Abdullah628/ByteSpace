import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  /** "gray": on white surfaces. "glass": translucent, on top of photos. */
  tone?: "gray" | "glass";
};

const tones = {
  gray: "bg-gray-50 text-gray-700",
  glass: "bg-gray-50/60 text-neutral-700 backdrop-blur-sm",
} as const;

/** Small rounded label (course level, lesson count, ...). */
export function Badge({ tone = "gray", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-3xl px-3 py-1.5 text-label-xs leading-tight whitespace-nowrap",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
