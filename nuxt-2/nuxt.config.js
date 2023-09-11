module.exports = {

  // toggle SPA mode
  // mode: 'spa',

  // create extra file for netlify
  generate: { fallback: true },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt 2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js 2 project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  privateRuntimeConfig: {
    apiKey: process.env.NUXT_API_KEY || 'super-secret-key'
  },
  publicRuntimeConfig: {
    apiURL: 'https://jsonplaceholder.typicode.com'
  },
  env: {
    NUXT_API_KEY: process.env.NUXT_API_KEY
  },
  plugins: ['~/plugins/vue-notifications'],
  css:[
    '@/assets/main.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules:[
    '@nuxtjs/robots',
  ],
  serverMiddleware: [
    { path: '/api/posts', handler: '~/server/api/posts.js' }
  ],

}
