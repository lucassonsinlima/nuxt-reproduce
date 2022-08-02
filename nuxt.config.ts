import { defineNuxtConfig } from 'nuxt'

const routes = ['/', '/get-started', '/schedule', '/sourcing', '/404'];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  generate: {
    routes,
    fallback: '404/index.html',
    subFolders: false
  },
  router: {
    trailingSlash: true,
    strict: true
  },
  nitro: {
    commands: {
      preview: "npx serve ./public",
    }
  }
})
