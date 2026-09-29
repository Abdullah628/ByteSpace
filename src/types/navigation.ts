export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  links: NavItem[];
};
