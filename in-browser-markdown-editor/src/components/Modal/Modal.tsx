import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import Button from "@/components/Button";
import { roboto, roboto_slab, roboto_mono } from "@/app/fonts";
import { cn } from "@/utils";

type ModalProps = {
  title: string;
  description?: string;
  closeLabel?: string;
  isOpen: boolean;
  onOpenChange: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
};

function Modal({
  title,
  description,
  closeLabel = "Close",
  isOpen,
  onOpenChange,
  onConfirm,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-1000/50 dark:bg-gray-500/50" />
        <div className="fixed inset-0 grid place-content-center">
          <Dialog.Content
            className={cn(
              "relative mx-4 flex max-w-[343px] flex-col gap-4 bg-gray-100 p-6 dark:bg-gray-900",
              roboto.variable,
              roboto_slab.variable,
              roboto_mono.variable,
            )}
          >
            <Dialog.Title className="font-serif text-xl font-bold text-gray-700 dark:text-gray-100">
              {title}
            </Dialog.Title>
            {description && (
              <Dialog.Description className="break-all font-serif text-sm/[24px] text-gray-500 dark:text-gray-400">
                {description}
              </Dialog.Description>
            )}
            {children}
            <Dialog.Close asChild={true}>
              <Button onClick={onConfirm}>{closeLabel}</Button>
            </Dialog.Close>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
