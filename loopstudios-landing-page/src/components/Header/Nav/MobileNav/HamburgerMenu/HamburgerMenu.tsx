import { HamburgerMenuProps } from "./HamburgerMenuProps";
import Icon from "../../../../Icon";

function HamburgerMenu({ toggleMenu, isMenuOpen }: HamburgerMenuProps) {
  return (
    <button
      className="isolate flex h-5 w-7 justify-center md:hidden"
      onClick={toggleMenu}
    >
      {!isMenuOpen && <Icon id="hamburger" />}
      {isMenuOpen && <Icon id="cross" />}
    </button>
  );
}

export default HamburgerMenu;
