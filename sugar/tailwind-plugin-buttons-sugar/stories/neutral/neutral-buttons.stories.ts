import { Meta } from "@storybook/html";
import { ButtonTemplate } from "../button.template";

export default {
  title: "Buttons/Neutral",
  parameters: {
    layout: "centered",
  },
} as Meta;

export const SecondaryNeutralButton = ButtonTemplate.bind({});
SecondaryNeutralButton.args = {
  disabled: false,
  className: "sugar-button-neutral",
  label: "Secondary Neutral Button",
};
