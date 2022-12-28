import { sugarPostcssPresetFn } from "../src";

it("includes postcss-import", async () => {
  const { plugins } = await sugarPostcssPresetFn({});
  expect(plugins).toBeDefined();
  if (typeof plugins !== "object") {
    throw new Error("plugins must be an object");
  }
  expect(plugins).toEqual(expect.objectContaining({ "postcss-import": {} }));
});

it("includes autoprefixer", async () => {
  const { plugins } = await sugarPostcssPresetFn({});
  expect(plugins).toBeDefined();
  expect(plugins).toEqual(expect.objectContaining({ autoprefixer: {} }));
});

it("includes tailwind", async () => {
  const { plugins } = await sugarPostcssPresetFn({});
  expect(plugins).toBeDefined();
  expect(plugins).toEqual(expect.objectContaining({ tailwindcss: {} }));
});

it("includes tailwind/nesting", async () => {
  const { plugins } = await sugarPostcssPresetFn({});
  expect(plugins).toBeDefined();
  expect(plugins).toEqual(
    expect.objectContaining({ "tailwindcss/nesting": {} })
  );
});

it("does not include cssnano by default", async () => {
  const { plugins } = await sugarPostcssPresetFn({});
  expect(plugins).toEqual(
    expect.not.objectContaining({
      cssnano: expect.objectContaining({ preset: "default" }),
    })
  );
});

it("includes cssnano if ctx.env is production", async () => {
  const { plugins } = await sugarPostcssPresetFn({ env: "production" });
  expect(plugins).toBeDefined();
  expect(plugins).toEqual(
    expect.objectContaining({
      cssnano: expect.objectContaining({ preset: "default" }),
    })
  );
});
