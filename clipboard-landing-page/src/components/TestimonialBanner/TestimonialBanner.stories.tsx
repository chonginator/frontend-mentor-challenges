import { ComponentMeta, ComponentStory } from "@storybook/react";
import TestimonialBanner from "./TestimonialBanner";

export default {
  title: "Components/TestimonialBanner",
  component: TestimonialBanner,
} as ComponentMeta<typeof TestimonialBanner>;

const Template: ComponentStory<typeof TestimonialBanner> = () => (
  <TestimonialBanner />
);

export const Default = Template.bind({});
