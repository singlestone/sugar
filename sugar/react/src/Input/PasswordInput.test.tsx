import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

import { PasswordInput } from "./PasswordInput";

it("renders a textbox", async () => {
  render(
    <>
      <label htmlFor="test">Test</label>
      <PasswordInput id="test" />
    </>
  );

  await screen.findByLabelText("Test");

  expect(screen.getByLabelText("Test")).toHaveValue("");
});

it("can have a defaultValue value", async () => {
  render(
    <>
      <label htmlFor="test">Test</label>
      <PasswordInput id="test" defaultValue="test" />
    </>
  );

  await screen.findByLabelText("Test");

  expect(screen.getByLabelText("Test")).toHaveValue("test");
});

it("can have a value", async () => {
  render(
    <>
      <label htmlFor="test">Test</label>
      <PasswordInput id="test" readOnly value="nottest" />
    </>
  );

  await screen.findByLabelText("Test");

  expect(screen.getByLabelText("Test")).toHaveValue("nottest");
});

it("changes values when typed in", async () => {
  render(
    <>
      <label htmlFor="test">Test</label>
      <PasswordInput id="test" />
    </>
  );

  await screen.findByLabelText("Test");
  await userEvent.click(screen.getByLabelText("Test"));
  await userEvent.type(screen.getByLabelText("Test"), "test");

  expect(screen.getByLabelText("Test")).toHaveValue("test");
});
