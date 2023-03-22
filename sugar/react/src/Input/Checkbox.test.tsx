import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEventHandler, ComponentPropsWithRef, useState } from "react";
import { expect, it } from "vitest";

import { Checkbox } from "./Checkbox";

const TestCheckbox = ({
  checked,
  defaultChecked,
  ...props
}: Omit<ComponentPropsWithRef<typeof Checkbox>, "onChange">) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ?? false);
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Checkbox onChange={onChange} checked={checked ?? isChecked} {...props} />
  );
};

it("renders a checkbox", async () => {
  render(<TestCheckbox />);

  await screen.findByRole("checkbox");

  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

it("can have a defaultChecked value", async () => {
  render(<TestCheckbox defaultChecked />);

  await screen.findByRole("checkbox");

  expect(screen.getByRole("checkbox")).toBeChecked();
});

it("can override a defaultChecked value", async () => {
  render(<TestCheckbox checked={false} defaultChecked />);

  await screen.findByRole("checkbox");

  expect(screen.getByRole("checkbox")).not.toBeChecked();
});

it("can change values", async () => {
  render(<TestCheckbox />);

  await userEvent.click(screen.getByRole("checkbox"));

  expect(screen.getByRole("checkbox")).toBeChecked();
});
