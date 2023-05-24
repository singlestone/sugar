import { Label, Select, TextInput } from "@singlestone/sugar-react";

import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

export const SideBySidePanel = () => (
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
);
