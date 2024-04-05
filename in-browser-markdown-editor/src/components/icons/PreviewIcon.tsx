import React from "react";
import Preview from "/assets/icon-show-preview.svg";
import { cn } from "@/utils";

type HidePreviewIconProps = {
  className?: string;
};

function HidePreviewIcon({ className }: HidePreviewIconProps) {
  return <Preview className={cn(className, "h-[15px] w-4")} />;
}

export default HidePreviewIcon;
