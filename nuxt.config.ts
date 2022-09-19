// import { defineNuxtConfig } from 'nuxt'

const routes = ['/404'];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  generate: {
    routes: ['/404']
  },
  css: ['~/assets/stylesheets/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/stylesheets/variables.scss";',
        },
      },
    }
  },
  nitro: {
    prerender: { routes },
    commands: {
      preview: "npx serve ./public",
    }
  }
})
