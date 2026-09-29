import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div">;

/** White rounded surface shared by the small floating info cards. */
export function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-2xl bg-white p-4 text-gray-950", className)} {...props} />;
}
