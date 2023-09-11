// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY || 'super-secret-key',
        // Note: `public` is exposed on both client and server
        public: {
            apiURL: 'https://jsonplaceholder.typicode.com'
        }
    },
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'description', content: 'Nuxt.js 2 project'}
            ]
        }
    },
    css:[
        '@/assets/main.css',
    ],
    modules: ['nuxt-simple-robots']
})
