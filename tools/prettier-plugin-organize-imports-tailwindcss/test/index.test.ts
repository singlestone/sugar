import { format } from "prettier";
import * as prettierPluginOrganizeImportsTailwindCSS from "../src";

const testFixture = `import { NodePlopAPI } from "plop";
import { dirname } from "path";

export default function (plop: NodePlopAPI) {
  plop.load("@singlestone/plop-generators-sugar").catch(console.error);
}`;
const expected = `import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.load("@singlestone/plop-generators-sugar").catch(console.error);
}
`;

it("organizes imports", () => {
  expect(
    format(testFixture, {
      parser: "typescript",
      plugins: [prettierPluginOrganizeImportsTailwindCSS],
    })
  ).toEqual(expected);
});
