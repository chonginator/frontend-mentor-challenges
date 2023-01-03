import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

export default {
  title: "Components/Typography/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = () => (
  <>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
  </>
);
