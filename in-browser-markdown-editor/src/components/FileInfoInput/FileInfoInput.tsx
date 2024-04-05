import React from "react";
import FileInfo from "../FileInfo";
import { useFloating, autoUpdate, offset } from "@floating-ui/react";
import {
  isFileNameInvalid,
  isFileNameTooLong,
  isFileNameEmpty,
  isFileNameContainingInvalidCharacters,
} from "@/utils";

type FileInfoInputProps = {
  fileName: string;
  label: string;
};

function FileInfoInput({
  fileName: initialFileName,
  label,
}: FileInfoInputProps) {
  const [fileName, setFileName] = React.useState(initialFileName);
  const [lastValidFileName, setLastValidFileName] =
    React.useState(initialFileName);
  const [fileNameErrorMessage, setFileNameErrorMessage] = React.useState("");

  const { refs, floatingStyles } = useFloating({
    open: isFileNameInvalid(fileName),
    middleware: [offset(10)],
    whileElementsMounted: autoUpdate,
  });

  function handleFileNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newFileName = event.target.value;
    setFileName(newFileName);

    if (isFileNameEmpty(newFileName)) {
      setFileNameErrorMessage("File Name cannot be empty");
    } else if (isFileNameContainingInvalidCharacters(newFileName)) {
      setFileNameErrorMessage(
        "File Name can only contain letters, numbers, underscores, and spaces",
      );
    } else if (isFileNameTooLong(newFileName)) {
      setFileNameErrorMessage(
        "File Name must be less than 100 characters long",
      );
    } else {
      setLastValidFileName(newFileName);
    }
  }

  function restoreLastValidFileName() {
    setFileName(lastValidFileName);
  }

  return (
    <>
      <div ref={refs.setReference} className="max-w-[400px]">
        <FileInfo
          fileName={fileName}
          label={label}
          onFileNameChange={handleFileNameChange}
          onRestoreLastValidFileName={restoreLastValidFileName}
        />
      </div>
      {isFileNameInvalid(fileName) && (
        <div
          ref={refs.setFloating}
          className="rounded-s bg-gray-900 p-3 font-serif text-[13px] text-gray-400"
          style={floatingStyles}
        >
          {fileNameErrorMessage}
        </div>
      )}
    </>
  );
}

export default FileInfoInput;
