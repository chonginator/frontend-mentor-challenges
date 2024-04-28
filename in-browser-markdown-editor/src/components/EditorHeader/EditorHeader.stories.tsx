import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/preview-api";

import EditorHeader from ".";
import { defaultMarkdownFile } from "@/constants";

const meta = {
  title: "Components/EditorHeader",
  component: EditorHeader,
} satisfies Meta<typeof EditorHeader>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeFileName: defaultMarkdownFile.name,
    fileNameErrorMessage: "",
    onFileNameChange: action("onFileNameChange"),
    onFileInputBlur: action("onFileInputBlur"),
    isMenuOpen: false,
    toggleMenuOpen: action("toggleMenuOpen"),
    onDeleteFile: action("onDeleteFile"),
    onSaveFiles: action("onSaveFiles"),
  },
  render: (args) => {
    const [, updateArgs] = useArgs();

    function onFileNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      updateArgs({ activeFileName: event.target.value });
    }

    return <EditorHeader {...args} onFileNameChange={onFileNameChange} />;
  },
};

export default meta;
