import { ChangeEventHandler, useState } from "react";

import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  Button,
  getSugarColor,
  getSugarVariant,
  SugarColor,
  SugarVariant,
} from "../src";
import { Select } from "../src/Select";
import { getButtonDisplayValue } from "./utils";

export const SelectExample = () => {
  const [color, setColor] = useState<SugarColor | undefined>();
  const [variant, setVariant] = useState<SugarVariant | undefined>();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value;
    const splitties = value.split("-");
    if (splitties.length < 2) {
      return;
    }
    setColor(getSugarColor(splitties[0]));
    setVariant(getSugarVariant(splitties[1]));
  };

  return (
    <div className="flex flex-col flex-grow">
      <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
        Select
      </h1>
      <div className="flex flex-grow flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-center">
        <Select defaultValue="" onChange={handleChange}>
          <option disabled value="">
            Select an Option
          </option>
          {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(
            ({ color, variant }) => (
              <option key={`${color}-${variant}`} value={`${color}-${variant}`}>
                {getButtonDisplayValue(color, variant)}
              </option>
            )
          )}
        </Select>
        <Button color={color} variant={variant}>
          {getButtonDisplayValue(color, variant)}
        </Button>
      </div>
    </div>
  );
};
