import { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";
import { sampleIcon } from "../icon-button.icon";

export default {
  title: "Buttons/Icon Only",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

const IconOnlyContent = `
${sampleIcon}
<span class="sr-only">Add</span>
`;

export const PrimaryIconOnly: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconOnlyContent, args),
  args: {
    disabled: false,
    className: "sugar-button-primary sugar-button-icon-only",
  },
};

export const SecondaryIconOnly: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconOnlyContent, args),
  args: {
    disabled: false,
    className: "sugar-button-secondary sugar-button-icon-only",
  },
};

export const DestructiveIconOnly: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconOnlyContent, args),
  args: {
    disabled: false,
    className: "sugar-button-destructive sugar-button-icon-only",
  },
};

export const NeutralIconOnly: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconOnlyContent, args),
  args: {
    disabled: false,
    className: "sugar-button-neutral sugar-button-icon-only",
  },
};
