# tailwind-helpers-sugar

> Helper functions for use in Sugar, SingleStone's sweet design system

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
    "@singlestone/tailwind-helpers-sugar": "workspace:^"
  }
}
```

Outside the monorepo, install it with an actual version instead of `workspace:^`.

## Usage

```typescript
import {
  hslWithOpacity,
  rgbWithOpacity,
} from "@singlestone/tailwind-preset-sugar";
```
