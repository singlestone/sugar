import { Label, TextInput } from "../../src/Input";

export const InputPanel = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
        Input
      </h1>
      <div className="flex flex-grow flex-col gap-3 bg-white rounded-md overflow-hidden p-3 items-start">
        <Label htmlFor="example-text-input">Text Input</Label>
        <TextInput id="example-text-input" />
      </div>
    </div>
  );
};
