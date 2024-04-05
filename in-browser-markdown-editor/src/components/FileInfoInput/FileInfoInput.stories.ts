import { Meta, StoryObj } from "@storybook/react";
import FileInfoInput from ".";

const meta = {
  title: "Components/FileInfoInput",
  component: FileInfoInput,
} satisfies Meta<typeof FileInfoInput>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fileName: "welcome",
    label: new Date()
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
      .replace(",", ""),
  },
};

export default meta;
