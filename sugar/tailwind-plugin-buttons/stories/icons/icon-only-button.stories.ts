import { Meta } from "@storybook/html";

import { IconButtonTemplate, sampleIcon } from "../icon-button.template";

export default {
  title: "Buttons/Icon Only",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

const IconOnlyTemplate = IconButtonTemplate(`
${sampleIcon}
<span class="sr-only">Add</span>
`);

export const PrimaryIconOnly = IconOnlyTemplate.bind({});
PrimaryIconOnly.args = {
  disabled: false,
  className: "sugar-button-primary sugar-button-icon-only",
};

export const SecondaryIconOnly = IconOnlyTemplate.bind({});
SecondaryIconOnly.args = {
  disabled: false,
  className: "sugar-button-secondary sugar-button-icon-only",
};

export const DestructiveIconOnly = IconOnlyTemplate.bind({});
DestructiveIconOnly.args = {
  disabled: false,
  className: "sugar-button-destructive sugar-button-icon-only",
};
