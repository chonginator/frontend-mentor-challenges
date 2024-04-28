import React from "react";
import FileInfoWrapper from "../FileInfo";

import { cn } from "@/utils";

type FileInfoButtonProps = {
  fileName: string;
  label: string;
  isActive: boolean;
  handleActiveFileNameChange: () => void;
};

function FileInfoButton({
  fileName,
  label,
  isActive,
  handleActiveFileNameChange,
}: FileInfoButtonProps) {
  return (
    <button
      className="shrink-0 appearance-none overflow-hidden truncate"
      onClick={handleActiveFileNameChange}
    >
      <FileInfoWrapper>
        <div className="cursor-pointer font-sans text-[13px]/none text-gray-500">
          {label}
        </div>
        <div
          className={cn(
            "w-full truncate border-b border-b-transparent bg-transparent text-left font-sans text-[15px]/none text-gray-100 outline-none transition-colors group-hover:text-orange-600",
          )}
        >
          <span
            className={cn({
              "text-orange-600": isActive,
            })}
          >
            {fileName}
          </span>
        </div>
      </FileInfoWrapper>
    </button>
  );
}

export default FileInfoButton;
