import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type NativeButtonProps = ButtonStyleProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type LinkButtonProps = ButtonStyleProps & ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = NativeButtonProps | LinkButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  accent: "bg-accent text-gray-950 hover:bg-accent-strong",
  outline: "border border-current bg-transparent hover:bg-white/10",
  ghost: "bg-transparent hover:bg-gray-50",
};

// md matches the Figma button: 24px x-padding, 12px y-padding, Label L.
const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-label-m",
  md: "px-6 py-3 text-label-l",
  lg: "px-8 py-4 text-label-xl",
};

/** Renders a `<button>`, or a Next.js `<Link>` when `href` is given. */
export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-3xl whitespace-nowrap transition-colors",
    "disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  const { type = "button", ...buttonProps } = props;
  return <button type={type} className={classes} {...buttonProps} />;
}
