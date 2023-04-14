import { SVGMotionProps } from "framer-motion";

export interface AnimatedHamburgerIconProps
  extends SVGAttributesWithoutMotion,
    SVGMotionProps {
  isOpen: boolean;
  width?: number;
  height?: number;
}

type SVGAttributesWithoutMotion = Omit<
  SVGProps<SVGSVGElement>,
  keyof SVGMotionProps<SVGSVGElement>
>;
