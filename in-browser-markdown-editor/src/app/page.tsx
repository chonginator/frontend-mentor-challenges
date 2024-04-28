"use client";

import React from "react";
import { motion } from "framer-motion";

import EditorHeader from "@/components/EditorHeader";
import MarkdownEditor from "@/components/MarkdownEditor";
import FileSidebar from "@/components/FileSidebar";

import useMarkdownFiles from "@/hooks/useMarkdownFiles";
import {
  isFileNameTooLong,
  isFileNameEmpty,
  isFileNameContainingInvalidCharacters,
} from "@/utils";
import { MAX_MARKDOWN_FILES, defaultMarkdownFile } from "@/constants";
import { ActiveFileName } from "@/types";

function Home() {
  const { markdownFiles, dispatch } = useMarkdownFiles();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeFileName, setActiveFileName] = React.useState<ActiveFileName>(
    markdownFiles.at(-1)?.name ?? defaultMarkdownFile.name,
  );
  const [lastValidFileName, setLastValidFileName] =
    React.useState<ActiveFileName>(activeFileName);
  const [fileNameErrorMessage, setFileNameErrorMessage] = React.useState("");

  function createNewFile() {
    if (markdownFiles.length >= MAX_MARKDOWN_FILES) {
      return;
    }

    const newFileName = getUntakenFileName();

    dispatch({
      type: "CREATE_FILE",
      file: { name: newFileName, content: "", timeCreated: new Date() },
    });

    resetActiveFileNameTo(newFileName);
    resetFileNameErrorMessage();
  }

  function getUntakenFileName() {
    let newFileNumber = 1;
    while (
      markdownFiles.some((file) => file.name === `untitled-${newFileNumber}`)
    ) {
      newFileNumber++;
    }

    return `untitled-${newFileNumber}`;
  }

  function deleteFile(fileName: string) {
    if (markdownFiles.length === 0) return;

    if (markdownFiles.length === 1) {
      resetActiveFileNameTo(null);
      resetFileNameErrorMessage();
    } else {
      const remainingFiles = markdownFiles.filter(
        (file) => file.name !== fileName,
      );
      const mostRecentFile = remainingFiles.reduce((prev, current) =>
        prev.timeCreated > current.timeCreated ? prev : current,
      );

      resetActiveFileNameTo(mostRecentFile.name);
      resetFileNameErrorMessage();
    }

    dispatch({ type: "DELETE_FILE", fileName });
  }

  function isFileNameConflict(newFileName: string) {
    return markdownFiles.some((file) => file.name === newFileName);
  }

  function renameFile(oldFileName: string, newFileName: string) {
    if (oldFileName === newFileName) return;

    dispatch({ type: "RENAME_FILE", oldFileName, newFileName });
  }

  function handleFileInputBlur() {
    if (activeFileName === null || lastValidFileName === null) return;

    if (fileNameErrorMessage !== "") {
      resetActiveFileNameTo(lastValidFileName);
      resetFileNameErrorMessage();
    } else {
      setLastValidFileName(activeFileName);
      renameFile(lastValidFileName, activeFileName);
    }
  }

  function resetActiveFileNameTo(fileName: ActiveFileName) {
    setActiveFileName(fileName);
    setLastValidFileName(fileName);
  }

  function resetFileNameErrorMessage() {
    setFileNameErrorMessage("");
  }

  function getFileFromName(fileName: string) {
    return markdownFiles.find((file) => file.name === fileName);
  }

  function onActiveFileNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newFileName = event.target.value;
    setActiveFileName(newFileName);

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
    } else if (isFileNameConflict(newFileName)) {
      setFileNameErrorMessage("File Name already exists");
    }
  }

  function handleActiveFileNameChange(newFileName: ActiveFileName) {
    setActiveFileName(newFileName);
    setLastValidFileName(newFileName);
  }

  function saveMarkdownFiles() {
    localStorage.setItem("markdownFiles", JSON.stringify(markdownFiles));
  }

  const currentFileMarkdown =
    activeFileName && getFileFromName(activeFileName)?.content; // TODO: Fix this

  return (
    <div className="overflow-x-hidden [--editor-header-height:56px] md:[--editor-header-height:72px]">
      <motion.div
        animate={{
          x: isMenuOpen ? "0" : "-250px",
        }}
        initial={false}
        transition={pageSlideSpring}
        className="flex h-dvh flex-row will-change-transform"
      >
        <FileSidebar
          files={markdownFiles}
          handleCreateNewFile={createNewFile}
          lastValidFileName={lastValidFileName}
          handleActiveFileNameChange={handleActiveFileNameChange}
        />
        <div className="#basis-full flex w-full shrink-0 grow flex-col">
          <EditorHeader
            className="h-[--editor-header-height]"
            activeFileName={activeFileName}
            fileNameErrorMessage={fileNameErrorMessage}
            onFileNameChange={onActiveFileNameChange}
            onFileInputBlur={handleFileInputBlur}
            isMenuOpen={isMenuOpen}
            toggleMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
            onDeleteFile={deleteFile}
            onSaveFiles={saveMarkdownFiles}
          />
          <MarkdownEditor
            key={lastValidFileName}
            markdown={currentFileMarkdown ?? ""}
            activeFileName={lastValidFileName ?? ""}
            className="h-[calc(100%-var(--editor-header-height))]"
          />
        </div>
      </motion.div>
    </div>
  );
}

const pageSlideSpring = {
  type: "spring",
  stiffness: 600,
  damping: 55,
};

export default Home;
