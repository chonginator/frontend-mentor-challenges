import React from "react";
import { cn } from "@/utils";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

function Button({
  icon: Icon,
  className = "",
  children,
  ...delegated
}: ButtonProps) {
  const isIconOnly = Icon && !children;

  return (
    <button
      {...delegated}
      className={cn(
        "flex flex-row items-center justify-center gap-2 rounded-[4px] bg-orange-600 px-4 py-[10px] font-sans text-[15px] font-normal text-gray-100 transition-colors hover:bg-orange-400",
        className,
        {
          "bg-transparent text-gray-500 hover:bg-transparent hover:text-orange-600":
            isIconOnly,
        },
      )}
    >
      {Icon && <Icon className={"size-4 fill-current stroke-2"} />}
      {children}
    </button>
  );
}

export default Button;
