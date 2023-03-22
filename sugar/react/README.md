<h1 align="center">Welcome to @singlestone/sugar-react 👋</h1>
<p>
  <a href="https://npmjs.com/package/@singlestone/sugar-react" target="_blank">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@singlestone/sugar-react">
  </a>
</p>

> React bindings for Sugar

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [pnpm](#pnpm)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

- NodeJS 14+
- A functioning [Tailwind and Sugar setup](../sugar/README.md#setup)

## Installation

Install `@singlestone/sugar-react` with your NodeJS package manager of choice.

### npm

```shell
$ npm install @singlestone/sugar-react
```

### Yarn

```shell
$ yarn add @singlestone/sugar-react
```

### pnpm

```shell
$ pnpm install @singlestone/sugar-react
```

## Setup

After [installation](#installation), add Sugar React to your `tailwind.config.js` like so:

```js
// tailwind.config.js
module.exports = {
  mode: "jit",
  content: [
    // change this to fit your project as necessary
    "./src/**/*.{ts,tsx}",
    // add this
    "./node_modules/@singlestone/sugar-react/**/*.js",
  ],
  plugins: [require("@singlestone/sugar").sugarCorePlugin()],
};
```

## Usage

Once you've followed the [Installation](#installation) and [Setup](#setup) process, you can import the various
components in your application. All `@singlestone/sugar-react` components are thin wrappers around the semantic
HTML elements that they represent, so you can use them exactly the same way that you'd use a normal element.

```tsx
import { Select, TextInput } from "@singlestone/sugar-react";

// ...
<Label htmlFor="some-select">Options!</Label>
<Select id="some-select">
    <option disabled value="">Select an Option</option>
    <option value="option1">Option 1</option>
</Select>
```

You can also pass additional class names to each component - they'll be appended to the resulting element.

```tsx
<Label htmlFor="some-select">Options!</Label>
<Select className="w-full" id="some-select">
    <option disabled value="">Select an Option</option>
    <option value="option1">Option 1</option>
</Select>
```

## Development

This package is a bit unusual in how you can develop it at the moment. It follows the
conventions of all the other projects by having most steps be able to be used by
things depending on it (e.g., `pnpm run dev` outputs a built version of the library and
watches for file changes). You can also start a Vite server for quick development of
components (until we set up Storybook for it) via `pnpm run start`.

## Testing

For VSCode users, [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension provides an option to debug within the IDE. Make sure to check off the `Show browser` option under `Testing > Playwright`. There is a [known issue](https://github.com/microsoft/playwright/issues/21762) around this behavior.

Run snapshot tests

```shell
pnpm run test:ct
```

Run report for snapshot tests

```shell
pnpm run test:ct:report
```
