import { NodePlopAPI } from "plop";

import { pnpmInstall } from "./actions";
import { skeleton } from "./generators";

export const plopGeneratorsSugar = (plop: NodePlopAPI): void => {
  plop.setDefaultInclude({ actionTypes: true, generators: true });
  plop.setActionType("pnpmInstall", pnpmInstall);
  plop.setGenerator("skeleton", skeleton);
};
