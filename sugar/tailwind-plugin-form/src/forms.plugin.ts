import {
  createSugarPlugin,
  type SugarTailwindPlugin,
} from "@singlestone/tailwind-helpers-sugar";

import { sugarCheckboxAndRadio } from "./checkboxes_and_radios/checkbox_and_radio.plugin";
import { sugarFormsCommon } from "./common/common.plugin";
import { sugarInputs } from "./inputs/inputs.plugin";

export const sugarFormsComponents = [
  sugarInputs,
  sugarFormsCommon,
  sugarCheckboxAndRadio,
];
export const sugarFormsPlugin: SugarTailwindPlugin =
  createSugarPlugin(sugarFormsComponents);
