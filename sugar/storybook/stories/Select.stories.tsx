import { Select as SugarSelect } from "@singlestone/sugar-react";
import { Button } from "@singlestone/sugar-react/src";
import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  getSugarColor,
  getSugarVariant,
  SugarColor,
  SugarVariant,
} from "@singlestone/sugar-tokens";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEventHandler, useState } from "react";

const meta = {
  title: "Forms/Select",
  component: SugarSelect,
} satisfies Meta<typeof SugarSelect>;
export default meta;

type Story = StoryObj<typeof meta>;

const getButtonDisplayValue = (
  color: SugarColor | undefined,
  variant: SugarVariant | undefined
) => {
  const parts: string[] = [];
  if (color) {
    parts.push(color);
  }
  if (variant) {
    parts.push(variant);
  }
  return [...parts, "button"].join(" ");
};

export const Select: Story = {
  render: (args) => (
    <div className="flex w-1/2">
      <SugarSelect {...args}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </SugarSelect>
    </div>
  ),
};

const SelectWithButtonDisplay = () => {
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
    <div className="flex flex-col gap-3 w-1/2">
      <SugarSelect defaultValue="" onChange={handleChange}>
        <option disabled value="">
          Select an Option
        </option>
        {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
          <option key={`${color}-${variant}`} value={`${color}-${variant}`}>
            {getButtonDisplayValue(color, variant)}
          </option>
        ))}
      </SugarSelect>
      <Button color={color} variant={variant}>
        {getButtonDisplayValue(color, variant)}
      </Button>
    </div>
  );
};

export const SelectWithButton: Story = {
  render: () => <SelectWithButtonDisplay />,
};
