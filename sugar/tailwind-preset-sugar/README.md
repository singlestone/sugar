# tailwind-preset-sugar

> Tailwind preset for Sugar.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Inside the Sugar monorepo, install it with a dev dependency like so:

```json
{
  "devDependencies": {
    "@singlestone/tailwind-preset-sugar": "workspace:^"
  }
}
```

Outside the monorepo, install it with an actual version instead of `workspace:^`.

## Usage

Set up your tailwind.config.js like so:

```javascript
module.exports = {
  presets: [require("@singlestone/tailwind-preset-sugar")],
  content: ["./src/**/*.js", "./src/**/*.html"],
};
```

You can make any changes or overrides you might want to make by following the Tailwind configuration documentation.
