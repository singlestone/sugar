export interface LabelTemplateArgs {
  inputName: string;
  label: string;
}
export const createLabel = (args: LabelTemplateArgs) => {
  const label = document.createElement("label");
  label.htmlFor = args.inputName;
  label.className = "sugar-input-label";
  label.innerText = args.label;

  return label;
};
