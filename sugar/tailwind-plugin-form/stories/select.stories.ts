import type { Meta, StoryObj } from "@storybook/html";

import { createLabel } from "./label.template";

interface SelectArgs {
  className: string;
  disabled: boolean;

  label: string;
  options: string[];
}

const createSelect = (args: SelectArgs) => {
  const inputName = "select-input";
  const container = document.createElement("div");
  container.className = "w-1/2";
  const label = createLabel({ label: args.label, inputName });
  container.appendChild(label);
  const select = document.createElement("select");
  select.className = args.className;
  select.name = inputName;
  select.disabled = args.disabled;
  args.options.forEach((option, i) => {
    const optElm = document.createElement("option");
    if (i === 0) {
      optElm.disabled = true;
      optElm.selected = true;
    }
    optElm.value = option;
    optElm.innerText = option;
    select.appendChild(optElm);
  });
  container.appendChild(select);
  return container;
};
export default {
  title: "Forms/Select",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<SelectArgs>;

export const selectInput: StoryObj<SelectArgs> = {
  render: (args) => createSelect(args),
  args: {
    className: "sugar-select-input",
    disabled: false,
    label: "Select Input",
    options: [
      "Select an Option",
      "Short Text",
      "Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text",
    ],
  },
};
