import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's default scale. Registering our custom
 * font-size tokens stops it from mistaking `text-heading-l` for a text color
 * (which would make it drop `text-primary` or vice versa).
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "heading-l",
        "heading-m",
        "heading-s",
        "heading-xs",
        "display-s",
        "display-xs",
        "body-l",
        "body-m",
        "body-s",
        "body-xs",
        "label-xl",
        "label-l",
        "label-m",
        "label-s",
        "label-xs",
      ],
    },
  },
});

/** Merge conditional class names, resolving Tailwind conflicts (last one wins). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
