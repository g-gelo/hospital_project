// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@sidebase/nuxt-auth",
    "@nuxtjs/color-mode",
    "nuxt-lucide-icons",
  ],
  devtools: { enabled: false },
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  auth: {
    origin: process.env.AUTH_ORIGIN,
  },
});
