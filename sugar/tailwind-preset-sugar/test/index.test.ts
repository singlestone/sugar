import { plugins } from "../src";

it("defines plugins", () => {
  expect(plugins).toBeDefined();
  expect(plugins).toHaveLength(0);
});
