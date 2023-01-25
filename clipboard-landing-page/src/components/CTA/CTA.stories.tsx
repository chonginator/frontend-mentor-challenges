import { ComponentMeta, ComponentStory } from "@storybook/react";
import CTA from "./CTA";
import heroCTAStyles from "../Hero/Hero.module.css";
import footerCTAStyles from "../../pages/HomePage/HomePage.module.css";

export default {
  title: "Components/CTA",
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />;

export const HeroCTA = Template.bind({});
HeroCTA.args = {
  children: (
    <div className={heroCTAStyles.titleContainer}>
      <h1 className={heroCTAStyles.title}>A history of everything you copy</h1>
      <p className={heroCTAStyles.subtitle}>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
    </div>
  ),
};

export const FooterCTA = Template.bind({});
FooterCTA.args = {
  children: (
    <div className={footerCTAStyles.titleContainer}>
      <h2 className={footerCTAStyles.title}>Clipboard for iOS and Mac OS</h2>
      <p className={footerCTAStyles.subtitle}>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you're ready to start adding to your clipboard.
      </p>
    </div>
  ),
};
