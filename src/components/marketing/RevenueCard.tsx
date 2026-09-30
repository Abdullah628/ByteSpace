import { cn } from "@/lib/utils";
import type { RevenueStat } from "@/types/marketing";

type RevenueCardProps = {
  revenue: RevenueStat;
  className?: string;
};

/** Blue creator-earnings card ("Total Revenue $120.29 +12$"). */
export function RevenueCard({ revenue, className }: RevenueCardProps) {
  const hasProgress = revenue.progress !== undefined;
  const trend = (
    <span className="rounded-3xl bg-accent-strong px-2 py-0.5 text-[0.625rem]/5 font-medium text-gray-950">
      {revenue.trend}
    </span>
  );

  return (
    <div className={cn("flex flex-col gap-2 rounded-2xl bg-primary p-4 text-gray-50", className)}>
      <p className="flex flex-col">
        <span className="text-label-m">{revenue.label}</span>
        <span className="text-[0.625rem]/[1.2]">{revenue.period}</span>
      </p>
      {hasProgress ? (
        <>
          <p className="flex w-50 items-center justify-between">
            <span className="font-heading text-heading-s">{revenue.amount}</span>
            {trend}
          </p>
          <div
            role="progressbar"
            aria-label={`${revenue.label} target`}
            aria-valuenow={revenue.progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 w-50 overflow-hidden rounded-3xl bg-white"
          >
            <div
              className="h-full rounded-3xl bg-accent"
              style={{ width: `${revenue.progress}%` }}
            />
          </div>
        </>
      ) : (
        <>
          <p className="font-heading text-heading-s">{revenue.amount}</p>
          <p className="flex">{trend}</p>
        </>
      )}
    </div>
  );
}
