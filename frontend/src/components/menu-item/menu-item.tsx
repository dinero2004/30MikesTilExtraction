import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface MenuItemProps {
  href: string;
  title: string;
  description: string;
}

export const MenuItem = ({ href, title, description }: MenuItemProps) => {
  return (
    <DropdownMenuItem className="p-0 outline-none">
      <Link
        href={href}
        className="group flex w-full items-center justify-between border-t border-white/8 px-4 py-4 outline-none transition hover:bg-white/[0.045] focus-visible:bg-white/[0.045]"
      >
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.16em] text-white">
            {title}
          </span>
          <span className="mt-1 block text-xs text-white/45">{description}</span>
        </span>
        <ArrowUpRight className="size-4 text-[#d7a53d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </DropdownMenuItem>
  );
};
