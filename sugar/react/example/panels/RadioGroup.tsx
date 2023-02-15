import { ChangeEventHandler, useState } from "react";

import { Legend, RadioGroupFieldset, RadioGroupItem } from "../../src";
import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

export const RadioGroupPanel = () => {
  const [value, setValue] = useState<string>("");
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <PanelRoot>
      <PanelHeading>Radio Group</PanelHeading>
      <PanelBody direction="col">
        <div className="items-start">
          <RadioGroupFieldset name="example" onChange={onChange} value={value}>
            <Legend>Example</Legend>
            <RadioGroupItem
              className="shrink-0"
              id="example-radio-group-option1"
              label="Option 1"
              value="option1"
              wrapperClassName="flex flex-nowrap mb-2"
            />
            <RadioGroupItem
              className="shrink-0"
              id="example-radio-group-option2"
              label="Option 2"
              value="option2"
              wrapperClassName="flex flex-nowrap mb-2"
            />
            <RadioGroupItem
              className="shrink-0"
              id="example-radio-group-option3"
              label="Option 3"
              value="option3"
              wrapperClassName="flex flex-nowrap mb-2"
            />
          </RadioGroupFieldset>
        </div>
        <p className="flex-initial inline-block text-left text-base text-black text-md tracking-wider leading-tight">
          Current value: {value}
        </p>
      </PanelBody>
    </PanelRoot>
  );
};
