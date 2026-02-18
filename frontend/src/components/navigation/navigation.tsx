import { DropdownNav } from "../dropdown-nav/dropdown-nav"
import { NavLink } from "../nav-link/nav-link"

export const Navigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-m">
        <DropdownNav />
      </nav>

      {/* Mobile Dropdown Only */}
      <div className="md:hidden">
        <DropdownNav />
      </div>
    </>
  )
}
