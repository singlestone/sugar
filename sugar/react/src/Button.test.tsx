import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentPropsWithoutRef, MouseEventHandler, useState } from "react";
import { expect, it } from "vitest";

import { Button } from "./Button";

const TestButtonWithState = (
  props: Omit<ComponentPropsWithoutRef<typeof Button>, "disabled" | "onClick">
) => {
  const [disabled, setDisabled] = useState(false);
  const onClickHandler = () => {
    setDisabled(true);
  };
  return <Button disabled={disabled} onClick={onClickHandler} {...props} />;
};

it("renders a button", async () => {
  // Given
  render(<Button>Test Button</Button>);

  // When
  await screen.findByRole("button");

  // Then
  expect(screen.getByRole("button")).toHaveTextContent("Test Button");
});

it("can be disabled by a click", async () => {
  render(<TestButtonWithState>Test Button</TestButtonWithState>);

  await userEvent.click(screen.getByText("Test Button"));

  expect(screen.getByText("Test Button")).toBeDisabled();
});
