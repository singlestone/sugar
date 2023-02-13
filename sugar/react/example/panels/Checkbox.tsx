import { Checkbox, Label } from "../../src/Input";

export const CheckboxPanel = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex-initial inline-block text-left text-base text-black text-lg tracking-wider leading-tight">
        Checkbox
      </h1>
      <div className="flex flex-grow flex-row gap-3 bg-white rounded-md overflow-hidden p-3 items-start">
        <Checkbox id="example-checkbox" />
        <Label htmlFor="example-checkbox">Remember Me</Label>
      </div>
    </div>
  );
};
