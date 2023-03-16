import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import logo from "../src/assets/logo.svg";

const theme = create({
  base: "light",
  textColor: "hsl(0, 0%, 41%)",

  // UI
  appBg: "black",
  appBorderColor: "hsl(0, 0%, 41%)",
  appContentBg: "black",

  // Toolbar
  barBg: "black",

  // Form
  inputBg: "black",
  inputBorder: "hsl(0, 0%, 41%)",

  // Brand assets
  brandTitle: "Loopstudios",
  brandImage: logo,
});

addons.setConfig({
  theme,
});
