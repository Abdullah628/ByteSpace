import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/course";

type CategoryCardProps = {
  category: Category;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group flex h-41.75 flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 bg-white p-4 text-center",
        "transition-[border-color,box-shadow,translate] duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-card",
        className,
      )}
    >
      <span className="flex items-center justify-center rounded-full bg-accent p-3 transition-colors group-hover:bg-accent-strong">
        <Image src={category.icon} alt="" width={36} height={36} />
      </span>
      <span className="text-label-l text-gray-950 sm:text-label-xl">{category.name}</span>
    </Link>
  );
}
