import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template = () => <Footer />;

export const Default = Template.bind({});
