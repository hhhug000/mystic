# Building with Mystic

Mystic is a zero-build framework. No compiler, no bundler, no install step — just files served over HTTP.

## How it works

Pages are ES modules. The router dynamically `import()`s them on first visit and caches the result. Styles are loaded and unloaded per route via `<link>` tags injected into `<head>`.

## Collections

Collections extend the router with parameterised routes. A route like `blog/:slug` matches any hash of the form `#blog/something` and passes `{ slug: "something" }` as props to the page component.

The page component looks up the slug in a manifest, fetches the corresponding `.md` file, runs it through `marked`, and renders the HTML directly — all without leaving the browser.

## Why no build step?

Because the browser is already a runtime. ES modules, `fetch`, dynamic `import()`, and tagged template literals cover most of what a build tool gives you, with zero tooling overhead.
