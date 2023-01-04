import type { Meta } from "@storybook/html";

import { ButtonTemplate } from "../button.template";

export default {
  title: "Buttons/Neutral",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export const SecondaryNeutralButton = ButtonTemplate.bind({});
SecondaryNeutralButton.args = {
  disabled: false,
  className: "sugar-button-neutral",
  label: "Secondary Neutral Button",
};

export const GhostNeutralButton = ButtonTemplate.bind({});
GhostNeutralButton.args = {
  disabled: false,
  className: "sugar-button-ghost-neutral",
  label: "Ghost Neutral Button",
};
