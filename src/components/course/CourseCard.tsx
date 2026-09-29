import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  // Two-column cards between sm and xl are too narrow for all three chips: drop the least useful.
  const stats = [
    { label: `${course.lessons} Lessons` },
    { label: course.duration },
    { label: `${course.comments} Comments`, className: "sm:max-xl:hidden" },
  ];

  return (
    <article
      className={cn(
        "flex h-full flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-3.75",
        className,
      )}
    >
      <div className="relative aspect-341/195 overflow-hidden rounded-xl bg-gray-950">
        <Image
          src={course.image.src}
          alt={course.image.alt}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-3 bottom-4 flex flex-wrap gap-2 sm:gap-3">
          {stats.map((stat) => (
            <li key={stat.label} className={stat.className}>
              <Badge tone="glass">{stat.label}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate font-heading text-heading-xs text-black">{course.title}</h3>
            <p className="text-body-xs text-neutral-700">
              by <span className="text-primary">{course.author}</span>
            </p>
          </div>
          <Rating value={course.rating} size="lg" className="shrink-0" />
        </div>

        <div className="flex items-center gap-3">
          <Badge>
            <Image src="/icons/signal.svg" alt="" width={20} height={20} />
            <span>
              <span className="sr-only">Level: </span>
              {course.level}
            </span>
          </Badge>
          <AvatarStack
            avatars={course.learners}
            overflowLabel={course.learnersLabel}
            size={32}
            overlap={8}
          />
        </div>

        <p className="flex items-end">
          <span className="font-heading text-heading-xs text-primary">${course.price}</span>
          <span className="text-body-xs text-neutral-700">/{course.priceUnit}</span>
        </p>
      </div>
    </article>
  );
}
