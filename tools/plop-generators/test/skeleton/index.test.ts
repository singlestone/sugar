import { skeleton } from "../../src/generators";

it("prompts for package type", () => {
  expect(skeleton.prompts).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: "packageType" })])
  );
});

it("prompts for package name", () => {
  expect(skeleton.prompts).toEqual(
    expect.arrayContaining([expect.objectContaining({ name: "packageName" })])
  );
});

it("prompts for package description", () => {
  expect(skeleton.prompts).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: "packageDescription" }),
    ])
  );
});
