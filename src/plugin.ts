import { sugarButtonsComponents } from "./buttons";
import { sugarFormsComponents } from "./form";
import { createSugarPlugin, SugarTailwindPlugin } from "./helpers";

export const sugarComponents = [
  ...sugarFormsComponents,
  ...sugarButtonsComponents,
];

export const sugarPlugin: SugarTailwindPlugin =
  createSugarPlugin(sugarComponents);
