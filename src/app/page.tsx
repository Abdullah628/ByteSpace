import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader activeHref="/" />
      <main id="main" tabIndex={-1} className="min-h-96 focus:outline-none" />
      <SiteFooter />
    </>
  );
}
