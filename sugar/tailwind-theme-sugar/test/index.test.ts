import { theme } from "../src";

it("defines theme", () => {
  expect(theme).toBeDefined();
  expect(theme).toMatchObject({});
});
