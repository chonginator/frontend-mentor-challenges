import { HamburgerButtonProps } from "./HamburgerButtonProps";
import { CloseIcon, HamburgerIcon } from "../../../../icons";

function HamburgerButton({
  isMenuOpen,
  toggleIsMenuOpen,
  ...delegated
}: HamburgerButtonProps) {
  const visuallyHiddenText = isMenuOpen
    ? "Close mobile menu"
    : "Open mobile menu";

  const icon = isMenuOpen ? <CloseIcon /> : <HamburgerIcon />;

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

export default HamburgerButton;
