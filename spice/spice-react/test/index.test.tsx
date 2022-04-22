import * as React from "react";
import * as ReactDOM from "react-dom";
import { Default as Thing } from "../src/Thing.stories";

describe("Thing", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
