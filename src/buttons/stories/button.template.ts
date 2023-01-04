export interface ButtonArgs {
  className: string;
  disabled: boolean;
  label: string;
}
export const createButton = ({ className, disabled, label }: ButtonArgs) => {
  const btn = document.createElement("button");
  btn.className = className;
  btn.setAttribute("type", "button");
  if (disabled) {
    btn.setAttribute("disabled", "");
  } else {
    btn.removeAttribute("disabled");
  }
  btn.innerText = label;
  return btn;
};
