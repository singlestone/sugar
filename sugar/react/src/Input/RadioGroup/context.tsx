import { ChangeEventHandler, createContext, useContext } from "react";

type RadioGroupContextValue = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  currentValue: string;
};
const defaultRadioGroupContextValue: RadioGroupContextValue = {
  name: "",
  currentValue: "",
};
export const RadioGroupContext = createContext<RadioGroupContextValue>(
  defaultRadioGroupContextValue
);
export const useRadioGroupContext = () => {
  const ctx = useContext(RadioGroupContext);
  if (
    ctx === defaultRadioGroupContextValue &&
    process.env.NODE_ENV === "development"
  ) {
    console.warn(
      "Component using useRadioGroupContext is being rendered outside of a RadioGroupRoot or RadioGroupFieldset"
    );
  }
  return ctx;
};
