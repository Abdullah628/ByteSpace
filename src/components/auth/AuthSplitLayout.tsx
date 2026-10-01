import type { ReactNode } from "react";
import { BrandBackdrop } from "@/components/marketing/BrandBackdrop";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { AuthShowcase } from "./AuthShowcase";

type AuthSplitLayoutProps = {
  /** Short pitch on the blue panel ("Sign in with ease"). */
  title: string;
  description: string;
  /** The form card. */
  children: ReactNode;
};

/** Blue brand panel on the left (from lg), form card on the right. */
export function AuthSplitLayout({ title, description, children }: AuthSplitLayoutProps) {
  return (
    <BrandBackdrop className="min-h-dvh">
      <Container className="flex min-h-dvh flex-col">
        <header className="flex h-18 shrink-0 items-center lg:h-30 lg:items-start lg:pt-8.75">
          <Logo tone="light" className="focus-visible:outline-accent" />
        </header>

        <main
          id="main"
          className="grid flex-1 items-start gap-16 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,36.1875rem)] lg:pb-30"
        >
          <div className="hidden flex-col gap-14 lg:flex">
            <div className="flex max-w-118.75 flex-col gap-4 text-gray-50">
              <p className="font-heading text-heading-xs">{title}</p>
              <p className="text-body-l">{description}</p>
            </div>
            <AuthShowcase className="hidden xl:block" />
          </div>
          {children}
        </main>
      </Container>
    </BrandBackdrop>
  );
}
