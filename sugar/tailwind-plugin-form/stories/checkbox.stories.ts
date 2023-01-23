import type { Meta, StoryObj } from "@storybook/html";
interface CheckboxArgs {
  className: string;
  disabled: boolean;
  label: string;
}

const createDiv = () => document.createElement("div");
const createCheckBoxes = (args: CheckboxArgs) => {
  const checkboxName = "storycheckbox";
  const container = document.createElement("div");
  container.className = "flex flex-col gap-2";

  const rowOne = createDiv();
  rowOne.className = "flex flex-nowrap";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = checkboxName;
  checkbox.className = args.className;
  checkbox.disabled = args.disabled;

  const label: HTMLLabelElement = document.createElement("label");
  label.className = "sugar-checkbox-label shrink-1";
  label.htmlFor = checkboxName;
  label.innerText = args.label;
  rowOne.appendChild(checkbox);
  rowOne.appendChild(label);

  const rowTwo = createDiv();
  rowTwo.className = "flex flex-nowrap";
  const disabledCheckbox = document.createElement("input");
  disabledCheckbox.type = "checkbox";
  disabledCheckbox.id = "disabled";
  disabledCheckbox.className = args.className;
  disabledCheckbox.checked = true;
  disabledCheckbox.disabled = true;

  const disabledLabel: HTMLLabelElement = document.createElement("label");
  disabledLabel.className = "sugar-checkbox-label";
  disabledLabel.htmlFor = "disabled";
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
  render: (args) => createCheckBoxes(args),
  args: {
    className: "sugar-checkbox",
    disabled: false,
    label: "Checkbox",
  },
};
