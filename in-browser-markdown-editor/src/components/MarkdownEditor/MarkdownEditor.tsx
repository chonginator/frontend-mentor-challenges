"use client";

import React from "react";
import Split from "react-split";

import MarkdownPane from "./MarkdownPane";
import PreviewPane from "./PreviewPane";
import useMarkdownFiles from "@/hooks/useMarkdownFiles";
import Button from "@/components/Button";
import { cn } from "@/utils";

import PreviewIcon from "@/components/icons/PreviewIcon";
import HidePreviewIcon from "@/components/icons/HidePreviewIcon";

type MarkdownEditorProps = {
  className?: string;
  markdown?: string;
  activeFileName?: string;
};

function MarkdownEditor({
  className,
  markdown: initialMarkdown = "",
  activeFileName,
}: MarkdownEditorProps) {
  const [markdown, setMarkdown] = React.useState(initialMarkdown);
  const [showMarkdown, setShowMarkdown] = React.useState(true);
  const { dispatch } = useMarkdownFiles();

  function handleMarkdownChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);

    if (activeFileName) {
      dispatch({
        type: "UPDATE_FILE",
        fileName: activeFileName,
        content: newMarkdown,
      });
    }
  }

  return (
    <div
      className={cn(
        "relative flex h-full grow [--pane-header-height:49px]",
        className,
      )}
    >
      <Split
        gutterSize={16}
        minSize={200}
        snapOffset={0}
        className={cn(
          "flex w-full flex-row [&>.gutter:hover]:after:opacity-100 [&>.gutter]:relative [&>.gutter]:hidden [&>.gutter]:bg-gradient-to-b [&>.gutter]:from-gray-200 [&>.gutter]:to-gray-100 [&>.gutter]:outline-none [&>.gutter]:[--tw-gradient-from-position:var(--pane-header-height)] [&>.gutter]:[--tw-gradient-to-position:var(--pane-header-height)] [&>.gutter]:before:absolute [&>.gutter]:before:inset-0 [&>.gutter]:before:mx-auto [&>.gutter]:before:w-[1px] [&>.gutter]:before:bg-gray-300 [&>.gutter]:before:content-[''] [&>.gutter]:after:absolute [&>.gutter]:after:inset-0 [&>.gutter]:after:mx-auto [&>.gutter]:after:w-[11px]  [&>.gutter]:after:bg-gray-300/50 [&>.gutter]:after:opacity-0 [&>.gutter]:after:transition-opacity [&>.gutter]:after:duration-300 [&>.gutter]:after:content-[''] [&>.gutter]:hover:cursor-col-resize md:[&>.gutter]:block dark:[&>.gutter]:from-gray-900 dark:[&>.gutter]:to-gray-1000 dark:[&>.gutter]:before:bg-gray-800 dark:[&>.gutter]:after:bg-gray-800/50",
          {
            "md:[&>.gutter]:hidden": !showMarkdown,
          },
        )}
      >
        <MarkdownPane
          className={cn({
            hidden: !showMarkdown,
          })}
          markdown={markdown}
          handleMarkdownChange={handleMarkdownChange}
        />

        <PreviewPane
          className={cn({
            flex: !showMarkdown,
          })}
          markdown={markdown}
        />
      </Split>

      <Button
        className="absolute right-0 top-0 h-[--pane-header-height] py-0"
        icon={showMarkdown ? PreviewIcon : HidePreviewIcon}
        onClick={() => setShowMarkdown(!showMarkdown)}
      />
    </div>
  );
}

export default MarkdownEditor;
