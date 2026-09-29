import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  /** id for the section's aria-labelledby. */
  id?: string;
  as?: "h1" | "h2";
  /** "display" is the hero-sized title (Heading L). */
  size?: "display" | "default";
  align?: "center" | "left";
  tone?: "default" | "inverted";
  className?: string;
};

const titleSizes = {
  display: "text-display-xs font-semibold sm:text-heading-m lg:text-heading-l",
  default: "text-display-xs font-semibold lg:text-heading-m",
} as const;

export function SectionHeading({
  title,
  description,
  id,
  as: Heading = "h2",
  size = "default",
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const inverted = tone === "inverted";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 lg:gap-8",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Heading
        id={id}
        className={cn(
          titleSizes[size],
          "max-lg:text-balance",
          inverted ? "text-white" : "text-gray-950",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn("text-body-m sm:text-body-l", inverted ? "text-gray-100" : "text-gray-700")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
