import { NodePlopAPI } from "plop";

import { installDependencies } from "./actions";
import { skeleton } from "./generators";

export const plopGeneratorsSugar = (plop: NodePlopAPI): void => {
  plop.setDefaultInclude({ actionTypes: true, generators: true });
  plop.setActionType("installDependencies", installDependencies);
  plop.setGenerator("skeleton", skeleton);
};
