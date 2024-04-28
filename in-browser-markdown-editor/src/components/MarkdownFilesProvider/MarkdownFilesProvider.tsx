import React from "react";
import { produce, current } from "immer";

import { defaultMarkdownFile, MAX_MARKDOWN_FILES } from "@/constants";
import { MarkdownFile, MarkdownFilesState, MarkdownFilesAction } from "@/types";

type MarkdownFilesContextType = {
  markdownFiles: MarkdownFilesState;
  dispatch: React.Dispatch<MarkdownFilesAction>;
};

type MarkdownFileFromStorage = Omit<MarkdownFile, "timeCreated"> & {
  timeCreated: string;
};

export const MarkdownFilesContext = React.createContext<
  MarkdownFilesContextType | undefined
>(undefined);

function reducer(state: MarkdownFilesState, action: MarkdownFilesAction) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "CREATE_FILE": {
        draft.push(action.file);
        break;
      }
      case "DELETE_FILE": {
        const index = draft.findIndex((file) => file.name === action.fileName);
        draft.splice(index, 1);
        break;
      }
      case "RENAME_FILE": {
        const index = draft.findIndex(
          (file) => file.name === action.oldFileName,
        );
        draft[index].name = action.newFileName;
        break;
      }
      case "UPDATE_FILE": {
        const index = draft.findIndex((file) => file.name === action.fileName);
        draft[index].content = action.content;
        break;
      }
    }
  });
}

function MarkdownFilesProvider({ children }: { children: React.ReactNode }) {
  const [markdownFiles, dispatch] = React.useReducer(
    reducer,
    [defaultMarkdownFile],
    init,
  );

  function init(initialMarkdownFiles: MarkdownFilesState) {
    const savedMarkdownFiles = localStorage.getItem("markdownFiles");

    if (!savedMarkdownFiles) {
      return initialMarkdownFiles;
    }

    const parsedMarkdownFiles = JSON.parse(savedMarkdownFiles).map(
      (file: MarkdownFileFromStorage) => ({
        ...file,
        timeCreated: new Date(file.timeCreated),
      }),
    ) as MarkdownFilesState;

    if (parsedMarkdownFiles.length === 0) {
      return initialMarkdownFiles;
    }

    return parsedMarkdownFiles;
  }

  return (
    <MarkdownFilesContext.Provider value={{ markdownFiles, dispatch }}>
      {children}
    </MarkdownFilesContext.Provider>
  );
}

export default MarkdownFilesProvider;
