import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";
import { socialIconNames, featureIconNames } from "./iconNames";

const iconNames = [...socialIconNames, ...featureIconNames];

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
    },
    size: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const AllIcons = () => {
  const icons = iconNames.map((name) => (
    <div key={name} className="flex flex-col items-center">
      <Icon name={name} />
      <p>{name}</p>
    </div>
  ));

  return <div className="flex flex-row gap-8">{icons}</div>;
};

export const Playground = Template.bind({});
Playground.args = {
  name: "facebook",
  size: 24,
};
