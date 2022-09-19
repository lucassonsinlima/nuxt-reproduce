import { defineNuxtConfig } from 'nuxt'

const routes = ['/404'];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  nitro: {
    prerender: { routes },
    commands: {
      preview: "npx serve ./public",
    }
  }
})
