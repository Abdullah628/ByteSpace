import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarProps = {
  src: string;
  alt: string;
  /** Rendered size in px. */
  size?: number;
  className?: string;
};

export function Avatar({ src, alt, size = 40, className }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("shrink-0 rounded-full object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
