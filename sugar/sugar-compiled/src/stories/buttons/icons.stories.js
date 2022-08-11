export default {
  title: "Buttons/Icons",
  parameters: {
    layout: "centered",
  },
};

const icon = `
<svg
  class="icon-for-button"
  width="11px"
  height="11px"
  viewBox="0 0 11 11"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    d="M5.5,11 C4.99377083,11 4.58333333,10.5896198 4.58333333,10.0833333 L4.58333333,6.41666667 L0.916666667,6.41666667 C0.4104375,6.41666667 0,6.00628646 0,5.5 C0,4.99377083 0.4104375,4.58333333 0.916666667,4.58333333 L4.58333333,4.58333333 L4.58333333,0.916666667 C4.58333333,0.4104375 4.99377083,0 5.5,0 C6.00628646,0 6.41666667,0.4104375 6.41666667,0.916666667 L6.41666667,4.58333333 L10.0833333,4.58333333 C10.5896198,4.58333333 11,4.99377083 11,5.5 C11,6.00628646 10.5896198,6.41666667 10.0833333,6.41666667 L6.41666667,6.41666667 L6.41666667,10.0833333 C6.41666667,10.5896198 6.00628646,11 5.5,11"
    clip-rule="evenodd"
  ></path>
</svg>
`;

const IconOnRightTemplate = ({
  className = "",
  disabled = false,
  label = "",
}) => {
  const disabledString = disabled ? `disabled` : "";
  const buttonLabel = label
    ? `${label} Button with Icon on Right`
    : "Button with Icon on Right";
  return `
  <button class="btn button-with-icon button-with-icon-right ${className}" ${disabledString} type="button"><span>${buttonLabel}</span>${icon}</button>
`;
};

const IconOnLeftTemplate = ({
  className = "",
  disabled = false,
  label = "",
}) => {
  const disabledString = disabled ? `disabled` : "";
  const buttonLabel = label
    ? `${label} Button with Icon on Left`
    : "Button with Icon on Left";
  return `
  <button class="old-variables btn button-with-icon button-with-icon-left ${className}" ${disabledString} type="button">${icon}<span>${buttonLabel}</span></button>
`;
};

export const NeutralOnRight = IconOnRightTemplate.bind({});
NeutralOnRight.args = {
  label: "Neutral",
};

export const PrimaryOnRight = IconOnRightTemplate.bind({});
PrimaryOnRight.args = {
  className: "button-primary",
  label: "Primary",
};

export const PrimaryDestructiveOnRight = IconOnRightTemplate.bind({});
PrimaryDestructiveOnRight.args = {
  className: "button-primary button-destructive",
  label: "Primary Destructive",
};

export const SecondaryOnRight = IconOnRightTemplate.bind({});
SecondaryOnRight.args = {
  className: "button-secondary",
  label: "Secondary",
};

export const SecondaryDestructiveOnRight = IconOnRightTemplate.bind({});
SecondaryDestructiveOnRight.args = {
  className: "button-secondary button-destructive",
  label: "Secondary Destructive",
};

export const NeutralDisabledOnRight = IconOnRightTemplate.bind({});
NeutralDisabledOnRight.args = {
  disabled: true,
  label: "Neutral Disabled",
};

export const PrimaryDisabledOnRight = IconOnRightTemplate.bind({});
PrimaryDisabledOnRight.args = {
  className: "button-primary",
  disabled: true,

  label: "Primary Disabled",
};

export const PrimaryDestructiveDisabledOnRight = IconOnRightTemplate.bind({});
PrimaryDestructiveDisabledOnRight.args = {
  className: "button-primary button-destructive",
  disabled: true,
  label: "Primary Destructive Disabled",
};

export const SecondaryDisabledOnRight = IconOnRightTemplate.bind({});
SecondaryDisabledOnRight.args = {
  className: "button-secondary",
  disabled: true,
  label: "Secondary Disabled",
};

export const SecondaryDestructiveDisabledOnRight = IconOnRightTemplate.bind({});
SecondaryDestructiveDisabledOnRight.args = {
  className: "button-secondary button-destructive",
  disabled: true,
  label: "Secondary Destructive Disabled",
};

export const NeutralOnLeft = IconOnLeftTemplate.bind({});
NeutralOnLeft.args = {
  label: "Neutral",
};

export const PrimaryOnLeft = IconOnLeftTemplate.bind({});
PrimaryOnLeft.args = {
  className: "button-primary",
  label: "Primary",
};

export const PrimaryDestructiveOnLeft = IconOnLeftTemplate.bind({});
PrimaryDestructiveOnLeft.args = {
  className: "button-primary button-destructive",
  label: "Primary Destructive",
};

export const SecondaryOnLeft = IconOnLeftTemplate.bind({});
SecondaryOnLeft.args = {
  className: "button-secondary",
  label: "Secondary",
};

export const SecondaryDestructiveOnLeft = IconOnLeftTemplate.bind({});
SecondaryDestructiveOnLeft.args = {
  className: "button-secondary button-destructive",
  label: "Secondary Destructive",
};

export const NeutralDisabledOnLeft = IconOnLeftTemplate.bind({});
NeutralDisabledOnLeft.args = {
  disabled: true,
  label: "Neutral Disabled",
};

export const PrimaryDisabledOnLeft = IconOnLeftTemplate.bind({});
PrimaryDisabledOnLeft.args = {
  className: "button-primary",
  disabled: true,

  label: "Primary Disabled",
};

export const PrimaryDestructiveDisabledOnLeft = IconOnLeftTemplate.bind({});
PrimaryDestructiveDisabledOnLeft.args = {
  className: "button-primary button-destructive",
  disabled: true,
  label: "Primary Destructive Disabled",
};

export const SecondaryDisabledOnLeft = IconOnLeftTemplate.bind({});
SecondaryDisabledOnLeft.args = {
  className: "button-secondary",
  disabled: true,
  label: "Secondary Disabled",
};

export const SecondaryDestructiveDisabledOnLeft = IconOnLeftTemplate.bind({});
SecondaryDestructiveDisabledOnLeft.args = {
  className: "button-secondary button-destructive",
  disabled: true,
  label: "Secondary Destructive Disabled",
};
