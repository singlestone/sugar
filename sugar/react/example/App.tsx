import {
  ButtonsPanel,
  ButtonsWithIconsPanel,
  IconOnlyButtonsPanel,
} from "./panels/Button";
import { CheckboxPanel } from "./panels/Checkbox";
import { InputPanel } from "./panels/Input";
import { RadioGroupPanel } from "./panels/RadioGroup";
import { SelectPanel } from "./panels/Select";
import { SideBySidePanel } from "./panels/SideBySide";
import { TextareaPanel } from "./panels/Textarea";

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
        <SideBySidePanel />
        <TextareaPanel />
      </div>
    </main>
  </div>
);
