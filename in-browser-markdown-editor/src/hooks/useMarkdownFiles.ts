import React from "react";
import { MarkdownFilesContext } from "@/components/MarkdownFilesProvider";

function useMarkdownFiles() {
  const context = React.useContext(MarkdownFilesContext);
  if (!context) {
    throw new Error(
      "The MarkdownFilesContext is undefined. This likely means that the useMarkdownFiles hook is being used outside of the MarkdownFilesProvider. Make sure that the useMarkdownFiles hook is used within a MarkdownFilesProvider.",
    );
  }

  return context;
}

export default useMarkdownFiles;
