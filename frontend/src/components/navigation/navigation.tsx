import Link from "next/link";
import { DropdownNav } from "../dropdown-nav/dropdown-nav";

const links = [
  { label: "Game", href: "/#mission" },
  { label: "News", href: "/news" },
  { label: "Studio", href: "/about" },
  { label: "Archive", href: "/model" },
] as const;

export const Navigation = () => {
  return (
    <>
      <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/62 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#d7a53d] after:transition-transform hover:text-white hover:after:scale-x-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="lg:hidden">
        <DropdownNav />
      </div>
    </>
  );
};
