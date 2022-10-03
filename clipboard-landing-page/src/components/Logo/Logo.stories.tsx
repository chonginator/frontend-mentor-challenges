import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    size: {
      control: "select",
      options: ["large", "small"],
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
