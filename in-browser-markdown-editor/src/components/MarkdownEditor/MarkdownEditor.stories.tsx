import { Meta, StoryObj } from "@storybook/react";
import MarkdownEditor from ".";

const meta = {
  title: "Components/MarkdownEditor",
  component: MarkdownEditor,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="flex h-dvh">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MarkdownEditor>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
