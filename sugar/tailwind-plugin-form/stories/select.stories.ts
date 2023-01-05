import type { Meta } from "@storybook/html";

export default {
  title: "Forms/Select",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

const SelectTemplate = ({ className = "", disabled = false }) => {
  const disabledString = disabled ? `disabled` : "";
  return `<div class="w-1/2">
      <select class="${className}" ${disabledString}>
          <option value="" disabled="" selected="">Select an Option</option>
          <option value="Short Text">Short Text</option>
          <option value="Long Text">
              Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text Really Long Text
          </option>
      </select>
    </div>`;
};

export const selectInput = SelectTemplate.bind({});
selectInput.args = {
  className: "sugar-select-input",
  disabled: false,
};
