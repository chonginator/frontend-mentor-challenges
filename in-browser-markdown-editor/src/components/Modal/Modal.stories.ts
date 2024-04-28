import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Modal from "./Modal";

import { roboto, roboto_slab, roboto_mono } from "@/app/fonts";
import { cn } from "@/utils";

const meta = {
  title: "Components/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Delete this document?",
    description:
      "Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.",
    closeLabel: "Confirm & Delete",
    isOpen: true,
    onOpenChange: action("onOpenChange"),
  },
};

export default meta;
