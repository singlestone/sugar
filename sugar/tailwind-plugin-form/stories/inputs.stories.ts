import type { Meta } from "@storybook/html";

export default {
  title: "Forms/Inputs",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

const InputTemplate = ({
  className = "",
  disabled = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  label = "",
  placeholder = "",
}) => {
  const disabledString = disabled ? `disabled` : "";
  return `<input class="${className}" ${disabledString} type="text" placeholder="${placeholder}" />`;
};

export const TextInput = InputTemplate.bind({});
TextInput.args = {
  disabled: false,
  className: "sugar-text-input",
  label: "Text Input",
  placeholder: "Text Input",
};
