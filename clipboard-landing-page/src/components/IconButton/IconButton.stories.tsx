import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButton";
import { socialIconNames } from "../Icon/iconNames";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    name: {
      control: "select",
      options: socialIconNames,
    },
    size: {
      control: "range",
      min: 0,
      max: 100,
      step: 1,
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  name: "facebook",
  size: 24,
  href: "https://www.facebook.com/",
};
