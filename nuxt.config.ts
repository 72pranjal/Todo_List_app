import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: 'AIzaSyDAzHVfy5b5DvGeRFT4x8T39Kg0AsHhW5s',
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: 'AIzaSyDAzHVfy5b5DvGeRFT4x8T39Kg0AsHhW5s',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  css: ["@/assets/css/tailwind.css"],
  typescript: {
    shim: false,
  },

  
});
