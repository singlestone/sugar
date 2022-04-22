import { Meta } from "@storybook/html";

export default {
  title: "Buttons",
  parameters: {
    layout: "centered",
  },
} as Meta;

const ButtonTemplate = ({ className = "", disabled = false, label = "" }) => {
  const disabledString = disabled ? `disabled` : "";
  return `
      <button class="${className}" ${disabledString} type="button">${label}</button>
    `;
};

export const NeutralButton = ButtonTemplate.bind({});
NeutralButton.args = {
  disabled: false,
  className: "sugar-btn-neutral",
  label: "Neutral Button",
};

export const PrimaryButton = ButtonTemplate.bind({});
PrimaryButton.args = {
  disabled: false,
  className: "sugar-btn-primary-blue",
  label: "Primary Button",
};

export const DarkerPrimaryButton = ButtonTemplate.bind({});
DarkerPrimaryButton.args = {
  disabled: false,
  className: "sugar-btn-darker-primary-blue",
  label: "Darker Primary Button",
};

export const LighterPrimaryButton = ButtonTemplate.bind({});
LighterPrimaryButton.args = {
  disabled: false,
  className: "sugar-btn-lighter-primary-blue",
  label: "Lighter Primary Button",
};

export const SecondaryButton = ButtonTemplate.bind({});
SecondaryButton.args = {
  disabled: false,
  className: "sugar-btn-secondary-blue",
  label: "Secondary Button",
};

export const DarkerSecondaryButton = ButtonTemplate.bind({});
DarkerSecondaryButton.args = {
  disabled: false,
  className: "sugar-btn-darker-secondary-blue",
  label: "Darker Secondary Button",
};

export const LighterSecondaryButton = ButtonTemplate.bind({});
LighterSecondaryButton.args = {
  disabled: false,
  className: "sugar-btn-lighter-secondary-blue",
  label: "Lighter Secondary Button",
};

export const DestructiveButton = ButtonTemplate.bind({});
DestructiveButton.args = {
  disabled: false,
  className: "sugar-btn-destructive",
  label: "Destructive",
};

export const DestructiveSecondaryCreateButton = ButtonTemplate.bind({});
DestructiveSecondaryCreateButton.args = {
  disabled: false,
  className: "sugar-btn-destructive-secondary",
  label: "Destructive Secondary",
};

const demoClasses = [
  "sugar-btn",
  "text-stone-100",
  "bg-emerald-600",
  "border-emerald-600",
  "hover:bg-sky-600 hover:border-sky-600",
  "disabled:bg-blue-200 disabled:border-blue-200",
  "disabled:hover:bg-blue-200 disabled:hover:border-blue-200",
];

export const RogueDesignerButton = ButtonTemplate.bind({});
RogueDesignerButton.args = {
  disabled: false,
  className: demoClasses.join(" "),
  label: "Whatever, I do what I want!",
};
