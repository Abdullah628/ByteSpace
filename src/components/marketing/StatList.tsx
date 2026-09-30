import { cn } from "@/lib/utils";
import type { Stat } from "@/types/marketing";

type StatListProps = {
  stats: Stat[];
  className?: string;
};

/** Row of headline numbers ("12K Students"). */
export function StatList({ stats, className }: StatListProps) {
  return (
    <dl className={cn("flex flex-wrap gap-x-14 gap-y-6", className)}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt className="text-body-l text-gray-700">{stat.label}</dt>
          <dd className="font-heading text-display-xs text-primary">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
