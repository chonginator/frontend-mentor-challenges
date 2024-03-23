import React, { FC, SVGProps } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: FC<SVGProps<SVGElement>>;
}

function Button({ icon: Icon, children, ...delegated }: ButtonProps) {
  return (
    <button
      className="font-sans text-[15px] font-normal text-gray-100 bg-orange-600 hover:bg-orange-400 rounded-[4px] py-[10px] px-4 transition-colors"
      {...delegated}
    >
      <span>{Icon && <Icon />}</span>
      <span>{children}</span>
    </button>
  );
}

export default Button;
