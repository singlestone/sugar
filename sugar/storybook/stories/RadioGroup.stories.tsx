import {
  Legend,
  RadioGroupFieldset,
  RadioGroupInput,
  RadioGroupItem,
} from "@singlestone/sugar-react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroupFieldset,
  subcomponents: {
    RadioGroupInput,
    RadioGroupItem,
  },
  args: {
    name: "example",
  },
} satisfies Meta<typeof RadioGroupFieldset>;
export default meta;

type Story = StoryObj<typeof meta>;

export const RadioGroup: Story = {
  render: (args) => (
    <div className="flex items-start">
      <RadioGroupFieldset {...args}>
        <Legend>Example</Legend>
        <RadioGroupItem
          id="example-radiogroup-item-option1"
          label="Option 1"
          value="option1"
        />
        <RadioGroupItem
          id="example-radiogroup-item-option2"
          label="Option 2"
          value="option2"
        />
        <RadioGroupItem
          id="example-radiogroup-item-option3"
          label="Option 3"
          value="option3"
        />
      </RadioGroupFieldset>
    </div>
  ),
};
