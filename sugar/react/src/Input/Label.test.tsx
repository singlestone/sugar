import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { Label } from "./Label";

it("renders a label", async () => {
  render(<Label>test</Label>);

  await screen.findByText("test");

  expect(screen.getByText("test")).toBeVisible();
});
