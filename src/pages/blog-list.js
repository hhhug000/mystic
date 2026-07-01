export const css = './src/styles/blog.css';
import { posts } from '../collections/blog/index.js';

export default function App() {
    return html`
        <div class="blog-container">
            <header class="blog-header">
                <h1>Blog</h1>
                <button class="back-btn" onClick=${() => window.goTo('home')}>Back</button>
            </header>
            <ul class="blog-list">
                ${posts.map(p => html`
                    <li>
                        <a href="#blog/${p.slug}">${p.title}</a>
                        <time>${p.date}</time>
                    </li>
                `)}
            </ul>
        </div>
    `;
}
