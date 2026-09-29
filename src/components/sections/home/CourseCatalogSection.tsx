import { CourseFilter } from "@/components/course/CourseFilter";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categoryRowEnds, courseCategories, courses } from "@/data/courses";

export function CourseCatalogSection() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="scroll-mt-4 py-16 lg:py-18">
      <Container className="flex flex-col gap-10 lg:gap-10.5">
        <SectionHeading
          id="courses-title"
          align="center"
          title="Discover Your Passion, Build Your Skills"
          titleClassName="max-w-147"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="mx-auto max-w-229.25"
        />
        <CourseFilter
          categories={courseCategories}
          courses={courses}
          rowEnds={categoryRowEnds}
          moreHref="/#categories"
        />
      </Container>
    </section>
  );
}
