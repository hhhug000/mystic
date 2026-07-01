# Mystic

A lightweight, zero-build web framework powered by [Preact](https://preactjs.com) and [HTM](https://github.com/developit/htm) designed to make web dev feel magical. Build reactive component-based web apps that run directly in the browser with no compiler, no bundler, and no install step required.

---

## Features

- **Zero-build** — Serve with any HTTP server and it just works — no compiler, no bundler
- **ES Modules** — Pages are standard ES modules with full `import`/`export` support
- **Preact + HTM** — Reactive components using tagged template literals instead of JSX
- **Per-page CSS** — Declare a page's stylesheet with `export const css` — the router loads and unloads it automatically
- **Hash-based router** — Client-side routing via `hashchange` with automatic scroll reset
- **Route caching** — Already-visited pages are cached and mount instantly on return with no loading flash
- **Page titles** — Each route sets `document.title` automatically via its `title` field
- **Route guards** — Optional `canEnter` and `canLeave` hooks per route for auth and unsaved-change protection
- **Template system** — Customisable loading, 404, and error states in `src/templates/`
- **Simple file structure** — One file per page, register it in `routes.js` and you're done

---

## Getting Started

No install required. Just clone and open.

```bash
git clone <your-repo-url>
cd Mystic
python -m http.server
# Open the server in your browser
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
        ├── shell.js        # Shared layout wrapper (footer, etc.)
        ├── loading.js      # Shown while a page module is fetching
        ├── not-found.js    # Shown for unregistered routes
        └── error.js        # Shown when a page module fails to load
```

---

## Adding a Page

**1. Create your page file** at `src/pages/about.js`:

```js
import { myUtil } from '../utils/helpers.js'; // standard ES imports work

export const css = './src/styles/about.css'; // optional — router loads/unloads this automatically

export default function App() {
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

`html`, `useState`, `useEffect` and other Preact globals are available in every page without importing them.

**2. Register the route** in `src/routes.js`:

```js
window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": {
            path: "./src/pages/welcome.js",
            title: "Mystic"
        },
        "about": {
            path: "./src/pages/about.js",
            title: "About — Mystic"
        }
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

## Per-Page CSS

Each page declares its own stylesheet via a named export:

```js
export const css = './src/styles/about.css';
```

The router reads this, injects the stylesheet before mounting the page, and removes it when navigating away. This happens on every navigation — including navigating back to a cached page — so styles are always correct.

---

## Route Guards

Routes can define `canEnter` and `canLeave` guard functions directly in `routes.js`:

```js
"dashboard": {
    path: "./src/pages/dashboard.js",
    title: "Dashboard — Mystic",
    canEnter: () => !!localStorage.getItem('token'),  // redirect to default if false
    canLeave: () => confirm('Leave without saving?')  // cancel navigation if false
}
```

Both are optional and synchronous. If `canEnter` returns `false`, the router redirects to the default route. If `canLeave` returns `false`, the hash is restored and the user stays on the current page.

---

## Templates

The `src/templates/` folder holds components for router-level states. Edit them to customise what users see:

| File | When shown |
|---|---|
| `loading.js` | While a page module is being fetched (first visit only — return visits are cached) |
| `not-found.js` | When the URL hash points to a route not in `RouterConfig.pages` |
| `error.js` | When a page module fails to import (receives a `message` prop) |

Each template is a plain function component using the global `html` tag — same as any page.

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
