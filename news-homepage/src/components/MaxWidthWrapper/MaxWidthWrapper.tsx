import clsx from "clsx";
import { MaxWidthWrapperProps } from "./MaxWidthWrapperProps";

function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={clsx("mx-auto max-w-[1110px] px-4 xl:px-0", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
