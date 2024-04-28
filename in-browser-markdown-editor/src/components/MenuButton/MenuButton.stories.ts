import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
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
    onToggleMenu: action("onToggleMenu"),
  },
};

export const Open: Story = {
  args: {
    isMenuOpen: true,
    onToggleMenu: action("onToggleMenu"),
  },
};

export default meta;
