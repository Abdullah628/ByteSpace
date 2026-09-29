import type { Category } from "@/types/course";

// There are no category pages in scope, so each path leads to the course catalog.
export const learningPaths: Category[] = [
  { name: "Design", icon: "/icons/categories/design.svg", href: "/#courses" },
  { name: "Development", icon: "/icons/categories/development.svg", href: "/#courses" },
  { name: "IT & Software", icon: "/icons/categories/it-software.svg", href: "/#courses" },
  { name: "Business", icon: "/icons/categories/business.svg", href: "/#courses" },
  { name: "Marketing", icon: "/icons/categories/marketing.svg", href: "/#courses" },
  { name: "Photography", icon: "/icons/categories/photography.svg", href: "/#courses" },
];
