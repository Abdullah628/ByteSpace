import { BrandBackdrop } from "@/components/marketing/BrandBackdrop";
import { DecorShape } from "@/components/marketing/DecorShape";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { creatorCta } from "@/data/marketing";

export function CreatorCtaSection() {
  return (
    <section id="join" aria-labelledby="join-title">
      <BrandBackdrop className="py-20 lg:py-21">
        <div aria-hidden="true" className="hidden xl:block">
          <DecorShape shape="spring-lime" x={-645.5} y={-162} size={385} />
          <DecorShape shape="spring-white-small" x={-454.5} y={5} size={175} delay={2} />
          <DecorShape shape="cone-white" x={-674} y={225} size={188} delay={4} />
          <DecorShape shape="torus-lime" x={-529} y={299} size={342} delay={1} />
          <DecorShape shape="pyramid-lime" x={454} y={0} size={188} delay={3} />
          <DecorShape shape="cylinder-white" x={691} y={6} size={370} delay={5} />
          <DecorShape shape="spring-lime-vertical" x={555} y={289} size={330} delay={2} />
        </div>

        <Container className="relative flex flex-col items-center gap-10">
          <SectionHeading
            id="join-title"
            align="center"
            tone="inverted"
            title={creatorCta.title}
            titleClassName="max-w-177.5"
            description={creatorCta.description}
            className="max-w-241 gap-6 lg:gap-10"
          />
          <Button
            href={creatorCta.action.href}
            variant="accent"
            className="focus-visible:outline-white"
          >
            {creatorCta.action.label}
          </Button>
        </Container>
      </BrandBackdrop>
    </section>
  );
}
