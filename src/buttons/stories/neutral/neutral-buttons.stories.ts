import type { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";

export default {
  title: "Buttons/Neutral",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export const SecondaryNeutralButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-neutral",
    label: "Secondary Neutral",
  },
};

export const GhostNeutralButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-ghost-neutral",
    label: "Ghost Neutral",
  },
};
