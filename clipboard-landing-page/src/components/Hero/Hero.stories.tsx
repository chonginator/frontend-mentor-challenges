import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hero from "../Hero";

export default {
  title: "Components/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Default = Template.bind({});
