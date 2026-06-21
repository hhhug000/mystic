// Dynamic page-specific stylesheet
window.loadCSS('./src/styles/welcome.css');

function Counter() {
    const [count, setCount] = useState(0);

    return html`
        <button onClick=${() => setCount(count + 1)}>
            count is ${count}
        </button>
    `;
}

function App() {
    const [count, setCount] = useState(0);

    return html`
        <div>
            <!-- Logos -->
            <div>
                <!-- Mystic Logo -->
                <a href="https://github.com/hhhug000/mystic" target="_blank">
                    <img class="logo" src="./src/assets/mystic-logo.svg" alt="Mystic Logo" />
                </a>
                
                <!-- Preact Logo -->
                <a href="https://preactjs.com" target="_blank">
                    <img class="logo preact" src="./src/assets/preact-logo.svg" alt="Preact Logo" />
                </a>
            </div>

            <!-- Page Title -->
            <h1>Mystic + Preact</h1>

            <!-- Reactive Counter Card -->
            <div class="card">
                <${Counter} />
                <div style="margin-top: 1.5rem;">
                    <a href="#docs" style="font-weight: 600; font-size: 1.05rem;">Get started →</a>
                </div>
            </div>

            <!-- Getting Started Guide -->
            <div class="guide-section">
                <h2 class="guide-title">Getting Started</h2>
                <ul class="guide-list">
                    <li>Create new components/pages inside <code>src/pages/</code>.</li>
                    <li>Add your pages to the routing table inside <code>src/routes.js</code>.</li>
                    <li>Load route-specific stylesheets using <code>window.loadCSS()</code>.</li>
                    <li>Open <code>index.html</code> directly in a browser to run the app.</li>
                </ul>
            </div>

            <!-- Footer Documentation Link -->
            <p class="read-the-docs">
                Click on the Mystic and Preact logos to learn more.
            </p>
        </div>
    `;
}
