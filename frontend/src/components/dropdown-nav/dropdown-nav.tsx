"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Dashboard } from "../dashboard/dashboard";
import { Logout } from "../logout/logout";
import { MenuButton } from "../menu-button/menu-button";
import { MenuItem } from "../menu-item/menu-item";
import { MenuSeperator } from "../menu-separator/menu-separator";

export const DropdownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuButton />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="z-[70] flex w-[min(330px,calc(100vw-32px))] flex-col border border-white/12 bg-[#0b0d0e]/98 p-2 shadow-2xl shadow-black/70 backdrop-blur-xl data-[state=open]:animate-in"
          align="end"
          sideOffset={14}
        >
          <div className="px-4 pb-3 pt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#d7a53d]">
            Field navigation / 04
          </div>
          <MenuItem href="/" title="Home" description="Mission overview" />
          <MenuItem href="/news" title="News" description="Field transmissions" />
          <MenuItem href="/about" title="Studio" description="Meet 8 Slice Games" />
          <MenuItem href="/model" title="Archive" description="Inspect enemy units" />
          <Dashboard />
          <MenuSeperator />
          <Logout />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
