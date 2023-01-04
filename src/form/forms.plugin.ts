import { type SugarTailwindPlugin, createSugarPlugin } from "../helpers";
import { sugarTextInput } from "./inputs/inputs.plugin";

export const sugarFormsComponents = [sugarTextInput];
export const sugarFormsPlugin: SugarTailwindPlugin =
  createSugarPlugin(sugarFormsComponents);
