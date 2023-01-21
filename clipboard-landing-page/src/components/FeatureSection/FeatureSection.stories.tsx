import { ComponentMeta, ComponentStory } from "@storybook/react";
import FeatureSection from "./FeatureSection";
import featureSectionSnippetsData from "./featureSectionSnippetsData";
import featureSectionAccessData from "./featureSectionAccessData";
import featureSectionWorkflowData from "./featureSectionWorkflowData";

export default {
  title: "Components/FeatureSection",
  component: FeatureSection,
} as ComponentMeta<typeof FeatureSection>;

const Template: ComponentStory<typeof FeatureSection> = (args) => (
  <FeatureSection {...args} />
);

export const SnippetsFeatureSection = Template.bind({});
SnippetsFeatureSection.args = {
  data: featureSectionSnippetsData,
};

export const AccessFeatureSection = Template.bind({});
AccessFeatureSection.args = {
  data: featureSectionAccessData,
};

export const WorkflowFeatureSection = Template.bind({});
WorkflowFeatureSection.args = {
  data: featureSectionWorkflowData,
};
