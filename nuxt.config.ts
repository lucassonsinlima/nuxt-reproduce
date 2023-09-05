import { defineNuxtConfig } from 'nuxt/config'

const routes = ['/404'];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    prerender: { routes },
    commands: {
      preview: "npx serve ./public",
    }
  }
})
