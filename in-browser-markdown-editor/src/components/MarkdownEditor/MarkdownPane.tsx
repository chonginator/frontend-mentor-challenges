import React from "react";
import PaneHeader from "./PaneHeader";

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
    <div className={cn("flex grow flex-col", className)}>
      <PaneHeader>Markdown</PaneHeader>
      <textarea
        className="w-full grow resize-none bg-gray-100 p-4 font-mono text-sm/6 text-gray-700 scrollbar-thin scrollbar-track-gray-100  scrollbar-thumb-gray-300 focus:outline-none dark:bg-gray-1000 dark:text-gray-400 dark:scrollbar-track-gray-1000 dark:scrollbar-thumb-gray-600"
        value={markdown}
        onChange={handleMarkdownChange}
      />
    </div>
  );
}

export default MarkdownPane;
