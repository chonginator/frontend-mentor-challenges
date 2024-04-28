"use client";

import React from "react";

import MenuButton from "@/components/MenuButton";
import FileInfoInput from "@/components/FileInfoInput";
import Button from "@/components/Button";
import DeleteIcon from "@/components/icons/DeleteIcon";
import Modal from "@/components/Modal";
import Toast from "@/components/Toast";

import Icon from "/assets/logo.svg";
import SaveIcon from "/assets/icon-save.svg";

import { cn } from "@/utils";
import { ActiveFileName } from "@/types";

type EditorHeaderProps = {
  className?: string;
  activeFileName: ActiveFileName;
  fileNameErrorMessage: string;
  onFileNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFileInputBlur: () => void;
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  onDeleteFile: (fileName: string) => void;
  onSaveFiles: () => void;
};

function EditorHeader({
  className,
  activeFileName,
  fileNameErrorMessage,
  onFileNameChange,
  onFileInputBlur,
  isMenuOpen,
  toggleMenuOpen,
  onDeleteFile,
  onSaveFiles,
}: EditorHeaderProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isToastOpen, setIsToasttOpen] = React.useState(false);

  function handleSaveFiles() {
    onSaveFiles();
    setIsToasttOpen(true);
  }

  return (
    <>
      <header
        className={cn("flex flex-row justify-between bg-gray-800", className)}
      >
        <MenuButton isMenuOpen={isMenuOpen} onToggleMenu={toggleMenuOpen} />
        <div className="flex grow flex-row items-center justify-between p-2 pl-6 md:p-4 md:pl-6">
          <div className="flex grow flex-row items-center gap-6 before:hidden before:w-[1px] before:items-stretch before:self-stretch before:bg-gray-600 before:content-[''] before:md:block">
            <Icon className="-order-1 hidden md:block" />
            <FileInfoInput
              fileName={activeFileName}
              errorMessage={fileNameErrorMessage}
              onChange={onFileNameChange}
              onBlur={onFileInputBlur}
              label="Document Name"
            />
          </div>
          <div className="flex shrink-0 flex-row gap-2">
            <Button
              className="px-[11px]"
              icon={DeleteIcon}
              // onClick={() => activeFileName && onDeleteFile(activeFileName)}
              onClick={() => setIsModalOpen(true)}
            />
            <Button
              className="px-3 sm:px-4"
              icon={SaveIcon}
              onClick={handleSaveFiles}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <Modal
        title="Delete File"
        description={`Are you sure you want to delete the ${activeFileName} document and its contents? This action cannot be reversed.`}
        closeLabel="Confirm & Delete"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
        onConfirm={() => activeFileName && onDeleteFile(activeFileName)}
      />

      <Toast
        title="Changes saved"
        description="Your changes have been saved successfully."
        isOpen={isToastOpen}
        onOpenChange={() => setIsToasttOpen(false)}
      />
    </>
  );
}

export default EditorHeader;
