import Icons from "../../assets/icon-map.svg";

interface IconProps {
  id:
    | "cross"
    | "hamburger"
    | "facebook"
    | "instagram"
    | "pinterest"
    | "twitter";
}

function Icon({ id }: IconProps) {
  return (
    <svg>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  );
}

export default Icon;
