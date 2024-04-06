import React from "react";
import EditorHeader from "./EditorHeader";

import { cn } from "@/utils";

type MarkdownPaneProps = {
  className?: string;
  markdown: string;
  handleMarkdownChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function MarkdownPane({
  className = "",
  markdown,
  handleMarkdownChange,
}: MarkdownPaneProps) {
  return (
    <div className={cn("flex h-full grow flex-col", className)}>
      <EditorHeader>Markdown</EditorHeader>
      <textarea
        className="scrollbar-thin scrollbar-track-gray-100 dark:scrollbar-track-gray-1000 scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 w-full grow resize-none bg-gray-100 p-4 font-mono  text-sm/6 text-gray-700 focus:outline-none dark:bg-gray-1000 dark:text-gray-400"
        value={markdown}
        onChange={handleMarkdownChange}
      />
    </div>
  );
}

export default MarkdownPane;
