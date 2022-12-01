import {
  createSugarPlugin,
  SugarTailwindPlugin,
} from "@singlestone/tailwind-helpers-sugar";
import { sugarButtonsComponents } from "@singlestone/tailwind-plugin-buttons-sugar";
import { sugarFormsComponents } from "@singlestone/tailwind-plugin-form-sugar";

export const sugarComponents = [
  ...sugarFormsComponents,
  ...sugarButtonsComponents,
];

export const sugarCorePlugin: SugarTailwindPlugin =
  createSugarPlugin(sugarComponents);
