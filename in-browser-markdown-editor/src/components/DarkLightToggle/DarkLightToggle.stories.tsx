import { Meta, StoryObj } from "@storybook/react";
import DarkLightToggle from ".";
import Cookies from "js-cookie";

const meta = {
  title: "Components/DarkLightToggle",
  component: DarkLightToggle,
  // decorators: [
  //   (Story, context) => {
  //     const savedTheme = Cookies.get("colour-theme");

  //     if (savedTheme === "light" || savedTheme === "dark") {
  //       context.args.initialTheme = savedTheme;
  //       document.documentElement.classList.toggle(
  //         "dark",
  //         savedTheme === "dark",
  //       );
  //     }
  //     return <Story {...context} />;
  //   },
  // ],
} satisfies Meta<typeof DarkLightToggle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
