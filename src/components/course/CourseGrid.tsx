import type { Course } from "@/types/course";
import { cn } from "@/lib/utils";
import { CourseCard } from "./CourseCard";

type CourseGridProps = {
  courses: Course[];
  emptyMessage?: string;
  className?: string;
};

export function CourseGrid({
  courses,
  emptyMessage = "No courses in this category yet.",
  className,
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <p
        className={cn(
          "rounded-3xl border border-dashed border-gray-200 px-6 py-16 text-center text-body-l text-gray-700",
          className,
        )}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10", className)}>
      {courses.map((course) => (
        <li key={course.id}>
          <CourseCard course={course} />
        </li>
      ))}
    </ul>
  );
}
