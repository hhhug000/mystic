export const css = './src/styles/welcome.css';

function Counter() {
    const [count, setCount] = useState(0);

    return html`
        <button onClick=${() => setCount(count + 1)}>
            count is ${count}
        </button>
    `;
}

export default function App() {
    return html`
        <div>
            <div>
                <a href="https://github.com/hhhug000/mystic" target="_blank">
                    <img class="logo" src="./src/assets/mystic-logo.svg" alt="Mystic Logo" />
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img class="logo preact" src="./src/assets/preact-logo.svg" alt="Preact Logo" />
                </a>
            </div>

            <h1>Mystic + Preact</h1>

            <div class="card">
                <${Counter} />
                <div style="margin-top: 1.5rem;">
                    <a href="#docs" style="font-weight: 600; font-size: 1.05rem;">Get started →</a>
                </div>
            </div>

            <div class="guide-section">
                <h2 class="guide-title">Getting Started</h2>
                <ul class="guide-list">
                    <li>Create new components/pages inside <code>src/pages/</code>.</li>
                    <li>Add your pages to the routing table inside <code>src/routes.js</code>.</li>
                    <li>Export your page CSS path as <code>export const css = '...'</code>.</li>
                    <li>Serve with any HTTP server (e.g. <code>npx serve</code>).</li>
                </ul>
            </div>

            <p class="read-the-docs">
                Click on the Mystic and Preact logos to learn more.
            </p>
        </div>
    `;
}
