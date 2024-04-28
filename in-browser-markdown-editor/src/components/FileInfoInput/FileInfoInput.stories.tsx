import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { action } from "@storybook/addon-actions";

import FileInfoInput from ".";
import { defaultMarkdownFile } from "@/constants";

const meta = {
  title: "Components/FileInfoInput",
  component: FileInfoInput,
} satisfies Meta<typeof FileInfoInput>;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    fileName: defaultMarkdownFile.name,
    errorMessage: "",
    onBlur: action("onBlur"),
    onChange: action("onChange"),
    label: "Document Name",
  },
  render: (args) => {
    const [{ fileName }, updateArgs] = useArgs();
    return (
      <FileInfoInput
        {...args}
        fileName={fileName}
        onChange={(event) => updateArgs({ fileName: event.target.value })}
      />
    );
  },
} satisfies Story;

export default meta;
