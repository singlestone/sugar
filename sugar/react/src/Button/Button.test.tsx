import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComponentPropsWithoutRef, useState } from "react";
import { describe, expect, it } from "vitest";

import { Button, ButtonWithIcon, IconOnlyButton } from "./Button";

const TestButton = (
  props: Omit<ComponentPropsWithoutRef<typeof Button>, "disabled" | "onClick">
) => {
  const [disabled, setDisabled] = useState(false);
  const onClickHandler = () => {
    setDisabled(true);
  };
  return <Button disabled={disabled} onClick={onClickHandler} {...props} />;
};

const TestButtonWithIcon = ({
  children,
  ...props
}: Omit<
  ComponentPropsWithoutRef<typeof ButtonWithIcon>,
  "disabled" | "onClick"
>) => {
  const [disabled, setDisabled] = useState(false);
  const onClickHandler = () => {
    setDisabled(true);
  };
  return (
    <ButtonWithIcon disabled={disabled} onClick={onClickHandler} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        role="img"
        aria-label="checkmark icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      {children}
    </ButtonWithIcon>
  );
};

const TestIconOnlyButton = ({
  ...props
}: Omit<
  ComponentPropsWithoutRef<typeof IconOnlyButton>,
  "children" | "disabled" | "onClick"
>) => {
  const [disabled, setDisabled] = useState(false);
  const onClickHandler = () => {
    setDisabled(true);
  };
  return (
    <IconOnlyButton
      disabled={disabled}
      onClick={onClickHandler}
      title="Test Button"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        role="img"
        aria-label="checkmark icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </IconOnlyButton>
  );
};

describe("Button", () => {
  it("renders a button", async () => {
    // Given
    render(<TestButton>Test Button</TestButton>);

    // When
    await screen.findByRole("button");

    // Then
    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
  });

  it("can be disabled by a click", async () => {
    render(<TestButton>Test Button</TestButton>);

    await userEvent.click(screen.getByText("Test Button"));

    expect(screen.getByText("Test Button")).toBeDisabled();
  });
});

describe("ButtonWithIcon", () => {
  it("renders a button and image", async () => {
    // Given
    render(<TestButtonWithIcon>Test Button</TestButtonWithIcon>);

    // When
    await screen.findByRole("button");
    await screen.findByRole("img");

    // Then
    expect(screen.getByRole("button")).toHaveTextContent("Test Button");
  });

  it("can be disabled by a click", async () => {
    render(<TestButtonWithIcon>Test Button</TestButtonWithIcon>);

    await userEvent.click(screen.getByText("Test Button"));

    expect(screen.getByText("Test Button")).toBeDisabled();
  });
});

describe("IconOnlyButton", () => {
  it("renders a button and image", async () => {
    // Given
    render(<TestIconOnlyButton />);

    // When
    await screen.findByRole("button");
    await screen.findByRole("img");

    // Then
    expect(screen.getByRole("button")).toHaveAccessibleDescription(
      "Test Button"
    );
  });

  it("can be disabled by a click", async () => {
    render(<TestIconOnlyButton />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
