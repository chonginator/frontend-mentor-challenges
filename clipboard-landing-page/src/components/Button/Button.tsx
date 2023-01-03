import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const variantClassName =
    variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button
      className={`${styles.btn} ${variantClassName} ${styles[variantClassName]}`}
    >
      {children}
    </button>
  );
};

export default Button;
