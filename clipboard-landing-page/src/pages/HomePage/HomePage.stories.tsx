import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HomePage } from "./HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/JULngfX5WXYZmDmIhM9jk3/clipboard-landing-page?t=JzBfWhFg4ZGSGn63-6",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Default = Template.bind({});
