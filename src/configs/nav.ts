type NavItem = {
  title: string;
  route: string;
  children?: Array<NavItem>;
};

const NAVS: NavItem[] = [
  { title: "Explore", route: "/explore" },
  { title: "Collections", route: "/collections" },
];

export default NAVS;
