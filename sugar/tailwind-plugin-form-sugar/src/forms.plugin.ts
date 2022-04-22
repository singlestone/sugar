import { createSugarPlugin } from "@singlestone/tailwind-helpers-sugar";
import { sugarTextInput } from "./inputs/inputs.plugin";

export const sugarFormsComponents = [sugarTextInput];
export const sugarFormsPlugin = createSugarPlugin(sugarFormsComponents);
