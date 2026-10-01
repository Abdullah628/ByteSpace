import { CourseCard } from "@/components/course/CourseCard";
import { DecorShape } from "@/components/marketing/DecorShape";
import { SocialProofCard } from "@/components/marketing/SocialProofCard";
import { courses } from "@/data/courses";
import { hero } from "@/data/marketing";
import { cn } from "@/lib/utils";

type AuthShowcaseProps = {
  className?: string;
};

// Decorative collage from the Figma auth frames; positions are percentages of its 484 × 585 box.
export function AuthShowcase({ className }: AuthShowcaseProps) {
  return (
    <div aria-hidden="true" className={cn("relative aspect-484/585 w-121", className)}>
      <CourseCard course={courses[1]} className="absolute top-[15.2%] left-0 h-auto w-93.25" />
      <CourseCard course={courses[2]} className="absolute top-0 left-[22.9%] h-auto w-93.25" />
      <SocialProofCard
        proof={hero.socialProof}
        tone="lime"
        className="absolute top-[74.4%] left-[46.7%] w-64.5"
      />
      <DecorShape shape="spring-white-small" className="top-[54.9%] left-[71.9%] w-[36.2%]" />
      <DecorShape shape="torus-lime" className="top-[2.6%] left-[6%] w-[30.2%]" delay={2} />
      <DecorShape shape="pyramid-lime" className="top-[67.9%] left-[-5.2%] w-[38.8%]" delay={4} />
    </div>
  );
}
