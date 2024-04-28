import React from "react";
import clsx from "clsx";

import Button from "@/components/Button";
import Menu from "/assets/icon-menu.svg";
import Close from "/assets/icon-close.svg";

type MenuButtonProps = React.ComponentProps<"button"> & {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
};

function MenuButton({
  isMenuOpen,
  onToggleMenu,
  ...delegated
}: MenuButtonProps) {
  const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
    <Menu
      className={clsx(className, "h-[14px] w-[23px] md:h-[18px] md:w-[30px]")}
    />
  );

  const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
  }) => <Close className={clsx(className, "size-[18px] md:size-6")} />;

  return (
    <Button
      icon={isMenuOpen ? CloseIcon : MenuIcon}
      className="size-14 rounded-none bg-gray-700 px-4 text-gray-100 hover:bg-orange-600 hover:text-white md:size-[72px] md:px-[21px]"
      onClick={onToggleMenu}
      aria-expanded={isMenuOpen}
      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
      {...delegated}
    ></Button>
  );
}

export default MenuButton;
