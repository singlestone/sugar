import type { Meta, StoryObj } from "@storybook/html";

import { createLabel } from "./label.template";

interface InputArgs {
  className: string;
  disabled: boolean;
  label: string;
  placeholder: string;
}
const createInput = (args: InputArgs) => {
  const container = document.createElement("div");
  const label = createLabel({
    inputName: "story-input",
    label: args.label,
  });
  container.appendChild(label);
  const input = document.createElement("input");
  input.className = args.className;
  input.placeholder = args.placeholder;
  input.name = "story-input";
  input.id = "story-input";
  input.type = "text";
  input.disabled = args.disabled;
  container.appendChild(input);

  return container;
};

export default {
  title: "Forms/Inputs",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<InputArgs>;

export const TextInput: StoryObj<InputArgs> = {
  render: (args) => createInput(args),
  args: {
    disabled: false,
    className: "sugar-text-input",
    label: "Text Input",
    placeholder: "Text Input",
  },
};
