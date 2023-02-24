import clsx from "clsx";
import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  forwardRef,
  useState,
} from "react";

import { Label } from "../Label";
import { RadioGroupContext, useRadioGroupContext } from "./context";

type RadioGroupFieldsetProps = Omit<
  ComponentPropsWithoutRef<"fieldset">,
  "defaultValue" | "onChange" | "role"
> & {
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  value?: string;
};
export const RadioGroupFieldset = forwardRef<
  HTMLFieldSetElement,
  RadioGroupFieldsetProps
>(({ defaultValue, onChange, name, value, ...props }, ref) => {
  const [currentValue, setCurrentValue] = useState(defaultValue ?? "");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentValue(event.target.value);
    onChange?.(event);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        onChange: handleChange,
        name,
        currentValue: value ?? currentValue,
      }}
    >
      <fieldset ref={ref} role="radiogroup" {...props} />
    </RadioGroupContext.Provider>
  );
});
RadioGroupFieldset.displayName = "RadioGroupFieldset";

type RadioGroupInputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "onChange" | "name" | "type"
>;
export const RadioGroupInput = forwardRef<
  HTMLInputElement,
  RadioGroupInputProps
>(({ className, value, ...props }, ref) => {
  const { onChange, name, currentValue } = useRadioGroupContext();
  return (
    <input
      checked={value === currentValue}
      className={clsx("sugar-radio", className)}
      name={name}
      onChange={onChange}
      ref={ref}
      type="radio"
      value={value}
      {...props}
    />
  );
});
RadioGroupInput.displayName = "RadioGroupInput";

type RadioGroupItemProps = Omit<
  ComponentPropsWithRef<typeof RadioGroupInput>,
  "id" | "value"
> & {
  id: string;
  label: string;
  labelClassName?: string;
  value: string;
  wrapperClassName?: string;
};
export const RadioGroupItem = ({
  id,
  label,
  labelClassName,
  value,
  wrapperClassName,
  ...props
}: RadioGroupItemProps) => (
  <div className={wrapperClassName}>
    <RadioGroupInput id={id} value={value} {...props} />
    <Label className={labelClassName} htmlFor={id}>
      {label}
    </Label>
  </div>
);
