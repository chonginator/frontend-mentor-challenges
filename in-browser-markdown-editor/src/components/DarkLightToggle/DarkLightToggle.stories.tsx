import { Meta, StoryObj } from "@storybook/react";
import DarkLightToggle from ".";

const meta = {
  title: "Components/DarkLightToggle",
  component: DarkLightToggle,
} satisfies Meta<typeof DarkLightToggle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
