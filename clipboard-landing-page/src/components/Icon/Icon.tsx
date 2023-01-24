import { IconProps } from "./IconProps";
import styles from "./Icon.module.css";
import Icons from "/images/icons-sprite-map.svg";

const Icon = ({ className, name, size = 24 }: IconProps) => {
  return (
    <svg width={size} height={size} className={`${className} ${styles.icon}`}>
      <use href={`${Icons}#${name}`} />
    </svg>
  );
};

export default Icon;
