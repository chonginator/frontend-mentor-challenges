import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Toast from "./Toast";

const meta = {
  title: "Components/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Changes saved",
    description: "Your changes have been saved successfully.",
    isOpen: true,
    onOpenChange: action("onOpenChange"),
  },
};

export default meta;
