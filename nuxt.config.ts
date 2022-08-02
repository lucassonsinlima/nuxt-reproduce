import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  nitro: {
    commands: {
      preview: "npx serve ./public",
    },
    serveStatic: true,
    prerender: {
      routes: ['/get-started']
    }
  }
})
