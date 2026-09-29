import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CourseCatalogSection } from "@/components/sections/home/CourseCatalogSection";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { LearningPathsSection } from "@/components/sections/home/LearningPathsSection";
import { PartnersSection } from "@/components/sections/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader activeHref="/" variant="overlay" />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <PartnersSection />
        <CourseCatalogSection />
        <LearningPathsSection />
      </main>
      <SiteFooter />
    </>
  );
}
