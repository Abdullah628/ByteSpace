import { DecorShape } from "@/components/marketing/DecorShape";
import { FeatureSplit } from "@/components/marketing/FeatureSplit";
import { MediaShowcase } from "@/components/marketing/MediaShowcase";
import { RevenueCard } from "@/components/marketing/RevenueCard";
import { SocialProofCard } from "@/components/marketing/SocialProofCard";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { creatorTools, hero } from "@/data/marketing";

const [totalRevenue, yearToDate] = creatorTools.revenue;

// Collage positions are percentages of the 541 × 596 Figma media box.
export function CreatorToolsSection() {
  return (
    <section
      id="creators"
      aria-labelledby="creators-title"
      className="overflow-x-clip bg-creator-blobs pt-8 pb-16 xl:pt-9 xl:pb-30"
    >
      <Container>
        <FeatureSplit
          reverse
          className="xl:gap-19.75"
          media={
            <MediaShowcase
              image={{ ...creatorTools.image, width: 318, height: 436 }}
              sizes="(min-width: 640px) 435px, 70vw"
              className="mx-auto aspect-541/596 w-full max-w-135.25 xl:w-135.25"
              imageClassName="cutout-shadow absolute top-0 left-[5.2%] h-full w-[80.4%] object-cover"
              background={
                <>
                  <RevenueCard
                    revenue={totalRevenue}
                    className="absolute top-[7.4%] left-0 origin-top-left scale-70 sm:scale-100"
                  />
                  <RevenueCard
                    revenue={yearToDate}
                    className="absolute top-[32.6%] left-0 origin-top-left scale-70 sm:scale-100"
                  />
                </>
              }
            >
              <SocialProofCard
                proof={hero.socialProof}
                className="absolute top-[69.3%] left-[52.3%] origin-top-left scale-60 sm:scale-100"
              />
              <DecorShape
                shape="spring-lime"
                className="top-[19.1%] left-[56.4%] w-[39.7%]"
                delay={2}
              />
            </MediaShowcase>
          }
        >
          <div className="flex flex-col gap-10 xl:w-145">
            <SectionHeading
              id="creators-title"
              title={creatorTools.title}
              titleClassName="max-w-98"
              description={
                <>
                  <strong className="font-bold text-gray-950">ByteSpace</strong>{" "}
                  {creatorTools.description}
                </>
              }
              className="gap-6 lg:gap-10"
            />
            <CheckList items={creatorTools.benefits} />
          </div>
        </FeatureSplit>
      </Container>
    </section>
  );
}
