import Icons from "../../assets/icon-map.svg";
import { IconProps } from "./IconProps";

function Icon(props: IconProps) {
  const defaultSize = { width: 24, height: 24 };
  const { id, size: { width, height } = defaultSize } = props;

  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  );
}

export default Icon;
