import { createSugarPlugin } from "@singlestone/tailwind-helpers-sugar";
import { sugarButtonsComponents } from "@singlestone/tailwind-plugin-buttons-sugar";
import { sugarFormsComponents } from "@singlestone/tailwind-plugin-form-sugar";

const sugarPlugins = [...sugarFormsComponents, ...sugarButtonsComponents];

export const sugarCorePlugin = createSugarPlugin(sugarPlugins);
