import { Label, TextArea as SugarTextArea } from "@singlestone/sugar-react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/TextArea",
  component: SugarTextArea,
} satisfies Meta<typeof SugarTextArea>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  render: (args) => (
    <div className="flex flex-col items-start">
      <Label htmlFor="storybook-example-textarea">Example</Label>
      <SugarTextArea id="storybook-example-textarea" {...args} />
    </div>
  ),
};
