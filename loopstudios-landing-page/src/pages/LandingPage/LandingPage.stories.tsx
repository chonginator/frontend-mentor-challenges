import { ComponentMeta, ComponentStory } from "@storybook/react";
import LandingPage from "./LandingPage";

export default {
  title: "Pages/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = () => <LandingPage />;

export const Default = Template.bind({});
