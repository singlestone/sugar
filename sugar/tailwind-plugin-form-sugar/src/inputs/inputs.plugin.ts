import { inputBase } from "./inputs.styles";

export const sugarTextInput = (
  { addComponents, theme }: any,
  prefix: string
) => {
  addComponents({
    [`.${prefix}-text-input`]: inputBase(theme),
  });
};
