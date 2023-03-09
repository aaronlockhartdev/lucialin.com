export default defineNuxtConfig({
    runtimeConfig: {
        public: {}
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            link: [
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Roboto&display=swap' }
            ]
        }
    },
    css: [
        '@/assets/css/main.sass'
    ]
})
