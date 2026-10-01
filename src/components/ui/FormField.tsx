import { useId, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ControlProps = {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: true;
};

type FormFieldProps = {
  label: string;
  hideLabel?: boolean;
  hint?: ReactNode;
  error?: string;
  className?: string;
  /** Renders the control; spread the given props onto the input. */
  children: (control: ControlProps) => ReactNode;
};

/** Label + control + error + hint, with the ids and ARIA attributes wired up. */
export function FormField({ label, hideLabel, hint, error, className, children }: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(" ");

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className={cn("text-label-s text-gray-950", hideLabel && "sr-only")}>
        {label}
      </label>
      {children({
        id,
        "aria-describedby": describedBy || undefined,
        "aria-invalid": error ? true : undefined,
      })}
      {error && (
        <p id={errorId} role="alert" className="text-body-s text-danger">
          {error}
        </p>
      )}
      {hint && (
        <p id={hintId} className="text-body-xs text-gray-950">
          {hint}
        </p>
      )}
    </div>
  );
}
