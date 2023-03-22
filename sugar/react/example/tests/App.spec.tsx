import { expect, test } from "@playwright/experimental-ct-react";

import { App } from "../App";

test("should match snapshot", async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toHaveScreenshot();
});
