import React from "react";
import FileInfo from "../FileInfo";

type FileInfoButtonProps = {
  fileName: string;
  label: string;
};

function FileInfoButton({ fileName, label }: FileInfoButtonProps) {
  return (
    <div className="w-fit">
      <FileInfo fileName={fileName} label={label} />
    </div>
  );
}

export default FileInfoButton;
