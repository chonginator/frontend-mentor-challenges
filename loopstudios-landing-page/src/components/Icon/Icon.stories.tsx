import { ComponentMeta } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const icons = [
  "cross",
  "hamburger",
  "facebook",
  "instagram",
  "pinterest",
  "twitter",
] as const;

export const AllIcons = () => (
  <div className="flex gap-4">
    {icons.map((icon, index) => (
      <Icon key={index} id={icon} />
    ))}
  </div>
);
