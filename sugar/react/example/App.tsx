import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  Button,
  ButtonWithIcon,
  IconOnlyButton,
} from "../src";
import { Checkmark } from "./Checkmark";
import { CheckboxPanel } from "./panels/Checkbox";
import { InputPanel } from "./panels/Input";
import { SelectPanel } from "./panels/Select";
import { getButtonDisplayValue } from "./utils";

export const App = () => (
  <div className="flex flex-col min-h-screen">
    <header className="container mx-auto sticky top-0 z-40 bg-gray-100">
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          @singlestone/sugar-react examples
        </h1>
      </div>
    </header>
    <main className="flex flex-1">
      <div className="container mx-auto py-6 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
            Buttons
          </h1>
          <div className="flex flex-grow flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-center">
            {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(
              ({ color, variant }) => (
                <Button
                  className="whitespace-nowrap"
                  color={color}
                  variant={variant}
                  key={`button-color-${color}-variant-${variant}`}
                >
                  {getButtonDisplayValue(color, variant)}
                </Button>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
            Button with Icons
          </h1>
          <div className="flex flex-grow flex-col gap-3 bg-white rounded-md overflow-hidden py-3 items-center">
            {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(
              ({ color, variant }) => (
                <ButtonWithIcon
                  className="whitespace-nowrap"
                  color={color}
                  variant={variant}
                  key={`button-color-${color}-variant-${variant}`}
                >
                  <Checkmark />
                  {getButtonDisplayValue(color, variant)}
                </ButtonWithIcon>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
            Icon Only Buttons
          </h1>
          <div className="flex flex-grow flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-center">
            {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(
              ({ color, variant }) => (
                <IconOnlyButton
                  color={color}
                  variant={variant}
                  key={`button-color-${color}-variant-${variant}`}
                  title={getButtonDisplayValue(color, variant)}
                >
                  <Checkmark />
                </IconOnlyButton>
              )
            )}
          </div>
        </div>
        <SelectPanel />
        <InputPanel />
        <CheckboxPanel />
      </div>
    </main>
  </div>
);
