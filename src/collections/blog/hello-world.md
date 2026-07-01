# Hello World

Welcome to the first post on this blog. This is written in plain Markdown and rendered entirely in the browser — no build step required.

## What is this?

This post is served from `src/collections/blog/hello-world.md`. The router matched the `blog/:slug` route, extracted the slug, looked it up in the manifest, fetched this file, and passed it through `marked` to turn it into HTML.

## Writing posts

Just create a `.md` file in `src/collections/blog/` and add an entry to `src/collections/blog/index.js`:

```js
{ slug: "my-post", title: "My Post", date: "2026-01-01", path: "./src/collections/blog/my-post.md" }
```

That's it.
