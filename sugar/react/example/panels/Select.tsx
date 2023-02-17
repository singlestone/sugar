import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  getSugarColor,
  getSugarVariant,
  SugarColor,
  SugarVariant,
} from "@singlestone/sugar-tokens";
import { ChangeEventHandler, useState } from "react";

import { Button, Select } from "../../src";
import { getButtonDisplayValue } from "../utils";
import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

interface Props {
  selectColor: SugarColor;
  vapor?: boolean;
}
const SelectPanelSection = ({ selectColor, vapor }: Props) => {
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
    <div className="flex flex-1 flex-col gap-1">
      <Select
        color={selectColor}
        defaultValue=""
        onChange={handleChange}
        vapor={vapor ?? false}
      >
        <option disabled value="">
          Select an Option
        </option>
        {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
          <option key={`${color}-${variant}`} value={`${color}-${variant}`}>
            {getButtonDisplayValue(color, variant)}
          </option>
        ))}
      </Select>
      <Button color={color} variant={variant}>
        {getButtonDisplayValue(color, variant)}
      </Button>
    </div>
  );
};

export const SelectPanel = () => {
  return (
    <>
      <PanelRoot>
        <PanelHeading>Select</PanelHeading>
        <PanelBody direction="col">
          <SelectPanelSection selectColor="accent" />
          <SelectPanelSection selectColor="destructive" />
          <SelectPanelSection selectColor="neutral" />
        </PanelBody>
      </PanelRoot>
      <PanelRoot>
        <PanelHeading>Select (Vapor)</PanelHeading>
        <PanelBody direction="col">
          <SelectPanelSection selectColor="accent" vapor />
          <SelectPanelSection selectColor="destructive" vapor />
          <SelectPanelSection selectColor="neutral" vapor />
        </PanelBody>
      </PanelRoot>
    </>
  );
};
