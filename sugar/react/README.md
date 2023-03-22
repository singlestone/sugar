# react

> React bindings for Sugar

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [react](#react)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Development](#development)
  - [Testing](#testing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

Inside the Sugar monorepo, install it with a dev dependency like so:

```json
{
  "devDependencies": {
    "@singlestone/react": "workspace:^"
  }
}
```

Outside the monorepo, install it with an actual version instead of `workspace:^`.

## Usage

Fill me out!

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
