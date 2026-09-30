import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CareerGrowthSection } from "@/components/sections/home/CareerGrowthSection";
import { CourseCatalogSection } from "@/components/sections/home/CourseCatalogSection";
import { CreatorCtaSection } from "@/components/sections/home/CreatorCtaSection";
import { CreatorToolsSection } from "@/components/sections/home/CreatorToolsSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { LearningPathsSection } from "@/components/sections/home/LearningPathsSection";
import { PartnersSection } from "@/components/sections/home/PartnersSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader activeHref="/" variant="overlay" />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <PartnersSection />
        <CourseCatalogSection />
        <LearningPathsSection />
        <CareerGrowthSection />
        <CreatorToolsSection />
        <CreatorCtaSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}
