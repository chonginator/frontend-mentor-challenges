import { ComponentMeta, ComponentStory } from "@storybook/react";
import TwoColumnLayout from "./TwoColumnLayout";
import Icon from "../Icon";
import { Feature } from "../FeatureSection/FeatureSection";
import featureSectionSnippetsData from "../FeatureSection/featureSectionSnippetsData";
import styles from "../FeatureSection/FeatureSection.module.css";

export default {
  title: "Components/TwoColumnLayout",
  component: TwoColumnLayout,
} as ComponentMeta<typeof TwoColumnLayout>;

const features: Feature[] = featureSectionSnippetsData.features;
const image = featureSectionSnippetsData.image;

const Template: ComponentStory<typeof TwoColumnLayout> = (args) => (
  <TwoColumnLayout {...args} />
);

const SnippetsFeatureImage = (
  <img
    className={styles.featureImage}
    src={image?.src}
    // sizes={"(min-width: 768px) 752px, 312px"}
    alt={image?.alt}
  />
);

const SnippetsFeatures = (
  <div className={styles.featureContainer}>
    {features?.map((feature) => (
      <div className={styles.feature}>
        {feature.iconName && <Icon name={feature.iconName} />}
        <h3 className={styles.featureTitle}>{feature.title}</h3>
        <p className={styles.featureDescription}>{feature.description}</p>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});
Default.args = {
  className: styles.twoColumnLayout,
  left: SnippetsFeatureImage,
  right: SnippetsFeatures,
};
