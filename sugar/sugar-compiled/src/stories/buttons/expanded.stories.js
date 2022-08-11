export default {
  title: "Buttons/Expanded",
  parameters: {
    layout: "centered",
  },
};

const Template = ({ className = "", disabled = false, label = "" }) => {
  const disabledString = disabled ? `disabled` : "";
  const buttonLabel = label ? `${label} Expanded Button` : "Expanded Button";
  return `
  <button class="old-variables btn button-expanded ${className}" ${disabledString} type="button">${buttonLabel}</button>
`;
};

export const Neutral = Template.bind({});
Neutral.args = {
  label: "Neutral",
};

export const Primary = Template.bind({});
Primary.args = {
  className: "button-primary",
  label: "Primary",
};

export const PrimaryDestructive = Template.bind({});
PrimaryDestructive.args = {
  className: "button-primary button-destructive",
  label: "Primary Destructive",
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: "button-secondary",
  label: "Secondary",
};

export const SecondaryDestructive = Template.bind({});
SecondaryDestructive.args = {
  className: "button-secondary button-destructive",
  label: "Secondary Destructive",
};

export const NeutralDisabled = Template.bind({});
NeutralDisabled.args = {
  disabled: true,
  label: "Neutral Disabled",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  className: "button-primary",
  disabled: true,

  label: "Primary Disabled",
};

export const PrimaryDestructiveDisabled = Template.bind({});
PrimaryDestructiveDisabled.args = {
  className: "button-primary button-destructive",
  disabled: true,
  label: "Primary Destructive Disabled",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  className: "button-secondary",
  disabled: true,
  label: "Secondary Disabled",
};

export const SecondaryDestructiveDisabled = Template.bind({});
SecondaryDestructiveDisabled.args = {
  className: "button-secondary button-destructive",
  disabled: true,
  label: "Secondary Destructive Disabled",
};
