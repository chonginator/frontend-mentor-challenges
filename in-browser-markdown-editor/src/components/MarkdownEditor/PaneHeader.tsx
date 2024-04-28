import React from "react";

function PaneHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky h-[--header-height] bg-gray-200 px-4 py-[14px] font-sans text-[14px] uppercase tracking-[2px] text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      {children}
    </div>
  );
}

export default PaneHeader;
