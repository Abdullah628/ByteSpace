import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BrandBackdrop } from "@/components/marketing/BrandBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="overlay" />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <BrandBackdrop className="pt-30 pb-20 lg:pt-40 lg:pb-32">
          <Container className="flex flex-col items-center gap-8 text-center">
            {/* 480px in Figma; the negative margin keeps its bottom tucked under the heading. */}
            <p
              aria-hidden="true"
              className="-mb-[0.25em] bg-[linear-gradient(180deg,#d4fb20_0%,rgb(212_251_32/0.96)_25%,rgb(212_251_32/0.81)_50.5%,rgb(212_251_32/0.61)_68%,rgb(255_255_255/0)_100%)] bg-clip-text font-heading text-[clamp(9rem,33vw,30rem)] leading-none font-semibold tracking-[-0.01em] text-transparent select-none"
            >
              404
            </p>
            <SectionHeading
              as="h1"
              size="display"
              align="center"
              tone="inverted"
              title="The page you are looking for doesn’t exist"
              description="Try to use a correct url or go back to homepage to start again"
              className="relative max-w-233.75"
            />
            <Button href="/" variant="accent" className="focus-visible:outline-white">
              Back to Home
            </Button>
          </Container>
        </BrandBackdrop>
      </main>
      <SiteFooter />
    </>
  );
}
