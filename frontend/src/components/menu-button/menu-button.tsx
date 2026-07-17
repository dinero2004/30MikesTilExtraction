import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const MenuButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Open navigation menu"
      className={cn(
        "flex size-10 cursor-pointer items-center justify-center border border-white/15 bg-white/[0.035] text-[#d7a53d] transition hover:border-[#d7a53d]/65 hover:bg-[#d7a53d]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7a53d]",
        className,
      )}
      {...props}
    >
      <Menu className="size-5" aria-hidden="true" />
    </button>
  );
});

MenuButton.displayName = "MenuButton";
