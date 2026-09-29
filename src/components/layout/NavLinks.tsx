import Link from "next/link";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  /** href of the current page, marked with aria-current. */
  activeHref?: string;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
  className?: string;
};

export function NavLinks({
  activeHref,
  orientation = "horizontal",
  onNavigate,
  className,
}: NavLinksProps) {
  const vertical = orientation === "vertical";

  return (
    <ul className={cn("flex", vertical ? "flex-col gap-2" : "items-center gap-6", className)}>
      {navItems.map((item) => {
        const active = item.href === activeHref;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-sm transition-colors",
                vertical
                  ? "block py-3 text-label-xl text-gray-950 hover:text-primary"
                  : "text-body-m text-gray-50 hover:text-accent focus-visible:outline-accent",
                active && (vertical ? "text-primary" : "font-medium"),
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
