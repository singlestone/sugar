import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

import { RadioGroupFieldset, RadioGroupItem } from "./RadioGroup";

it("renders a radio group", async () => {
  render(
    <RadioGroupFieldset name="test">
      <RadioGroupItem id="test-option1" label="Option 1" value="option1" />
      <RadioGroupItem id="test-option2" label="Option 2" value="option2" />
    </RadioGroupFieldset>
  );

  await screen.findByRole("radiogroup");

  expect(screen.getByRole("radiogroup")).toHaveFormValues({ test: undefined });
  expect(screen.getByText("Option 1")).toBeVisible();
  expect(screen.getByText("Option 2")).toBeVisible();
});

it("changes value when clicked", async () => {
  render(
    <RadioGroupFieldset name="test">
      <RadioGroupItem id="test-option1" label="Option 1" value="option1" />
      <RadioGroupItem id="test-option2" label="Option 2" value="option2" />
    </RadioGroupFieldset>
  );

  await screen.findByRole("radiogroup");
  await userEvent.click(screen.getByLabelText("Option 1"));

  expect(screen.getByLabelText("Option 1")).toBeChecked();
  expect(screen.getByRole("radiogroup")).toHaveFormValues({ test: "option1" });
});
