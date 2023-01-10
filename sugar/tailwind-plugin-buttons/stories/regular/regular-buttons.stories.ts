import type { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";

export default {
  title: "Buttons/Regular",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonArgs>;

export const PrimaryRegularButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Primary Regular Button", args),
  args: {
    disabled: false,
    className: "sugar-button-primary",
  },
};

export const SecondaryRegularButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Secondary Regular Button", args),
  args: {
    disabled: false,
    className: "sugar-button-secondary",
  },
};

export const GhostRegularButton: StoryObj<ButtonArgs> = {
  render: (args) => createButton("Ghost Regular Button", args),
  args: {
    disabled: false,
    className: "sugar-button-ghost",
  },
};
