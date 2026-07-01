window.RouterConfig = {
    defaultRoute: "home",
    pages: {
        "home": {
            path: "./src/pages/welcome.js",
            title: "Mystic"
        },
        "docs": {
            path: "./src/pages/docs.js",
            title: "Getting Started — Mystic"
        },
        "blog": {
            path: "./src/pages/blog-list.js",
            title: "Blog"
        },
        "blog/:slug": {
            path: "./src/pages/blog-post.js",
            title: "Blog"
        }
    }
};