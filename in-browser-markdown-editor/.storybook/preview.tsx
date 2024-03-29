import type { Preview } from "@storybook/react";
import React from "react";
import clsx from "clsx";

import { roboto, roboto_slab } from "../src/app/fonts";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={clsx(roboto.variable, roboto_slab.variable)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;