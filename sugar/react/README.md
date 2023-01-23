# react

> React bindings for Sugar

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
