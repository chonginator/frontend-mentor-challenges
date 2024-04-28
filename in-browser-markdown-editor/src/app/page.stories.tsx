import { Meta, StoryObj } from "@storybook/react";

import Home from "./page";

const meta = {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Home>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
