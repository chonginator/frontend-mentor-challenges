import { HamburgerButtonProps } from "./HamburgerButtonProps";
import HamburgerIcon from "./HamburgerIcon";

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
      <HamburgerIcon width={width} height={height} />
    </button>
  );
}

// type HamburgerIconProps = React.SVGProps<SVGSVGElement> & {
//   width?: number;
//   height?: number;
// };

// function HamburgerIcon({
//   width = 32,
//   height = 32,
//   ...props
// }: HamburgerIconProps) {
//   return (
//     <svg
//       width={width}
//       height={height}
//       viewBox={`0 0 ${width} ${height}`}
//       overflow="visible"
//       stroke="black"
//       strokeWidth={3}
//       {...props}
//     >
//       <line
//         className="origin-[50%_0] transition-transform group-aria-expanded:translate-y-1/2 group-aria-expanded:rotate-45"
//         x1="0"
//         x2={width}
//         y1="0"
//         y2="0"
//       ></line>
//       <line
//         className="transition-opacity group-aria-expanded:opacity-0"
//         x1="0"
//         x2={width}
//         y1={height / 2}
//         y2={height / 2}
//       ></line>
//       <line
//         className="origin-[50%_100%] transition-transform group-aria-expanded:-translate-y-1/2 group-aria-expanded:-rotate-45"
//         x1="0"
//         x2={width}
//         y1={height}
//         y2={height}
//       ></line>
//     </svg>
//   );
// }

export default HamburgerButton;
