import { ComponentMeta, ComponentStory } from "@storybook/react";
import OurWork from "./OurWork";

export default {
  title: "Components/OurWork",
  component: OurWork,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
} as ComponentMeta<typeof OurWork>;

const Template: ComponentStory<typeof OurWork> = () => <OurWork />;

export const Default = Template.bind({});
