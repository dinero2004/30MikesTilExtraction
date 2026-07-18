import Link from "next/link";

const links = [
  { label: "Game", href: "/#mission" },
  { label: "News", href: "/news" },
  { label: "Studio", href: "/about" },
  { label: "Enemy archive", href: "/model" },
  { label: "Imprint", href: "/imprint" },
  { label: "Legal", href: "/legal_information" },
] as const;

export const FooterLinks = () => {
  return (
    <nav
      aria-label="Footer navigation"
      className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:justify-self-end"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#f0c25d]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
