import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

// Figma 3D renders, pre-tinted (hard-light lime or white) and exported at 2x.
const shapes = {
  "spring-lime": { src: "/images/shapes/spring-lime.webp", size: 770 },
  "spring-lime-vertical": { src: "/images/shapes/spring-lime-vertical.webp", size: 430 },
  "spring-white": { src: "/images/shapes/spring-white.webp", size: 660 },
  "spring-white-small": { src: "/images/shapes/spring-white-small.webp", size: 350 },
  "torus-white": { src: "/images/shapes/torus-white.webp", size: 684 },
  "cylinder-lime": { src: "/images/shapes/cylinder-lime.webp", size: 740 },
  "pyramid-white": { src: "/images/shapes/pyramid-white.webp", size: 376 },
} as const;

/**
 * Position in the 1440px Figma frame: x = offset of the shape's center from the
 * frame's center, y = top, size = width. Scales down below 1440px.
 * Leave it out to place the shape with `className` instead.
 */
type FramePlacement =
  { x: number; y: number; size: number } | { x?: undefined; y?: undefined; size?: undefined };

type DecorShapeProps = FramePlacement & {
  shape: keyof typeof shapes;
  /** Seconds to offset the float animation, so shapes don't move in sync. */
  delay?: number;
  className?: string;
};

/** Decorative floating 3D shape. */
export function DecorShape({ shape, x, y, size, delay = 0, className }: DecorShapeProps) {
  const { src, size: sourceSize } = shapes[shape];
  const framed = size !== undefined;
  const style = {
    ...(framed && { "--x": x, "--y": y, "--size": size }),
    animationDelay: `${-delay}s`,
  } as CSSProperties;

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={sourceSize}
      height={sourceSize}
      sizes={`${size ?? sourceSize / 2}px`}
      unoptimized
      className={cn(
        "pointer-events-none absolute aspect-square animate-float select-none",
        framed && "decor-position",
        className,
      )}
      style={style}
    />
  );
}
