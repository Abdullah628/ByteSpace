import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { ProgressStat } from "@/types/marketing";

type ProgressCardProps = {
  progress: ProgressStat;
  className?: string;
};

export function ProgressCard({ progress, className }: ProgressCardProps) {
  return (
    <Card className={cn("flex w-58 flex-col gap-2", className)}>
      <p className="text-label-s">{progress.label}</p>
      <p aria-hidden="true" className="font-heading text-heading-m">
        {progress.percent}%
      </p>
      <div
        role="progressbar"
        aria-label={progress.label}
        aria-valuenow={progress.percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded-3xl bg-gray-50"
      >
        <div className="h-full rounded-3xl bg-accent" style={{ width: `${progress.percent}%` }} />
      </div>
    </Card>
  );
}
