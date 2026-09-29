import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PartnersSection } from "@/components/sections/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <SiteHeader activeHref="/" variant="overlay" />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <PartnersSection />
      </main>
      <SiteFooter />
    </>
  );
}
