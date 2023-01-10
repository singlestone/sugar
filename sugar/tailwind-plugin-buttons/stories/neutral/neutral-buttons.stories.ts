import type { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";

export default {
  title: "Buttons/Neutral",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonArgs>;

export const SecondaryNeutralButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Neutral Button", args),
  args: {
    disabled: false,
    className: "sugar-button-neutral",
  },
};

export const GhostNeutralButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Ghost Neutral Button", args),
  args: {
    disabled: false,
    className: "sugar-button-ghost-neutral",
  },
};
