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
  radio.id = args.id;
  radio.name = radioName;
  radio.value = args.id;
  radio.checked = args.checked;

  const label = document.createElement("label");
  label.htmlFor = args.id;
  label.innerText = args.label;

  container.appendChild(radio);
  container.appendChild(label);
  return container;
};

const createFieldSet = (
  radios: RadioArgs[],
  legendText: string
): HTMLElement => {
  const labelID = `${legendText}-id`;
  const group: HTMLElement = document.createElement("div");
  group.role = "radiogroup";
  group.setAttribute("aria-labledby", labelID);
  const legend = document.createElement("div");
  legend.id = labelID;
  legend.className = "text-lg tracking-wide font-semibold mb-4";
  legend.innerText = legendText;
  group.appendChild(legend);
  radios.forEach((radio) => {
    const radioElm = createRadio(radio);
    group.appendChild(radioElm);
  });
  return group;
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
      id: "id-yes",
    },
    {
      ...baseArgs,
      label: "No",
      name: "enabled-radio",
      id: "id-no",
    },
    {
      ...baseArgs,
      label: "Maybe",
      name: "enabled-radio",
      id: "id-maybe",
    },
  ];
  const disabledButtons: RadioArgs[] = [
    {
      ...baseArgs,
      disabled: true,
      checked: true,
      label: "Yes",
      name: "disabled-radio",
      id: "id-yes-dis",
    },
    {
      ...baseArgs,
      disabled: true,
      label: "No",
      name: "disabled-radio",
      id: "id-no-dis",
    },
    {
      ...baseArgs,
      disabled: true,
      label: "Maybe",
      name: "disabled-radio",
      id: "id-maybe-dis",
    },
  ];

  const mixedButtons: RadioArgs[] = [
    {
      ...baseArgs,
      disabled: true,
      checked: false,
      label: "Yes",
      name: "mixed-radio",
      id: "id-yes-mix",
    },
    {
      ...baseArgs,
      disabled: false,
      label: "No",
      name: "mixed-radio",
      id: "id-no-mix",
    },
    {
      ...baseArgs,
      disabled: false,
      label: "Maybe",
      name: "mixed-radio",
      id: "id-maybe-mix",
    },
  ];
  const container = document.createElement("div");
  container.className = "grid grid-cols-3 gap-8";
  container.appendChild(createFieldSet(enabledButtons, "Enabled"));
  container.appendChild(createFieldSet(disabledButtons, "Disabled"));
  container.appendChild(createFieldSet(mixedButtons, "Both"));
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
