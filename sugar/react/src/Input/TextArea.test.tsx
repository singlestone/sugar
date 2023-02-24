import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

import { TextArea } from "./TextArea";

it("renders a textbox", async () => {
  render(<TextArea />);

  await screen.findByRole("textbox");

  expect(screen.getByRole("textbox")).toHaveValue("");
});

it("can have a defaultValue value", async () => {
  render(<TextArea defaultValue="test" />);

  await screen.findByRole("textbox");

  expect(screen.getByRole("textbox")).toHaveValue("test");
});

it("can have a value", async () => {
  render(<TextArea readOnly value="nottest" />);

  await screen.findByRole("textbox");

  expect(screen.getByRole("textbox")).toHaveValue("nottest");
});

it("changes values when typed in", async () => {
  render(<TextArea />);

  await userEvent.click(screen.getByRole("textbox"));
  await userEvent.type(screen.getByRole("textbox"), "test");

  expect(screen.getByRole("textbox")).toHaveValue("test");
});
