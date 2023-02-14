import { Label, TextInput } from "../../src/Input";
import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

export const InputPanel = () => {
  return (
    <PanelRoot>
      <PanelHeading>Input</PanelHeading>
      <PanelBody itemAlignment="start">
        <Label htmlFor="example-text-input">Text Input</Label>
        <TextInput id="example-text-input" />
      </PanelBody>
    </PanelRoot>
  );
};
