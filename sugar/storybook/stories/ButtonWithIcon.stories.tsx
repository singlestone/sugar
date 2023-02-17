import {
  ButtonWithIcon,
} from "@singlestone/sugar-react";
import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  COLORS,
  SugarColor,
  SugarVariant,
  VARIANTS,
} from "@singlestone/sugar-tokens";
import { Meta, StoryObj } from "@storybook/react";

const SampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);

const meta = {
  title: "Buttons/ButtonWithIcon",
  component: ButtonWithIcon,
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
} satisfies Meta<typeof ButtonWithIcon>;
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
        <ButtonWithIcon
          className="whitespace-nowrap"
          color={color}
          variant={variant}
          key={`button-color-${color}-variant-${variant}`}
          {...args}
        >
          <SampleIcon />
          {getButtonDisplayValue(color, variant)}
        </ButtonWithIcon>
      ))}
    </div>
  ),
  args: {},
};

const ButtonTemplate: Story = {
  render: ({ color, variant, children, ...args }) => (
    <ButtonWithIcon color={color} variant={variant} {...args}>
      <SampleIcon /> {children}
    </ButtonWithIcon>
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
