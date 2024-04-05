import { Meta, StoryObj } from "@storybook/react";
import FileInfoButton from ".";

const meta = {
  title: "Components/FileInfoButton",
  component: FileInfoButton,
} satisfies Meta<typeof FileInfoButton>;

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
