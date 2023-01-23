# postcss-preset-sugar

> PostCSS preset for Sugar.

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
    "@singlestone/postcss-preset-sugar": "workspace:*"
  }
}
```

Outside the monorepo, install it with an actual version instead of `workspace:*`.

## Usage

Set up your postcss.config.js like so:

```javascript
const { sugarPostcssPresetFn } = require("@singlestone/postcss-preset-sugar");

module.exports = (ctx) => sugarPostcssPresetFn(ctx);
```

You can make any changes or overrides you might want to make by destructuring the results.
