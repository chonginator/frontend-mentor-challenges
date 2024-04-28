import React from "react";
import { LayoutGroup, motion } from "framer-motion";

import File from "/assets/icon-document.svg";

function FileInfoWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex cursor-pointer flex-row items-center gap-4">
      <File className="h-4 w-[14px] shrink-0 fill-gray-100" />
      <div className="flex min-w-0 flex-grow flex-col items-start gap-[3px]">
        {children}
      </div>
    </div>
  );
}

export default FileInfoWrapper;
