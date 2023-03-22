import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  Button,
  ButtonWithIcon,
  IconOnlyButton,
  SugarColor,
  SugarVariant,
} from "../src";
import { Checkmark } from "./Checkmark";

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

export const App = () => (
  <div className="bg-gray-100 container mx-auto py-6 px-4 sm:px-6 lg:px-8 gap-8 flex flex-row flex-wrap">
    <div className="flex flex-col flex-grow">
      <h1 className="inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
        Buttons
      </h1>
      <div className="flex flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-center">
        {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
          <Button
            className="whitespace-nowrap"
            color={color}
            variant={variant}
            key={`button-color-${color}-variant-${variant}`}
          >
            {getButtonDisplayValue(color, variant)}
          </Button>
        ))}
      </div>
    </div>
    <div className="flex flex-col flex-grow">
      <h1 className="inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
        Button with Icons
      </h1>
      <div className="flex flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-center">
        {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
          <ButtonWithIcon
            className="whitespace-nowrap"
            color={color}
            variant={variant}
            key={`button-color-${color}-variant-${variant}`}
          >
            <Checkmark />
            {getButtonDisplayValue(color, variant)}
          </ButtonWithIcon>
        ))}
      </div>
    </div>
    <div className="flex flex-col flex-grow">
      <h1 className="flex-grow inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
        Icon Only Buttons
      </h1>
      <div className="flex flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-center">
        {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
          <IconOnlyButton
            color={color}
            variant={variant}
            key={`button-color-${color}-variant-${variant}`}
            title={getButtonDisplayValue(color, variant)}
          >
            <Checkmark />
          </IconOnlyButton>
        ))}
      </div>
    </div>
  </div>
);
