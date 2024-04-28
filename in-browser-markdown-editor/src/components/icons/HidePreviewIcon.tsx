import React from "react";
import HidePreview from "/assets/icon-hide-preview.svg";

import { cn } from "@/utils";

type PreviewIconProps = {
  className?: string;
};

function HidePreviewIcon({ className }: PreviewIconProps) {
  return <HidePreview className={cn(className, "h-[15px] w-4")} />;
}

export default HidePreviewIcon;
