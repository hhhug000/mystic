function NotFound({ route }) {
    return html`
        <div class="error-card">
            404: Route [#${route}] Not Found.
        </div>
    `;
}
