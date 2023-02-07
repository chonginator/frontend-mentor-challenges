import { LogoProps } from "./LogoProps";
import LogoImage from "/images/logo.svg";

const Logo = (props: LogoProps) => {
  const { size = "large" } = props;
  const radius = size === "large" ? 125 : 55;

  return (
    <img
      src={LogoImage}
      alt="Clipboard Logo"
      role="img"
      width={radius}
      height={radius}
    />
  );
};

export default Logo;
