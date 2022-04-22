import { NodePlopAPI } from "plop";
import { yarnInstall } from "./actions";
import { skeleton } from "./generators";

export const plopGeneratorsSugar = (plop: NodePlopAPI): void => {
  plop.setDefaultInclude({ actionTypes: true, generators: true });
  plop.setActionType("yarnInstall", yarnInstall);
  plop.setGenerator("skeleton", skeleton);
};
