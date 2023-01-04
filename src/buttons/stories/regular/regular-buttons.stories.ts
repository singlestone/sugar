import type { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";

export default {
  title: "Buttons/Regular",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonArgs>;

export const PrimaryRegularButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-primary",
    label: "Primary Regular",
  },
};

export const SecondaryRegularButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-secondary",
    label: "Secondary Regular",
  },
};

export const GhostRegularButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton(args),
  args: {
    disabled: false,
    className: "sugar-button-ghost",
    label: "Ghost Regular",
  },
};
