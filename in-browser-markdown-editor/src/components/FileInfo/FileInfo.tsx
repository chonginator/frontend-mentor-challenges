import React from "react";
import File from "/assets/icon-document.svg";

type FileInfoProps = {
  fileName: string;
  label: string;
  onFileNameChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRestoreLastValidFileName?: () => void;
};

function FileInfo({
  fileName,
  label,
  onFileNameChange,
  onRestoreLastValidFileName,
}: FileInfoProps) {
  return (
    <div className="group flex flex-grow cursor-pointer flex-row items-center gap-4">
      <div>
        <File className="h-4 w-[14px] fill-gray-100" />
      </div>

      <div className="flex flex-grow flex-col items-start gap-[3px]">
        <label
          htmlFor="fileName"
          className="cursor-pointer font-sans text-[13px]/none text-gray-500"
        >
          {label}
        </label>
        <input
          id="fileName"
          type="text"
          className="w-full cursor-pointer appearance-none truncate border-b border-b-transparent bg-transparent pb-1 font-sans text-[15px]/none text-gray-100 outline-none transition-colors focus:border-b focus:border-b-gray-100 group-hover:text-orange-600"
          disabled={!onFileNameChange}
          value={fileName}
          onChange={onFileNameChange}
          onBlur={onRestoreLastValidFileName}
          autoComplete="off"
          spellCheck="false"
          autoCapitalize="none"
        />
      </div>
    </div>
  );
}

export default FileInfo;
