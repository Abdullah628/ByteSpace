import type { CSSProperties } from "react";
import type { ImageAsset } from "@/types/marketing";
import { cn } from "@/lib/utils";
import { Avatar } from "./Avatar";

type AvatarStackProps = {
  avatars: ImageAsset[];
  /** Maximum number of avatars shown before the overflow badge. */
  max?: number;
  /** Text in the lime badge at the end, e.g. "2K+". */
  overflowLabel?: string;
  /** Avatar size in px. */
  size?: number;
  /** How far each avatar tucks under the previous one, in px. */
  overlap?: number;
  className?: string;
};

/** Overlapping row of avatars, optionally ending in a count badge. */
export function AvatarStack({
  avatars,
  max = avatars.length,
  overflowLabel,
  size = 43,
  overlap = 16,
  className,
}: AvatarStackProps) {
  return (
    <div
      className={cn("flex items-center *:not-first:-ml-(--overlap)", className)}
      style={{ "--overlap": `${overlap}px` } as CSSProperties}
    >
      {avatars.slice(0, max).map((avatar) => (
        <Avatar key={avatar.src} src={avatar.src} alt={avatar.alt} size={size} />
      ))}
      {overflowLabel && (
        <span
          className="flex shrink-0 items-center justify-center rounded-full bg-accent text-label-xs font-bold text-gray-950"
          style={{ width: size, height: size }}
        >
          {overflowLabel}
        </span>
      )}
    </div>
  );
}
