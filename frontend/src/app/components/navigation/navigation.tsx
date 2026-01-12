import { DropdownNav } from "../dropdown-nav/dropdown-nav";
import { NavLink } from "../nav-link/nav-link";

export const Navigation = () => {
  return (
    <nav className="flex gap-m items-center">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/news">News</NavLink>
      <DropdownNav />
    </nav>
  );
};