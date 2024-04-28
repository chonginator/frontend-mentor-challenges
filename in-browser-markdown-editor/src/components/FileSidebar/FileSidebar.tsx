import React from "react";

import Icon from "/assets/logo.svg";
import FileInfoButton from "@/components/FileInfoButton";
import Button from "@/components/Button";
import DarkLightToggle from "@/components/DarkLightToggle";

import { cn } from "@/utils";
import { ActiveFileName, MarkdownFile } from "@/types";

type FileSidebarProps = React.ComponentProps<"nav"> & {
  files: MarkdownFile[];
  handleCreateNewFile: () => void;
  lastValidFileName: ActiveFileName;
  handleActiveFileNameChange: (fileName: string) => void;
};

function FileSidebar({
  className,
  files,
  handleCreateNewFile,
  handleActiveFileNameChange,
  lastValidFileName,
}: FileSidebarProps) {
  return (
    <nav
      className={cn(
        "flex h-dvh w-fit min-w-[250px] flex-col gap-6 bg-gray-900 px-6 py-7",
        className,
      )}
    >
      <Icon className="block shrink-0 md:hidden" />
      <div className="flex flex-col gap-6">
        <h2 className="font-sans text-[14px] uppercase tracking-[2px] text-gray-500">
          My Documents
        </h2>
        <Button onClick={handleCreateNewFile}>+ New Document</Button>
      </div>
      <div className="flex grow flex-col gap-6 overflow-y-auto scrollbar-thin scrollbar-track-gray-900  scrollbar-thumb-gray-700 ">
        {files.toReversed().map((file) => (
          <FileInfoButton
            key={file.name}
            fileName={file.name}
            label={file.timeCreated.toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
            isActive={file.name === lastValidFileName}
            handleActiveFileNameChange={() =>
              handleActiveFileNameChange(file.name)
            }
          />
        ))}
      </div>
      <DarkLightToggle />
    </nav>
  );
}

export default FileSidebar;
