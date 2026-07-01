export const css = './src/styles/blog.css';
import { posts } from '../collections/blog/index.js';

export default function App({ params }) {
    const [content, setContent] = useState('');
    const post = posts.find(p => p.slug === params.slug);

    useEffect(() => {
        if (!post) return;
        document.title = `${post.title} — Blog`;
        fetch(post.path)
            .then(r => r.text())
            .then(text => setContent(renderMarkdown(text)));
    }, [params.slug]);

    if (!post) {
        return html`<div class="blog-container"><p>Post not found.</p></div>`;
    }

    return html`
        <div class="blog-container">
            <header class="blog-header">
                <time>${post.date}</time>
                <button class="back-btn" onClick=${() => window.goTo('blog')}>Back</button>
            </header>
            <article class="blog-post" dangerouslySetInnerHTML=${{ __html: content }} />
        </div>
    `;
}
