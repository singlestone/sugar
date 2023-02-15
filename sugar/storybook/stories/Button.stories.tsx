import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  Button,
  Checkbox,
  COLORS,
  Label,
  PasswordInput as SugarPasswordInput,
  TextInput as SugarTextInput,
  VARIANTS,
} from "@singlestone/sugar-react";
import { SugarColor, SugarVariant } from "@singlestone/sugar-react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/Button",
  component: Button,
  args: {
    children: "Hello there!",
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS,
    },
    variant: {
      control: "select",
      options: VARIANTS,
    },
  },
} satisfies Meta<typeof Button>;
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

export const AllButtons: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
        <Button
          className="whitespace-nowrap"
          color={color}
          variant={variant}
          key={`button-color-${color}-variant-${variant}`}
          {...args}
        >
          {getButtonDisplayValue(color, variant)}
        </Button>
      ))}
    </div>
  ),
  args: {},
};

const ButtonTemplate: Story = {
  render: ({ color, variant, ...args }) => (
    <Button color={color} variant={variant} {...args} />
  ),
};

export const Default: Story = {
  ...ButtonTemplate,
};

export const Accent: Story = {
  ...ButtonTemplate,
  args: {
    color: "accent",
  },
};

export const Destructive: Story = {
  ...ButtonTemplate,
  args: {
    color: "destructive",
  },
};

export const Solid: Story = {
  ...ButtonTemplate,
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  ...ButtonTemplate,
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  ...ButtonTemplate,
  args: {
    variant: "ghost",
  },
};

export const AccentSolid: Story = {
  ...ButtonTemplate,
  args: {
    color: "accent",
    variant: "solid",
  },
};

export const AccentOutline: Story = {
  ...ButtonTemplate,
  args: {
    color: "accent",
    variant: "outline",
  },
};

export const AccentGhost: Story = {
  ...ButtonTemplate,
  args: {
    color: "accent",
    variant: "ghost",
  },
};

export const DestructiveSolid: Story = {
  ...ButtonTemplate,
  args: {
    color: "destructive",
    variant: "solid",
  },
};

export const DestructiveOutline: Story = {
  ...ButtonTemplate,
  args: {
    color: "destructive",
    variant: "outline",
  },
};

export const DestructiveGhost: Story = {
  ...ButtonTemplate,
  args: {
    color: "destructive",
    variant: "ghost",
  },
};

export const NeutralSolid: Story = {
  ...ButtonTemplate,
  args: {
    color: "neutral",
    variant: "solid",
  },
};

export const NeutralOutline: Story = {
  ...ButtonTemplate,
  args: {
    color: "neutral",
    variant: "outline",
  },
};

export const NeutralGhost: Story = {
  ...ButtonTemplate,
  args: {
    color: "neutral",
    variant: "ghost",
  },
};

export const LoginForm: Story = {
  render: ({ color, variant, ...args }) => (
    <div className="flex flex-col max-w-lg mx-auto p-6 gap-3 bg-white rounded-md">
      <div className="flex flex-col">
        <Label htmlFor="storybook-example-username">Username</Label>
        <SugarTextInput id="storybook-example-username" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="storybook-example-password">Password</Label>
        <SugarPasswordInput id="storybook-example-password" />
      </div>
      <div className="flex flex-row">
        <Checkbox id="storybook-example-remember-me" />
        <Label htmlFor="storybook-example-remember-me">Remember Me</Label>
      </div>
      <div className="flex flex-col gap-2">
        <Button color={color} variant={variant} {...args}>
          Login
        </Button>
        <Button color="accent" variant="outline">
          Forgot Password?
        </Button>
      </div>
    </div>
  ),
  args: {
    color: "accent",
    variant: "solid",
  },
};
