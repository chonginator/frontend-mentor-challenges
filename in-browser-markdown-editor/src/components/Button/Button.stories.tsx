import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";
import Save from "/assets/icon-save.svg";

import DeleteIcon from "@/components/icons/DeleteIcon";
import PreviewIcon from "@/components/icons/PreviewIcon";
import HidePreviewIcon from "@/components/icons/HidePreviewIcon";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "+ New Document",
  },
};

export const SaveButton: Story = {
  args: {
    icon: Save,
    children: "Save Changes",
  },
};

export const TrashButton: Story = {
  args: {
    icon: DeleteIcon,
    className:
      "bg-transparent hover:bg-transparent text-gray-500 hover:text-orange-600",
    "aria-label": "Delete",
  },
};

export const PreviewButton: Story = {
  args: {
    icon: PreviewIcon,
  },
};

export const HidePreviewButton: Story = {
  args: {
    icon: HidePreviewIcon,
  },
};

export default meta;
