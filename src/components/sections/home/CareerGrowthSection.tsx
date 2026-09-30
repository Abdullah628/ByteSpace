import { CourseCard } from "@/components/course/CourseCard";
import { DecorShape } from "@/components/marketing/DecorShape";
import { FeatureSplit } from "@/components/marketing/FeatureSplit";
import { MediaShowcase } from "@/components/marketing/MediaShowcase";
import { ProgressCard } from "@/components/marketing/ProgressCard";
import { StatList } from "@/components/marketing/StatList";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/data/courses";
import { growth, hero } from "@/data/marketing";

// Collage positions are percentages of the 621 × 552 Figma media box.
export function CareerGrowthSection() {
  return (
    <section
      id="growth"
      aria-labelledby="growth-title"
      className="overflow-x-clip bg-growth-blobs pt-16 pb-8 xl:pt-30 xl:pb-9"
    >
      <Container>
        <FeatureSplit
          className="xl:gap-15.75"
          media={
            <MediaShowcase
              image={{ ...hero.image, width: 578, height: 541 }}
              sizes="(min-width: 640px) 577px, 85vw"
              className="mx-auto aspect-621/552 w-full max-w-155.25 xl:w-155.25"
              imageClassName="cutout-shadow absolute top-[2.2%] left-0 w-[92.9%]"
              background={
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 origin-top-left scale-55 sm:scale-100"
                >
                  <CourseCard course={courses[0]} className="h-auto w-93.25" />
                </div>
              }
            >
              <ProgressCard
                progress={hero.progress}
                className="absolute top-[38.6%] left-[55.6%] origin-top-left scale-60 sm:scale-100"
              />
              <DecorShape
                shape="spring-lime-vertical"
                className="top-[12.1%] left-[65.4%] w-[34.6%]"
                delay={1}
              />
            </MediaShowcase>
          }
        >
          <div className="flex flex-col gap-10 xl:w-143.5">
            <SectionHeading
              id="growth-title"
              title={growth.title}
              titleClassName="max-w-144.25"
              description={growth.description}
              className="gap-6 lg:gap-10 [&>p]:max-w-119.25"
            />
            <StatList stats={growth.stats} />
          </div>
        </FeatureSplit>
      </Container>
    </section>
  );
}
