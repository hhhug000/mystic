window.loadCSS('./src/styles/docs.css');

function App() {
    return html`
        <div class="docs-container">
            <header class="docs-header">
                <h1>Getting Started</h1>
                <button class="back-btn" onClick=${() => window.goTo('home')}>
                    Back
                </button>
            </header>

            <section class="doc-section">
                <h2>1. Dynamic Asset Engine</h2>
                <p>
                    Mystic uses an on-demand asset loader (<code>window.loadCSS</code>) instead of bundled stylesheets. 
                    When a route shifts, the engine inserts the new page stylesheet into the document head and purges the previous dynamic styles to avoid style leakage.
                </p>
                <pre class="doc-code"><code>// In index.html
window.loadCSS = function(href) {
    if (document.querySelector(\`link[href="\${href}"]\`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.className = 'dynamic-page-style';
    document.head.appendChild(link);
};</code></pre>
            </section>

            <section class="doc-section">
                <h2>2. Virtual DOM & HTM Templates</h2>
                <p>
                    Mystic utilizes <strong>Preact</strong> for lightweight virtual DOM reactive states and <strong>HTM</strong> (Hyperscript Tagged Markup) to compile JSX-like templates at runtime inside the browser.
                </p>
                <pre class="doc-code"><code>// Templating syntax via standard template strings
html\`
  &lt;div class="card"&gt;
    &lt;h1&gt;\${title}&lt;/h1&gt;
  &lt;/div&gt;
\`</code></pre>
            </section>

            <section class="doc-section">
                <h2>3. Client-Side Hash Router</h2>
                <p>
                    The router listens to the browser <code>hashchange</code> event. When navigating via <code>window.goTo('route')</code>, the hash updates, the router unmounts the current page script, loads the script for the new page dynamically, and mounts the exported <code>App()</code> component.
                </p>
                <pre class="doc-code"><code>// Defining routing configs inside src/routes.js
window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": "./src/pages/welcome.js",
        "docs": "./src/pages/docs.js"
    }
};</code></pre>
            </section>
        </div>
    `;
}
