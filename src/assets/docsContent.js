export const docData = [
    {
        title: "1. Per-Page CSS",
        text: "Each page declares its stylesheet via a named export. The router injects it before mounting the page and removes it on navigation — including when navigating back to a cached page — so styles are always correct and never bleed between routes.",
        code: `// src/pages/my-page.js
export const css = './src/styles/my-page.css';

export default function App() { ... }`
    },
    {
        title: "2. Virtual DOM & HTM Templates",
        text: "Mystic utilizes Preact for lightweight virtual DOM reactive states and HTM (Hyperscript Tagged Markup) to compile JSX-like templates at runtime inside the browser.",
        code: `html\`
    <div class="card">
        <h1>\${title}</h1>
    </div>
\`\;`
    },
    {
        title: "3. Client-Side Page Router",
        text: "The router listens to the browser hashchange event. When navigating via window.goTo('route'), the hash updates, the router dynamically imports the new page module, and mounts the exported default App() component.",
        code: `// src/routes.js
window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": "./src/pages/welcome.js",
        "docs": "./src/pages/docs.js"
    }
};`
    },
    {
        title: "4. ES Module Imports",
        text: "Pages are standard ES modules. Import from any other module using standard import syntax. Preact globals (html, useState, useEffect, etc.) are available in every page without importing them.",
        code: `// src/pages/my-page.js
import { myUtil } from '../utils/helpers.js';

export const css = './src/styles/my-page.css';

export default function App() {
    const [count, setCount] = useState(0);
    return html\`<div>\${myUtil(count)}</div>\`;
}`
    }]