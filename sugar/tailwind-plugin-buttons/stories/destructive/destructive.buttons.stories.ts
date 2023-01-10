import type { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";

export default {
  title: "Buttons/Destructive",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonArgs>;

export const PrimaryDestructiveButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Primary Destructive", args),
  args: {
    disabled: false,
    className: "sugar-button-destructive",
  },
};

export const SecondaryDestructiveButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Secondary Destructive", args),
  args: {
    disabled: false,
    className: "sugar-button-secondary-destructive",
  },
};

export const GhostDestructiveButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Ghost Destructive", args),
  args: {
    disabled: false,
    className: "sugar-button-ghost-destructive",
  },
};
