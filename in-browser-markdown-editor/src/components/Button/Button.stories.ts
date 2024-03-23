import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import Save from "/assets/icon-save.svg";

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

export const IconButton: Story = {
  args: {
    icon: Save,
    children: "Save Changes",
  },
};

export default meta;
