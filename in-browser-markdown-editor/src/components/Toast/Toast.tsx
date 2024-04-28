import React from "react";
import * as BaseToast from "@radix-ui/react-toast";
import * as Portal from "@radix-ui/react-portal";

import Button from "@/components/Button";
import Close from "/assets/icon-close.svg";

import { roboto, roboto_slab, roboto_mono } from "@/app/fonts";
import { cn } from "@/utils";

type ToastProps = {
  title: string;
  description?: string;
  isOpen: boolean;
  onOpenChange: () => void;
};

function Toast({ title, description, isOpen, onOpenChange }: ToastProps) {
  return (
    <Portal.Root>
      <BaseToast.Root
        className={cn(
          roboto.variable,
          roboto_slab.variable,
          roboto_mono.variable,
          "flex flex-row items-center gap-2 border-l-4 border-orange-600 bg-gray-200 p-4 font-serif md:gap-4 dark:bg-gray-800",
        )}
        open={isOpen}
        onOpenChange={onOpenChange}
      >
        <div className="flex flex-col">
          <BaseToast.Title className="text-sm font-bold text-gray-700 dark:text-gray-100">
            {title}
          </BaseToast.Title>
          {description && (
            <BaseToast.Description className="text-xs/tight font-normal text-gray-500 md:text-sm/[24px] dark:text-gray-400">
              {description}
            </BaseToast.Description>
          )}
        </div>
        <BaseToast.Close asChild={true}>
          <Button className="p-2" icon={CloseIcon}></Button>
        </BaseToast.Close>
      </BaseToast.Root>
      <BaseToast.Viewport className="fixed bottom-0 right-0 z-10 p-4" />
    </Portal.Root>
  );
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
  <Close className={cn(className, "size-3")} />
);
export default Toast;
