// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    alias: {
        "'@": resolve(__dirname, "/"),
    },
    css: [
        "~/assets/main.css"
    ],
    pages: true,
});
