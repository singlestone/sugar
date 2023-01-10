export interface ButtonArgs {
  className: string;
  disabled: boolean;
}

export const createButton = (
  content: string,
  { className = "", disabled = false }: ButtonArgs
) => {
  const button = document.createElement("button");
  button.innerHTML = content;
  button.className = className;
  button.disabled = disabled;

  return button;
};
