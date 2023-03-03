import { HamburgerMenuProps } from "./HamburgerMenuProps";
import Icon from "../../../../Icon";

function HamburgerMenu({ toggleMenu, isMenuOpen }: HamburgerMenuProps) {
  return (
    <button
      className="isolate flex h-5 w-7 justify-center md:hidden"
      onClick={toggleMenu}
    >
      {!isMenuOpen && <HamburgerIcon />}
      {isMenuOpen && <CrossIcon />}
    </button>
  );
}

function HamburgerIcon() {
  return <Icon id="hamburger" size={{ width: 24, height: 16 }} />;
}

function CrossIcon() {
  return <Icon id="cross" size={{ width: 20, height: 20 }} />;
}

export default HamburgerMenu;
