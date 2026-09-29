import Link from "next/link";
import type { NavGroup } from "@/types/navigation";

type FooterLinkGroupProps = {
  group: NavGroup;
};

export function FooterLinkGroup({ group }: FooterLinkGroupProps) {
  return (
    <div>
      {/* Figma renders the column titles transparent; keep them for screen readers. */}
      <h2 className="sr-only">{group.title}</h2>
      <ul className="flex flex-col gap-4">
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="rounded-sm text-body-s text-gray-950 transition-colors hover:text-primary hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
