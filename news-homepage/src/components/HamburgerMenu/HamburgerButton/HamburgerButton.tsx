import { HamburgerButtonProps } from "./HamburgerButtonProps";
import AnimatedHamburgerIcon from "./AnimatedHamburgerIcon";

function HamburgerButton({
  width = 40,
  height = 17,
  isOpen,
  ...props
}: HamburgerButtonProps) {
  // Pythagorean theorem is used where the width of the bar is the hypotenuse when crossed
  const crossSize = 0.5 * Math.sqrt(2) * width;

  return (
    <button
      style={{
        width,
        height: Math.max(height, crossSize), // Set the maximum of the two to prevent layout shifting
      }}
      aria-expanded={isOpen}
      {...props}
    >
      <span className="sr-only">{visuallyHiddenText}</span>
      <AnimatedHamburgerIcon isOpen={isOpen} width={width} height={height} />
    </button>
  );
}

export default HamburgerButton;
