import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { authLinks } from "@/data/navigation";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

type SiteHeaderProps = {
  /** href of the current page, highlighted in the nav. */
  activeHref?: string;
};

const actionLinkClasses =
  "rounded-sm text-body-m text-gray-50 transition-colors hover:text-accent focus-visible:outline-accent";

export function SiteHeader({ activeHref }: SiteHeaderProps) {
  return (
    <header className="relative z-30 bg-primary">
      <a
        href="#main"
        className="sr-only rounded-3xl bg-accent px-4 py-2 text-label-m text-gray-950 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      <Container className="flex h-18 items-center justify-between lg:grid lg:h-30 lg:grid-cols-[1fr_auto_1fr]">
        <Logo tone="light" className="focus-visible:outline-accent" />

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks activeHref={activeHref} />
        </nav>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <Link href={authLinks.signIn.href} className={actionLinkClasses}>
            {authLinks.signIn.label}
          </Link>
          <Link href={authLinks.signUp.href} className={actionLinkClasses}>
            {authLinks.signUp.label}
          </Link>
          <button
            type="button"
            aria-label="Cart"
            className="rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-accent"
          >
            <Image src="/icons/shopping-bag.svg" alt="" width={24} height={24} />
          </button>
        </div>

        <MobileNav activeHref={activeHref} />
      </Container>
    </header>
  );
}
