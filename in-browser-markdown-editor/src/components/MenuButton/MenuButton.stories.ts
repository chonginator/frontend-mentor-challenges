import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from ".";
import Menu from "/assets/icon-menu.svg";

const meta = {
  title: "Components/MenuButton",
  component: MenuButton,
} satisfies Meta<typeof MenuButton>;

type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    isMenuOpen: false,
  },
};

export const Open: Story = {
  args: {
    isMenuOpen: true,
  },
};

export default meta;
