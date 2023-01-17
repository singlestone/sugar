import type { Meta, StoryObj } from "@storybook/html";

interface RadioArgs {
  checked: boolean;
  classname: string;
  disabled: boolean;
  label: string;
  name: string;
  id: string;
}

const createRadio = (args: RadioArgs): HTMLElement => {
  const radioName = args.name;
  const container = document.createElement("div");
  container.className = "flex flex-nowrap mb-2";
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.className = args.classname;
  radio.disabled = args.disabled;
  radio.id = radioName;
  radio.name = radioName;
  radio.value = args.id;
  radio.checked = args.checked;

  const label = document.createElement("label");
  label.htmlFor = radioName;
  label.innerText = args.label;

  container.appendChild(radio);
  container.appendChild(label);
  return container;
};

const createFieldSet = (
  radios: RadioArgs[],
  legendText: string
): HTMLFieldSetElement => {
  const fieldset: HTMLFieldSetElement = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.className = "text-lg tracking-wide font-semibold mb-4";
  legend.innerText = legendText;
  fieldset.appendChild(legend);
  radios.forEach((radio) => {
    const radioElm = createRadio(radio);
    fieldset.appendChild(radioElm);
  });
  return fieldset;
};
const createRadios = () => {
  const baseArgs = {
    classname: "sugar-radio shrink-0",
    checked: false,
    disabled: false,
  };
  const enabledButtons: RadioArgs[] = [
    {
      ...baseArgs,
      label: "Yes",
      name: "enabled-radio",
      id: "yes",
    },
    {
      ...baseArgs,
      label: "No",
      name: "enabled-radio",
      id: "no",
    },
    {
      ...baseArgs,
      label: "Maybe",
      name: "enabled-radio",
      id: "maybe",
    },
  ];
  const disabledButtons: RadioArgs[] = [
    {
      ...baseArgs,
      disabled: true,
      checked: true,
      label: "Yes",
      name: "disabled-radio",
      id: "yes-dis",
    },
    {
      ...baseArgs,
      disabled: true,
      label: "No",
      name: "disabled-radio",
      id: "no-dis",
    },
    {
      ...baseArgs,
      disabled: true,
      label: "Maybe",
      name: "disabled-radio",
      id: "maybe-dis",
    },
  ];
  const container = document.createElement("div");
  container.className = "grid grid-cols-2 gap-8";
  container.appendChild(createFieldSet(enabledButtons, "Enabled"));
  container.appendChild(createFieldSet(disabledButtons, "Disabled"));
  return container;
};

export default {
  title: "Forms/Radio",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export const Radios: StoryObj<RadioArgs> = {
  render: () => createRadios(),
};
