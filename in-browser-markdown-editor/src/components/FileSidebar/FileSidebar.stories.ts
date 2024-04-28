import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FileSidebar from ".";

import { defaultMarkdownFile } from "@/constants";

const meta = {
  title: "Components/FileSidebar",
  component: FileSidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FileSidebar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    files: [defaultMarkdownFile],
    handleCreateNewFile: action("handleCreateNewFile"),
    lastValidFileName: "",
    handleActiveFileNameChange: action("handleActiveFileNameChange"),
  },
};

export default meta;
