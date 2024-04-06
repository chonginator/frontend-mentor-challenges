"use client";

import React from "react";
import Split from "react-split";

import MarkdownPane from "./MarkdownPane";
import PreviewPane from "./PreviewPane";
import Button from "@/components/Button";
import { cn } from "@/utils";

import PreviewIcon from "@/components/icons/PreviewIcon";
import HidePreviewIcon from "@/components/icons/HidePreviewIcon";

function MarkdownEditor() {
  const [markdown, setMarkdown] = React.useState("");
  const [showMarkdown, setShowMarkdown] = React.useState(true);

  function handleMarkdownChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setMarkdown(event.target.value);
  }

  return (
    <div className="relative flex h-dvh [--header-height:49px]">
      <Split
        gutterSize={16}
        minSize={200}
        snapOffset={0}
        className={cn(
          "flex w-full flex-row [&>.gutter:hover]:after:opacity-100 [&>.gutter]:relative [&>.gutter]:hidden [&>.gutter]:bg-gradient-to-b [&>.gutter]:from-gray-200 [&>.gutter]:to-gray-100 [&>.gutter]:outline-none [&>.gutter]:[--tw-gradient-from-position:var(--header-height)] [&>.gutter]:[--tw-gradient-to-position:var(--header-height)] [&>.gutter]:before:absolute [&>.gutter]:before:inset-0 [&>.gutter]:before:mx-auto [&>.gutter]:before:w-[1px] [&>.gutter]:before:bg-gray-300 [&>.gutter]:before:content-[''] [&>.gutter]:after:absolute [&>.gutter]:after:inset-0 [&>.gutter]:after:mx-auto [&>.gutter]:after:w-[11px]  [&>.gutter]:after:bg-gray-300/50 [&>.gutter]:after:opacity-0 [&>.gutter]:after:transition-opacity [&>.gutter]:after:duration-500 [&>.gutter]:after:content-[''] [&>.gutter]:hover:cursor-col-resize md:[&>.gutter]:block dark:[&>.gutter]:from-gray-900 dark:[&>.gutter]:to-gray-1000 dark:[&>.gutter]:before:bg-gray-800 dark:[&>.gutter]:after:bg-gray-800/50",
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
        className="absolute right-0 top-0 h-[--header-height] py-0"
        icon={showMarkdown ? PreviewIcon : HidePreviewIcon}
        onClick={() => setShowMarkdown(!showMarkdown)}
      />
    </div>
  );
}

export default MarkdownEditor;
