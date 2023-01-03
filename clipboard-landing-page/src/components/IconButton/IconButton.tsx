import Icon from "../Icon";
import styles from "./IconButton.module.css";
import { IconButtonProps } from "./IconButtonProps";

const IconButton = ({ name, href, size = 24 }: IconButtonProps) => (
  <a href={href} target="_blank" className={`${styles.iconButton} transition`}>
    <Icon name={name} size={size} />
  </a>
);

export default IconButton;
