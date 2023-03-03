import { Label, TextArea } from "../../src";
import { PanelBody, PanelHeading, PanelRoot } from "./Panel";

export const TextareaPanel = () => {
  return (
    <PanelRoot>
      <PanelHeading>Textarea</PanelHeading>
      <PanelBody itemAlignment="start">
        <Label htmlFor="example-textarea">Textarea</Label>
        <TextArea id="example-textarea" placeholder="Placeholder value" rows={10} />
      </PanelBody>
    </PanelRoot>
  );
};
