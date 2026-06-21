function PageError({ message }) {
    return html`
        <div class="error-card">
            Error: ${message}
        </div>
    `;
}
