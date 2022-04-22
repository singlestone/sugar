import { prettierConfigSugar } from ".";

it("exports an array of plugins", () => {
  expect(prettierConfigSugar.plugins).toBeDefined();
});
