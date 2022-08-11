export default {
  title: "Tailwind/Buttons",
  parameters: {
    layout: "centered",
  },
};

const icon = `
<svg
  class="tw-icon-for-button"
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
  <button class="${className}" ${disabledString} type="button"><span>${buttonLabel}</span>${icon}</button>
`;
};

const baseBtnClasses = ["tw-btn"];

const btnWithIcon = ["tw-btn-with-icon"];

const iconsOnRightBtnClasses = ["tw-btn-with-right-icon", "pr-3"];

export const NeutralOnRight = IconOnRightTemplate.bind({});
NeutralOnRight.args = {
  label: "Neutral",
  className: [
    ...baseBtnClasses,
    ...btnWithIcon,
    ...iconsOnRightBtnClasses,
  ].join(" "),
};
