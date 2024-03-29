import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import clsx from "clsx";

import Button from ".";
import Save from "/assets/icon-save.svg";
import Delete from "/assets/icon-delete.svg";
import Preview from "/assets/icon-show-preview.svg";

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
    icon: ({ className }) => (
      <Delete className={clsx(className, "w-[18px] h-5")} />
    ),
    className:
      "bg-transparent hover:bg-transparent text-gray-500 hover:text-orange-600",
    "aria-label": "Delete",
  },
};

export const PreviewButton: Story = {
  args: {
    icon: ({ className }) => <Preview className={clsx(className, "w-4 h-3")} />,
  },
};

export default meta;
