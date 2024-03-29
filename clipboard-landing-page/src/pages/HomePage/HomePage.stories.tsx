import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HomePage } from "./HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Default = Template.bind({});
