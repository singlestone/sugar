import {
  Button,
  Checkbox,
  Label,
  PasswordInput as SugarPasswordInput,
  TextInput as SugarTextInput,
} from "@singlestone/sugar-react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/PasswordInput",
  component: SugarPasswordInput,
} satisfies Meta<typeof SugarPasswordInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordInput: Story = {
  render: (args) => (
    <div className="flex flex-col items-start">
      <Label htmlFor="storybook-example-password-input">Example</Label>
      <SugarPasswordInput id="storybook-example-password-input" {...args} />
    </div>
  ),
};

export const LoginForm: Story = {
  render: (args) => (
    <div className="flex flex-col max-w-lg mx-auto p-6 gap-3 bg-white rounded-md">
      <div className="flex flex-col">
        <Label htmlFor="storybook-example-username">Username</Label>
        <SugarTextInput id="storybook-example-username" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="storybook-example-password">Password</Label>
        <SugarPasswordInput id="storybook-example-password" {...args} />
      </div>
      <div className="flex flex-row">
        <Checkbox id="storybook-example-remember-me" />
        <Label htmlFor="storybook-example-remember-me">Remember Me</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Button color="accent" variant="solid">
          Login
        </Button>
        <Button color="accent" variant="outline">
          Forgot Password?
        </Button>
      </div>
    </div>
  ),
};
