import { HamburgerButtonProps } from "./HamburgerButtonProps";
import { AnimatedHamburgerIcon } from "../../../../icons";

function HamburgerButton({
  isMenuOpen,
  toggleIsMenuOpen,
  ...delegated
}: HamburgerButtonProps) {
  const visuallyHiddenText = isMenuOpen
    ? "Close mobile menu"
    : "Open mobile menu";

  return (
    <button
      className="isolate flex h-7 w-7 justify-center"
      onClick={toggleIsMenuOpen}
      {...delegated}
    >
      <span className="sr-only">{visuallyHiddenText}</span>
      <AnimatedHamburgerIcon isMenuOpen={isMenuOpen} />
    </button>
  );
}

export default HamburgerButton;
