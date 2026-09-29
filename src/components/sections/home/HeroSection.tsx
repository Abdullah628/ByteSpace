import { BrandBackdrop } from "@/components/marketing/BrandBackdrop";
import { CourseHighlightCard } from "@/components/marketing/CourseHighlightCard";
import { DecorShape } from "@/components/marketing/DecorShape";
import { MediaShowcase } from "@/components/marketing/MediaShowcase";
import { ProgressCard } from "@/components/marketing/ProgressCard";
import { SearchForm } from "@/components/marketing/SearchForm";
import { SocialProofCard } from "@/components/marketing/SocialProofCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { hero } from "@/data/marketing";

// Card positions are percentages of the 578 × 541 student image, taken from Figma.
export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <BrandBackdrop className="pt-30 lg:pt-42.25">
        <div aria-hidden="true" className="hidden xl:block">
          <DecorShape shape="spring-lime" x={-645.5} y={221} size={385} />
          <DecorShape shape="spring-white-small" x={-449.5} y={477} size={175} delay={2} />
          <DecorShape shape="torus-white" x={-531} y={682} size={342} delay={4} />
          <DecorShape shape="cylinder-lime" x={696} y={221} size={370} delay={3} />
          <DecorShape shape="pyramid-white" x={480} y={464} size={188} delay={1} />
          <DecorShape shape="spring-white" x={572} y={672} size={330} delay={5} />
        </div>

        <Container className="relative flex flex-col items-center gap-10 lg:gap-15">
          <SectionHeading
            as="h1"
            id="hero-title"
            size="display"
            align="center"
            tone="inverted"
            title={hero.title}
            description={hero.description}
            className="max-w-233.75"
          />
          <SearchForm />
        </Container>

        <MediaShowcase
          image={{ ...hero.image, width: 578, height: 541 }}
          sizes="(min-width: 640px) 578px, 80vw"
          priority
          className="mx-auto mt-12 w-4/5 max-w-144.5 lg:mt-0 xl:-mb-7.25"
          background={
            <div
              aria-hidden="true"
              className="absolute top-[12.9%] left-1/2 aspect-square w-[198.8%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_closest-side,transparent_44.2%,var(--color-accent-strong)_44.4%)]"
            />
          }
        >
          <CourseHighlightCard
            highlight={hero.highlight}
            className="absolute top-[18%] left-[-4%] origin-top-left scale-60 sm:scale-80 lg:top-[23.5%] lg:left-[-4.7%] lg:scale-100"
          />
          <ProgressCard
            progress={hero.progress}
            className="absolute top-[52%] right-[-4%] origin-top-right scale-60 sm:top-[25.7%] sm:scale-80 lg:right-auto lg:left-[71.1%] lg:origin-top-left lg:scale-100"
          />
          <SocialProofCard
            proof={hero.socialProof}
            className="absolute top-[62%] left-[-6%] origin-top-left scale-60 sm:top-[60.1%] sm:scale-80 lg:left-[-17.8%] lg:scale-100"
          />
        </MediaShowcase>
      </BrandBackdrop>
    </section>
  );
}
