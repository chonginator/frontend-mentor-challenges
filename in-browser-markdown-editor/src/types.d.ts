export type ActiveFileName = string | null;

export type MarkdownFile = {
  name: string;
  content: string;
  timeCreated: Date;
};

export type MarkdownFilesState = MarkdownFile[];

export type MarkdownFilesAction =
  | { type: "CREATE_FILE"; file: MarkdownFile }
  | { type: "RENAME_FILE"; oldFileName: string; newFileName: string }
  | { type: "UPDATE_FILE"; fileName: string; content: string }
  | { type: "DELETE_FILE"; fileName: string };
