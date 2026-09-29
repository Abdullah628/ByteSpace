import Link from "next/link";
import { NewsletterForm } from "@/components/marketing/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, legalLinks } from "@/data/navigation";
import { FooterLinkGroup } from "./FooterLinkGroup";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="flex flex-col gap-16 pt-14 pb-10 xl:gap-32.5 xl:pt-17.75 xl:pb-12">
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between xl:gap-23">
          <div id="newsletter" className="flex max-w-132 flex-col gap-8 xl:gap-11.25">
            <div className="flex flex-col gap-4">
              <Logo tone="dark" />
              <p className="text-body-s text-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <NewsletterForm />
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 xl:w-145 xl:shrink-0 xl:pt-12"
          >
            {footerNav.map((group) => (
              <FooterLinkGroup key={group.title} group={group} />
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-5 text-body-xs text-gray-950 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-primary hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
