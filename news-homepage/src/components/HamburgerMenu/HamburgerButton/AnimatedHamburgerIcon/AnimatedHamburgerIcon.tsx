import { AnimatedHamburgerIconProps } from "./AnimatedHamburgerIconProps";
import { SVGMotionProps, Variants, motion } from "framer-motion";

function AnimatedHamburgerIcon({
  isOpen,
  width = 32,
  height = 32,
  ...props
}: AnimatedHamburgerIconProps) {
  const variant = isOpen ? "opened" : "closed";

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      overflow="visible"
      stroke="currentColor"
      strokeWidth={3}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <AnimatedLine
        className="origin-[50%_0]"
        x1="0"
        x2={width}
        y1="0"
        y2="0"
        animate={variant}
        variants={lineVariants.top}
      ></AnimatedLine>
      <AnimatedLine
        x1="0"
        x2={width}
        y1={height / 2}
        y2={height / 2}
        animate={variant}
        variants={lineVariants.middle}
      ></AnimatedLine>
      <AnimatedLine
        className="origin-[50%_100%]"
        x1="0"
        x2={width}
        y1={height}
        y2={height}
        animate={variant}
        variants={lineVariants.bottom}
      ></AnimatedLine>
    </motion.svg>
  );
}

function AnimatedLine({ ...props }: SVGMotionProps<SVGLineElement>) {
  return (
    <motion.line
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
      {...props}
    ></motion.line>
  );
}

const lineVariants = {
  top: {
    opened: {
      rotate: 45,
      translateY: "50%",
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  },
  middle: {
    opened: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  },
  bottom: {
    opened: {
      rotate: -45,
      translateY: "-50%",
    },
    closed: {
      rotate: 0,
      translateY: 0,
    },
  },
};

export default AnimatedHamburgerIcon;
