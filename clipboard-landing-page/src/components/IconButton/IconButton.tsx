import Icon from "../Icon";
import { IconButtonProps } from "./IconButtonProps";

const IconButton = ({ name, href, size = 24 }: IconButtonProps) => (
  <a
    href={href}
    target="_blank"
    className="inline-block transition hover:text-strongCyan-500 focus:text-strongCyan-500"
  >
    <Icon name={name} size={size} />
  </a>
);

export default IconButton;
