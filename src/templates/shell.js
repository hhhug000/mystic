function Shell({ children }) {
    const [isStyleLoaded, setIsStyleLoaded] = useState(false);

    useEffect(() => {
        const check = setTimeout(() => setIsStyleLoaded(true), 20);
        return () => clearTimeout(check);
    }, []);

    if (!isStyleLoaded) return null; 

    return html`
        <div class="app-layout">
            <main class="app-content">
                ${children}
            </main>
            <footer class="app-footer">
                <p>© 2026 Mystic. Built with Preact & HTM.</p>
            </footer>
        </div>
    `;
}