import { Label, TextArea } from "../../src";
import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

export const TextareaPanel = () => {
  return (
    <PanelRoot>
      <PanelHeading>Textarea</PanelHeading>
      <PanelBody itemAlignment="start">
        <Label htmlFor="example-textarea">Textarea</Label>
        <TextArea
          className="resize-none"
          id="example-textarea"
          placeholder="Placeholder value"
        />
      </PanelBody>
    </PanelRoot>
  );
};
