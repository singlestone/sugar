import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEventHandler, ComponentPropsWithRef, useState } from "react";
import { expect, it } from "vitest";

import { TextInput } from "./TextInput";

const TestTextInput = ({
  defaultValue,
  value,
  ...props
}: Omit<ComponentPropsWithRef<typeof TextInput>, "onChange">) => {
  const [actualValue, setActualValue] = useState<
    string | number | readonly string[]
  >(defaultValue ?? "");
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setActualValue(event.target.value);
  };

  return (
    <TextInput onChange={onChange} value={value ?? actualValue} {...props} />
  );
};

it("renders a TextInput", async () => {
  render(<TestTextInput />);

  await screen.findByRole("textbox");

  expect(screen.getByRole("textbox")).toHaveValue("");
});

it("can have a defaultValue value", async () => {
  render(<TestTextInput defaultValue="test" />);

  await screen.findByRole("textbox");

  expect(screen.getByRole("textbox")).toHaveValue("test");
});

it("can override a defaultChecked value", async () => {
  render(<TestTextInput defaultValue="test" value="nottest" />);

  await screen.findByRole("textbox");

  expect(screen.getByRole("textbox")).toHaveValue("nottest");
});

it("can change values", async () => {
  render(<TestTextInput />);

  await userEvent.click(screen.getByRole("textbox"));
  await userEvent.type(screen.getByRole("textbox"), "test");

  expect(screen.getByRole("textbox")).toHaveValue("test");
});
