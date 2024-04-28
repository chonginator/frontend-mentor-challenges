import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

import { MAX_FILE_NAME_LENGTH } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isFileNameInvalid(fileName: string) {
  return (
    isFileNameEmpty(fileName) ||
    isFileNameContainingInvalidCharacters(fileName) ||
    isFileNameTooLong(fileName)
  );
}

export function isFileNameEmpty(fileName: string) {
  return fileName.length === 0;
}

export function isFileNameContainingInvalidCharacters(fileName: string) {
  return !fileName.match(/^[\w -]*$/);
}

export function isFileNameTooLong(fileName: string) {
  return fileName.length > MAX_FILE_NAME_LENGTH;
}
