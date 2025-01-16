// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devServer: {
    port: parseInt(process.env.PORT || "3000"),
    host: "0.0.0.0",
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    "shadcn-nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/eslint",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@/components": "./components",
    "@/lib": "./lib",
    "@/css": "./assets/css",
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        // Google Fonts
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap",
        },
      ],
      script: [
        // Font Awesome
        {
          src: "https://kit.fontawesome.com/a6c187ac23.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
    },
  },
});
