import React from "react";
import { cn } from "@/utils";

export type ButtonProps = React.ComponentProps<"button"> & {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

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
        "flex flex-row items-center justify-center gap-2 rounded-[4px] bg-orange-600 px-4 py-[10px] font-sans text-[15px]/none font-normal text-gray-100 transition-colors hover:bg-orange-400",
        {
          "block aspect-square bg-transparent text-gray-500 hover:bg-transparent hover:text-orange-600":
            isIconOnly,
        },
        className,
      )}
    >
      {Icon && <Icon className={"mx-auto size-4 fill-current stroke-2"} />}
      <div
        className={cn({
          "sr-only sm:not-sr-only": Icon,
        })}
      >
        {children}
      </div>
    </button>
  );
}

export default Button;
