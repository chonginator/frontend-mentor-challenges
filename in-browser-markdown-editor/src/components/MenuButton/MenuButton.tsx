import React from "react";
import clsx from "clsx";

import Button, { ButtonProps } from "@/components/Button";
import Menu from "/assets/icon-menu.svg";
import Close from "/assets/icon-close.svg";

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isMenuOpen: boolean;
}

function MenuButton({ isMenuOpen, ...delegated }: MenuButtonProps) {
  const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
    <Menu
      className={clsx(className, "w-[23px] h-[14px] md:w-[30px] md:h-[18px]")}
    />
  );

  const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
  }) => <Close className={clsx(className, "size-[18px] md:size-6")} />;

  return (
    <Button
      icon={isMenuOpen ? CloseIcon : MenuIcon}
      className="size-[72px] text-gray-100 hover:text-white bg-gray-700 px-4 md:px-[21px] hover:bg-orange-600 rounded-none"
      aria-expanded={isMenuOpen}
      {...delegated}
    >
      <span className="sr-only">{isMenuOpen ? "Close Menu" : "Open Menu"}</span>
    </Button>
  );
}

export default MenuButton;
