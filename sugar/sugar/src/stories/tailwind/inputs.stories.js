export default {
  title: "Tailwind/Inputs",
  parameters: {
    layout: "centered",
  },
};

const InputTemplate = ({ classname = "", label = "" }) => {
  return `
    <input type="text" class="${classname}" />
  `;
};

export const TextInput = InputTemplate.bind({});
TextInput.args = {
  label: "Text Input",
  classname: "",
};
