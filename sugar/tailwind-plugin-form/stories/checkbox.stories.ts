import type { Meta, StoryObj } from "@storybook/html";
interface CheckboxArgs {
  className: string;
  disabled: boolean;
  label: string;
}

const createDiv = () => document.createElement("div");
const createCheckBox = (args: CheckboxArgs) => {
  const checkboxName = "storycheckbox";
  const container = document.createElement("div");
  container.className = "flex flex-col gap-2";

  const rowOne = createDiv();
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = checkboxName;
  checkbox.className = args.className;
  checkbox.disabled = args.disabled;

  const label: HTMLLabelElement = document.createElement("label");
  label.className = "sugar-checkbox-label";
  label.htmlFor = checkboxName;
  label.innerText = args.label;
  rowOne.appendChild(checkbox);
  rowOne.appendChild(label);

  const rowTwo = createDiv();
  const disabledCheckbox = document.createElement("input");
  disabledCheckbox.type = "checkbox";
  disabledCheckbox.name = "disabled";
  disabledCheckbox.className = args.className;
  disabledCheckbox.checked = true;
  disabledCheckbox.disabled = true;

  const disabledLabel: HTMLLabelElement = document.createElement("label");
  disabledLabel.className = "sugar-checkbox-label";
  disabledLabel.htmlFor = checkboxName;
  disabledLabel.innerText = `${args.label} disabled`;
  rowTwo.appendChild(disabledCheckbox);
  rowTwo.appendChild(disabledLabel);

  container.appendChild(rowOne);
  container.appendChild(rowTwo);

  return container;
};
export default {
  title: "Forms/Checkbox",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<CheckboxArgs>;
export const Checkboxes: StoryObj<CheckboxArgs> = {
  render: (args) => createCheckBox(args),
  args: {
    className: "sugar-checkbox",
    disabled: false,
    label: "Checkbox",
  },
};
