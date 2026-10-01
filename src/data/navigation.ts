import type { NavGroup, NavItem } from "@/types/navigation";

// Pages outside the brief (course search, creator profiles, ...) are not built,
// so links point to the matching section of the landing page instead.

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const authLinks = {
  signIn: { label: "Sign In", href: "/login" },
  signUp: { label: "Join Us", href: "/signup" },
} satisfies Record<string, NavItem>;

// Figma hides the column titles (transparent text); they are kept as
// screen-reader headings so each group of links is named.
export const footerNav: NavGroup[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/#courses" },
      { label: "Featured Categories", href: "/#categories" },
      { label: "Business", href: "/#categories" },
      { label: "IT", href: "/#categories" },
      { label: "Design", href: "/#categories" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/#categories" },
      { label: "Marketing", href: "/#categories" },
      { label: "Photography", href: "/#categories" },
      { label: "Finance", href: "/#categories" },
      { label: "Sport", href: "/#categories" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/#join" },
      { label: "Affiliate Program", href: "/#creators" },
      { label: "Contact", href: "/#newsletter" },
      { label: "Help", href: "/#testimonials" },
      { label: "About", href: "/#growth" },
    ],
  },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
