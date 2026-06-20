# Mystic

A lightweight, zero-build web framework powered by [Preact](https://preactjs.com) and [HTM](https://github.com/developit/htm) designed to make web dev feel magical. Build reactive component-based web apps that run directly in the browser with no compiler, no bundler, and no install step required.

This is not finished yet, still WIP.
TODO:
Actually good logo
Better routing
Fix CSS loading
Minify HTML?
Add templates for errors and so on
Collections? Like md collections for blogs and stuff

---

## Features

- **Zero-build** — Open `index.html` in any browser and it just works
- **Preact + HTM** — Reactive components using tagged template literals instead of JSX
- **Dynamic CSS injection** — Load page-specific stylesheets on demand with `window.loadCSS()`
- **Hash-based router** — Client-side routing with no server required
- **Simple file structure** — Pages are just plain JavaScript files

---

## Getting Started

No install required. Just clone and open.

```bash
git clone <your-repo-url>
cd Mystic
# Open index.html in your browser
```

---

## Project Structure

```
Mystic/
├── index.html              # App entry point and router engine
├── vendor/
│   ├── preact.js           # Preact virtual DOM
│   ├── hooks.js            # Preact hooks (useState, useEffect, ...)
│   └── htm.js              # Tagged template literal HTML
└── src/
    ├── routes.js           # Route page mappings
    ├── assets/             # Static assets (SVGs, images, etc.)
    ├── pages/              # One file per page/route
    │   ├── welcome.js
    │   └── docs.js
    ├── styles/             # Stylesheets
    │   ├── global.css      # Global base styles and layout
    │   ├── welcome.css
    │   └── docs.css
    └── templates/
        └── shell.js        # Shared layout wrapper (footer, etc.)
```

---

## Adding a Page

**1. Create your page file** at `src/pages/about.js`:

```js
window.loadCSS('./src/styles/about.css'); // optional

function App() {
    const [count, setCount] = useState(0);

    return html`
        <div>
            <h1>About</h1>
            <button onClick=${() => setCount(count + 1)}>
                Clicked ${count} times
            </button>
        </div>
    `;
}
```

**2. Register the route** in `src/routes.js`:

```js
window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": "./src/pages/welcome.js",
        "about": "./src/pages/about.js"  // add this
    }
};
```

**3. Navigate to it** from anywhere:

```js
window.goTo('about');
// or via a link:
html`<a href="#about">About</a>`
```

---

## Dynamic CSS Loading

Each page can load its own stylesheet that is automatically cleaned up on route change:

```js
window.loadCSS('./src/styles/about.css');
```

The engine checks for duplicates and purges old dynamic styles before mounting a new page, preventing style bleedover between routes.

---

## Shell Template

The `src/templates/shell.js` component wraps every page. It is the right place to add persistent UI such as headers, footers, or navigation.

---

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| [Preact](https://preactjs.com) | 10.x | Lightweight React-compatible virtual DOM |
| [HTM](https://github.com/developit/htm) | 3.x | JSX-like templates via tagged template literals |
| Preact Hooks | 10.x | `useState`, `useEffect`, and more |

---

## License

   Copyright 2026 Hugo Haaxman

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
