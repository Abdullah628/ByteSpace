"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./Input";

type PasswordInputProps = Omit<ComponentProps<typeof Input>, "type" | "icon">;

/** Password field with a show/hide toggle. */
export function PasswordInput({ className, ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? EyeOff : Eye;

  return (
    <div className="relative">
      <Input type={visible ? "text" : "password"} className={cn("pr-14", className)} {...props} />
      <button
        type="button"
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        onClick={() => setVisible((current) => !current)}
        className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-950"
      >
        <Icon className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
