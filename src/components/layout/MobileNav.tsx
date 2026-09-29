"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { authLinks } from "@/data/navigation";
import { NavLinks } from "./NavLinks";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
const DESKTOP_QUERY = "(min-width: 64rem)";

type MobileNavProps = {
  activeHref?: string;
};

/** Hamburger button + slide-in drawer, shown below the `lg` breakpoint. */
export function MobileNav({ activeHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const toggle = toggleRef.current;
    panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      // Keep focus inside the drawer while it is open.
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    // The drawer has no place on desktop: close it if the viewport grows past `lg`.
    const desktop = window.matchMedia?.(DESKTOP_QUERY);
    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktop?.addEventListener("change", handleViewportChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop?.removeEventListener("change", handleViewportChange);
      document.body.style.overflow = previousOverflow;
      // preventScroll: after following an anchor link, stay at the section.
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-gray-50 hover:bg-white/10 focus-visible:outline-accent"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            data-testid="mobile-nav-overlay"
            className="absolute inset-0 animate-fade-in bg-gray-950/60"
            onClick={close}
          />
          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-80 animate-slide-in-right flex-col gap-8 overflow-y-auto bg-white p-6 shadow-card"
          >
            <div className="flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-gray-950 hover:bg-gray-50"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Main">
              <NavLinks orientation="vertical" activeHref={activeHref} onNavigate={close} />
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Button href={authLinks.signIn.href} variant="ghost" onClick={close}>
                {authLinks.signIn.label}
              </Button>
              <Button href={authLinks.signUp.href} variant="accent" onClick={close}>
                {authLinks.signUp.label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
