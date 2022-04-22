export const ButtonTemplate = ({
  className = "",
  disabled = false,
  label = "",
}) => {
  const disabledString = disabled ? `disabled` : "";
  return `
      <button class="${className}" ${disabledString} type="button">${label}</button>
    `;
};
