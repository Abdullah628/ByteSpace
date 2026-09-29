import { Card } from "@/components/ui/Card";
import type { CourseHighlight } from "@/types/marketing";

type CourseHighlightCardProps = {
  highlight: CourseHighlight;
  className?: string;
};

export function CourseHighlightCard({ highlight, className }: CourseHighlightCardProps) {
  return (
    <Card className={className}>
      <p className="text-label-m">{highlight.title}</p>
      <p className="flex items-center gap-2 text-body-xs whitespace-nowrap text-gray-700">
        <span>{highlight.courses} Courses</span>
        <span aria-hidden="true" className="text-[0.625rem]">
          •
        </span>
        <span>{highlight.students} Students</span>
      </p>
    </Card>
  );
}
