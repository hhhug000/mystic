window.loadCSS('./src/styles/docs.css');

function DocSection({ title, text, code }) {
    return html`
        <section class="doc-section">
            <h2>${title}</h2>
            <p>${text}</p>
            <pre class="doc-code"><code>${code}</code></pre>
        </section>
    `;
}

function App() {
    const docData = [
    {
        title: "1. Dynamic Asset Engine",
        text: "Mystic uses an on-demand asset loader (window.loadCSS) instead of bundled stylesheets. When a route shifts, the engine inserts the new page stylesheet into the document head and purges the previous dynamic styles to avoid style leakage.",
        code: `// Use like this:
window.loadCSS = function(href) { ... };
        
// Defined like this:
window.loadCSS = function(href) {
    if (document.querySelector(\`link[href="\${href}"]\`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.className = 'dynamic-page-style';
    document.head.appendChild(link);
};`
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
        text: "The router listens to the browser hashchange event. When navigating via window.goTo('route'), the hash updates, the router unmounts the current page script, loads the script for the new page dynamically, and mounts the exported App() component.",
        code: `// Defining routing configs inside src/routes.js
window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": "./src/pages/welcome.js",
        "docs": "./src/pages/docs.js"
    }
};
`}]

    return html`
        <div class="docs-container">
            <header class="docs-header">
                <h1>Getting Started</h1>
                <button class="back-btn" onClick=${() => window.goTo('home')}>
                    Back
                </button>
            </header>

            ${docData.map(section => html`<${DocSection} ...${section} />`)}
        </div>
    `;
}
