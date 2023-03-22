# sugar

> Core plugin for the sugar design system

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [pnpm](#pnpm)
- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

- NodeJS 14+
- A functioning [Tailwind setup](https://tailwindcss.com/docs/installation)

## Installation

Install `@singlestone/sugar` with your NodeJS package manager of choice.

### npm

```shell
$ npm install -D @singlestone/sugar
```

### Yarn

```shell
$ yarn add -D @singlestone/sugar
```

### pnpm

```shell
$ pnpm install -D @singlestone/sugar
```

## Setup

After [installation](#installation), add Sugar to your `tailwind.config.js` like so:

```js
// tailwind.config.js
module.exports = {
  mode: "jit",
  content: [
    // change this to fit your project as necessary
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
```

## Usage

Once you've followed the [Installation](#installation) and [Setup](#setup) process, you can use the CSS classes
generated in your JavaScript and HTML.

Check out our [Storybook](https://sugar.singlestone.io) for examples on how to do so.

## Configuration

You can customize the colors that Sugar uses by default by providing colors objects in your Tailwind config.

```js
// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    // change this to fit your project as necessary
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // You can use built in Tailwind colors!
        accent: colors.purple,
        // You can provide your own colors!
        // Make sure to provide the full range of colors when possible.
        // At the very least, provide the below entries:
        // 50, 200, 400, and 600
        destructive: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        neutral: colors.slate,
      },
    },
  },
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
```
