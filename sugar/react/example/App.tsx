import { Label, Select, TextInput } from "../src";
import {
  ButtonsPanel,
  ButtonsWithIconsPanel,
  IconOnlyButtonsPanel,
} from "./panels/Button";
import { CheckboxPanel } from "./panels/Checkbox";
import { InputPanel } from "./panels/Input";
import { PanelBody, PanelHeading, PanelRoot } from "./panels/Panel";
import { RadioGroupPanel } from "./panels/RadioGroup";
import { SelectPanel } from "./panels/Select";

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
      <div className="container mx-auto py-6 flex-1 grid grid-cols-1 auto-rows-min md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ButtonsPanel />
        <ButtonsWithIconsPanel />
        <IconOnlyButtonsPanel />
        <SelectPanel />
        <InputPanel />
        <CheckboxPanel />
        <RadioGroupPanel />
        <PanelRoot className="lg:col-span-2">
          <PanelHeading>Side by Side Example</PanelHeading>
          <PanelBody direction="row">
            <div className="flex flex-1 flex-col items-start">
              <Label htmlFor="sidy-by-side-select">Select</Label>
              <Select defaultValue="" id="sidy-by-side-select">
                <option disabled value="">
                  Select an Option
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="flex flex-1 flex-col items-start">
              <Label htmlFor="sidy-by-side-text-input">Text Input</Label>
              <TextInput id="sidy-by-side-text-input" />
            </div>
          </PanelBody>
        </PanelRoot>
      </div>
    </main>
  </div>
);
