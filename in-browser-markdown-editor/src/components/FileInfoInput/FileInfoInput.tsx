import React from "react";
import { useFloating, autoUpdate, offset } from "@floating-ui/react";

import FileInfoWrapper from "../FileInfo";
import { cn } from "@/utils";
import { ActiveFileName } from "@/types";

type FileInfoInputProps = {
  fileName: ActiveFileName;
  errorMessage: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  label: string;
};

function FileInfoInput({
  fileName,
  errorMessage,
  onChange,
  onBlur,
  label,
}: FileInfoInputProps) {
  const { refs, floatingStyles } = useFloating({
    open: errorMessage !== "",
    middleware: [offset(24)],
    whileElementsMounted: autoUpdate,
  });

  return (
    <>
      <div ref={refs.setReference} className="max-w-[400px] grow">
        <FileInfoWrapper>
          <label
            htmlFor="fileName"
            className={cn(
              "cursor-pointer font-sans text-[13px]/none text-gray-500",
              {
                "text-[15px]/none": fileName === null,
                "hidden md:flex": fileName !== null,
              },
            )}
          >
            {label}
          </label>
          {fileName !== null && (
            <input
              id="fileName"
              type="text"
              className="w-full cursor-pointer appearance-none truncate border-b border-b-transparent bg-transparent font-sans text-[15px]/none text-gray-100 outline-none transition-colors group-hover:text-orange-600 focus:border-b focus:border-b-gray-100"
              disabled={!onChange}
              value={fileName || ""}
              onChange={(event) => onChange && onChange(event)}
              onBlur={onBlur}
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="none"
            />
          )}
        </FileInfoWrapper>
      </div>
      {errorMessage && (
        <div
          ref={refs.setFloating}
          className="z-10 rounded-s bg-gray-900 p-3 font-serif text-[13px] text-gray-400"
          style={floatingStyles}
        >
          {errorMessage}
        </div>
      )}
    </>
  );
}

export default FileInfoInput;
