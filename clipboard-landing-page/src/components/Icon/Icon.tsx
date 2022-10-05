import { IconProps } from "./IconProps";
import Icons from "../../assets/images/icons-sprite-map.svg";

const Icon = ({ name, color, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} className="fill-current" style={{ color }}>
      <use href={`${Icons}#${name}`} />
    </svg>
  );
};

export default Icon;
