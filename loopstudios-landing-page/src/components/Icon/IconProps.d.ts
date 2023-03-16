export type IconProps = {
  id:
    | "cross"
    | "hamburger"
    | "facebook"
    | "instagram"
    | "pinterest"
    | "twitter";
  size?: Size;
};

type Size = {
  width: number;
  height: number;
};
