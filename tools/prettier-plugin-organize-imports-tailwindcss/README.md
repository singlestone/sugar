# prettier-plugin-organize-imports-tailwindcss

> Prettier config for Sugar.

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
    "@singlestone/prettier-plugin-organize-imports-tailwindcss": "workspace:^"
  }
}
```

Outside the monorepo, install it with an actual version instead of `workspace:^`.

## Usage

Set up your .prettierrc.js like so:

```javascript
module.exports = require("@singlestone/prettier-plugin-organize-imports-tailwindcss");
```

You can make any changes or overrides you might want to make by destructuring the results.
