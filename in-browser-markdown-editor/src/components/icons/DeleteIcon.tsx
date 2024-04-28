import React from "react";
import Delete from "/assets/icon-delete.svg";
import { cn } from "@/utils";

type DeleteIconProps = {
  className?: string;
};

function DeleteIcon({ className }: DeleteIconProps) {
  return <Delete className={cn(className, "h-5 w-[18px]")} />;
}

export default DeleteIcon;
