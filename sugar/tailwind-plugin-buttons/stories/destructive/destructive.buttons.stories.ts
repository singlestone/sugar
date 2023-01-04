import type { Meta } from "@storybook/html";

import { ButtonTemplate } from "../button.template";

export default {
  title: "Buttons/Destructive",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export const PrimaryDestructiveButton = ButtonTemplate.bind({});
PrimaryDestructiveButton.args = {
  disabled: false,
  className: "sugar-button-destructive",
  label: "Primary Destructive",
};

export const SecondaryDestructiveButton = ButtonTemplate.bind({});
SecondaryDestructiveButton.args = {
  disabled: false,
  className: "sugar-button-secondary-destructive",
  label: "Secondary Destructive",
};

export const GhostDestructiveButton = ButtonTemplate.bind({});
GhostDestructiveButton.args = {
  disabled: false,
  className: "sugar-button-ghost-destructive",
  label: "Ghost Destructive",
};
