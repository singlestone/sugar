import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEventHandler, ComponentPropsWithRef, useState } from "react";
import { expect, it } from "vitest";

import { Select } from "./Select";

const TestSelect = ({
  defaultValue,
  value,
  ...props
}: Omit<ComponentPropsWithRef<typeof Select>, "onChange">) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Select onChange={onChange} value={value ?? selectedOption} {...props} />
  );
};

it("renders a select", async () => {
  render(
    <TestSelect>
      <option>Option 1</option>
      <option>Option 2</option>
    </TestSelect>
  );

  await screen.findByRole("combobox");

  expect(screen.getByRole("combobox")).toHaveTextContent("Option 1");
});

it("can change values", async () => {
  render(
    <TestSelect>
      <option>Option 1</option>
      <option>Option 2</option>
    </TestSelect>
  );

  await userEvent.click(screen.getByRole("combobox"));
  await userEvent.click(screen.getByText("Option 2"));

  expect(screen.getByRole("combobox")).toHaveTextContent("Option 2");
});
