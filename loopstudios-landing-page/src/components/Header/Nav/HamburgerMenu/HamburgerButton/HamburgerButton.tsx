import { HamburgerButtonProps } from "./HamburgerButtonProps";
import Icon from "../../../../Icon";

function HamburgerButton({
  isMenuOpen,
  toggleIsMenuOpen,
  ...delegated
}: HamburgerButtonProps) {
  const visuallyHiddenText = isMenuOpen
    ? "Close mobile menu"
    : "Open mobile menu";

  const icon = isMenuOpen ? <CrossIcon /> : <HamburgerIcon />;

  return (
    <button
      className="isolate flex h-5 w-7 justify-center"
      onClick={toggleIsMenuOpen}
      {...delegated}
    >
      <span className="sr-only">{visuallyHiddenText}</span>
      {icon}
    </button>
  );
}

function HamburgerIcon() {
  return <Icon id="hamburger" size={{ width: 24, height: 16 }} />;
}

function CrossIcon() {
  return <Icon id="cross" size={{ width: 20, height: 20 }} />;
}

export default HamburgerButton;
