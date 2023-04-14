import { HamburgerButtonProps } from "./HamburgerButtonProps";
import AnimatedHamburgerIcon from "./AnimatedHamburgerIcon";

function HamburgerButton({
  width = 40,
  height = 17,
  isOpen,
  ...props
}: HamburgerButtonProps) {
  // Pythagorean theorem is used where the width of the bar is the hypotenuse when crossed
  const crossDimension = 0.5 * Math.sqrt(2) * width;

  return (
    <button
      className="group"
      style={{
        width,
        height: Math.max(height, crossDimension), // Prevent layout shifting from dynamic width and just set the maximum of the two,
      }}
      aria-expanded={isOpen}
      {...props}
    >
      <AnimatedHamburgerIcon
        isOpen={isOpen}
        width={width}
        height={height}
        stroke="red"
      />
    </button>
  );
}

export default HamburgerButton;
