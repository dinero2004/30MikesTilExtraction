import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MenuButton } from "../menu-button/menu-button";
import { MenuItem } from "../menu-item/menu-item";
import { MenuSeperator } from "../menu-separator/menu-separator";
// import { Logout } from "../logout/logout";
// import { Dashboard } from "../dashboard/dashboard";

export const DropdownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuButton />
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="bg-gray-900 p-6 rounded-xl flex flex-col gap-4 shadow-xl"
          align="end"
          sideOffset={16}
        >
          <MenuItem href="/" title="Home" description="30 Mikes" />
          <MenuItem href="/about" title="About" description="our team" />
          <MenuItem href="/news" title="News" description="current news" />
          {/* <Dashboard /> */}
          <MenuSeperator />
          {/* <Logout /> */}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};