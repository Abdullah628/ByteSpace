import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeatureSplitProps = {
  /** The text column. */
  children: ReactNode;
  /** The visual column. */
  media: ReactNode;
  /** Put the media on the left on wide screens. Text always comes first on small screens. */
  reverse?: boolean;
  className?: string;
};

/** Two-column text + media row that stacks below `xl`. */
export function FeatureSplit({ children, media, reverse = false, className }: FeatureSplitProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-12 xl:items-center",
        reverse ? "xl:flex-row-reverse" : "xl:flex-row",
        className,
      )}
    >
      <div className="w-full xl:w-auto xl:shrink-0">{children}</div>
      <div className="w-full max-w-155.25 xl:w-auto xl:max-w-none xl:shrink-0">{media}</div>
    </div>
  );
}
