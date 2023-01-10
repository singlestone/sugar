import { Meta, StoryObj } from "@storybook/html";

import { ButtonArgs, createButton } from "../button.template";
import { sampleIcon } from "../icon-button.icon";

export default {
  title: "Buttons/Text and Icon",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonArgs>;

const IconLeftContent = `${sampleIcon}Icon left`;
const IconRightContent = `Icon Right${sampleIcon}`;
const IconsSurroundContent = `${sampleIcon}Icons Surround${sampleIcon}`;

export const IconLeft: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconLeftContent, args),
  args: {
    disabled: false,
    className: "sugar-button-primary sugar-button-with-icon",
  },
};

export const IconRight: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconRightContent, args),
  args: {
    disabled: false,
    className: "sugar-button-primary sugar-button-with-icon",
  },
};

export const IconsSurround: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconsSurroundContent, args),
  args: {
    disabled: false,
    className: "sugar-button-primary sugar-button-with-icon",
  },
};

export const Secondary: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconLeftContent, args),
  args: {
    disabled: false,
    className: "sugar-button-secondary sugar-button-with-icon",
  },
};

export const Ghost: StoryObj<ButtonArgs> = {
  render: (args) => createButton(IconLeftContent, args),
  args: {
    disabled: false,
    className: "sugar-button-ghost sugar-button-with-icon",
  },
};
