import Image from "next/image";
import type { ReactNode } from "react";
import type { ImageAsset } from "@/types/marketing";
import { cn } from "@/lib/utils";

type MediaShowcaseProps = {
  image: ImageAsset & { width: number; height: number };
  /** Decoration drawn behind the image (e.g. the hero's lime ring). */
  background?: ReactNode;
  /** Floating cards, absolutely positioned by the caller relative to the showcase box. */
  children?: ReactNode;
  /** Overrides the image's layout, e.g. to place it inside a larger showcase box. */
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** An image with decoration behind it and floating cards on top. */
export function MediaShowcase({
  image,
  background,
  children,
  sizes,
  priority,
  className,
  imageClassName,
}: MediaShowcaseProps) {
  return (
    <div className={cn("relative", className)}>
      {background}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        // Next 16 deprecates `priority`; eager + high fetch priority is the recommended LCP setup.
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        className={cn("relative h-auto w-full", imageClassName)}
      />
      {children}
    </div>
  );
}
