import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Centers content at the 1200px design width. `box-content` keeps the
 * gutters outside that width, so at 1440px the side margins are 120px.
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto box-content max-w-content px-4 sm:px-6 lg:px-10", className)}
      {...props}
    />
  );
}
