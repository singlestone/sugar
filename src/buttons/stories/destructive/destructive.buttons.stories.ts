import type { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";

export default {
  title: "Buttons/Destructive",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonArgs>;

export const PrimaryDestructiveButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-destructive",
    label: "Primary Destructive",
  },
};

export const SecondaryDestructiveButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-secondary-destructive",
    label: "Secondary Destructive",
  },
};

export const GhostDestructiveButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-ghost-destructive",
    label: "Ghost Destructive",
  },
};
