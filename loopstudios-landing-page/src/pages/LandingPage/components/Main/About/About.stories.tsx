import { ComponentMeta, ComponentStory } from "@storybook/react";
import About from "./About";

export default {
  title: "Components/About",
  component: About,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Default = Template.bind({});
