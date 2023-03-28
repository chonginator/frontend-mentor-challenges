import { ButtonHTMLAttributes } from "react";

export type HamburgerButtonProps =
  React.HTMLAttributes<ButtonHTMLAttributes> & {
    toggleIsMenuOpen: () => void;
    isMenuOpen: boolean;
  };
