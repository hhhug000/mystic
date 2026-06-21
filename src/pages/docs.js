export const css = './src/styles/docs.css';
import { docData } from '../assets/docsContent.js';

function DocSection({ title, text, code }) {
    return html`
        <section class="doc-section">
            <h2>${title}</h2>
            <p>${text}</p>
            <pre class="doc-code"><code>${code}</code></pre>
        </section>
    `;
}

export default function App() {

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
