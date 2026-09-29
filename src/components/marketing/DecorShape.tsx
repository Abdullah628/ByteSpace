import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Figma 3D renders, pre-tinted (hard-light lime or white) and exported at 2x.
const shapes = {
  "spring-lime": { src: "/images/shapes/spring-lime.webp", size: 770 },
  "spring-white": { src: "/images/shapes/spring-white.webp", size: 660 },
  "spring-white-small": { src: "/images/shapes/spring-white-small.webp", size: 350 },
  "torus-white": { src: "/images/shapes/torus-white.webp", size: 684 },
  "cylinder-lime": { src: "/images/shapes/cylinder-lime.webp", size: 740 },
  "pyramid-white": { src: "/images/shapes/pyramid-white.webp", size: 376 },
} as const;

type DecorShapeProps = {
  shape: keyof typeof shapes;
  /** Offset of the shape's center from the frame's center, in 1440px-frame px. */
  x: number;
  /** Distance from the top of the frame, in 1440px-frame px. */
  y: number;
  /** Width in 1440px-frame px. */
  size: number;
  /** Seconds to offset the float animation, so shapes don't move in sync. */
  delay?: number;
  className?: string;
};

/** Decorative floating 3D shape, positioned as in the Figma frame and scaled below 1440px. */
export function DecorShape({ shape, x, y, size, delay = 0, className }: DecorShapeProps) {
  const { src, size: sourceSize } = shapes[shape];
  const style = {
    "--x": x,
    "--y": y,
    "--size": size,
    animationDelay: `${-delay}s`,
  } as CSSProperties;

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={sourceSize}
      height={sourceSize}
      sizes={`${size}px`}
      unoptimized
      className={cn(
        "pointer-events-none absolute decor-position aspect-square animate-float select-none",
        className,
      )}
      style={style}
    />
  );
}
