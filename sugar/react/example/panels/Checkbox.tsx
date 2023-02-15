import { Checkbox, Label } from "../../src";
import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

export const CheckboxPanel = () => {
  return (
    <PanelRoot>
      <PanelHeading>Checkbox</PanelHeading>
      <PanelBody direction="row">
        <div className="items-start">
          <Checkbox id="example-checkbox" />
          <Label htmlFor="example-checkbox">Remember Me</Label>
        </div>
      </PanelBody>
    </PanelRoot>
  );
};
