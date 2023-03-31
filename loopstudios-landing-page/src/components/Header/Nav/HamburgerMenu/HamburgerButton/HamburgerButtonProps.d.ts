export type HamburgerButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  toggleIsMenuOpen: () => void;
  isMenuOpen: boolean;
};
