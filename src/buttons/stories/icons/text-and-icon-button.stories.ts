import { Meta } from "@storybook/html";

import { IconButtonTemplate, sampleIcon } from "../icon-button.template";

export default {
  title: "Buttons/Text and Icon",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

const IconLeftTemplate = IconButtonTemplate(`${sampleIcon}Icon left`);
const IconRightTemplate = IconButtonTemplate(`Icon Right${sampleIcon}`);
const IconsSurroundTemplate = IconButtonTemplate(
  `${sampleIcon}Icons Surround${sampleIcon}`
);

export const IconLeft = IconLeftTemplate.bind({});
IconLeft.args = {
  disabled: false,
  className: "sugar-button-primary sugar-button-with-icon",
};

export const IconRight = IconRightTemplate.bind({});
IconRight.args = {
  disabled: false,
  className: "sugar-button-primary sugar-button-with-icon",
};
export const IconsSurround = IconsSurroundTemplate.bind({});
IconsSurround.args = {
  disabled: false,
  className: "sugar-button-primary sugar-button-with-icon",
};

export const Secondary = IconLeftTemplate.bind({});
Secondary.args = {
  disabled: false,
  className: "sugar-button-secondary sugar-button-with-icon",
};

export const Ghost = IconLeftTemplate.bind({});
Ghost.args = {
  disabled: false,
  className: "sugar-button-ghost sugar-button-with-icon",
};
