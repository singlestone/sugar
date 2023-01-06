import {
  createSugarPlugin,
  type SugarTailwindPlugin,
} from "@singlestone/tailwind-helpers-sugar";

import { sugarFormsCommon } from "./common/common.plugin";
import { sugarInputs } from "./inputs/inputs.plugin";

export const sugarFormsComponents = [sugarInputs, sugarFormsCommon];
export const sugarFormsPlugin: SugarTailwindPlugin =
  createSugarPlugin(sugarFormsComponents);
