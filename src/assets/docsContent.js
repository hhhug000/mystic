export const docData = [
    {
        title: "Per-Page CSS",
        text: "Each page declares its stylesheet via a named export. The router injects it before mounting the page and removes it on navigation — including when navigating back to a cached page — so styles are always correct and never bleed between routes.",
        code: `// src/pages/my-page.js
export const css = './src/styles/my-page.css';

export default function App() { ... }`
    },
    {
        title: "Virtual DOM & HTM Templates",
        text: "Mystic utilizes Preact for lightweight virtual DOM reactive states and HTM (Hyperscript Tagged Markup) to compile JSX-like templates at runtime inside the browser.",
        code: `html\`
    <div class="card">
        <h1>\${title}</h1>
    </div>
\`\;`
    },
    {
        title: "Client-Side Page Router",
        text: "The router listens to the browser hashchange event. When navigating via window.goTo('route'), the hash updates, the router dynamically imports the new page module, and mounts the exported default App() component. Each route is an object with a required path and optional title, canEnter, and canLeave fields.",
        code: `// src/routes.js
window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": {
            path: "./src/pages/welcome.js",
            title: "Mystic"
        },
        "docs": {
            path: "./src/pages/docs.js",
            title: "Getting Started — Mystic"
        }
    }
};`
    },
    {
        title: "Route Titles",
        text: "Add a title field to any route and the router will update document.title automatically when that page is navigated to.",
        code: `// src/routes.js
"about": {
    path: "./src/pages/about.js",
    title: "About — Mystic"
}`
    },
    {
        title: "Route Guards",
        text: "Routes can define canEnter and canLeave guard functions. canEnter runs before the page mounts — returning false redirects to the default route. canLeave runs before navigating away — returning false cancels the navigation and keeps the user on the current page.",
        code: `// src/routes.js
"dashboard": {
    path: "./src/pages/dashboard.js",
    title: "Dashboard — Mystic",
    canEnter: () => !!localStorage.getItem('token'),
    canLeave: () => confirm('Leave without saving?')
}`
    },
    {
        title: "Page Templates",
        text: "The templates folder holds components for router-level states. Loading is shown while a page module is fetching, NotFound when the hash points to an unregistered route, and PageError when the module import throws. Edit these files to customise what users see in each state.",
        code: `// src/templates/loading.js
function Loading() {
    return html\`<div>Loading</div>\`;
}

// src/templates/not-found.js
function NotFound({ route }) {
    return html\`<div class="error-card">404: Route [#\${route}] Not Found.</div>\`;
}

// src/templates/error.js
function PageError({ message }) {
    return html\`<div class="error-card">Error: \${message}</div>\`;
}`
    },
    {
        title: "ES Module Imports",
        text: "Pages are standard ES modules. Import from any other module using standard import syntax. Preact globals (html, useState, useEffect, etc.) are available in every page without importing them.",
        code: `// src/pages/my-page.js
import { myUtil } from '../utils/helpers.js';

export const css = './src/styles/my-page.css';

export default function App() {
    const [count, setCount] = useState(0);
    return html\`<div>\${myUtil(count)}</div>\`;
}`
    }]