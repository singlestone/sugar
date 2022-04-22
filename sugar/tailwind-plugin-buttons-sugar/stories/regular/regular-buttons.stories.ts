import { Meta } from "@storybook/html";
import { ButtonTemplate } from "../button.template";

export default {
  title: "Buttons/Regular",
  parameters: {
    layout: "centered",
  },
} as Meta;

export const PrimaryRegularButton = ButtonTemplate.bind({});
PrimaryRegularButton.args = {
  disabled: false,
  className: "sugar-button-primary",
  label: "Primary Regular Button",
};

export const SecondaryRegularButton = ButtonTemplate.bind({});
SecondaryRegularButton.args = {
  disabled: false,
  className: "sugar-button-secondary",
  label: "Secondary Regular Button",
};
