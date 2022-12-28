# plop-generators-sugar

> [plop](https://plopjs.com/) generators for Sugar.

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
    "@singlestone/plop-generators-sugar": "workspace:^"
  }
}
```

Outside the monorepo, install it with an actual version instead of `workspace:^`.

## Usage

Set up your plopfile.js like so:

```typescript
const { plopGeneratorsSugar } = require("@singlestone/plop-generators-sugar");

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plopGeneratorsSugar(plop);
};
```

You can make any changes or overrides you might want to make by destructuring the results.
