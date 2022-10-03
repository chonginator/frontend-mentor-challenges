import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Download for iOS",
  variant: "primary",
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Download for Mac",
  variant: "secondary",
};
