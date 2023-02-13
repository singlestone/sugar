# tailwind-plugin-form

> Form plugin for the sugar design system

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [npm](#npm)
  - [Yarn](#yarn)
  - [pnpm](#pnpm)
- [Setup](#setup)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

- NodeJS 14+
- A functioning [Tailwind setup](https://tailwindcss.com/docs/installation)

## Installation

Install `@singlestone/tailwind-plugin-form-sugar` with your NodeJS package manager of choice.

### npm

```shell
$ npm install -D @singlestone/tailwind-plugin-form-sugar
```

### Yarn

```shell
$ yarn add -D @singlestone/tailwind-plugin-form-sugar
```

### pnpm

```shell
$ pnpm install -D @singlestone/tailwind-plugin-form-sugar
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
  plugins: [
    require("@singlestone/tailwind-plugin-form-sugar").sugarFormsPlugin(),
  ],
};
```

## Usage

Once you've followed the [Installation](#installation) and [Setup](#setup) process, you can use the CSS classes
generated in your JavaScript and HTML.

Check out our [Storybook](https://sugar.singlestone.io) for examples on how to do so.
