// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  devtools: { enabled: false },
  auth: {
    origin: process.env.AUTH_ORIGIN,
  },
});
